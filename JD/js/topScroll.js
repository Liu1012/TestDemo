//控制顶部搜索栏的显示与隐藏	
window.onscroll=function(){
	console.log('页面滚动啦---');
	//1.获取到滚动条滚动的距离
	var top=document.documentElement.scrollTop;
	console.log(top);
	//2.获取到顶部的div
	var nav =document.getElementsByClassName('nav')[0];
	
	//假如top为150时
	if (top>=150){
		nav.style.position="fixed";
		nav.style.top="0";
		nav.style.height="48px";
		nav.style.display="block"
		nav.style.zIndex=1000;
	}else{
		nav.style.display="none";
		nav.style.height="0";
	}
};