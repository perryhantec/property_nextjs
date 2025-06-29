'use server';
import cloudinary from '@/config/cloudinary';
import connectDB from '@/config/database';
import Property from '@/models/Property';
import { getSessionUser } from '@/utils/getSessionUser';
import { revalidatePath } from 'next/cache';

async function deleteProperty(propertyId) {
  const sessionUser = await getSessionUser();

  // Check for session
  if (!sessionUser || !sessionUser.userId) {
    throw new Error('需要有用戶ID');
  }

  const { userId } = sessionUser;

  await connectDB();

  const property = await Property.findById(propertyId);

  if (!property) throw new Error('找不到租盤');

  // Verify ownership
  if (property.owner.toString() !== userId) {
    throw new Error('沒有授權');
  }

  // extract public id's from image url in DB
  const publicIds = property.images.map((imageUrl) => {
    const parts = imageUrl.split('/');
    return parts.at(-1).split('.').at(0);
  });

  // Delete images from Cloudinary
  if (publicIds.length > 0) {
    for (let publicId of publicIds) {
      await cloudinary.uploader.destroy('property/' + publicId);
    }
  }

  // Proceed with property deletion
  await property.deleteOne();

  revalidatePath('/', 'layout');
}

export default deleteProperty;