import InfoBox from './InfoBox';

const InfoBoxes = () => {
  return (
    <section>
      <div className='container-xl lg:container m-auto'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-4 p-4 rounded-lg'>
          <InfoBox
            heading='租戶概覽'
            backgroundColor='bg-gray-100'
            buttonInfo={{
              text: '尋找租盤',
              link: '/properties',
              backgroundColor: 'bg-black',
            }}
          >
            找出你心目中的租盤, 收藏租盤和聯絡業主
          </InfoBox>
          <InfoBox
            heading='業主放租'
            backgroundColor='bg-blue-100'
            buttonInfo={{
              text: '新增租盤',
              link: '/properties/add',
              backgroundColor: 'bg-blue-500',
            }}
          >
            陳列你的租盤, 聯絡潛在租戶
          </InfoBox>
        </div>
      </div>
    </section>
  );
};
export default InfoBoxes;