//Marking a To-do Done
$("ul").on("click","li",function()
{  
   $(this).toggleClass("completed");
});

//deleting a To-do
$("ul").on("click","span",function(event)
{
  $(this).parent().fadeOut(1000,function()
  {
     $(this).remove();
  });
  event.stopPropagation();
});

//adding a To-do

$("input[type='text']").on("keypress",function(event)
{
    if(event.which === 13)
    {
      var textInput = $(this).val();
      $(this).val("");
     $("ul").append("<li><span><i class='fas fa-trash'></i></span> " + textInput + "</li>");
   }
});

//toggling the form

$(".fa-plus-square").on("click",function()
{
    $("input[type='text']").fadeToggle(500);
})