var button = document.getElementsByClassName('open-side');
for(i = 0 ; i < button.length ; i++){
    button[i].addEventListener("click" , function(){
        var sidebar = document.getElementById('sidebar');
        sidebar.style.display = 'block';
    });
}

var buttonclose = document.getElementsByClassName('close-side');
for(i = 0 ; i < buttonclose.length ; i++){
    buttonclose[i].addEventListener("click" , function(){
        var sidebar = document.getElementById('sidebar');
        sidebar.style.display = 'none';
    });
}

// New Open Menu
var menubtn = document.getElementsByClassName('menu-content');

var i;
var j = 0;
for (i = 0; i < menubtn.length; i++) {
    menubtn[i].addEventListener("click", function () {
        var menu = this.querySelector('.treemenu');
        var icon = this.querySelector('.ic-toogle');
        
        icon.classList.toggle('fa-angle-up');
        menu.classList.toggle('active');
    });
}