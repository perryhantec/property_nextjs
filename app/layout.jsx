import '@/assets/styles/globals.css';

export const metadata = {
  title: '租屋',
  description: '租屋',
  keywords: '租屋, rental, property, real estate',
};

const MainLayout = ({ children }) => {
  return (
    <html>
      <body>
        <main>{children}</main>
      </body>
    </html>
  );
};

export default MainLayout;
