$(window).on('load', function(){
	$('#pre-main').fadeOut('slow')

	
	
    
    //function to check that the element is on the viewport
    // (function($, win) {
    //     $.fn.inViewport = function(cb) {
    //         return this.each(function(i,el){
    //             function visPx(){
    //                 var H = $(this).height()*0.8,
    //                 r = el.getBoundingClientRect(), t=r.top, b=r.bottom;
    //                 return cb.call(el, Math.max(0, t>0? H-t : (b<H?b:H)));  
    //             } visPx();
    //             $(win).on("resize scroll", visPx);
    //         });
    //     };
    // }(jQuery, window));



    // $(".scroll-anim").inViewport(function(px){
    //     if(px){
    //         $(this).removeClass("scroll-anim");
    //         $(this).addClass("animation");
    //         $(this).removeClass("hide");
    //     }
    // });


	// $('#team-block .main-cards .photo img').on("click",function() {
	// 	$('#team-block .main-cards').fadeOut('slow');
	// 	setTimeout(loadTeamMate,200);
	// });
});
// });





