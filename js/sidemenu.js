//아코디언 메뉴
$('#gnb-mo ul li a').click(function(e){
    e.preventDefault();
    $(this).next().slideUp(),
    $(this).next().is(':visible') || $(this).next().slideDown();
});