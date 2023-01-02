$(document).ready(function() {
    var wid=screen.width-40;
    var hei=screen.height-100;
    $("#html").width((wid/2));
    $("#css").width((wid)/2);
    $("#js").width((wid)/3);
    $("#html").height((hei/2));
    $("#css").height((hei/2));
    $("#js").height((hei/2));
    $("#bht").click(function() {
        $("#dht").slideToggle(0.0000000000001);
    });
    $("#bcs").click(function() {
        $("#dcs").slideToggle(0.0000000000001);
    });
    $("#bjs").click(function() {
        $("#djs").slideToggle(0.0000000000001);
    });
    $("#bre").click(function() {
        $("#dre").slideToggle(0.0000000000001);
    });
});