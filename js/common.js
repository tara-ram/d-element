$(document).ready(function () {
    $('#team-btn').on('click', function () {
        $('.hidden').show();
    });
    $('#form').submit(function (e) {
        e.preventDefault();
        $.ajax({
            url:'',
            method: 'POST',
            data: $('form').serialize(),
            success: function () {
                $('.popup').show();
            }

        });
        
    });
});
