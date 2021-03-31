

function changeTab(e) {
    if(e.className.indexOf('justifyLeft') >= 0)
        return;
    var presentation = document.getElementById('presentation');
    for(var i = 1; i < presentation.children.length-1; i++) {
        presentation.children[i].style.display = 'none';
    }
    presentation.children[e.className].style.display = 'grid';
    // document.getElementsByClassName('dummy')[0];
    var menu = document.getElementById('menu');
    // menu.style.display = 'block';
    for(var i = 0;  i < menu.children.length; i++){
        menu.children[i].className = menu.children[i].className.replace(" justifyLeft", "");
    }
    e.className += " justifyLeft";
}

function sendMail(e) {
    e.stopImmediatePropagation();
    e.preventDefault();
    var name = document.getElementById('name').value;
    var email = 'gabriel.hromei@gmail.com'
    var senderEmail = document.getElementById('email').value;
    var subject = document.getElementById("subject").value;
    var message = document.getElementById('message').value;
    window.open('mailto:' + email+ '?subject=' + subject + '&body=' + message);
}

document.getElementById('form').addEventListener('submit', sendMail);

// Get the modal
var modal = document.getElementById("myModal");
var project = null;
var interval = null;
function showModal(projectName) {
    project = document.getElementsByClassName(projectName)[0];
    modal.appendChild(project.getElementsByClassName('slideshow')[0]);
    modal.style.display = "block";
    
    interval = setInterval(showSlides.bind(null), 4000);
}
function closeModal() {
    project.appendChild(modal.getElementsByClassName("slideshow")[0]);
    modal.style.display = "none";
    
    clearInterval(interval);
}


var slideIndex = 0;
function showSlides(e, n = 1, add = 1) {
    if(e){
        e.stopPropagation();
        e.preventDefault();
    }
    var mySlides = modal.getElementsByClassName("mySlides");
    
    mySlides[slideIndex].style.display = "none";

    if(add == true) {
        slideIndex += n;
    } else {
        slideIndex -= n;
    }
    if(slideIndex >= mySlides.length) slideIndex = 0;
    if(slideIndex < 0) slideIndex = mySlides.length-1;

    mySlides[slideIndex].style.display = "block";
}
