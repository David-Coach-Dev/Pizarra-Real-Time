function init() {
  console.log('init');
  let mouse = {
    click: false,
    move: false,
    pos: { x: 0, y: 0 },
    pos_prev: false,
  };

  //Canvas
  const canvas = document.getEventById('mapa');
  const context = canvas.getContext('2d');
  const width = window.innerWidth;
  const height = window.innerHeight;
  canvas.width = width;
  canvas.height = height;

  document.addEventListener('mousedown', (e) => {
    mouse.click = true;
    console.log(mouse);
  });
  
  document.addEventListener('mouseup', (e) => {
    mouse.click = false;
    console.log(mouse);
  });
  
  document.addEventListener('mousemove', (e) => {
    mouse.pos.x = e.clientX / width;
    mouse.pos.y = e.clientY / height;
    mouse.move = true;
  });

} 
document.addEventListener('DOMContentLoaded',init)