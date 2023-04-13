export const useCarousel = () => {

  const slickCarousel = (className, slides) => {

    $(document).ready(function(){
      var $carousel = className;
    
      if($carousel.length){
        $carousel.slick({
          centerMode: true,
          centerPadding: '30px',
          slidesToShow: slides,
          slidesToScroll: 1,  
          autoplay: true,
          autoplaySpeed: 3000,
          prevArrow: '<button type="button" class="slick-prev">Previous</button>',
          nextArrow: '<button type="button" class="slick-next">Next</button>',
          responsive: [
            {
              breakpoint: 768,
              settings: {
                arrows: false,
                centerMode: true,
                centerPadding: '40px',
                slidesToShow: 3
              }
            },
            {
              breakpoint: 480,
              settings: {
                arrows: false,
                centerMode: true,
                centerPadding: '40px',
                slidesToShow: 1
              }
            }
          ]
        });
      }
      
    });
  }

  return {slickCarousel}
}