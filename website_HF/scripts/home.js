

$(document).ready(function(){
	document.addEventListener('visibilitychange', function() {
         var isHidden = document.hidden;
         if (isHidden) {
              clearInterval(timer);
             } else {
				setBanner(i);
				clearInterval(timer);
				setBannerInterval(i);
             }
           });

  $('.banner_ctr ul.ctr li').click(function(){
      i = $(this).attr('class').charAt(3);
      setBanner(i);
      clearInterval(timer);
      setBannerInterval(i);
  });

	$('.banner_ctr ul.ctr li:first-child').trigger("click");
});

	
       var timer = null;
       var i=1;
       var ctrL = $('.ctrBack').position().left;
       var ctrW = $('.ctrBack').width();
       function setBannerInterval(i) {
           timer = setInterval(function () {
               i++;
               if(i>5){
                   i=1;
               }
               setBanner(i);
           },5000);

       }
       function setBanner(i) {
           var curCtrL = ctrL+(ctrW+4)*(i-1);
           $('.ctrBack').stop().animate({left:curCtrL},300);
           $('.ctrFront').stop().animate({left:curCtrL},300);
           
           $('.item').css('display','none');
           $('.item .ad_txt p').css('display','none');
           $('.item .ad_img').css('left','100px');
           $('.item'+i).css('display','flex').fadeIn;
           $('.item'+i+' .ad_img').animate({'left':'0'},500);
           $('.item'+i+' .ad_txt p').slideDown();

           $('.item'+i).mkinfinite({
           	maxZoom:       1.2,
           	animationTime: 4500,
           	imagesRatio:   (960 / 720),
           	isFixedBG:     true,
           	zoomIn:        true,
           	imagesList:    new Array('images/welcome_bg'+i+'.jpg','images/welcome_bg'+i+'.jpg')
           });
       }
   

