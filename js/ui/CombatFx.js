/**
 * js/ui/CombatFx.js
 * Motor de Efeitos Visuais de Combate (Combat FX) em Canvas 2D a 60fps.
 * Renderiza cortes de espada com feixes e faíscas, explosões de chamas,
 * ondas de choque de escudo, borbulhas de veneno ácido e estrelas de cura.
 */

export class CombatFx {
  /**
   * @param {Object} options
   * @param {HTMLCanvasElement} options.canvas
   * @param {HTMLElement} options.stageContainer
   */
  constructor({ canvas, stageContainer }) {
    this.canvas = canvas;
    this.stage = stageContainer;
    this.ctx = canvas ? canvas.getContext('2d') : null;

    this.particles = [];
    this.slashes = [];
    this.shockwaves = [];
    this.isRunning = false;
    this.rafId = null;

    this._resizeHandler = () => this.resize();
    window.addEventListener('resize', this._resizeHandler);
    this.resize();
  }

  resize() {
    if (!this.canvas || !this.stage) return;
    const rect = this.stage.getBoundingClientRect();
    if (rect.width > 0 && rect.height > 0) {
      this.width = rect.width;
      this.height = rect.height;
      this.canvas.width = rect.width;
      this.canvas.height = rect.height;
    }
  }

  /**
   * Retorna as coordenadas centrais de um elemento relativas ao canvas
   */
  getTargetCenter(targetEl) {
    if (!targetEl || !this.canvas) {
      return { x: (this.width || 600) * 0.5, y: (this.height || 400) * 0.5 };
    }
    const targetRect = targetEl.getBoundingClientRect();
    const stageRect = this.canvas.getBoundingClientRect();
    return {
      x: targetRect.left - stageRect.left + targetRect.width * 0.5,
      y: targetRect.top - stageRect.top + targetRect.height * 0.5
    };
  }

  /**
   * 1. ARCO DE CORTE DE LÂMINA (Slash Arc FX)
   * @param {HTMLElement} targetEl
   * @param {Object} [options]
   */
  triggerSlash(targetEl, options = {}) {
    const center = this.getTargetCenter(targetEl);
    const multi = options.multi || 1;
    const isHeavy = options.heavy || false;
    const baseColor = options.color || (isHeavy ? '#f87171' : '#fef08a');
    const glowColor = options.glow || (isHeavy ? '#dc2626' : '#eab308');

    for (let i = 0; i < multi; i++) {
      setTimeout(() => {
        const angle = options.angle !== undefined
          ? options.angle
          : (i % 2 === 0 ? -35 + (Math.random() * 10 - 5) : 40 + (Math.random() * 10 - 5));

        const length = isHeavy ? 180 : 130;
        const rad = (angle * Math.PI) / 180;
        const perpRad = rad + Math.PI / 2;

        const startX = center.x - Math.cos(rad) * (length * 0.5);
        const startY = center.y - Math.sin(rad) * (length * 0.5);
        const endX = center.x + Math.cos(rad) * (length * 0.5);
        const endY = center.y + Math.sin(rad) * (length * 0.5);
        const curveOffset = (Math.random() > 0.5 ? 1 : -1) * (isHeavy ? 35 : 24);

        const ctrlX = center.x + Math.cos(perpRad) * curveOffset;
        const ctrlY = center.y + Math.sin(perpRad) * curveOffset;

        this.slashes.push({
          startX,
          startY,
          endX,
          endY,
          ctrlX,
          ctrlY,
          progress: 0,
          speed: isHeavy ? 0.08 : 0.12,
          life: 1.0,
          fadeSpeed: isHeavy ? 0.045 : 0.065,
          color: baseColor,
          glow: glowColor,
          lineWidth: isHeavy ? 9 : 6
        });

        // Faíscas metálicas de impacto
        const sparkCount = isHeavy ? 24 : 14;
        for (let s = 0; s < sparkCount; s++) {
          const spAngle = rad + (Math.random() * 1.8 - 0.9);
          const spSpeed = 3 + Math.random() * (isHeavy ? 9 : 6);
          this.particles.push({
            type: 'spark',
            x: center.x + (Math.random() * 20 - 10),
            y: center.y + (Math.random() * 20 - 10),
            vx: Math.cos(spAngle) * spSpeed,
            vy: Math.sin(spAngle) * spSpeed,
            life: 1.0,
            fadeSpeed: 0.035 + Math.random() * 0.04,
            size: 2 + Math.random() * 3,
            color: Math.random() > 0.3 ? baseColor : '#ffffff'
          });
        }

        this._startLoop();
      }, i * 90);
    }
  }

  /**
   * 2. EXPLOSÃO DE FOGO & BRASAS (Flame Burst FX)
   * @param {HTMLElement} targetEl
   * @param {Object} [options]
   */
  triggerFlame(targetEl, options = {}) {
    const center = this.getTargetCenter(targetEl);
    const count = options.count || 32;

    // Núcleo de flash de calor inicial
    this.shockwaves.push({
      x: center.x,
      y: center.y,
      radius: 10,
      maxRadius: 75,
      speed: 5,
      lineWidth: 8,
      color: 'rgba(255, 120, 0, ',
      life: 1.0,
      fadeSpeed: 0.06
    });

    const fireColors = ['#ffffff', '#ffea00', '#ff9100', '#ff3d00', '#dd2c00'];

    for (let i = 0; i < count; i++) {
      const angle = Math.random() * Math.PI * 2;
      const speed = 2 + Math.random() * 7;
      this.particles.push({
        type: 'flame',
        x: center.x + (Math.random() * 24 - 12),
        y: center.y + (Math.random() * 24 - 12),
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed - 1.2, // Levitação ascendente
        life: 1.0,
        fadeSpeed: 0.025 + Math.random() * 0.035,
        size: 5 + Math.random() * 9,
        colorIndex: 0,
        colors: fireColors,
        decay: 0.94
      });
    }

    this._startLoop();
  }

  /**
   * 3. ONDA DE CHOQUE DE ESCUDO / ARMADURA (Shield Shockwave FX)
   * @param {HTMLElement} targetEl
   * @param {Object} [options]
   */
  triggerShield(targetEl, options = {}) {
    const center = this.getTargetCenter(targetEl);
    const color = options.color || 'rgba(56, 189, 248, '; // Ciano safira luminoso

    // Duas ondas concêntricas
    this.shockwaves.push({
      x: center.x,
      y: center.y,
      radius: 20,
      maxRadius: 110,
      speed: 4.8,
      lineWidth: 5,
      color: color,
      life: 1.0,
      fadeSpeed: 0.04
    });

    setTimeout(() => {
      this.shockwaves.push({
        x: center.x,
        y: center.y,
        radius: 15,
        maxRadius: 90,
        speed: 3.8,
        lineWidth: 3.5,
        color: 'rgba(255, 255, 255, ',
        life: 0.9,
        fadeSpeed: 0.045
      });
    }, 80);

    // Partículas místicas de runas defensivas
    for (let i = 0; i < 18; i++) {
      const angle = (i / 18) * Math.PI * 2;
      const dist = 40 + Math.random() * 20;
      this.particles.push({
        type: 'rune_shard',
        x: center.x + Math.cos(angle) * dist,
        y: center.y + Math.sin(angle) * dist,
        vx: Math.cos(angle) * 1.5,
        vy: Math.sin(angle) * 1.5 - 1.0,
        life: 1.0,
        fadeSpeed: 0.03 + Math.random() * 0.02,
        size: 3 + Math.random() * 3,
        color: '#67e8f9'
      });
    }

    this._startLoop();
  }

  /**
   * 4. GOTÍCULAS & BORBULHAS DE VENENO ÁCIDO (Poison Bubbles FX)
   * @param {HTMLElement} targetEl
   * @param {Object} [options]
   */
  triggerPoison(targetEl, options = {}) {
    const center = this.getTargetCenter(targetEl);
    const count = options.count || 22;
    const poisonColors = ['#10b981', '#34d399', '#a3e635', '#a855f7'];

    for (let i = 0; i < count; i++) {
      const offsetX = (Math.random() - 0.5) * 70;
      const offsetY = 30 + Math.random() * 30; // Começa da base
      const col = poisonColors[Math.floor(Math.random() * poisonColors.length)];

      this.particles.push({
        type: 'bubble',
        x: center.x + offsetX,
        y: center.y + offsetY,
        vx: (Math.random() - 0.5) * 1.2,
        vy: -(2.0 + Math.random() * 3.5), // Sobe rápido
        wobbleSpeed: 0.1 + Math.random() * 0.15,
        wobblePhase: Math.random() * Math.PI * 2,
        life: 1.0,
        fadeSpeed: 0.025 + Math.random() * 0.02,
        size: 4 + Math.random() * 6,
        color: col
      });
    }

    this._startLoop();
  }

  /**
   * 5. ESTRELAS E BRILHOS DE CURA (Heal Sparks FX)
   * @param {HTMLElement} targetEl
   */
  triggerHeal(targetEl) {
    const center = this.getTargetCenter(targetEl);
    const count = 20;

    for (let i = 0; i < count; i++) {
      const offsetX = (Math.random() - 0.5) * 60;
      const offsetY = 20 + Math.random() * 30;
      this.particles.push({
        type: 'cross',
        x: center.x + offsetX,
        y: center.y + offsetY,
        vx: (Math.random() - 0.5) * 1.5,
        vy: -(1.5 + Math.random() * 2.8),
        life: 1.0,
        fadeSpeed: 0.025 + Math.random() * 0.02,
        size: 5 + Math.random() * 5,
        color: Math.random() > 0.4 ? '#4ade80' : '#fef08a'
      });
    }

    this._startLoop();
  }

  _startLoop() {
    if (this.isRunning) return;
    this.isRunning = true;
    this._loop();
  }

  _loop() {
    if (!this.isRunning) return;

    this._update();
    this._render();

    const hasSlashes = this.slashes.length > 0;
    const hasShockwaves = this.shockwaves.length > 0;
    const hasParticles = this.particles.length > 0;

    if (!hasSlashes && !hasShockwaves && !hasParticles) {
      this.isRunning = false;
      if (this.ctx) {
        this.ctx.clearRect(0, 0, this.width, this.height);
      }
      return;
    }

    this.rafId = requestAnimationFrame(() => this._loop());
  }

  _update() {
    // 1. Atualiza cortes
    for (let i = this.slashes.length - 1; i >= 0; i--) {
      const sl = this.slashes[i];
      if (sl.progress < 1.0) {
        sl.progress = Math.min(1.0, sl.progress + sl.speed);
      } else {
        sl.life -= sl.fadeSpeed;
        if (sl.life <= 0) {
          this.slashes.splice(i, 1);
        }
      }
    }

    // 2. Atualiza ondas de choque
    for (let i = this.shockwaves.length - 1; i >= 0; i--) {
      const sw = this.shockwaves[i];
      sw.radius += sw.speed;
      sw.life -= sw.fadeSpeed;
      if (sw.life <= 0 || sw.radius >= sw.maxRadius) {
        this.shockwaves.splice(i, 1);
      }
    }

    // 3. Atualiza partículas
    for (let i = this.particles.length - 1; i >= 0; i--) {
      const p = this.particles[i];
      p.x += p.vx;
      p.y += p.vy;

      if (p.type === 'flame') {
        p.vx *= p.decay;
        p.vy *= p.decay;
        p.size *= 0.96;
        // Altera cor gradualmente (do branco ao rubro)
        const cIdx = Math.min(p.colors.length - 1, Math.floor((1.0 - p.life) * p.colors.length));
        p.color = p.colors[cIdx];
      } else if (p.type === 'bubble') {
        p.wobblePhase += p.wobbleSpeed;
        p.x += Math.sin(p.wobblePhase) * 1.2;
      } else if (p.type === 'spark') {
        p.vx *= 0.94;
        p.vy *= 0.94;
        p.vy += 0.2; // Leve gravidade
      }

      p.life -= p.fadeSpeed;
      if (p.life <= 0 || p.size <= 0.5) {
        this.particles.splice(i, 1);
      }
    }
  }

  _render() {
    if (!this.ctx) return;
    this.ctx.clearRect(0, 0, this.width, this.height);

    // 1. Renderiza ondas de choque (Shield Wave)
    this.ctx.save();
    for (const sw of this.shockwaves) {
      this.ctx.beginPath();
      this.ctx.arc(sw.x, sw.y, sw.radius, 0, Math.PI * 2);
      this.ctx.strokeStyle = `${sw.color}${sw.life.toFixed(3)})`;
      this.ctx.lineWidth = sw.lineWidth * sw.life;
      this.ctx.shadowBlur = 12;
      this.ctx.shadowColor = '#38bdf8';
      this.ctx.stroke();
    }
    this.ctx.restore();

    // 2. Renderiza arcos de corte de lâmina (Slash Arcs)
    this.ctx.save();
    for (const sl of this.slashes) {
      if (sl.progress <= 0) continue;

      this.ctx.beginPath();
      this.ctx.moveTo(sl.startX, sl.startY);

      // Traçado quadrático parcial baseado no progresso
      const currentEndT = sl.progress;
      const currentCtrlX = sl.startX + (sl.ctrlX - sl.startX) * currentEndT;
      const currentCtrlY = sl.startY + (sl.ctrlY - sl.startY) * currentEndT;
      const currentEndX = sl.startX + (sl.endX - sl.startX) * currentEndT;
      const currentEndY = sl.startY + (sl.endY - sl.startY) * currentEndT;

      this.ctx.quadraticCurveTo(currentCtrlX, currentCtrlY, currentEndX, currentEndY);

      this.ctx.shadowBlur = 18;
      this.ctx.shadowColor = sl.glow;
      this.ctx.strokeStyle = sl.color;
      this.ctx.lineWidth = sl.lineWidth * sl.life;
      this.ctx.lineCap = 'round';
      this.ctx.globalAlpha = Math.max(0, sl.life);
      this.ctx.stroke();

      // Feixe central hiper-brilhante
      this.ctx.beginPath();
      this.ctx.moveTo(sl.startX, sl.startY);
      this.ctx.quadraticCurveTo(currentCtrlX, currentCtrlY, currentEndX, currentEndY);
      this.ctx.strokeStyle = '#ffffff';
      this.ctx.lineWidth = (sl.lineWidth * 0.4) * sl.life;
      this.ctx.stroke();
    }
    this.ctx.restore();

    // 3. Renderiza partículas
    this.ctx.save();
    for (const p of this.particles) {
      this.ctx.globalAlpha = Math.max(0, p.life);

      if (p.type === 'flame') {
        this.ctx.beginPath();
        this.ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        this.ctx.fillStyle = p.color;
        this.ctx.shadowBlur = 10;
        this.ctx.shadowColor = '#ff6b00';
        this.ctx.fill();
      } else if (p.type === 'bubble') {
        this.ctx.beginPath();
        this.ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        this.ctx.strokeStyle = p.color;
        this.ctx.lineWidth = 1.5;
        this.ctx.fillStyle = 'rgba(16, 185, 129, 0.2)';
        this.ctx.shadowBlur = 8;
        this.ctx.shadowColor = p.color;
        this.ctx.fill();
        this.ctx.stroke();

        // Ponto de luz da bolha
        this.ctx.beginPath();
        this.ctx.arc(p.x - p.size * 0.3, p.y - p.size * 0.3, p.size * 0.25, 0, Math.PI * 2);
        this.ctx.fillStyle = '#ffffff';
        this.ctx.fill();
      } else if (p.type === 'cross') {
        // Estrela de cura
        const s = p.size;
        this.ctx.strokeStyle = p.color;
        this.ctx.lineWidth = 2;
        this.ctx.beginPath();
        this.ctx.moveTo(p.x, p.y - s);
        this.ctx.lineTo(p.x, p.y + s);
        this.ctx.moveTo(p.x - s, p.y);
        this.ctx.lineTo(p.x + s, p.y);
        this.ctx.shadowBlur = 8;
        this.ctx.shadowColor = p.color;
        this.ctx.stroke();
      } else {
        // Faísca metálica ou fragmento rúnico
        this.ctx.beginPath();
        this.ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        this.ctx.fillStyle = p.color;
        this.ctx.shadowBlur = 6;
        this.ctx.shadowColor = p.color;
        this.ctx.fill();
      }
    }
    this.ctx.restore();
  }

  destroy() {
    window.removeEventListener('resize', this._resizeHandler);
    if (this.rafId) {
      cancelAnimationFrame(this.rafId);
    }
  }
}
