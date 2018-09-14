var work = document.getElementById("work");
var news = document.getElementById("news");
var bio = document.getElementById("bio");
var contact= document.getElementById("contact");
  
function scrollBy(distance, duration) {

    var baseY = (window.pageYOffset + distance)/2;
    var difference = window.pageYOffset - baseY;
    var startTime = performance.now();

    function step() {
        var normalizedTime = (performance.now() - startTime) / duration;
        if (normalizedTime > 1) normalizedTime = 1;

        window.scrollTo(0, baseY + difference * Math.cos(normalizedTime * Math.PI));
        if (normalizedTime < 1) window.requestAnimationFrame(step);
    }
    window.requestAnimationFrame(step);
}

work.onclick = function(){
    scrollBy(600,1000);
}
bio.onclick = function(){
    scrollBy(2800,2000);
}
contact.onclick = function(){
    scrollBy(3400,2000);
}