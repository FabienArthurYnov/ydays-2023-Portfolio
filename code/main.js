

function sideMenu() {
    sMenu = document.getElementById('sideMenu')
    bgImg = document.getElementById('background_img')
    mWindow = document.getElementById('mainWindow')

    // fullscreen
    if (!sMenu.classList.contains('sideMenuClose')) {
        sMenu.classList.add('sideMenuClose');
        bgImg.classList.add('Full');
        bgImg.classList.remove('NotFull');
        mWindow.classList.add('Full');
        mWindow.classList.remove('NotFull');
    } else {
    // with sideMenu
        sMenu.classList.remove('sideMenuClose');
        bgImg.classList.remove('Full');
        bgImg.classList.add('NotFull');
        mWindow.classList.remove('Full');
        mWindow.classList.add('NotFull');
    }
}

function goTo(elm) {
    document.getElementById(elm).scrollIntoView(true, {behavior: 'smooth'})
    if (window.innerWidth < 600) {
        sideMenu()
    }
    window.scrollBy(0, -100);
}