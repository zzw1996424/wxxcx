window.onload = function(){
	// 轮播图
	var page = 0;
	var fun = function(){
		page++;
		console.log(page);
		$('.scroll_cont2').animate({marginLeft:-655*page},1500,'linear',function(){
			if(page==5){
				page=0;
				$('.scroll_cont2').css('margin-left','0');
				$('.numlist span').eq(0).css('background','#fff').siblings().css('background','#0F0F0F');
			}
		});
		// 下面的小格格随着图片的移动背景色改变
		$('.numlist span').eq(page).css('background','#fff').siblings().css('background','#0F0F0F');
		if(page==0){
			$('.numlist span').eq(0).css('background','#fff');
		}
		// 轮播图右边的文字随着图片的移动内容更换
		$('.scroll_info').eq(page).fadeIn(1500).siblings().fadeOut(1500);
		
		
		
	}
	var time = setInterval(fun,5000);
	// 鼠标移动到哪个小格格上会出现对应下标的图片
	$('.numlist span').on({
		// 鼠标移入
		mouseover:function(){
			var index = $(this).index();
			clearInterval(time);
			$('.numlist span').eq(index).css('background','#fff').siblings().css('background','#0f0f0f');
			if(index==0){
				$('.scroll_cont2').css('margin-left','0');
				$('.scroll_info').eq(0).fadeIn(1500).siblings().fadeOut(1500);
			}else if(index==1){
				$('.scroll_cont2').css('margin-left','-655px');
				$('.scroll_info').eq(1).fadeIn(1500).siblings().fadeOut(1500);
			}else if(index==2){
				$('.scroll_cont2').css('margin-left','-1310px');
				$('.scroll_info').eq(2).fadeIn(1500).siblings().fadeOut(1500);
			}else if(index==3){
				$('.scroll_cont2').css('margin-left','-1965px');
				$('.scroll_info').eq(3).fadeIn(1500).siblings().fadeOut(1500);
			}else if(index==4){
				$('.scroll_cont2').css('margin-left','-2620px');
				$('.scroll_info').eq(4).fadeIn(1500).siblings().fadeOut(1500);
				
			}
		},
		// 鼠标离开,动画继续开始
		mouseout:function(){
			page = $(this).index();
			time = setInterval(fun,5000);
		}	
	})
	// 点击左右两个箭头,会进行上一张与下一张的切换
//	$('.arr_left').click(function(){
//		clearInterval(time);
//		num = -655*page;
//		var num1 = num+655;
//		var num2 =num1+'px';
//		$('.scroll_cont2').css('margin-left',num2);
//		$('.numlist span').eq(page-1).css('background','#fff').siblings().css('background','#0F0F0F');
//		
//	})
	

	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
}
