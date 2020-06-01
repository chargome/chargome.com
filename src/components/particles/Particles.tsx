import React from 'react';

// import './Particles';
type Particle = {
  vx: number;
  vy: number;
  x: number;
  y: number;
  ox: number;
  oy: number;
};

const Particles = () => {
  React.useEffect(() => {
    const screenWidth = window.innerWidth;
    const screenHeight = window.innerHeight;
    const SPACING = 70;
    const MARGIN = 20;
    const COLS = (screenWidth - MARGIN * 2) / SPACING;
    const ROWS = (screenHeight - MARGIN * 2) / SPACING;
    const NUM_PARTICLES = ROWS * COLS;
    const THICKNESS = 150 ** 2;
    const COLOR = 250;
    const DRAG = 0.95;
    const EASE = 0.25;

    /*

    used for sine approximation, but Math.sin in Chrome is still fast enough :)http://jsperf.com/math-sin-vs-sine-approximation

    B = 4 / Math.PI,
    C = -4 / Math.pow( Math.PI, 2 ),
    P = 0.225,

    */

    let container: HTMLElement | null;
    let canvas;
    let list: Particle[];
    let ctx: CanvasRenderingContext2D | null;
    let tog: boolean;
    let dx; let dy;
    let mx: number; let my: number;
    let d; let t; let f;
    let a; let b;
    let i; let n;
    let w: number; let h: number;
    let p;

    const particle: Particle = {
      vx: 0,
      ox: 0,
      vy: 0,
      oy: 0,
      x: 0,
      y: 0,
    };

    function init() {
      container = document.getElementById('particle-container');
      canvas = document.createElement('canvas');
      ctx = canvas.getContext('2d');
      tog = true;

      list = [];

      const calculatedWidth = COLS * SPACING + MARGIN * 2;
      const calculatedHeight = ROWS * SPACING + MARGIN * 2;
      w = calculatedWidth;
      h = calculatedHeight;
      canvas.width = calculatedWidth;
      canvas.height = calculatedHeight;

      for (i = 0; i < NUM_PARTICLES; i += 1) {
        const xSpace = MARGIN + SPACING * (i % COLS);
        const ySpace = MARGIN + SPACING * Math.floor(i / COLS);
        p = Object.create(particle);
        p.x = xSpace;
        p.ox = xSpace;
        p.y = ySpace;
        p.oy = ySpace;

        list[i] = p;
      }

      if (container) {
        // container.style.marginLeft = `${Math.round(w * -0.5)}px`;
        // container.style.marginTop = `${Math.round(h * -0.5)}px`;
        container.addEventListener('mousemove', (e) => {
          if (container) {
            const bounds = container.getBoundingClientRect();
            mx = e.clientX - bounds.left;
            my = e.clientY - bounds.top;
          }
        });
        container.appendChild(canvas);
      }
    }

    function step() {
      tog = !tog;
      if (tog) {
        for (i = 0; i < NUM_PARTICLES; i += 1) {
          p = list[i];

          d = (dx = mx - p.x) * dx + (dy = my - p.y) * dy;
          f = -THICKNESS / d;

          if (d < THICKNESS) {
            t = Math.atan2(dy, dx);
            p.vx += f * Math.cos(t);
            p.vy += f * Math.sin(t);
          }

          p.x += (p.vx *= DRAG) + (p.ox - p.x) * EASE;
          p.y += (p.vy *= DRAG) + (p.oy - p.y) * EASE;
        }
      } else if (ctx) {
        b = (a = ctx.createImageData(w, h)).data;
        for (i = 0; i < NUM_PARTICLES; i += 1) {
          p = list[i];
          // eslint-disable-next-line no-bitwise
          n = (~~p.x + (~~p.y * w)) * 4;
          b[n] = COLOR;
          b[n + 1] = COLOR;
          b[n + 2] = COLOR;
          b[n + 3] = 255;
        }

        ctx.putImageData(a, 0, 0);
      }
      requestAnimationFrame(step);
    }

    init();
    step();
  });

  return <div style={{ position: 'absolute', top: '0px' }} id="particle-container" />;
};

export default Particles;
