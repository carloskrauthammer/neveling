"use strict";

var reviews_height = document.getElementsByClassName('press-reviews')[0].style.height;
var is_expanded = false;
var upper_index = 0;

function set_class_css_attribute(class_name, style_attr, value) {
    var object_arr = document.getElementsByClassName(class_name);
    for (let i=0; i<object_arr.length; i++) {
        object_arr[i].style[style_attr] = value;
    }
};

function switch_size() {
    "use strict";
    var reviews = document.getElementsByClassName('press-reviews')[0];
    var expand_button = document.getElementsByClassName('expand-button')[0];
    var footer = document.getElementsByTagName("footer")[0];

    expand_button.classList.toggle("expanded");
    if (reviews.style.height == reviews_height) {
        reviews.style.height = '300px';
        footer.style.display = "inherit";
    }
    else {
        reviews.style.height = reviews_height;
        footer.style.display = "none";
    }
}

function display_buttons(up_button, down_button, pos, max_pos) {
    "use strict";
    if (pos <= 0) {
        up_button.style.display = 'none';
    }
    else {
        up_button.style.display = 'block';
    }
    if (pos >= max_pos) {
        down_button.style.display = 'none';
    }
    else {
        down_button.style.display = 'block';
    }
}

function scroll_down() {
    "use strict";
    var down_button = document.getElementsByClassName('down')[0];
    var up_button = document.getElementsByClassName('up')[0];
    var slider = document.getElementsByClassName('slider')[0];
    var slider_height = slider.getBoundingClientRect().height;
    var slider_top_pos = parseInt(slider.style.top);
    var reviews = document.getElementsByClassName('press-reviews')[0];
    var reviews_height = reviews.getBoundingClientRect().height;
    var max_top_pos;

    if (isNaN(slider_top_pos)) {
        slider_top_pos = 0;
    }
    max_top_pos = slider_height - reviews_height;
    slider_top_pos -= reviews_height * (3/4);
    if ( Math.abs(slider_top_pos) > max_top_pos ) {
        slider_top_pos = -max_top_pos;
    }
    slider.style.top = slider_top_pos + 'px';
    display_buttons(up_button, down_button, Math.abs(slider_top_pos), max_top_pos);
}

function scroll_up() {
    "use strict";
    var down_button = document.getElementsByClassName('down')[0];
    var up_button = document.getElementsByClassName('up')[0];
    var slider = document.getElementsByClassName('slider')[0];
    var slider_height = slider.getBoundingClientRect().height;
    var slider_top_pos = parseInt(slider.style.top);
    var reviews = document.getElementsByClassName('press-reviews')[0];
    var reviews_height = reviews.getBoundingClientRect().height;
    var max_top_pos;

    if (isNaN(slider_top_pos)) {
        slider_top_pos = 0;
    }
    max_top_pos = slider_height - reviews_height;
    slider_top_pos += reviews_height * (3/4);
    if ( slider_top_pos > 0) {
        slider_top_pos = 0;
    }
    slider.style.top = slider_top_pos + 'px';
    display_buttons(up_button, down_button, Math.abs(slider_top_pos), max_top_pos);
}

document.getElementsByClassName('expand-button')[0].onclick = switch_size;
document.getElementsByClassName('up')[0].onclick = scroll_up;
document.getElementsByClassName('down')[0].onclick = scroll_down;
document.addEventListener("DOMContentLoaded", function(event) {
    set_class_css_attribute('up', 'display', 'none');
    //document.getElementsByClassName('up')[0].style.display = 'none';
    set_class_css_attribute('press-reviews', 'transition', 'all 0.5s');
    //document.getElementsByClassName("press-reviews")[0].style.transition = "all 0.5s";
    set_class_css_attribute('slider', 'transition', 'all 0.5s');
    //document.getElementsByClassName("slider")[0].style.transition = "all 0.5s";
    document.getElementsByTagName("footer")[0].style.transition = "all 0.5s";
});
