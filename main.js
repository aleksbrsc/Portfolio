document.addEventListener('mousemove', function (event) {
    var horizontalLine = document.getElementById('horizontal-line');
    var navbarOptions = document.getElementsByClassName('navbar-option');
    var mouseY = event.clientY;

    for (var i = 0; i < navbarOptions.length; i++) {
        var navbarOption = navbarOptions[i];
        var navbarOptionRect = navbarOption.getBoundingClientRect();
        var navbarOptionY = navbarOptionRect.top + window.scrollY;
        var navbarOptionHeight = navbarOptionRect.height;

        if (mouseY >= navbarOptionY && mouseY <= navbarOptionY + navbarOptionHeight) {
            var distance = Math.abs(event.clientX - navbarOptionRect.left);
            var color = getColor(distance);
            navbarOption.style.color = color;
        } else {
            navbarOption.style.color = "black";
        }
    }

    horizontalLine.style.top = mouseY + 'px';
});

function getColor(distance) {
    var maxDistance = window.innerWidth; // color range
    var hue = (distance / maxDistance) * 240; // map distance to hue value (0-240)
    return 'hsl(' + hue + ', 100%, 50%)';
}

function handleNavbarOptionClick(navbarOption) {
    if (navbarOption.id !== 'github') {
        var body = document.querySelector('body');
        var main = document.querySelector('main');
        var navbar = document.querySelector('nav');
        body.style.transition = 'all 0.5s ease';
        main.style.transition = 'all 0.5s ease';
        navbar.style.transition = 'all 0.5s ease';
        main.style.transform = 'translateX(-105%)';
        navbar.style.opacity = '0';
        setTimeout(function () {
            body.style.opacity = '0';
        }, 200);
        setTimeout(function () {
            if (navbarOption.id === 'projects') {
                window.location.href = 'projects.html';
            } else if (navbarOption.id === 'info') {
                window.location.href = 'info.html';
            } else if (navbarOption.id === 'contact') {
                window.location.href = 'contact.html';
            }
        }, 800);
    }
}

window.onbeforeunload = function() {
    var body = document.querySelector('body');
    var main = document.querySelector('main');
    var navbar = document.querySelector('nav');
    body.style.transition = '';
    main.style.transition = '';
    navbar.style.transition = '';
    main.style.transform = '';
    navbar.style.opacity = '';
    body.style.opacity = '';
};

window.onpopstate = function(event) {
    var body = document.querySelector('body');
    var main = document.querySelector('main');
    var navbar = document.querySelector('nav');
    body.style.transition = 'all 0.5s ease';
    main.style.transition = 'all 0.5s ease';
    navbar.style.transition = 'all 0.5s ease';
    main.style.transform = '';
    navbar.style.opacity = '';
    body.style.opacity = '';
};