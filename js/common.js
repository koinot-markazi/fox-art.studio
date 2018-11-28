$(function() {

	$('.start-project-a').mouseenter(function(){
		$('.bg-circle').css({
			width: "100px",
			height: "100px"
		});
		$(this).css("color", "#fff");
	}).mouseleave(function(){
		$('.bg-circle').css({
			width: "0px",
			height: "0px"
		})
		$(this).css("color", "#FF522A");
	})

});

// $(function(){
// 	$('.index-container-right-projects-project-title').mouseenter(function(){
// 		$(this).siblings('.index-container-right-projects-project-opacity').css({
// 			opacity: "1"
// 		});
// 	}).mouseleave(function(){
// 		$(this).siblings('.index-container-right-projects-project-opacity').css({
// 			opacity: ".5"
// 		});
// 	})
// })

$('.projects-block').click(function(){
	$(this).parent().siblings().slideUp(500);
	$(this).siblings('#dscrpt').slideDown(500);
});

$('.projects-link-description-back').click(function(){
	$('.projects-link').slideDown(500);
	$(this).parents('#dscrpt').slideUp(500);
})
$('#gitHub').focus(function(){
	$('.labelText').animate({
		bottom: "60px"
	})
	$('.alert').css('color', 'white');
})
$('#gitHub').focusout(function(){
	$('.labelText').animate({
		bottom: "30px"
	})
	$('.alert').css('color', '#888');
})