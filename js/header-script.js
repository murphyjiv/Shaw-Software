$(window).scroll({previousTop: 0},
    function () {
    var currentTop = $(window).scrollTop();
    if (currentTop < this.previousTop ||
        currentTop == 0) {
        $("#navContainer").css({"top" : "0"});
    } else {
        $("#navContainer").css({"top" : "-400px"});
    }
    this.previousTop = currentTop;
});

window.addEventListener("scroll", function(){
  if(window.scrollY < 3){
   $("#navContainer").css({"background-color" : "transparent"});
  } else {
    $("#navContainer").css({"background-color" : "#2A3442"});
  }
});
