 $(document).ready(function () {
	  $navOffset=$('#fixed_id').offset().top;
	 
	 
	 
 $top_offset = 300;
 $('.top_to').click(function () {
 	$('html,body').animate({
 		scrollTop: 0
 	}, 800);
 });


  $(window).scroll(function () {
		$scrolling=$(this).scrollTop();
      
		if ($scrolling > $top_offset) {
			$('.top_to').fadeIn();
		} else {
			$('.top_to').fadeOut();
		}
 	});
// window.alert($navOffset);
	 
	 
 $('.all-popup-link').magnificPopup({
 	type: 'image',
 	gallery: {
 		enabled: true
 	},
 	mainClass: 'mfp-with-zoom',

 	zoom: {
 		enabled: true,
 		duration: 300,
 		easing: 'ease-in-out',
 		opener: function (openerElement) {
 			return openerElement.is('img') ? openerElement : openerElement.find('img');
 		}
 	}
 });
	 	 
   $('.venobox').venobox();
//
//      $navOffset=$('#navigation').offset().top;
//    
//      $(window).scroll(function(){
//         $scrolling=$(this).scrollTop();
//         
//         if($scrolling > $navOffset){
//            $("#navigation").addClass(navfixed);
//            
//            }else{
//            
//            }
//            
//      });
    
 });