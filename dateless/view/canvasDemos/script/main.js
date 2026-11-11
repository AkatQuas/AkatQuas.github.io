var htmlData = [
    {link : "roundedRect.html", title : "basic 1 -> draw a rectangle with rounded corner"},
    {link : "canvaspro.html", title : "basic 2 -> a pro tutorials on canvas"},
    {link : "gravity.html", title : "basic 3 -> gravity on canvas"},
    {link : "collision.html", title : "basic 4 -> collision detection on canvas"},
    {link : "snakes.html", title : "basic 5 -> snakes on canvas"},
    {link : "grids.html", title : "basic 6 -> opacity and columns"}

];
var app = new Vue({
    el : '#mainApp',
    data : {
        list : htmlData
    }
});