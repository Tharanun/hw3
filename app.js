function toggleHam(x) {
    x.classList.toggle("change");
    
    let myMenu = document.getElementById('myMenu');
    if (myMenu.className.includes('menu-active')) {
        myMenu.className = myMenu.className.replace('menu-active', '').trim();
    } else {
        myMenu.className += ' menu-active';
    }
}    

