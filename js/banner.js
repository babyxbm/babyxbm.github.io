/*轮播图js*/
$(function(){
	var index=0,
		index_b=0;
	/*轮播图动画函数*/
	function banner_animate(){
		clearInterval(_banner);
		$('.banner_img div').eq(index).fadeIn().siblings().css('display','none');
		$('.banner_img div').eq(index).find('span').addClass('banner_span_show');
		$('.banner_img div').eq(index).siblings().find('span').removeClass('banner_span_show');
		$('.banner_btn li').eq(index).addClass('banner_li_show').siblings().removeClass('banner_li_show');
		$('.banner_bgc img').attr('src',$('.banner_img div').eq(index_b).find('img').attr('src'));
		_banner=setInterval(banner,3000);
	}
	/*轮播函数*/ 
	function banner(){
		index++;
		index>3?index=0:index;
		index_b=index-1;
		index_b<0?index_b=3:index_b;
		banner_animate();
	}
	let _banner=setInterval(banner,3000);
	$('.banner_btn li').click(function(){
		index_b=index;
		index=$(this).index();
		banner_animate();
	});
});
/*轮播图*/
const BANNER=`<div id="banner" role="banner">
			<div class="banner_img">
				<div><img src="image/banner/banner1.jpg" alt="banner_img"><span class="banner_span_show">text1</span></div>
				<div><img src="image/banner/banner2.jpg" alt="banner_img"><span>text2</span></div>
				<div><img src="image/banner/banner3.jpg" alt="banner_img"><span>text3</span></div>
				<div><img src="image/banner/banner4.jpg" alt="banner_img"><span>text4</span></div>
			</div>
			<div class="banner_bgc">
				<img src="image/banner/banner1.jpg" alt="banner_img">
			</div>
			<div class="banner_btn">
				<ul>
					<li class="banner_li_show"></li>
					<li></li>
					<li></li>
					<li></li>
				</ul>
			</div>
		</div>`;