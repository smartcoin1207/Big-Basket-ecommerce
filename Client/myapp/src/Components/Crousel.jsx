import Carousel from 'react-bootstrap/Carousel';

function Crousel() {
    const images = [
        {img:"https://www.bigbasket.com/media/uploads/banner_images/hp_fom_m_bbpl-staples_460_120923_Bangalore.jpg"},
        // {img:"https://smarther.co/wp-content/uploads/2021/02/bigbasket-app-business-model.jpg"},
        {img:"https://www.bigbasket.com/media/uploads/banner_images/hp_fom_m_bbpl-staples_460_120923_Bangalore.jpg"}
    ];
  return (
    <Carousel data-bs-theme="dark">
        {
            images.map((ele)=>(
      <Carousel.Item interval={1500}>
        <img style={{height:"80%",width:"100%"}}
          className="d-block w-100"
          src={ele.img}
          alt="First slide"
        />
        
      </Carousel.Item>
                
            ))
        }
      
    </Carousel>
  );
}

export default Crousel;