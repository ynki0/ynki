(() => {
  let active = false;
  const size = 20, rows = 20, cols = 20;
  let snake, dir, food, timer;
  let lastKeyTime = 0;          

  function makeCanvas() {
    const overlay = document.createElement("div");
    overlay.id = "snake-overlay";
    overlay.innerHTML = `<canvas id="snake-canvas" width="${cols*size}" height="${rows*size}"></canvas>
      <button id="snake-close">✕</button>`;
    document.body.appendChild(overlay);
    document.getElementById("snake-close").onclick = stop;
  }

  function start() {
    if (active) return;
    active = true;
    makeCanvas();
    const ctx = document.getElementById("snake-canvas").getContext("2d");
    snake = [{x:10,y:10}];
    dir = {x:1,y:0};
    food = {x:Math.floor(Math.random()*cols),y:Math.floor(Math.random()*rows)};
    timer = setInterval(()=>update(ctx),120);
    document.addEventListener("keydown", keyHandler);
  }

  function stop() {
    active = false;
    clearInterval(timer);
    document.removeEventListener("keydown", keyHandler);
    document.getElementById("snake-overlay")?.remove();
  }

  function keyHandler(e) {
    const k = e.key;
    if(k==="ArrowUp" && dir.y===0) dir={x:0,y:-1};
    else if(k==="ArrowDown" && dir.y===0) dir={x:0,y:1};
    else if(k==="ArrowLeft" && dir.x===0) dir={x:-1,y:0};
    else if(k==="ArrowRight" && dir.x===0) dir={x:1,y:0};
    else if(k==="Escape") stop();
  }

  function update(ctx) {
    const head = {x:(snake[0].x+dir.x+cols)%cols, y:(snake[0].y+dir.y+rows)%rows};
    if(snake.some(s=>s.x===head.x && s.y===head.y)){ stop(); return; }
    snake.unshift(head);
    if(head.x===food.x && head.y===food.y)
      food={x:Math.floor(Math.random()*cols),y:Math.floor(Math.random()*rows)};
    else snake.pop();

    ctx.fillStyle="#111a";
    ctx.fillRect(0,0,cols*size,rows*size);
    ctx.fillStyle="#4ade80";
    snake.forEach(s=>ctx.fillRect(s.x*size,s.y*size,size-1,size-1));
    ctx.fillStyle="#ef4444";
    ctx.fillRect(food.x*size,food.y*size,size-1,size-1);
  }

  document.addEventListener("keydown", e => {
    if (e.key.toLowerCase() === "s") {
      const now = Date.now();
      if (now - lastKeyTime < 400) {  
        start();
      }
      lastKeyTime = now;
    }
  });


  window.snake = start;
})();
