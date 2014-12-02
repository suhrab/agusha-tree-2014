
$(function () {

//    $(document).snowfall(
//{
//    flakeCount: 150,        // number
//    flakeColor: '#fff', // string
//    flakeIndex: 999999,     // number
//    minSize: 1,            // number
//    maxSize: 3,            // number
//    minSpeed: 2,           // number
//    maxSpeed: 10,           // number
//    round: true,          // bool
//    shadow: false          // bool
//}
//);

    var $toy = $('.toy');
    var $body = $('body');
    var $borderProductTpl = $("<div class=\"productBorder\"><img id=\"theImg\" /></div>");
    var $productImg = $borderProductTpl.children('img');
    $body.append($borderProductTpl);

    var randomAnimateClasses = ['zoomIn', 'flipInY', 'rotateIn', 'bounce', 'swing', 'bounceIn', 'wobble', 'tada'];

    $body.on('click', function (e) {
        //if(!$(e.target).hasClass('.toy'))
        //    $borderProductTpl.hide();
    });

    $toy.on('click', function (e) {
        var $this = $(this);


        $productImg.attr('src', 'images/products/product' + $this.data('toyid') + '.jpg');

        var productFrameOffset = $.extend({}, $this.offset());
        productFrameOffset.left -= 30;
        productFrameOffset.top -= 30;
        $borderProductTpl
            .offset(productFrameOffset);

        $borderProductTpl
		.hide(0, function(){
			$borderProductTpl.show(600);
		});
		
        var animateEffect = randomAnimateClasses[randomIntFromInterval(0, randomAnimateClasses.length-1)];
        $borderProductTpl.addClass('animated ' + animateEffect);
        $borderProductTpl.one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
            $borderProductTpl.removeClass('animated ' + animateEffect);

        });
    });
	
	$borderProductTpl.on('click', function (e) {
	
        $borderProductTpl.hide('slow');
		setTimeout(function(){
		$borderProductTpl.offset({top:0, left:0});
		}, 500);
		
        
    });

    $toy.on('mouseover', function (e) {
        $(this).addClass('animated swing');
    })
    .on('mouseout', function (e) {
        $(this).removeClass('animated swing');
    });


});

function randomIntFromInterval(min,max)
{
    return Math.floor(Math.random()*(max-min+1)+min);
}