var canvas = document.getElementById("slicer");
var ctx = canvas.getContext("2d");

var img = new Image();
img.onload = function() {
    canvas.width = img.width;
    canvas.height = img.height;
    ctx.drawImage(img, 0, 0, img.width, img.height);
};
img.src = 'test.jpg';

canvas.addEventListener('mousemove', function(e) {
	var y = e.layerY * (canvas.height / canvas.clientHeight);

	ctx.drawImage(img, 0, 0, img.width, img.height);

    var imgData = ctx.getImageData(0, y, img.width, 1);

    for (var i = 0; i < y; i++) {
        ctx.putImageData(imgData, 0, i);
    }
});
