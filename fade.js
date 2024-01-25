document.addEventListener('DOMContentLoaded', function () {
    var body = document.querySelector('body');
    body.style.opacity = '0';

    setTimeout(function () {
        body.style.transition = 'opacity 0.5s ease';
        body.style.opacity = '1';
    }, 200);
});