$(function(){
	
$(".primary ul li").click(function(){  
            	clearInterval(main_showbox_imgbox_timer);
                var sId = $(this).data("id"); //获取data-id的值
                window.location.hash = sId; //设置锚点
                loadInner_a(sId);
            }); 
            function loadInner_a(sId) {
                var sId = window.location.hash;
                var pathn, i;
                switch(sId) {
                    case "#shouye":
                        pathn = "coffee_index.html";
                        i = 0;
                        break;　　　　　　　
                    case "#culture":
                        pathn = "coffee_culture.html";
                        i = 1;
                        break;
                    case "#news":
                        pathn = "coffee_news.html";
                        i = 2;
                        break;                 　　                   
                }
                $("#main-center").load(pathn); //加载相对应的内容
                $(".primary li").eq(i).addClass("current").siblings().removeClass("current"); //当前列表高亮
            }
            
             $(".introduce li").click(function(){  
             	clearInterval(main_showbox_imgbox_timer);
                var sId = $(this).data("id"); //获取data-id的值
                window.location.hash = sId; //设置锚点
                loadInner_b(sId);
            }); 
            function loadInner_b(sId) {
                var sId = window.location.hash;
                var pathn, i;
                switch(sId) {
                    case "#shouye":
                        pathn = "coffee_index.html";
                        i = 0;
                        break;　　　　　　　
                    case "#culture":
                        pathn = "coffee_culture.html";
                        i = 1;
                        break;
                    case "#news":
                        pathn = "coffee_news.html";
                        i = 2;
                        break;       
                    case "#born":
                        pathn = "coffee_born.html";
                        i = 3;
                        break;                 　　                   
                    case "#baking":
                        pathn = "coffee_baking.html";
                        i = 4;
                        break;                 　　                   
                    case "#taste":
                        pathn = "coffee_taste.html";
                        i = 5;
                        break;                 　　                   
                    case "#worldculture":
                        pathn = "coffee_worldculture.html";
                        i = 6;
                        break;                 　　                   
                                  　　                   　　
                }
                $("#main-center").load(pathn); //加载相对应的内容
                $(".introduce li").eq(i).addClass("current").siblings().removeClass("current"); //当前列表高亮
            }
            
            $(".nav2-list ul li").click(function(){  
             	clearInterval(main_showbox_imgbox_timer);
                var sId = $(this).data("id"); //获取data-id的值
                window.location.hash = sId; //设置锚点
                loadInner_b(sId);
                
                
                var oA=$('.nav2-list a');
                var oLi=$(".nav2-list ul li");
                for (var i=0;i<oA.length;i++) {
                	oA.css('color','');
                	oLi.css('background-color','');
                }
                $(this).css('background-color',' #f2b632');
                $(this).find('a').css('color','white');
                
            }); 
            function loadInner_b(sId) {
                var sId = window.location.hash;
                var pathn, i;
                switch(sId) {
                    case "#shouye":
                        pathn = "coffee_index.html";
                        i = 0;
                        break;　　　　　　　
                    case "#culture":
                        pathn = "coffee_culture.html";
                        i = 1;
                        break;
                    case "#news":
                        pathn = "coffee_news.html";
                        i = 2;
                        break;       
                    case "#born":
                        pathn = "coffee_born.html";
                        i = 3;
                        break;                 　　                   
                    case "#baking":
                        pathn = "coffee_baking.html";
                        i = 4;
                        break;                 　　                   
                    case "#taste":
                        pathn = "coffee_taste.html";
                        i = 5;
                        break;                 　　                   
                    case "#worldculture":
                        pathn = "coffee_worldculture.html";
                        i = 6;
                        break;                 　　                   
                                      　　                   　　
                }
                $("#main-center").load(pathn); //加载相对应的内容
                $(".nav2-list ul li").eq(i).addClass("current").siblings().removeClass("current"); //当前列表高亮
            }
            
//nav部分
    $('.menu').mousedown(function(){
    	$(this).animate({opacity:'0.8',width:'18px',height:'18px'})    	
    })
    $('.menu').mouseup(function(){
    	$(this).animate({opacity:'1',width:'22px',height:'22px'})
    })//menu点击效果
	$('.menu').click(function(){
		$('.container').fadeOut();
		$('.menu-list').fadeIn('slow');
		$('.menu-list-header-close').css('display','block');
	});//	点击menu菜单弹出
    
    $('.menu-list-header-close').mousedown(function(){
    	$(this).animate({opacity:'0.5',width:'32px',height:'32px'})    	
    })
    $('.menu-list-header-close').mouseup(function(){
    	$(this).animate({opacity:'1',width:'35px',height:'35px'})
    })
	$('.menu-list-header-close').click(function(){
			$('.menu-list').fadeOut('slow');
		    $('.container').fadeIn();			
	});//	关闭menu菜单
	
	
	
	
	
	
	
	
//main部分

//轮播图图片向左滑动效果，BUG没解决
//  var mainshowbox=$('.main-showbox')[0];
//  var mainshowboxw=mainshowbox.clientWidth; 
//  
//  $('.main-showbox-next').click(function(){
//      $('.main-showbox-imgbox').animate({left:'-='+mainshowboxw+'px'});
//  });


//轮播图淡入淡出效果   
    var main_showbox_imgbox=$('.main-center-showbox-imgbox')[0];
    var main_showbox_imgbox_img=$('.main-center-showbox-imgbox img')[0];
    var arrMain_showbox_imgbox_img=['img/main-封面图1.png','img/main-封面图2.png','img/main-封面图3.png','img/main-封面图4.png'];
    var num=0;
    
    start();    
    function start(){
    	$('.main-center-showbox-imgbox').animate({opacity:'1'},1000);
    	main_showbox_imgbox_img.src=arrMain_showbox_imgbox_img[num];   	
    }//初始化
    
    $('.main-showbox-next')[0].onclick=function(){ 
        num=num+1;      
        if(num==arrMain_showbox_imgbox_img.length){
        	num=0;        	
        	start();
        }else{
        	start();
        }
    }//next键点击事件
    var main_showbox_imgbox_timer=null;
//  var main_showbox_next=$('.main-showbox-next');
    clearInterval(main_showbox_imgbox_timer);
    main_showbox_imgbox_timer=setInterval(function(){
    	$('.main-showbox-next')[0].onclick();
    },2000);//轮播图定时器
//	    if(document.getElementsByClassName('main-showbox-next')){
//  	clearInterval(main_showbox_imgbox_timer);
//  	alert(123);
//      }
    
  	$('.main-showbox-next').mouseenter(function(){ 		
  		$(this).animate({right:'4%'});
  	})
  	$('.main-showbox-next').mouseleave(function(){ 		
        $(this).animate({right:'5%'});
  	})
  	    
  	     	   
//咖啡豆种效果  	    
//  $('.tree-box-1').mouseenter(function(){
//	    $(this).animate({top:'-15px'},200);
//	    $('.tree-ues-box').css('color','black');
//  })
//  $('.tree-box-1').mouseleave(function(){
//	    $(this).animate({top:'0px'},200);
//  })
    var treeusebox1=$('.tree-use-box-1').eq(0);
    var treeusebox2=$('.tree-use-box-1').eq(1);
    var treebox1=$('.tree-box-1').eq(0);
    var treebox2=$('.tree-box-1').eq(1);
    
    treemove(treebox1);
    treemove(treebox2);
    
    function treemove(a){
    	a.mouseenter(function(){
    		$(this).animate({top:'-10px'},200);
    		$(this).css('border-color','#888888');
    	});
    	
    	a.mouseleave(function(){
    		$(this).animate({top:'0px'},200);
    		$(this).css('border-color','')
    	});
    }

    
//  footer部分
    $('.footer-link-box').mouseenter(function(){
    	$(this).find('i').css('color','#EEB422');
    })
    $('.footer-link-box').mouseleave(function(){
    	$(this).find('i').css('color','');
    })



//	下面是底部


});