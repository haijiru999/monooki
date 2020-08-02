function adjustHeight() {
    $('#cardMain').height(0);

    const height = $('#cardBody').height()
        - $('#cardHeader').height()
        - $('#cardFooter').height();

    $('#cardMain').height(height);
}

$(function () {
    $(window).resize(function () {
        adjustHeight();
    });

    adjustHeight();
});
