var oClock=document.getElementById('clock'); /*获取Dom节点*/
var oHour=document.getElementById('hour');
var oMinute=document.getElementById('minute');
var oSecond=document.getElementById('second');

function fRotate()//指针旋转的函数
{
	var now=new Date();//获取当前系统的时间
	var Hour=now.getHours();
	var Minute=now.getMinutes();
	var Second=now.getSeconds();	
//div.style.transform = "rotate(" + (rotate += 20) + "deg)";
	oSecond.style.transform="rotate("+(Second*6)+"deg)";//设置3个指针旋转的角度
	oMinute.style.transform="rotate("+(Minute+Second/60)*6+"deg)";
	oHour.style.transform="rotate("+(Hour+Minute/60)*30+"deg)";
	
    console.log(now,Hour,Minute,Second);
}
window.onload=setInterval(fRotate,1000);//设置定时器，每隔一秒调用指针旋转函数，更新指
