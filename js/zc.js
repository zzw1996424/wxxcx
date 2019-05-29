window.onload = function(){

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
	



}