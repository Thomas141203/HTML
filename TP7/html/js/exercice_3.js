function cal() {
  // init
  var res = document.getElementById("res");
  var ctx = document.getElementById("canvas").getContext('2d');
  var maxw = document.getElementById("canvas").width;
  var maxh = document.getElementById("canvas").height;
  var a = -1;
  var b = -1;
  var w = 1;
  var h = 1;
  var sbex = 10;
  var sbey = 10;
  var mx = 50;
  var my = 50;
  var tx = 0;
  var ty = 0;
  var i = 0;
  var j = 0;
  var k = 0;
  var da = 0;
  var db = 0;
  var dc = 0;

  // input
  while (a < 0 || a > 99 || a == null) {
    a = parseInt(window.prompt("Entrez a (0~99) :"));
  }
  while (b < 0 || b > 99 || b == null) {
    b = parseInt(window.prompt("Entrez b (0~99) :"));
  }

  // draw
  ctx.clearRect(0, 0, maxw, maxh);
  ctx.fillStyle = '#000000';

  // lines
  // a
  tx = mx;
  j = 0;
  for (i = a; i >= 10; i -= 10) {
    ctx.fillRect(tx + (j * w) + ((j - 1) * sbex), 0, w, maxh);
    j += 1;
  }
  tx += (8 * sbex) + (9 * w) + (2 * mx);
  j = 0;
  for (i = a % 10; i >= 1; i -= 1) {
    ctx.fillRect(tx + (j * w) + ((j - 1) * sbex), 0, w, maxh);
    j += 1;
  }
  // b
  ty = my;
  j = 0;
  for (i = b; i >= 10; i -= 10) {
    ctx.fillRect(0, ty + (j * h) + ((j - 1) * sbey), maxw, h);
    j += 1;
  }
  ty += (8 * sbey) + (9 * h) + (2 * my);
  j = 0;
  for (i = b % 10; i >= 1; i -= 1) {
    ctx.fillRect(0, ty + (j * h) + ((j - 1) * sbey), maxw, h);
    j += 1;
  }

  // dots
  tx = mx;
  ty = my;
  k = 0;
  for (i = a; i >= 10; i -= 10) {
    for (j = b; j >= 10; j -= 10) {
      ctx.beginPath();
      ctx.arc(tx + (k * w) + ((k - 1) * sbex), ty + (k * h) + ((k - 1) * sbey), w + h, 0, 2 * Math.PI);
      ctx.fill();
      ctx.closePath();
    }
    k += 1;
  }


  // output
  res.innerHTML = a + " x " + b + " = " + (a * b);
}
