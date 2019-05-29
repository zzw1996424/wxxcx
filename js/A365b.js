window.onload=function(){
	//	----------------------------------导航栏点击出现-----------------
	// 点击特色频道
	$('#tese').click(function(){
		$('#tspd').fadeIn(1000);
		$('#tspd').on({
			mouseover:function(){
				$('#tspd .tspd_ul_li_a1').on({
					mouseover:function(){
						$(this).css('background','url(images/icon_dropmenu_pinpx2.gif) no-repeat 40px 5px');
						$(this).css('color','#46ca71');
					},
					mouseout:function(){
						$(this).css('background','url(images/icon_dropmenu_pinpx.gif) no-repeat 40px 5px');
						$(this).css('color','#c5c5c5');
					}
				})
				$('#tspd .tspd_ul_li_a3').on({
					mouseover:function(){
						$(this).css('background','url(images/icon_dropmenu_pinpx2.gif) no-repeat 40px 5px');
						$(this).css('color','#46ca71');
					},
					mouseout:function(){
						$(this).css('background','url(images/icon_dropmenu_pinpx.gif) no-repeat 40px 5px');
						$(this).css('color','#c5c5c5');
					}
				})
				$('#tspd .tspd_ul_li_a2').on({
					mouseover:function(){
						$(this).css('background','url(images/icon_dropmenu_stream2.gif) no-repeat 40px 5px');
						$(this).css('color','#51d2e1');
					},
					mouseout:function(){
						$(this).css('background','url(images/icon_dropmenu_stream.gif) no-repeat 40px 5px');
						$(this).css('color','#c5c5c5');
					}
				})
				
			},
			
		})		
	})
	// 鼠标离开,特色频道消失
	$('#tspd ul').mouseleave(function(){
				$('#tspd').fadeOut(1000);
			})
			
	// 鼠标点击到灵感
	$('#ys_afflatus').click(function(){
		$('#gallery').fadeIn(1000);
		$('#gallery li').on({
			mouseover:function(){
				$(this).css('background-color','#C5C5C5');
			},
			mouseout:function(){
				$(this).css('background-color','#fff');
			}	
		})
		
	})
	// 鼠标离开,灵感消失
	$('#gallery ul').mouseleave(function(){
				$('#gallery').fadeOut(1000);
			})
	
	
	
	// 鼠标点击专题
	$('#ti').click(function(){
		$('#zhuanti').fadeIn(1000);
		$('#zhuanti li').on({
			mouseover:function(){
				$(this).css('background-color','#C5C5C5');
			},
			mouseout:function(){
				$(this).css('background-color','#fff');
			}	
		})
		
	})
	// 鼠标离开,专题消失
	$('#zhuanti ul').mouseleave(function(){
				$('#zhuanti').fadeOut(1000);
			})
	
	
	// 鼠标点击专栏
	$('#zhuan').click(function(){
		$('#zhuanlan').fadeIn(1000);
		$('#zhuanlan li').on({
			mouseover:function(){
				$(this).css('background-color','#C5C5C5');
			},
			mouseout:function(){
				$(this).css('background-color','#fff');
			}	
		})
		
	})
	// 鼠标离开,专栏消失
	$('#zhuanlan ul').mouseleave(function(){
				$('#zhuanlan').fadeOut(1000);
			})
	
	
	// 鼠标点击文章分类
	$('#wen').click(function(){
		$('#wzf1').fadeIn(1000);
		$('#wzf1 .wzf1_hd ul li').on({
			mouseover:function(){
				var index = $(this).index();
				$(this).css('background-color','#fff');
				$('.wzf1_bd ul').eq(index).fadeIn(1000).siblings().fadeOut(1000);
			},
			mouseout:function(){
				$(this).css('background-color','#F3F6FB');
			}
				
		})
		
	})
//	 鼠标离开,文章分类消失
	$('#wzf1').mouseleave(function(){
				$('#wzf1').fadeOut(1000);
			})
	
	
	// 鼠标滚动到一定位置的时候，导航栏隐藏，隐藏的导航栏出现
	$(window).scroll(function(){
		// 获取滚动条距离顶部的距离
		var a = $(window).scrollTop();
		console.log(a);
		if(a==400){
			// 当滚动条距离顶部400像素的时候，一个隐藏一个出现
			$('.head').css('display','none');
			$('.article_head').css('display','block');	
		}else if(a<=400){
			// 当滚动条小于400的时候，一个出现一个隐藏
			$('.head').css('display','block');
			$('.article_head').css('display','none');
		}
		if(a>400&&a<4700){
			// 主题内容右边在距离上部400像素的时候，主题内容固定
			$('.pd_frs').css('position','fixed');
			$('.pd_frs').css('top','60px');
			$('.pd_frs').css('display','block');
		}else if  (a<400){
			$('.pd_frs').css('position','relative');
			$('.pd_frs').css('display','block');
		}else if(a>4700){
			$('.pd_frs').css('display','none');
		}			
	})
	// 鼠标移动到热门专题图库的时候,隐藏的框显示出来
	$('.pd_fr_qh_ul li').mouseover(function(){
		var index = $(this).index();
		$(this).css('background','#E8ECF5').siblings().css('background','#fff');
		if(index==0){
			$('.pd_fr_zw ul').eq(0).css('display','block').siblings().css('display','none');
		}else if(index==1){
			$('.pd_fr_zw ul').eq(1).css('display','block').siblings().css('display','none');
		}else if(index==2){
			$('.pd_fr_zw ul').eq(2).css('display','block').siblings().css('display','none');
		}
		
		
	})
	
			
			
	
		
		
		
		
		
	
	
	
	

	
	
	
	
	
	
	
	
	
	
	
	
	
	
}
