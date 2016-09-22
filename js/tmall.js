/**
 * Created by Administrator on 2016/8/4.
 */

$(window).resize(function(){
    if($(window).width()<1230){
        $(".nav").css({width:1080})
        $(".nav-right").css({width:880})
        $(".nav-right a:gt(7)").css({display:"none"})
    }else{
        $(".nav").css({width:1230})
        $(".nav-right").css({width:1000})
        $(".nav-right a:gt(7)").css({display:"block"})
    }
})
$(window).resize()


//轮播
// 注意赋值
var wheelImgs=$(".wheelImg")
var btns=$(".btnBox li")
var num=0
var t=setInterval(move,3000)
$(".wheel").hover(function(){
	clearInterval(t)
},function(){
	t=setInterval(move,3000)
})
btns.click(function(){
	var index=btns.index(this)
	btns.css({background:"#333"})
	$(this).css({background:"#fff"})
	wheelImgs.css({opacity:0})
	wheelImgs.eq(index).css({opacity:1})
	num=index
    if(num==0){
	$(".wheelbox").css("background","#F5b9C5")	
	}else if(num==1){
	$(".wheelbox").css("background","#E8E8E8")	
	}else if(num==2){
    $(".wheelbox").css("background","#FFB5B6")
	}else if(num==3){
	$(".wheelbox").css("background","#E8E8E8")	
	}else if(num==4){
	$(".wheelbox").css("background","#EC7b97")		
	}else if(num==5){
	$(".wheelbox").css("background","#FFFFF5")	
	}
})

function move(){
  num++
	if(num>wheelImgs.length-1){
		num=0
	}
	//操作图片
	wheelImgs.animate({opacity:0})
	// wheelImgs.fadeOut(400)
	wheelImgs.eq(num).finish()
	wheelImgs.eq(num).animate({opacity:1})
	//操作按钮
	btns.css({background:"#333"})
	btns.eq(num).css({background:"#fff"})
	//操作最外层的容器
	if(num==0){
	$(".wheelbox").css("background","#F5b9C5")	
	}else if(num==1){
	$(".wheelbox").css("background","#E8E8E8")	
	}else if(num==2){
    $(".wheelbox").css("background","#FFB5B6")
	}else if(num==3){
	$(".wheelbox").css("background","#E8E8E8")	
	}else if(num==4){
	$(".wheelbox").css("background","#EC7b97")		
	}else if(num==5){
	$(".wheelbox").css("background","#FFFFF5")	
	}	
}




















//var wheelImg =$(".wheel-img")
//var btns=$(".btn-box li")
//var num=0
//var t=setInterval(function move(){
//    function(){
//        num++
//        if(num>btns.length-1){
//            num=0
//        }
//        //操作图片
//        wheelImg.animate({opacity:0})
//          wheelimg.fadeOut(400)
//        wheelImg.eq(num).finish();//队列有影响，要清除队列
//        wheelImg.eq(num).animate({opacity:1})
//          wheelimg.fadeIn(400)
//        //操作按钮
//        btn.css("background","#fff")
//        btn.eq(num).css("background","yellow")
//        if(num==0){
//            //最外层容器
//            $(".r").css("background","red")
//        }else if(num==1){
//
//        }else  if(num==2)
//    }
//},2000)
////停止或者开始
//    $(".wheel").hover(function(){
//        clearInterval(t)
//    },function(){
//        t=setInterval(move,2000)
//    })//获取容器
//
//btn.click()