$(document).ready(function () {
    $('.botanic').hide();
    $('.flower').on('click', function () {
        $('.botanic').hide();
        $(this).children('.botanic').show();
    });
});

$(document).ready(function () {
    $('.imgdiv').hide();
    $('.pic').hover(
        function (evt) {
            var mouseX = evt.pageX;
            var mouseY = evt.pageY;
            var imgDivId = $(this).attr('title');
            $('#' + imgDivId).css({
                'top': mouseY + 10,
                'left': mouseX + 10
            }).show();
        },
        function () {
            var imgDivId = $(this).attr('title');
            $('#' + imgDivId).hide();
        }
    );
});

window.addEventListener('keypress', (event) => {
    const keyPressed = String.fromCharCode(event.charCode);
    const lowerCaseKey = keyPressed.toLowerCase();
    if (lowerCaseKey >= 'a' && lowerCaseKey <= 'z') {
        window.location = "#" + lowerCaseKey;
    }
});
