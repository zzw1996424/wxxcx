
//--------------------------------导航栏出现----------------------
window.onload=function(){
//	------------------------轮播图----------------------
	var num= 0;
	var fun = function(){
		$num1 = $('.img_lunbo li').length;
		num++;
		if(num==$num1){
			num=0;
		}
		$('.img_lunbo li').eq(num).fadeIn(1000).siblings().fadeOut(1000);	
		
		// 让小圆圈跟着大图片一起改变背景图片
		$('.banner_box_ul li a').eq(num).css('background','url(images/banner_2.png) no-repeat');
		// 其他的小圆圈背景色回到原来
		$('.banner_box_ul li a').eq(num-1).css('background','url(images/banner_1.png) no-repeat');
	}
	// 轮播图的周期性时间函数
	var time = setInterval(fun,5000);
	// 鼠标移动到小圆圈上会转到对应的大图片
	$('.banner_box_ul li').on({
		mouseover:function(){
			var index = $(this).index();
			console.log(index);
			// 记录移动到小球的下标给eq
			$('.banner_box_ul li a').css('background','url(images/banner_1.png) no-repeat');
			$('.banner_box_ul li a').eq(index).css('background','url(images/banner_2.png) no-repeat');
			
			// 图片随着移动小球的下标指到对应的图片
			$('.img_lunbo li').eq(index).fadeIn(800).siblings().fadeOut(800);
			// 移动到小球后轮播停止
			clearInterval(time);	
		},
		mouseout:function(){
			num=$(this).index();
			$('.banner_box_ul li a').eq(num).css('background','url(images/banner_2.png) no-repeat');
			time=setInterval(fun,5000);
		}
	})
	// 点击左边小图标,图片会停止动画并回到上一张图片
	$('.prev').on({
		click:function(){
			// 点击的时候动画停止
			clearInterval(time);
			// 图片回到上一张
			$('.img_lunbo li').eq(num-1).fadeIn(800).siblings().fadeOut(800);
			// 小球的颜色也要相应改变
			$('.banner_box_ul li a').css('background','url(images/banner_1.png) no-repeat');
			$('.banner_box_ul li a').eq(num-1).css('background','url(images/banner_2.png) no-repeat');
			if(num<0){
				num=5;
			}
			num--;	
		},
		mouseout:function(){
			num = $(this).index();
			// 鼠标离开,动画开始
			time=setInterval(fun,5000);
		}	
	})
	// 点击右边小图片,图片自动停止并到下一张图片
	
	$('.next').on({
		click:function(){
			// 点击的时候动画停止
			clearInterval(time);
			// 图片回到上一张
			$('.img_lunbo li').eq(num).fadeIn(800).siblings().fadeOut(800);
			// 小球的颜色也要相应改变
			$('.banner_box_ul li a').css('background','url(images/banner_1.png) no-repeat');
			$('.banner_box_ul li a').eq(num).css('background','url(images/banner_2.png) no-repeat');
			if(num==5){
				num=-1;
			}
			num++;
		},
		mouseout:function(){
			clearInterval(time);
			num = $(this).index();
//			 鼠标离开,动画开始
			time=setInterval(fun,5000);
			$('.banner_box_ul li a').css('background','url(images/banner_1.png) no-repeat');
			$('.banner_box_ul li a').eq(num).css('background','url(images/banner_2.png) no-repeat');
			
		}	
	})
//---------------------------more--------------------------------
//	$('img').mouseover(function(){
//		var numa=0;
//		var fun = function(){
//			if(numa<1&&numa>=0){
//				numa+=0.1;
//				$('p .more').css('display','block');
//				$('p .more').css('opacity',numa);
//				console.log(numa);
//			}else{
//				numa=1;
//			}
//		}
//		setInterval(fun,100);
//	})
//	$('img').mouseleave(function(){
//		$('p .more').css('display','none');
//	})
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
	
	
	// 全球猎奇,鼠标移动上去的时候h3高度变高
//	var num=37;
//	$('.index_1m3_ul_li1').on({
//		mouseover:function(){
//			setInterval(function(){
//				if(num<110){
//					num+=5;
//				var num1 = num+'px';
//				$('.index_1m3_ul_li1 h3').css('height',num1);
//				}else if(num>=110){
//					num=37;	
//				}
//				console.log(num);
//			},100)	
//		},
//		mouseout:function(){
//			setInterval(function(){
//				if(num>=110){
//					num-=5;
//				var num1 = num+'px';
//				$('.index_1m3_ul_li1 h3').css('height',num1);
//				}else if(num<=37){
//					return;
//				}
//			},100)	
//			
//		}
//	})

	// 视频播放器
	$('.index_fr1 ul li').click(function(){
		var index = $(this).index();
		if(index==0){
			$('video').prop('src','a.mp4');
//			$('video').prop('autoplay','autoplay');
			$('video').prop('poster','http://p1.91huo.cn/newbbs91/2014/12/09/1418123919141.jpg');
		}else if(index==1){
			$('video').prop('src','b.vdat');
//			$('video').prop('autoplay','autoplay');
			$('video').prop('poster','http://i1.hdslb.com/video/c3/c37e3f244f191b8d88d5cac398897127.jpg');
		}else if(index==2){
			$('video').prop('src','c.vdat');
//			$('video').prop('autoplay','autoplay');
			$('video').prop('poster','http://t-1.tuzhan.com/043502b3c568/c-2/l/2014/07/09/15/cf6740c3ee694901898fadeee2d35619.jpg');
		}else if(index==3){
			$('video').prop('src','e.vdat');
//			$('video').prop('autoplay','autoplay');;
			$('video').prop('poster','http://t-1.tuzhan.com/3bfb9202e05e/c-1/l/2012/11/23/13/0e6ee7025cec4645a7167556095cd998.jpg');
		}else if(index==4){
			$('video').prop('src','f.vdat');
//			$('video').prop('autoplay','autoplay');
			$('video').prop('loop','loop');
			$('video').prop('poster','http://t-1.tuzhan.com/62236fa12c8b/c-2/l/2012/12/17/04/534cebf4399a4bdcb3c0a63421714c92.jpg');
		}
		
		
		
		
		
	})
	
	
	
	
	
	
}
