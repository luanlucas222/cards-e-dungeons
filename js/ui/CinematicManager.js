/**
 * js/ui/CinematicManager.js
 * Gerenciador de Cinemáticas e Cutscenes Remotion-Style de "Cards e Dungeons".
 * Renderiza sequências com movimentação de câmera (Ken Burns), partículas de brasas incandescentes
 * e transições rúnicas antes do início da jornada e no confronto contra o Chefe Final.
 */

export class CinematicManager {
  /**
   * @param {Object} options
   * @param {HTMLElement} options.container Container da tela cinematográfica (#screen-cinematic)
   * @param {function} options.onComplete Callback executado ao terminar a cinemática
   */
  constructor({ container, onComplete }) {
    this.container = container;
    this.onComplete = onComplete;

    this.backdropEl = this.container.querySelector('.cinematic-backdrop');
    this.chapterTagEl = this.container.querySelector('.cinematic-chapter-tag');
    this.headlineEl = this.container.querySelector('.cinematic-headline');
    this.paragraphEl = this.container.querySelector('.cinematic-paragraph');
    this.btnSkip = this.container.querySelector('.btn-cinematic-skip');
    this.btnNext = this.container.querySelector('.btn-cinematic-next');
    this.canvas = this.container.querySelector('.cinematic-particles-canvas');

    this.particles = [];
    this.animFrameId = null;
    this.currentStep = 0;
    this.activeSequence = [];

    this._initCanvas();
    this._bindControls();
  }

  _initCanvas() {
    if (!this.canvas) return;
    this.ctx = this.canvas.getContext('2d');

    const resize = () => {
      this.canvas.width = window.innerWidth;
      this.canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', resize);
    resize();

    // Gera 45 partículas de brasas incandescentes
    for (let i = 0; i < 45; i++) {
      this.particles.push({
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        radius: Math.random() * 2.5 + 0.8,
        speedY: Math.random() * 1.2 + 0.4,
        speedX: (Math.random() - 0.5) * 0.8,
        opacity: Math.random() * 0.7 + 0.3,
        fadeSpeed: Math.random() * 0.01 + 0.005
      });
    }
  }

  _startParticles() {
    if (!this.ctx) return;

    const render = () => {
      this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

      this.particles.forEach(p => {
        p.y -= p.speedY;
        p.x += p.speedX;
        p.opacity += p.fadeSpeed;
        if (p.opacity > 0.95 || p.opacity < 0.2) p.fadeSpeed = -p.fadeSpeed;

        if (p.y < -10) {
          p.y = this.canvas.height + 10;
          p.x = Math.random() * this.canvas.width;
        }

        this.ctx.beginPath();
        this.ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        this.ctx.fillStyle = `rgba(255, ${Math.floor(130 + p.opacity * 90)}, 30, ${p.opacity})`;
        this.ctx.shadowBlur = 8;
        this.ctx.shadowColor = '#f39c12';
        this.ctx.fill();
      });

      this.animFrameId = requestAnimationFrame(render);
    };

    if (!this.animFrameId) {
      render();
    }
  }

  _stopParticles() {
    if (this.animFrameId) {
      cancelAnimationFrame(this.animFrameId);
      this.animFrameId = null;
    }
  }

  _bindControls() {
    if (this.btnSkip) {
      this.btnSkip.addEventListener('click', () => {
        this.finish();
      });
    }

    if (this.btnNext) {
      this.btnNext.addEventListener('click', () => {
        this.nextStep();
      });
    }
  }

  /**
   * Toca a Cinemática de Abertura da Jornada
   * @param {function} onDone Callback ao concluir
   */
  playIntro(onDone) {
    this.onComplete = onDone;
    this.activeSequence = [
      {
        backdrop: 'assets/backgrounds/catacombs.jpg',
        chapter: 'PRÓLOGO • AS PROFUNDEZAS ESQUECIDAS',
        headline: 'O CALABOUÇO DAS TREVAS',
        paragraph: 'Nas entranhas da terra, além dos salões dos reis esquecidos, repousa um labirinto forjado em sangue e magia ancestral. Nenhuma alma viva jamais retornou intacta.'
      },
      {
        backdrop: 'assets/backgrounds/dragon_lair.jpg',
        chapter: 'O DESPERTAR DO TIRANO',
        headline: 'A LENDA DO DRAGÃO',
        paragraph: 'Em seu trono de cinzas e ouro maldito, o Grande Dragão Tirano vigia as profundezas. Munido de suas cartas rúnicas e determinação inabalável, seu destino é desafiar as chamas!'
      }
    ];

    this.currentStep = 0;
    this.container.classList.add('active');
    this._startParticles();
    this._renderCurrentStep();
  }

  /**
   * Toca a Cinemática de Encontro com o Chefe do Ato
   * @param {function} onDone Callback ao concluir
   * @param {Object} [context] Contexto do chefe { enemy, act }
   */
  playBossEncounter(onDone, context = {}) {
    this.onComplete = onDone;
    const enemy = context.enemy || {};
    const act = context.act || (enemy.id === 'golem_guardiao' ? 1 : enemy.id === 'lich_rei' ? 2 : 3);

    let backdrop = 'assets/backgrounds/dragon_lair.jpg';
    let chapter = 'COVIL FINAL • ANDAR 10';
    let headline = 'O DRAGÃO TIRANO DESPERTA!';
    let paragraph = 'O chão treme com o rugido primal da fera de obsidiana. O ar se torna incandescente e as escamas do Dragão irradiam magma puro. Esta é a sua batalha definitiva!';

    if (enemy.id === 'golem_guardiao' || act === 1) {
      backdrop = 'assets/backgrounds/catacombs.jpg';
      chapter = 'ATO I • O DESPERTAR DO TITÃ';
      headline = 'O GOLEM GUARDIÃO SE ERGUE!';
      paragraph = 'O chão das catacumbas ancestrais estremece. Antigas runas azuis acendem no corpo de pedra sólida do titã guardião. Prepare-se para o teste decisivo!';
    } else if (enemy.id === 'lich_rei' || act === 2) {
      backdrop = 'assets/backgrounds/mines.jpg';
      chapter = 'ATO II • MINAS DA NECRÓPOLE';
      headline = 'O LICH REI REIVINDICA SUA ALMA!';
      paragraph = 'O ar congela instantaneamente. Esferas de fogo espectral e névoa da morte orbitam o cetro do Rei dos Mortos. Sua filactéria queima com poder sombrio!';
    }

    this.activeSequence = [
      {
        backdrop,
        chapter,
        headline,
        paragraph
      }
    ];

    this.currentStep = 0;
    this.container.classList.add('active');
    this._startParticles();

    if (typeof window !== 'undefined' && window.SoundFX) {
      window.SoundFX.playHeavyAttack();
    }

    this._renderCurrentStep();
  }

  _renderCurrentStep() {
    const data = this.activeSequence[this.currentStep];
    if (!data) {
      this.finish();
      return;
    }

    if (this.backdropEl) {
      this.backdropEl.style.backgroundImage = `url('${data.backdrop}')`;
    }
    if (this.chapterTagEl) this.chapterTagEl.textContent = data.chapter;
    if (this.headlineEl) this.headlineEl.textContent = data.headline;
    if (this.paragraphEl) this.paragraphEl.textContent = data.paragraph;

    if (this.btnNext) {
      const isLast = this.currentStep === this.activeSequence.length - 1;
      this.btnNext.textContent = isLast ? 'Adentrar o Calabouço ⚔️' : 'Continuar ➔';
    }
  }

  nextStep() {
    this.currentStep++;
    if (this.currentStep >= this.activeSequence.length) {
      this.finish();
    } else {
      this._renderCurrentStep();
    }
  }

  finish() {
    this._stopParticles();
    this.container.classList.remove('active');
    if (typeof window !== 'undefined' && window.SoundFX) {
      window.SoundFX.playButtonClick();
    }
    if (this.onComplete) {
      this.onComplete();
    }
  }
}
