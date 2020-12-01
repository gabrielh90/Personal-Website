

function changeTab(e) {

    if(e.className.indexOf('justifyLeft') >= 0)
        return;
    var presentation = document.getElementById('presentation');
    for(var i = 0; i < presentation.children.length; i++) {
        presentation.children[i].style.display = 'none';
    }
    presentation.children[e.className].style.display = 'grid';
    var menu = document.getElementById('menu');
    menu.style.display = 'block';
    for(var i = 0;  i < menu.children.length; i++){
        menu.children[i].className = menu.children[i].className.replace(" justifyLeft", "");
    }
    e.className += " justifyLeft";
}

// #aboutMe {
//     display: grid;
// }