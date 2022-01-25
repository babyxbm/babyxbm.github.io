$(function(){
	/*倒计时*/
	/*补零函数*/
	function tow(n){
		return n>=0&&n<10?"0"+n:n;
	}
	setInterval(function(){
		var counttime=new Date('2019/07/13 19:00');
		var nowtime=new Date();
		var gaptime=(nowtime-counttime)/1000;
		$('#d').text(tow(Math.floor((gaptime/86400))));
		$('#h').text(tow(Math.floor((gaptime/3600)%24)));
		$('#m').text(tow(Math.floor((gaptime/60)%24%60)));
		$('#s').text(tow(Math.floor(gaptime%60)));
	},1);
	/*页面宽高根据手机来*/
	$('#container').css('width',$(window)[0].innerWidth);
	$('#container').css('height',$(window)[0].innerHeight);
	console.log($('#container').innerHeight());
	var num=Math.floor(Math.random()*_image.length);
	var image=_image[num];
//	$('.Time').css('background','url('+image+') center center /contain no-repeat');
});
const _image=['image/baby1.jpg','image/baby2.jpg','image/baby3.jpg','image/baby4.jpg','image/baby5.jpg','image/baby6.jpg','image/baby7.jpg']