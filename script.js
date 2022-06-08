jQuery(document).ready(function () {
    $('.button').on('click', function(){
            console.log('clicked');
        $(".vernice").attr("class", "vernice verniceOver");
        $(".brush").attr("class", "brush brushOver");
        $(".gocce").attr("class", "gocce gocceOver");
    });
});
