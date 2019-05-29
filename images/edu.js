lastScrollY=0;
$(function(){
var qqstr="<div id=\"21SEA_BOX\"  style='left:0px; position:absolute;top:220px; width:97px;'>";
qqstr+="<div style=\"background-image:url(http://www.21sea.com/images/21sea_refer_01.png)!important; _background-image:none;FILTER: progid:DXImageTransform.Microsoft.AlphaImageLoader(src='http://www.21sea.com/images/21sea_refer_01.png');WIDTH: 95px;height:85px; margin-bottom:0px;\"></div><div  style=\"background-image:url(http://www.21sea.com/images/21sea_refer_02.png)!important; _background-image:none;FILTER: progid:DXImageTransform.Microsoft.AlphaImageLoader(src='http://www.21sea.com/images/21sea_refer_02.png');WIDTH: 95px;height:34px; margin-bottom:0px;\"></div><a href=\"http://wpa.qq.com/msgrd?v=3&uin=1148217748&site=www.21sea.com&menu=yes\"><img src=\"http://www.21sea.com/images/21sea_refer_03.png\" titile=\"QQ咨询\" alt=\"QQ咨询\" border=\"0\"></a><a href=\"http://wpa.qq.com/msgrd?v=3&uin=4000603650&site=www.21sea.com&menu=yes\"><img titile=\"QQ咨询\" alt=\"QQ咨询\" src=\"http://www.21sea.com/images/21sea_refer_04.png\" border=\"0\"></a><a href=\"http://www.21sea.com/baoming/\" target=\"_blank\"><img titile=\"在线报名\" alt=\"在线报名\" src=\"http://www.21sea.com/images/21sea_refer_05.png\" border=\"0\"></a><div  style=\"background-image:url(http://www.21sea.com/images/21sea_refer_06.png)!important; _background-image:none;FILTER: progid:DXImageTransform.Microsoft.AlphaImageLoader(src='http://www.21sea.com/images/21sea_refer_06.png');WIDTH: 95px;height:43px; margin-bottom:0px;\"></div>";
qqstr+="</div>"; 
$('body').append(qqstr);
window.setInterval("SEABeat()",1);
});

function SEABeat(){ 
var diffY;
if (document.documentElement && document.documentElement.scrollTop)
    diffY = document.documentElement.scrollTop;
else if (document.body)
    diffY = document.body.scrollTop
else
    {/*Netscape stuff*/}
    
//alert(diffY);
percent=.1*(diffY-lastScrollY); 
if(percent>0)percent=Math.ceil(percent); 
else percent=Math.floor(percent); 
document.getElementById("21SEA_BOX").style.top=parseInt(document.getElementById("21SEA_BOX").style.top)+percent+"px";

lastScrollY=lastScrollY+percent; 
//alert(lastScrollY);
}

function far_close()
{
	document.getElementById("21SEA_BOX").innerHTML="";
	//use: <a onclick="far_close()" herf="#" style="cursor:pointer">
}

function setfrme()
{
	var tr=document.getElementById("21SEA_BOX");
	var twidth=tr.clientWidth;
	var theight=tr.clientHeight;
	var fr=document.getElementById("21seaFrame");
	fr.width=twidth-1;
	fr.height=theight-30;
}
