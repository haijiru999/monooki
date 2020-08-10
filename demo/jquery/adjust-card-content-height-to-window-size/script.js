function adjustHeight(target, from) {
    $obj = $(target);
    $obj.height(0);

    let height = $(from).height();
    $obj.siblings().each(function (index, element) {
        height -= $(element).outerHeight(true);
    });

    $obj.height(height);
    $obj.css('overflow', 'auto');
}

$(function () {
    $(window).resize(function () {
        adjustHeight('#scroll', '#cardBody');
    });
    adjustHeight('#scroll', '#cardBody');
});
