function onload() {
  var c = document.getElementById("canvas").getContext('2d');

  c.fillStyle = '#f3f377';
  c.fillRect(20, 20, 500 - 40, 300 - 40);

  c.fillStyle = '#ff9900';
  c.fillRect(96, 46, 308, 208);

  c.fillStyle = '#ff0000';
  c.fillRect(100, 50, 100, 200);

  c.fillStyle = '#ffffff';
  c.fillRect(200, 50, 100, 200);

  c.fillStyle = '#0000ff';
  c.fillRect(300, 50, 100, 200);
}
