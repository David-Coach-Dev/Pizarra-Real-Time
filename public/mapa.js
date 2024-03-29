function init() {
  console.log('init');
  let mouse = {
    click: false,
    move: false,
    pos: { x: 0, y: 0 },
    pos_prev: false,
  };
  const canvas = document.getElementById('mapa');
  const context = canvas.getContext('2d');
  const width = window.innerWidth;
  const height = window.innerHeight;
  const socket = io();
  canvas.width = width;
  canvas.height = height;
  document.addEventListener('mousedown', (e) => {
    mouse.click = true;
  });
  document.addEventListener('mouseup', (e) => {
    mouse.click = false;
  });
  document.addEventListener('mousemove', (e) => {
    mouse.pos.x = e.clientX / width;
    mouse.pos.y = e.clientY / height;
    mouse.move = true;
  });
  socket.on('draw_line', (data) => {
    const line = data.line;
    context.beginPath();
    context.lineWidth = 2;
    context.lineCap = 'round';
    context.strokeStyle = '#000000';
    context.moveTo(line[0].x * width, line[0].y * height);
    context.lineTo(line[1].x * width, line[1].y * height);
    context.stroke();
  });
    
  function mainLoop(){
    if (mouse.click && mouse.move && mouse.pos_prev) {
      socket.emit('draw_line', { line: [mouse.pos, mouse.pos_prev] });
      mouse.move = false;
    }
    mouse.pos_prev = { x: mouse.pos.x, y: mouse.pos.y };
    setTimeout(mainLoop, 25);
  }
  mainLoop();
}
document.addEventListener('DOMContentLoaded',init)