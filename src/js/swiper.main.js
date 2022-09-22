
	$(document).ready(function (){

		var motoswiper = undefined;
			
		//768이하에서만 swiper작동하는 함수 - "initSwiper_clubswiper"

		function initSwiper_motoswiper(){ 
			var screenWidth = $(window).width();
			//만약 스크린너비가 768보다 작고 clubswiper가 underfined 면
			if(screenWidth <= 767 && motoswiper == undefined){
				clubswiper = new Swiper('.keyword_wrap .swiper-container',{
	
				breakpoints: {
					320: {
						slidesPerView: 3.5,
						spaceBetween: 45,
						simulateTouch: true,				
					  }
					}
				});

			//768이상인 pc에서는 swiper 없애기
			}
		}
	
		//initSwiper_clubswiper 실행문
		initSwiper_motoswiper();
	
		$(window).on('resize', function(){
			initSwiper_motoswiper();
		}); 




		

			
		
	});
