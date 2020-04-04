$(document).ready(function(){

let aboutOffset=$("#about").offset().top;


$(window).scroll(function(){

  let wScroll=$(window).scrollTop();
 
  if(wScroll > aboutOffset)
  {
      $("nav").addClass("bg-dark")
      $(".slideup").fadeIn(500);
  }
  else
  {
    $("nav").removeClass("bg-dark")
    $(".slideup").fadeOut(500);
  }

})


$(".slideup").click(function(){

  $("html,body").animate({scrollTop:'0'},1000)

})

$("a").click(function(){
let sectionOffset =($(this).attr("href"))

$("html,body").animate({scrollTop:$(sectionOffset).offset().top-90},1000)

})

let Colors=["red","green","blue","yellow","tomato","white"]

for(var i=0;i<Colors.length;i++)
{
    $("#option-box span").eq(i).css("backgroundColor",Colors[i]);
}

$("#option-box span").click(function(){
   let spanColor= $(this).css("backgroundColor")
   console.log(spanColor)
   $("h2,p ").css("color",spanColor)
})

$("#option-container i").click(function(){
   let wleft=$("#option-box").outerWidth(true);
   if($("#option-container").css("left") == "0px"){
    $("#option-container").animate({left:`-${wleft}px`},1000)
   }
   else
   {
    $("#option-container").animate({left:`0px`},1000)
   }
})
































})