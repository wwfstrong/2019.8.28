var box = my$("box");
var smallBox = box.children[0];
var bigBox = box.children[1];

var smallImage = smallBox.children[0];
var mask = smallBox.children[1];
var bigImage = bigBox.children[0];

box.onmouseover = function() {
  mask.style.display = "block";
  bigBox.style.display = "block";
};
box.onmouseout = function() {
  mask.style.display = "none";
  bigBox.style.display = "none";
};

box.onmousemove = function(e) {
  e = e || window.event;
  var maskX = getPage(e).pageX - box.offsetLeft;
  var maskY = getPage(e).pageY - box.offsetTop;

  maskX = maskX - mask.offsetWidth / 2;
  maskY = maskY - mask.offsetHeight / 2;

  maskX = maskX < 0 ? 0 : maskX;
  maskY = maskY < 0 ? 0 : maskY;

  maskX =
    maskX > box.offsetWidth - mask.offsetWidth
      ? box.offsetWidth - mask.offsetWidth
      : maskX;
  maskY =
    maskY > box.offsetHeight - mask.offsetHeight
      ? box.offsetHeight - mask.offsetHeight
      : maskY;

  mask.style.left = maskX + "px";
  mask.style.top = maskY + "px";

  var maskMax = box.offsetWidth - mask.offsetWidth;

  var bigImageMax = bigImage.offsetWidth - bigBox.offsetWidth;

  var bigImageX = (maskX * bigImageMax) / maskMax;
  var bigImageY = (maskY * bigImageMax) / maskMax;

  bigImage.style.left = -bigImageX + "px";
  bigImage.style.top = -bigImageY + "px";
};
