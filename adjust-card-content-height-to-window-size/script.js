function adjustHeight(selector) {
    $obj = $(selector);
    $obj.height(0);

    let height = $obj.parent().height();
    $obj.siblings().each(function (index, element) {
        height -= $(element).height();
    });

    $obj.height(height);
}

$(function () {
    $(window).resize(function () {
        adjustHeight('#cardMain');
    });

    adjustHeight('#cardMain');
});
