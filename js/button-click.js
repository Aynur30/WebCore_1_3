let button=document.querySelectorAll(".slide-menu__item");

for (let i=0; (i < button.length); i++){
    button[i].onclick = function() {
        for (let j=0; (j < button.length); j++) {
            if (button[j].classList.contains("slide-menu__item_active")) {
                button[j].classList.remove('slide-menu__item_active');
            }
        }    
        if (!button[i].classList.contains("slide-menu__item_active")) {
            button[i].classList.add('slide-menu__item_active');
        }
    };
}