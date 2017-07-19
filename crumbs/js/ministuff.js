"use strict";

function set_active_tablink(el) {
    var l = document.getElementsByClassName('tablink');

    for (let i=0; i<l.length; i++) {
        l[i].classList.remove('tablink-active');
    }
    el.classList.add('tablink-active');
};
