$(document).ready(function () {
    $('#team-btn').on('click', function () {
        $('.hidden').show();
    });

    $('#form').on('submit',(function (e) {
        e.preventDefault();

        $.ajax({
            url: 'text.json',
            method: 'POST',
            data:$('#form').serialize(),
            success: function () {
                $('.popup').show();
            },
            error: function () {
                alert('Ошибка. попробуйте позже');

            },
        });
    }));
});