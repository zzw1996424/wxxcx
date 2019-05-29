$(document).ready(function(){
(function(a){(jQuery.browser=jQuery.browser||{}).mobile=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))})(navigator.userAgent||navigator.vendor||window.opera);

   //首页index_1
if(!$.browser.mobile)
{
  $('.index_1 ul li').mouseenter(function(){
  	$(this).find('p>a.more').fadeIn();
  });
  $('.index_1 ul li').mouseleave(function(){
  	$(this).find('p>a.more').fadeOut();
  });
}

  $(".phone_t_ico").click(function(){
	$(".phone_t_li").slideToggle();
  });

  $('.phone_s_ico').click(function(){
		$('.phone_s_cn').animate({left:'0px'});
	})
  $('.phone_gb').click(function(){
		$('.phone_s_cn').animate({left:'100%'});
   })

  //导航
  var $nav_dropdown = $(".head_nav .ys_2 a");
	$nav_dropdown.click(function(){
    $(".tanchuang").hide();
    if($(this).hasClass("bgf2")){
      $nav_dropdown.removeClass("bgf2");
    }else{
      $nav_dropdown.removeClass("bgf2");
      $(this).addClass("bgf2");
      $("#"+$(this).attr("rel")).fadeIn();
    }
	});
	$("#wzfl,#tspd,#huodong").mouseleave(function(){
		$nav_dropdown.removeClass("bgf2");
		$(this).fadeOut();
	});

  //首页index_2
if(!$.browser.mobile)
{
  $('.index2_ft').mouseenter(function(){
  	$(this).find('a').fadeIn();
  });
  $('.index2_ft').mouseleave(function(){
  	$(this).find('a').fadeOut();
  });

  $('.index2_fr ul li').mouseenter(function(){
  	$(this).find('h3').fadeIn();
  });
  $('.index2_fr ul li').mouseleave(function(){
  	$(this).find('h3').fadeOut();
  });

   //首页index_3
 $('.index3_fr li').mouseenter(function(){
  	$(this).find('h5').fadeIn();
  });
  $('.index3_fr li').mouseleave(function(){
  	$(this).find('h5').fadeOut();
  });

   //首页index_4
  $('.index4_ft li').mouseenter(function(){
    $(this).find('p>a.more').fadeIn();
  });
   $('.index4_ft li').mouseleave(function(){
  	$(this).find('p>a.more').fadeOut();
  });

  $('.index4_fr ul li').mouseenter(function(){
		$(this).find('h3').animate({height:'110px'});
	})
  $('.index4_fr ul li').mouseleave(function(){
		$(this).find('h3').animate({height:'37px'});
	})

   $('.index4_2 ul li').mouseenter(function(){
  	$(this).find('p>a.more').fadeIn();
  });
  $('.index4_2 ul li').mouseleave(function(){
  	$(this).find('p>a.more').fadeOut();
  });

  //首页右边浮窗
   $('#wx').mouseenter(function(){
  	$(this).find('h3').fadeIn();
  });
  $('#wx').mouseleave(function(){
  	$(this).find('h3').fadeOut();
  });
}
   var loaded = true;
   var top = $(".head").offset().top;
   function Add_Data(){
	   var scrolla=$(window).scrollTop();
	   var cha=parseInt(top)-parseInt(scrolla);
                if(loaded && cha<=0)
                {
                    $(".head").addClass("ats");
                    loaded=false;
                }
                if(!loaded && cha>0)
                {
                    $(".head").removeClass("ats");
                    loaded=true;
                }

   }
   $(window).scroll(Add_Data);

  //我的收藏页面
  $('.coll_3 ul li').mouseenter(function(){
		$(this).find('h6').animate({right:'0px'});
	})
  $('.coll_3 ul li').mouseleave(function(){
		$(this).find('h6').animate({right:'-102px'});
   })


});


