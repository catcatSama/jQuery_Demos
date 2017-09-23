$(function(){
	var page=4;
	var nowPage=1;
	var videoList=$(".video");
	var widthStep=$(".content").width();
	$(".nextPage").click(function(){
		if(nowPage==4){
			videoList.animate({left:'0px'},"slow");
			nowPage=1;
		}
		else{
			videoList.animate({left:'-='+widthStep},"slow");
			nowPage++;
		}
		var dotNum=Number(nowPage-1);
		$(".dots").find("li").eq(dotNum).addClass("currentDot")
			.siblings().removeClass("currentDot");

	});

		$(".lastPage").click(function(){
		if(nowPage==1){
			videoList.animate({left:'-='+widthStep*3},"slow");
			nowPage=4;
		}
		else{
			videoList.animate({left:'+='+widthStep},"slow");
			nowPage--;
		}
		var dotNum=Number(nowPage-1);
		$(".dots").find("li").eq(dotNum).addClass("currentDot")
			.siblings().removeClass("currentDot");

	});

	$(".video li").hover(function(){
		$(this).addClass("highLight");
	},function(){
		$(this).removeClass("highLight");
	});


	$(".moreVedio").hover(function(event){
		var content=$(".content");
		var h=content.height();
		videoList.animate({left:'0px'});
		nowPage=1;
		$(".dots").find("li").eq(0).addClass("currentDot")
			.siblings().removeClass("currentDot");
		content.css("height",h*4+"px");
		videoList.css("width",content.width());
	},function(){
		var content=$(".content");
		var h=content.height();
		content.css("height",h/4+"px");
		videoList.css("width",content.width()*4+"px");
	});
});