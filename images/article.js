$(document).ready(function(){
		
   var loaded = true;
   var loadeds = true;
   var loadeds2 = true;
   var top = $(".banner3_main").offset().top;
   var tops = $(".pd_right").offset().top;
   var tops2 = $(".ys_9").offset().top;
   function Add_Data(){
	   var scrolla=$(window).scrollTop();
	   var cha=parseInt(top)-parseInt(scrolla);
	   var chas=parseInt(tops)-parseInt(scrolla);
	   var chas2=parseInt(tops2)-parseInt(scrolla);
      if(loaded && cha<=0)
      {                
          $(".article_head").fadeIn();
          $(".head").fadeOut();
          loaded=false;
      }
      if(!loaded && cha>0)
      {
          $(".article_head").fadeOut();
          $(".head").show();
          loaded=true;
      }

      if(loadeds && chas<=0)
      {           
          $(".pd_frs").addClass("prat");
          loadeds=false;
      }
      if(!loadeds && chas>0)
      {
          $(".pd_frs").removeClass("prat");
          loadeds=true;
      }

      if(loadeds2 && chas2<=610)
      {
          $(".pd_frs").fadeOut();
          loadeds2=false;     
      }
      if(!loadeds2 && chas2>610)
      {
          $(".pd_frs").fadeIn();
          $(".pd_frs").addClass("prat");
          loadeds2=true;
      }

   }
   $(window).scroll(Add_Data);
  
});


