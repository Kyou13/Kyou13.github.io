// 背景
$('#bg').particleground({ //要素の指定
    dotColor:  '#7B68EE', //ドットの色
    lineColor: '#7B68EE',
    density: 6500,
    minSpeedX: 0.2,
    particleRadius: 5,
    parallax: false,
    maxSpeedX: 0.1,
    maxSpeedY: 0.1,
});

$('a[href^="#"]').click(function() {
   var speed = 400;
   var href= $(this).attr("href");
   var target = $(href == "#" || href == "" ? 'html' : href);
   var position = target.offset().top;
   $('body,html').animate({scrollTop:position}, speed, 'swing');
   return false;
});
