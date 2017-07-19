"use strict";

var sn_construct = (function() {

    var SocialNetwork = function(obj) {
        this.id = obj.id;
        this.name = obj.name;
    }

    var TextClass = function(obj) {
        SocialNetwork.call(this, obj);
        this.text = obj.text;
    }

    TextClass.prototype = Object.create(SocialNetwork.prototype);
    TextClass.prototype.constructor = TextClass;


    var ImageClass = function(obj) {
        this.caption = obj.caption;
        this.url = obj.url;
    }

    var Instagram = function(obj) {
        SocialNetwork.call(this, obj);
        this.image = new ImageClass(obj.image);
    }

    Instagram.prototype = Object.create(SocialNetwork.prototype);
    Instagram.prototype.constructor = Instagram;

    var GooglePlus = function(obj) {
        TextClass.call(this, obj);
        this.plus = parseInt(obj.plus);
    }

    GooglePlus.prototype = Object.create(TextClass.prototype);
    GooglePlus.prototype.constructor = GooglePlus;

    var Facebook = function(obj) {
        TextClass.call(this, obj);
        this.likes = parseInt(obj.likes);
    }

    Facebook.prototype = Object.create(TextClass.prototype);
    Facebook.prototype.constructor = Facebook;

    var construct = function(obj) {
        if (obj.name == 'facebook') {
            return new Facebook(obj);
        }
        else if (obj.name == 'google') {
            return new GooglePlus(obj);
        }
        else if (obj.name == 'instagram') {
            return new Instagram(obj);
        }
    }
    return construct;
})();

function get_array() {
    var response = [{
        "id": "51F361A4-08A4-4113-8045-9B09F84572FF",
        "name": "facebook",
        "text": "Facebook Lorem Ipsum Dolor",
        "likes": 91
    }, {
        "id": "8994458D-28E0-4925-82B3-83E9BB05906D",
        "name": "google",
        "text": "Google+ Lorem Ipsum Dolor",
        "plus": 101
    }, {
        "id": "6EA36600-D130-472A-87C8-124EB27B4BD2",
        "name": "instagram",
        "image": {
            "caption": "new picture",
            "url": "//new-picture.jpg"
        } 
    }];

    var arr = [];

    for (let i=0; i<response.length; i++) {
        let obj = sn_construct(response[i]);
        arr.push(obj);
    }
    return arr;
}

console.dir(get_array());
