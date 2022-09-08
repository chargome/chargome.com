import React, { useRef } from 'react';

type Particle = {
  vx: number;
  vy: number;
  x: number;
  y: number;
  ox: number;
  oy: number;
};

interface Props {
  darkParticles: boolean;
}

const Particles = ({ darkParticles }: Props) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  React.useEffect(() => {
    const screenWidth = window.innerWidth;
    const screenHeight = window.innerHeight;
    const SPACING = 20;
    const MARGIN = 20;
    const COLS = (screenWidth - MARGIN * 2) / SPACING;
    const ROWS = (screenHeight - MARGIN * 2) / SPACING;
    const NUM_PARTICLES = ROWS * COLS;
    const THICKNESS = 80 ** 2;
    const COLOR = darkParticles ? 20 : 200;
    const DRAG = 0.95;
    const EASE = 0.25;
    const container = containerRef.current as HTMLDivElement;
    const canvas = canvasRef.current as HTMLCanvasElement;
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

    function setBounds(e: MouseEvent) {
      if (container) {
        const bounds = container.getBoundingClientRect();
        mx = e.clientX - bounds.left;
        my = e.clientY - bounds.top;
      }
    }

    function init() {
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
        container.addEventListener('mousemove', setBounds);
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

    return () => {
      container.removeEventListener('mousemove', setBounds, false);
    };
  }, [darkParticles]);

  return (
    <div ref={containerRef} style={{ position: 'absolute', top: '0px' }}>
      <canvas ref={canvasRef} />
    </div>
  );
};

export default Particles;
