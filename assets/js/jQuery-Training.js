$(".box").click(function() {
  window.location = $(this).find("a").attr("href"); 
  return false;
}); 

function ChangeItemAEvent()
{
    document.getElementById("ItemA").onmouseover = function() {ChangeColorBack(this.id)};
}