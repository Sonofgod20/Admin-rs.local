/*
Template Name: RaspberryShake -  Admin & Dashboard Template
Author: Javier
Contact: themesdesign.in@gmail.com
File: ecommerce cart Js File
*/

var defaultOptions = {
};

$('[data-toggle="touchspin"]').each(function (idx, obj) {
    var objOptions = $.extend({}, defaultOptions, $(obj).data());
    $(obj).TouchSpin(objOptions);
});