$(function (){
var $button = $("button");
var $input = $("input");
var $p = $("p");

$button.on("click", function(){
$p.css("display", "inline-block")});

$input.mouseenter(function() {
var $c = $(this).siblings("p");
$c.css("display", "inline-block") 
});

$input.mouseleave(function() {
$c = $(this).siblings("p");
$c.css("display", "none") 
})})   