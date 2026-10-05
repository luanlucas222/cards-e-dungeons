/**
 * CARDS E DUNGEONS - Procedural Web Audio API Synthesizer (audio.js)
 * Sintetizador sonoro 100% nativo em JavaScript.
 * Inclui Efeitos Sonoros (SFX) e Música Ambiente Procedural (Dungeon Drone).
 * Zero arquivos de áudio externos (.mp3/.wav) necessários!
 */

class SoundSynthesizer {
  constructor() {
    this.ctx = null;
    this.masterGain = null;
    this.musicGain = null;
    this.muted = false;
    this.volume = 0.5; // Volume SFX padrão 50%
    
    // Configurações da música ambiente
    this.musicVolume = 0.28;
    this.musicMuted = false;
    this.isMusicPlaying = false;
    this.musicNodes = [];
    this.musicTimeouts = [];
    this.musicInterval = null;
    
    // Tentar carregar preferências salvas
    try {
      if (typeof localStorage !== 'undefined') {
        const savedMute = localStorage.getItem('cards_dungeons_muted');
        if (savedMute !== null) {
          this.muted = savedMute === 'true';
        }
        const savedMusicMute = localStorage.getItem('cards_dungeons_music_muted');
        if (savedMusicMute !== null) {
          this.musicMuted = savedMusicMute === 'true';
        }
      }
    } catch (e) {
      // Ignora falhas de localStorage (ex: iframe sandboxed)
    }

    // Inicialização atrasada no primeiro clique para respeitar a política de autoplay
    this.boundUnlock = this.unlockAudio.bind(this);
    if (typeof window !== 'undefined') {
      window.addEventListener('click', this.boundUnlock, { once: false });
      window.addEventListener('keydown', this.boundUnlock, { once: false });
      window.addEventListener('touchstart', this.boundUnlock, { once: false });
    }
  }

  /**
   * Inicializa ou desbloqueia o AudioContext após interação do usuário
   */
  unlockAudio() {
    if (!this.ctx) {
      const AudioContextClass = typeof window !== 'undefined' ? (window.AudioContext || window.webkitAudioContext) : null;
      if (AudioContextClass) {
        this.ctx = new AudioContextClass();
        
        // Master Gain
        this.masterGain = this.ctx.createGain();
        this.masterGain.gain.setValueAtTime(this.muted ? 0 : this.volume, this.ctx.currentTime);
        this.masterGain.connect(this.ctx.destination);

        // Music Gain dedicado
        this.musicGain = this.ctx.createGain();
        this.musicGain.gain.setValueAtTime(this.musicMuted ? 0 : this.musicVolume, this.ctx.currentTime);
        this.musicGain.connect(this.masterGain);
      }
    }

    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  /**
   * Retorna o AudioContext garantindo que está ativo
   */
  getContext() {
    this.unlockAudio();
    return this.ctx;
  }

  // =========================================================================
  // CONTROLES DE VOLUME & MUDO
  // =========================================================================

  /**
   * Alterna mudo de todos os efeitos sonoros e música
   */
  toggleMute() {
    this.muted = !this.muted;
    try {
      if (typeof localStorage !== 'undefined') {
        localStorage.setItem('cards_dungeons_muted', this.muted);
      }
    } catch (e) {}

    if (this.masterGain && this.ctx) {
      this.masterGain.gain.setTargetAtTime(this.muted ? 0 : this.volume, this.ctx.currentTime, 0.03);
    }
    return this.muted;
  }

  isMuted() {
    return this.muted;
  }

  setVolume(val) {
    this.volume = Math.max(0, Math.min(1, val));
    if (this.masterGain && this.ctx && !this.muted) {
      this.masterGain.gain.setTargetAtTime(this.volume, this.ctx.currentTime, 0.03);
    }
  }

  /**
   * Alterna mudo especificamente da Música Ambiente
   */
  toggleMusic() {
    this.musicMuted = !this.musicMuted;
    try {
      if (typeof localStorage !== 'undefined') {
        localStorage.setItem('cards_dungeons_music_muted', this.musicMuted);
      }
    } catch (e) {}

    if (this.musicGain && this.ctx) {
      this.musicGain.gain.setTargetAtTime(this.musicMuted ? 0 : this.musicVolume, this.ctx.currentTime, 0.05);
    }
    return this.musicMuted;
  }

  isMusicMuted() {
    return this.musicMuted;
  }

  setMusicVolume(val) {
    this.musicVolume = Math.max(0, Math.min(1, val));
    if (this.musicGain && this.ctx && !this.musicMuted) {
      this.musicGain.gain.setTargetAtTime(this.musicVolume, this.ctx.currentTime, 0.05);
    }
  }

  /**
   * Utilitário para criar buffer de ruído branco (White Noise)
   */
  createNoiseBuffer(duration = 0.5) {
    if (!this.ctx) return null;
    const bufferSize = Math.floor(this.ctx.sampleRate * duration);
    const buffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
    const data = buffer.getChannelData(0);
    for (let i = 0; i < bufferSize; i++) {
      data[i] = Math.random() * 2 - 1;
    }
    return buffer;
  }

  // =========================================================================
  // MÚSICA AMBIENTE PROCEDURAL (DUNGEON DRONE & AMBIENT CHORDS)
  // =========================================================================

  /**
   * Inicia a trilha sonora medieval procedural de concentração (Dorian Drone, Alaúde Acústico & Pulso Tático)
   */
  startDungeonMusic() {
    const ctx = this.getContext();
    if (!ctx || this.isMusicPlaying) return;

    this.isMusicPlaying = true;
    this.musicNodes = [];
    this.musicTimeouts = [];
    const t = ctx.currentTime;

    // =========================================================================
    // CAMADA 1: BORDÃO DE CATEDRAL & DRONE ANALÓGICO COM RESPIRAÇÃO (D2 + A2 + Sub D1)
    // =========================================================================
    
    // 1. Oscilador Raiz Fundamental D2 (73.42 Hz) - Leve detune -3 cents para calor analógico
    const oscRootA = ctx.createOscillator();
    oscRootA.type = 'triangle';
    oscRootA.frequency.setValueAtTime(73.42, t);
    oscRootA.detune.setValueAtTime(-3, t);

    // 2. Oscilador Raiz Secundário D2 (73.42 Hz) - Leve detune +3 cents (abertura acústica estéreo-like)
    const oscRootB = ctx.createOscillator();
    oscRootB.type = 'sine';
    oscRootB.frequency.setValueAtTime(73.42, t);
    oscRootB.detune.setValueAtTime(3, t);

    // 3. Quinta Justa Medieval A2 (110.00 Hz) - Harmonia nobre
    const oscFifth = ctx.createOscillator();
    oscFifth.type = 'triangle';
    oscFifth.frequency.setValueAtTime(110.00, t);

    // 4. Sub-Grave Profundo D1 (36.71 Hz) - Peso cavernoso / fundações de pedra
    const oscSub = ctx.createOscillator();
    oscSub.type = 'sine';
    oscSub.frequency.setValueAtTime(36.71, t);

    // LFO de Respiração Orgânica da Masmorra (ciclo ultra lento de ~22s a 0.045 Hz)
    const lfo = ctx.createOscillator();
    lfo.type = 'sine';
    lfo.frequency.setValueAtTime(0.045, t);

    const lfoGain = ctx.createGain();
    lfoGain.gain.setValueAtTime(85, t); // Modula o filtro em +/- 85 Hz suavemente

    // Filtro Passa-Baixo Aveludado com Ressonância Suave
    const filter = ctx.createBiquadFilter();
    filter.type = 'lowpass';
    filter.frequency.setValueAtTime(220, t);
    filter.Q.setValueAtTime(2.2, t);

    lfo.connect(lfoGain);
    lfoGain.connect(filter.frequency);

    // Ganho Master do Drone com Fade-in Cinematográfico
    const droneGain = ctx.createGain();
    droneGain.gain.setValueAtTime(0.001, t);
    droneGain.gain.linearRampToValueAtTime(0.35, t + 3.5);

    oscRootA.connect(filter);
    oscRootB.connect(filter);
    oscFifth.connect(filter);
    oscSub.connect(filter);

    filter.connect(droneGain);
    droneGain.connect(this.musicGain);

    oscRootA.start(t);
    oscRootB.start(t);
    oscFifth.start(t);
    oscSub.start(t);
    lfo.start(t);

    this.musicNodes.push(oscRootA, oscRootB, oscFifth, oscSub, lfo, lfoGain, filter, droneGain);

    // =========================================================================
    // CAMADA 2: DEDILHADO PROCEDURAL DE ALAÚDE & HARPA MEDIEVAL (DORIAN FOCUS)
    // =========================================================================
    
    // Repertório de Motivos Modais Medievais em D Dorian / D Phrygian
    // Notas: D3(146.83), E3(164.81), F3(174.61), G3(196.00), A3(220.00), B3(246.94), C4(261.63), D4(293.66), E4(329.63), F4(349.23), A4(440.00)
    const medievalMotifs = [
      // Motivo I: Ecos das Criptas Ancestrais (Tristram/Diablo inspiration)
      [146.83, 220.00, 261.63, 293.66],
      // Motivo II: A Vigília do Bardo
      [110.00, 146.83, 174.61, 220.00, 196.00],
      // Motivo III: Luz nas Profundezas
      [174.61, 220.00, 293.66, 261.63, 220.00, 174.61],
      // Motivo IV: Balada do Peregrino
      [146.83, 196.00, 220.00, 261.63, 329.63, 293.66],
      // Motivo V: Concentração Heroica e Serenidade
      [146.83, 174.61, 220.00, 196.00, 146.83],
      // Motivo VI: Altar dos Antigos
      [220.00, 261.63, 293.66, 349.23, 329.63, 293.66]
    ];

    /**
     * Toca uma nota individual de alaúde com física acústica:
     * - Ataque de palheta/unha (mini transiente de ruído filtrado de 10ms)
     * - Corpo da corda esticada (oscilador triangle filtrado em passa-banda de alta ressonância Q=6.0)
     * - Decaimento harmônico natural e aveludado (1.8s a 3.0s)
     */
    const playLuteString = (freq, startTime, velocity = 1.0) => {
      if (!this.isMusicPlaying || !this.ctx) return;
      const c = this.ctx;
      const noteTime = startTime || c.currentTime;

      // 1. Transiente de impacto da unha/palheta na corda de tripa
      const pluckNoise = c.createBufferSource();
      pluckNoise.buffer = this.createNoiseBuffer(0.012);
      const pluckFilter = c.createBiquadFilter();
      pluckFilter.type = 'bandpass';
      pluckFilter.frequency.setValueAtTime(2400, noteTime);
      pluckFilter.Q.setValueAtTime(3.0, noteTime);

      const pluckGain = c.createGain();
      pluckGain.gain.setValueAtTime(0.05 * velocity, noteTime);
      pluckGain.gain.exponentialRampToValueAtTime(0.001, noteTime + 0.012);

      pluckNoise.connect(pluckFilter);
      pluckFilter.connect(pluckGain);
      pluckGain.connect(this.musicGain);

      pluckNoise.start(noteTime);
      pluckNoise.stop(noteTime + 0.014);

      // 2. Ressonância fundamental do corpo da corda
      const stringOsc = c.createOscillator();
      stringOsc.type = 'triangle';
      stringOsc.frequency.setValueAtTime(freq, noteTime);

      // 3. Harmônico sutil oitavado
      const overtoneOsc = c.createOscillator();
      overtoneOsc.type = 'sine';
      overtoneOsc.frequency.setValueAtTime(freq * 2, noteTime);

      // Filtro de caixa de ressonância de madeira do alaúde
      const bodyFilter = c.createBiquadFilter();
      bodyFilter.type = 'bandpass';
      bodyFilter.frequency.setValueAtTime(freq, noteTime);
      bodyFilter.Q.setValueAtTime(6.0, noteTime);

      const decayTime = Math.min(3.2, Math.max(1.8, 380 / freq));
      const stringGain = c.createGain();
      stringGain.gain.setValueAtTime(0.001, noteTime);
      stringGain.gain.linearRampToValueAtTime(0.24 * velocity, noteTime + 0.005);
      stringGain.gain.exponentialRampToValueAtTime(0.14 * velocity, noteTime + 0.06);
      stringGain.gain.exponentialRampToValueAtTime(0.0001, noteTime + decayTime);

      const overtoneGain = c.createGain();
      overtoneGain.gain.setValueAtTime(0.001, noteTime);
      overtoneGain.gain.linearRampToValueAtTime(0.06 * velocity, noteTime + 0.005);
      overtoneGain.gain.exponentialRampToValueAtTime(0.0001, noteTime + decayTime * 0.6);

      stringOsc.connect(bodyFilter);
      overtoneOsc.connect(bodyFilter);
      bodyFilter.connect(stringGain);
      stringGain.connect(this.musicGain);

      stringOsc.start(noteTime);
      overtoneOsc.start(noteTime);
      stringOsc.stop(noteTime + decayTime + 0.05);
      overtoneOsc.stop(noteTime + decayTime + 0.05);
    };

    // Agendador de Frases Medievais Humanizadas (Relaxamento & Concentração)
    let phraseIdx = 0;
    const scheduleNextPhrase = () => {
      if (!this.isMusicPlaying || !this.ctx) return;
      const motif = medievalMotifs[phraseIdx % medievalMotifs.length];
      phraseIdx++;

      const c = this.ctx;
      const baseT = c.currentTime + 0.1;

      // Executa o arpejo com cadência humana (320ms - 420ms por nota)
      motif.forEach((freq, idx) => {
        const humanDelay = idx * 0.36 + (Math.random() * 0.04 - 0.02);
        const velocity = 0.82 + Math.random() * 0.28;
        playLuteString(freq, baseT + humanDelay, velocity);
      });

      // Intervalo de silêncio reflexivo após a frase (4.5 a 6.5 segundos para foco profundo)
      const silenceDuration = 4500 + Math.random() * 2000;
      const timeoutId = setTimeout(scheduleNextPhrase, motif.length * 360 + silenceDuration);
      this.musicTimeouts.push(timeoutId);
    };

    // Primeiro dedilhado após 1.8 segundos
    const firstPhraseTimeout = setTimeout(scheduleNextPhrase, 1800);
    this.musicTimeouts.push(firstPhraseTimeout);

    // =========================================================================
    // CAMADA 3: PULSO RÍTMICO DE TAMBOR DE GUERRA TÁTICO / BODHRÁN
    // =========================================================================
    
    const playWarDrumPulse = () => {
      if (!this.isMusicPlaying || !this.ctx) return;
      const c = this.ctx;
      const drumT = c.currentTime;

      // Descida de pitch suave de tambor de couro (72Hz -> 34Hz)
      const drumOsc = c.createOscillator();
      drumOsc.type = 'sine';
      drumOsc.frequency.setValueAtTime(72, drumT);
      drumOsc.frequency.exponentialRampToValueAtTime(34, drumT + 0.32);

      const drumFilter = c.createBiquadFilter();
      drumFilter.type = 'lowpass';
      drumFilter.frequency.setValueAtTime(105, drumT);

      const drumGain = c.createGain();
      drumGain.gain.setValueAtTime(0.001, drumT);
      drumGain.gain.linearRampToValueAtTime(0.18, drumT + 0.015);
      drumGain.gain.exponentialRampToValueAtTime(0.0001, drumT + 0.65);

      drumOsc.connect(drumFilter);
      drumFilter.connect(drumGain);
      drumGain.connect(this.musicGain);

      drumOsc.start(drumT);
      drumOsc.stop(drumT + 0.7);
    };

    // Pulso a cada 3.8 segundos para ancorar foco tático de turnos
    const drumInterval = setInterval(playWarDrumPulse, 3800);
    this.musicTimeouts.push(drumInterval);
    this.musicInterval = drumInterval;
  }

  /**
   * Para a música ambiente procedural limpando todos os nós e timers
   */
  stopDungeonMusic() {
    if (!this.isMusicPlaying) return;
    this.isMusicPlaying = false;

    // Cancela todos os timers e intervalos agendados
    if (this.musicTimeouts && this.musicTimeouts.length > 0) {
      this.musicTimeouts.forEach(tId => {
        clearTimeout(tId);
        clearInterval(tId);
      });
      this.musicTimeouts = [];
    }
    if (this.musicInterval) {
      clearInterval(this.musicInterval);
      this.musicInterval = null;
    }

    if (this.musicNodes && this.musicNodes.length > 0) {
      const ctx = this.ctx;
      const now = ctx ? ctx.currentTime : 0;
      this.musicNodes.forEach(node => {
        try {
          if (node.gain && node.gain.linearRampToValueAtTime) {
            node.gain.setValueAtTime(node.gain.value, now);
            node.gain.linearRampToValueAtTime(0.0001, now + 0.25);
          }
          if (node.stop) {
            node.stop(now + 0.3);
          }
        } catch (e) {}
      });
      this.musicNodes = [];
    }
  }

  // =========================================================================
  // EFEITOS SONOROS PROCEDURAIS (SFX)
  // =========================================================================

  /**
   * 1. Som de Comprar Carta (Swoosh de papel / deslizar tátil)
   */
  playCardDraw() {
    const ctx = this.getContext();
    if (!ctx || this.muted) return;

    const t = ctx.currentTime;
    
    // Ruído filtrado simulando atrito de papel
    const noise = ctx.createBufferSource();
    noise.buffer = this.createNoiseBuffer(0.18);

    const filter = ctx.createBiquadFilter();
    filter.type = 'bandpass';
    filter.frequency.setValueAtTime(800, t);
    filter.frequency.exponentialRampToValueAtTime(2400, t + 0.15);
    filter.Q.value = 3.0;

    const gain = ctx.createGain();
    gain.gain.setValueAtTime(0.01, t);
    gain.gain.linearRampToValueAtTime(0.3, t + 0.04);
    gain.gain.exponentialRampToValueAtTime(0.001, t + 0.16);

    noise.connect(filter);
    filter.connect(gain);
    gain.connect(this.masterGain);

    noise.start(t);
    noise.stop(t + 0.18);
  }

  /**
   * 2. Som de Ataque Físico Normal com Crunch e Peso Tátil (playAttack)
   * Tripla Camada:
   * A) Sub Body Thump (155Hz -> 48Hz) - Dá a massa e peso físico do impacto.
   * B) Mid Crunch (Ruído filtrado em 850Hz Q=2.5) - Som crocante de fratura/couro/armadura.
   * C) Steel Bite (Oscilador metálico 1150Hz -> 420Hz + passa-banda) - Estalo cortante do aço.
   */
  playAttack() {
    const ctx = this.getContext();
    if (!ctx || this.muted) return;

    const t = ctx.currentTime;

    // Camada A: Massa e peso físico do impacto (Sub-thump encorpado)
    const bodyOsc = ctx.createOscillator();
    bodyOsc.type = 'triangle';
    bodyOsc.frequency.setValueAtTime(155, t);
    bodyOsc.frequency.exponentialRampToValueAtTime(46, t + 0.14);

    const bodyGain = ctx.createGain();
    bodyGain.gain.setValueAtTime(0.55, t);
    bodyGain.gain.exponentialRampToValueAtTime(0.001, t + 0.16);

    bodyOsc.connect(bodyGain);
    bodyGain.connect(this.masterGain);
    bodyOsc.start(t);
    bodyOsc.stop(t + 0.18);

    // Camada B: Crunch tátil visceral (Impacto de matéria/armadura)
    const crunchNoise = ctx.createBufferSource();
    crunchNoise.buffer = this.createNoiseBuffer(0.06);

    const crunchFilter = ctx.createBiquadFilter();
    crunchFilter.type = 'bandpass';
    crunchFilter.frequency.setValueAtTime(850, t);
    crunchFilter.frequency.exponentialRampToValueAtTime(320, t + 0.05);
    crunchFilter.Q.setValueAtTime(2.5, t);

    const crunchGain = ctx.createGain();
    crunchGain.gain.setValueAtTime(0.01, t);
    crunchGain.gain.linearRampToValueAtTime(0.42, t + 0.005);
    crunchGain.gain.exponentialRampToValueAtTime(0.001, t + 0.055);

    crunchNoise.connect(crunchFilter);
    crunchFilter.connect(crunchGain);
    crunchGain.connect(this.masterGain);
    crunchNoise.start(t);
    crunchNoise.stop(t + 0.065);

    // Camada C: Estalido de lâmina afiada mordendo o alvo
    const steelOsc = ctx.createOscillator();
    steelOsc.type = 'sawtooth';
    steelOsc.frequency.setValueAtTime(1150, t);
    steelOsc.frequency.exponentialRampToValueAtTime(420, t + 0.07);

    const steelFilter = ctx.createBiquadFilter();
    steelFilter.type = 'bandpass';
    steelFilter.frequency.setValueAtTime(1800, t);
    steelFilter.Q.setValueAtTime(3.0, t);

    const steelGain = ctx.createGain();
    steelGain.gain.setValueAtTime(0.28, t);
    steelGain.gain.exponentialRampToValueAtTime(0.001, t + 0.08);

    steelOsc.connect(steelFilter);
    steelFilter.connect(steelGain);
    steelGain.connect(this.masterGain);
    steelOsc.start(t);
    steelOsc.stop(t + 0.09);
  }

  /**
   * 3. Som de Ataque Pesado Titânico / Golpe Crítico Devastador (playHeavyAttack)
   * Tripla Camada:
   * A) Onda de Choque Sísmica (Sub 95Hz -> 26Hz em 0.5s) - Tremor visceral de chão.
   * B) Explosão de Crunch & Impacto Cavernoso (Sawtooth saturado 260Hz -> 52Hz + ruído).
   * C) Tensão de Aço e Ressonância de Bigorna (Harmônicos metálicos 440Hz / 880Hz).
   */
  playHeavyAttack() {
    const ctx = this.getContext();
    if (!ctx || this.muted) return;

    const t = ctx.currentTime;

    // Camada A: Onda de Choque Sísmica (Sub-grave profundo e poderoso)
    const subOsc = ctx.createOscillator();
    subOsc.type = 'sine';
    subOsc.frequency.setValueAtTime(95, t);
    subOsc.frequency.exponentialRampToValueAtTime(26, t + 0.5);

    const subFilter = ctx.createBiquadFilter();
    subFilter.type = 'lowpass';
    subFilter.frequency.setValueAtTime(140, t);

    const subGain = ctx.createGain();
    subGain.gain.setValueAtTime(0.9, t);
    subGain.gain.exponentialRampToValueAtTime(0.001, t + 0.52);

    subOsc.connect(subFilter);
    subFilter.connect(subGain);
    subGain.connect(this.masterGain);
    subOsc.start(t);
    subOsc.stop(t + 0.55);

    // Camada B: Esmagamento de armadura e corpo (Crunch visceral e estrondo)
    const crunchOsc = ctx.createOscillator();
    crunchOsc.type = 'sawtooth';
    crunchOsc.frequency.setValueAtTime(260, t);
    crunchOsc.frequency.exponentialRampToValueAtTime(52, t + 0.32);

    const crunchFilter = ctx.createBiquadFilter();
    crunchFilter.type = 'lowpass';
    crunchFilter.frequency.setValueAtTime(450, t);
    crunchFilter.frequency.exponentialRampToValueAtTime(80, t + 0.35);

    const crunchGain = ctx.createGain();
    crunchGain.gain.setValueAtTime(0.75, t);
    crunchGain.gain.exponentialRampToValueAtTime(0.001, t + 0.36);

    crunchOsc.connect(crunchFilter);
    crunchFilter.connect(crunchGain);
    crunchGain.connect(this.masterGain);
    crunchOsc.start(t);
    crunchOsc.stop(t + 0.38);

    // Ruído de impacto cavernoso
    const blastNoise = ctx.createBufferSource();
    blastNoise.buffer = this.createNoiseBuffer(0.38);

    const blastFilter = ctx.createBiquadFilter();
    blastFilter.type = 'lowpass';
    blastFilter.frequency.setValueAtTime(750, t);
    blastFilter.frequency.exponentialRampToValueAtTime(140, t + 0.35);

    const blastGain = ctx.createGain();
    blastGain.gain.setValueAtTime(0.65, t);
    blastGain.gain.exponentialRampToValueAtTime(0.001, t + 0.38);

    blastNoise.connect(blastFilter);
    blastFilter.connect(blastGain);
    blastGain.connect(this.masterGain);
    blastNoise.start(t);
    blastNoise.stop(t + 0.4);

    // Camada C: Ressonância Metálica de Bigorna / Choque de armas pesadas
    [440, 880].forEach((freq, idx) => {
      const ringOsc = ctx.createOscillator();
      ringOsc.type = 'sine';
      ringOsc.frequency.setValueAtTime(freq, t);

      const ringGain = ctx.createGain();
      ringGain.gain.setValueAtTime(0.22 / (idx + 1), t);
      ringGain.gain.exponentialRampToValueAtTime(0.001, t + 0.32);

      ringOsc.connect(ringGain);
      ringGain.connect(this.masterGain);
      ringOsc.start(t);
      ringOsc.stop(t + 0.34);
    });
  }

  /**
   * 4. Som de Escudo / Bloqueio com Broquel de Carvalho e Umbo de Ferro (playShield)
   * Tripla Camada:
   * A) Baque oco de madeira maciça (185Hz -> 58Hz).
   * B) Ressonância de umbo de ferro abafado (390Hz).
   * C) Deflexão de lâmina / atrito de aço (passa-banda 1250Hz).
   */
  playShield() {
    const ctx = this.getContext();
    if (!ctx || this.muted) return;

    const t = ctx.currentTime;

    // Camada A: Baque de carvalho maciço absorvendo o impacto
    const woodOsc = ctx.createOscillator();
    woodOsc.type = 'triangle';
    woodOsc.frequency.setValueAtTime(185, t);
    woodOsc.frequency.exponentialRampToValueAtTime(58, t + 0.16);

    const woodGain = ctx.createGain();
    woodGain.gain.setValueAtTime(0.55, t);
    woodGain.gain.exponentialRampToValueAtTime(0.001, t + 0.18);

    woodOsc.connect(woodGain);
    woodGain.connect(this.masterGain);
    woodOsc.start(t);
    woodOsc.stop(t + 0.2);

    // Camada B: Ressonância firme do umbo de ferro (sem agudos estridentes)
    const ironOsc = ctx.createOscillator();
    ironOsc.type = 'sine';
    ironOsc.frequency.setValueAtTime(390, t);
    ironOsc.frequency.exponentialRampToValueAtTime(180, t + 0.14);

    const ironFilter = ctx.createBiquadFilter();
    ironFilter.type = 'bandpass';
    ironFilter.frequency.setValueAtTime(390, t);
    ironFilter.Q.setValueAtTime(3.5, t);

    const ironGain = ctx.createGain();
    ironGain.gain.setValueAtTime(0.35, t);
    ironGain.gain.exponentialRampToValueAtTime(0.001, t + 0.15);

    ironOsc.connect(ironFilter);
    ironFilter.connect(ironGain);
    ironGain.connect(this.masterGain);
    ironOsc.start(t);
    ironOsc.stop(t + 0.17);

    // Camada C: Ruído de atrito e deflexão de lâmina
    const deflectNoise = ctx.createBufferSource();
    deflectNoise.buffer = this.createNoiseBuffer(0.05);

    const deflectFilter = ctx.createBiquadFilter();
    deflectFilter.type = 'bandpass';
    deflectFilter.frequency.setValueAtTime(1250, t);
    deflectFilter.Q.setValueAtTime(2.8, t);

    const deflectGain = ctx.createGain();
    deflectGain.gain.setValueAtTime(0.25, t);
    deflectGain.gain.exponentialRampToValueAtTime(0.001, t + 0.045);

    deflectNoise.connect(deflectFilter);
    deflectFilter.connect(deflectGain);
    deflectGain.connect(this.masterGain);
    deflectNoise.start(t);
    deflectNoise.stop(t + 0.055);
  }

  /**
   * 5. Som de Dano Recebido / Impacto no Herói (playDamage)
   * Impacto visceral no peito com compressão acústica e baque de armadura amassando.
   */
  playDamage() {
    const ctx = this.getContext();
    if (!ctx || this.muted) return;

    const t = ctx.currentTime;

    // Baque físico no corpo (145Hz -> 38Hz)
    const bodyOsc = ctx.createOscillator();
    bodyOsc.type = 'sawtooth';
    bodyOsc.frequency.setValueAtTime(145, t);
    bodyOsc.frequency.exponentialRampToValueAtTime(38, t + 0.22);

    const bodyFilter = ctx.createBiquadFilter();
    bodyFilter.type = 'lowpass';
    bodyFilter.frequency.setValueAtTime(360, t);

    const bodyGain = ctx.createGain();
    bodyGain.gain.setValueAtTime(0.72, t);
    bodyGain.gain.exponentialRampToValueAtTime(0.001, t + 0.24);

    bodyOsc.connect(bodyFilter);
    bodyFilter.connect(bodyGain);
    bodyGain.connect(this.masterGain);
    bodyOsc.start(t);
    bodyOsc.stop(t + 0.26);

    // Crunch abafado de armadura
    const crunchNoise = ctx.createBufferSource();
    crunchNoise.buffer = this.createNoiseBuffer(0.08);

    const crunchFilter = ctx.createBiquadFilter();
    crunchFilter.type = 'bandpass';
    crunchFilter.frequency.setValueAtTime(520, t);
    crunchFilter.Q.setValueAtTime(2.2, t);

    const crunchGain = ctx.createGain();
    crunchGain.gain.setValueAtTime(0.35, t);
    crunchGain.gain.exponentialRampToValueAtTime(0.001, t + 0.075);

    crunchNoise.connect(crunchFilter);
    crunchFilter.connect(crunchGain);
    crunchGain.connect(this.masterGain);
    crunchNoise.start(t);
    crunchNoise.stop(t + 0.085);
  }

  /**
   * 6. Som de Cura / Santuário (Ascensão mágica celestial)
   */
  playHeal() {
    const ctx = this.getContext();
    if (!ctx || this.muted) return;

    const notes = [261.63, 329.63, 392.00, 523.25, 659.25]; // C4, E4, G4, C5, E5
    const baseTime = ctx.currentTime;

    notes.forEach((freq, index) => {
      const t = baseTime + index * 0.08;
      const osc = ctx.createOscillator();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, t);

      const gain = ctx.createGain();
      gain.gain.setValueAtTime(0.001, t);
      gain.gain.linearRampToValueAtTime(0.25, t + 0.04);
      gain.gain.exponentialRampToValueAtTime(0.001, t + 0.35);

      osc.connect(gain);
      gain.connect(this.masterGain);

      osc.start(t);
      osc.stop(t + 0.4);
    });
  }

  /**
   * 7. Som de Clique Rúnico / Botão de Interface
   */
  playButtonClick() {
    const ctx = this.getContext();
    if (!ctx || this.muted) return;

    const t = ctx.currentTime;

    const osc = ctx.createOscillator();
    osc.type = 'sine';
    osc.frequency.setValueAtTime(700, t);
    osc.frequency.exponentialRampToValueAtTime(350, t + 0.06);

    const gain = ctx.createGain();
    gain.gain.setValueAtTime(0.25, t);
    gain.gain.exponentialRampToValueAtTime(0.001, t + 0.06);

    osc.connect(gain);
    gain.connect(this.masterGain);

    osc.start(t);
    osc.stop(t + 0.07);
  }

  /**
   * 8. Som de Vitória Gloriosa (Fanfarra heroica sintetizada)
   */
  playVictory() {
    const ctx = this.getContext();
    if (!ctx || this.muted) return;

    const fanfareNotes = [
      { freq: 196.00, delay: 0.00, dur: 0.22 }, // G3
      { freq: 261.63, delay: 0.18, dur: 0.22 }, // C4
      { freq: 329.63, delay: 0.36, dur: 0.22 }, // E4
      { freq: 392.00, delay: 0.54, dur: 0.45 }, // G4
      { freq: 523.25, delay: 0.90, dur: 0.85 }  // C5 (Sustentado)
    ];

    const baseTime = ctx.currentTime;

    fanfareNotes.forEach(({ freq, delay, dur }) => {
      const t = baseTime + delay;

      const osc = ctx.createOscillator();
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(freq, t);

      if (dur > 0.5) {
        const vibrato = ctx.createOscillator();
        const vibratoGain = ctx.createGain();
        vibrato.frequency.value = 5;
        vibratoGain.gain.value = 4;
        vibrato.connect(vibratoGain);
        vibratoGain.connect(osc.frequency);
        vibrato.start(t + 0.2);
        vibrato.stop(t + dur);
      }

      const gain = ctx.createGain();
      gain.gain.setValueAtTime(0.01, t);
      gain.gain.linearRampToValueAtTime(0.35, t + 0.05);
      gain.gain.setValueAtTime(0.32, t + dur * 0.7);
      gain.gain.exponentialRampToValueAtTime(0.001, t + dur);

      osc.connect(gain);
      gain.connect(this.masterGain);

      osc.start(t);
      osc.stop(t + dur + 0.05);
    });
  }

  /**
   * 9. Som de Derrota (Acorde menor sombrio e descida fúnebre)
   */
  playDefeat() {
    const ctx = this.getContext();
    if (!ctx || this.muted) return;

    const defeatNotes = [
      { freq: 220.00, delay: 0.00, dur: 0.45 },
      { freq: 196.00, delay: 0.35, dur: 0.45 },
      { freq: 174.61, delay: 0.70, dur: 0.55 },
      { freq: 130.81, delay: 1.15, dur: 1.20 } // C3 grave ressonante
    ];

    const baseTime = ctx.currentTime;

    defeatNotes.forEach(({ freq, delay, dur }) => {
      const t = baseTime + delay;

      const osc = ctx.createOscillator();
      osc.type = 'sawtooth';
      osc.frequency.setValueAtTime(freq, t);

      const filter = ctx.createBiquadFilter();
      filter.type = 'lowpass';
      filter.frequency.setValueAtTime(450, t);
      filter.frequency.exponentialRampToValueAtTime(150, t + dur);

      const gain = ctx.createGain();
      gain.gain.setValueAtTime(0.01, t);
      gain.gain.linearRampToValueAtTime(0.3, t + 0.06);
      gain.gain.exponentialRampToValueAtTime(0.001, t + dur);

      osc.connect(filter);
      filter.connect(gain);
      gain.connect(this.masterGain);

      osc.start(t);
      osc.stop(t + dur + 0.05);
    });
  }

  // =========================================================================
  // NOVOS EFEITOS SONOROS (SPRINT 1)
  // =========================================================================

  /**
   * 10. Som de Queimadura / Fogo Crepitante (playBurn)
   */
  playBurn() {
    const ctx = this.getContext();
    if (!ctx || this.muted) return;

    const t = ctx.currentTime;

    // Ruído de fogo crepitante
    const noise = ctx.createBufferSource();
    noise.buffer = this.createNoiseBuffer(0.35);

    const filter = ctx.createBiquadFilter();
    filter.type = 'bandpass';
    filter.frequency.setValueAtTime(1200, t);
    filter.frequency.exponentialRampToValueAtTime(450, t + 0.3);
    filter.Q.setValueAtTime(4.0, t);

    const gain = ctx.createGain();
    gain.gain.setValueAtTime(0.01, t);
    gain.gain.linearRampToValueAtTime(0.4, t + 0.05);
    gain.gain.exponentialRampToValueAtTime(0.001, t + 0.32);

    noise.connect(filter);
    filter.connect(gain);
    gain.connect(this.masterGain);

    noise.start(t);
    noise.stop(t + 0.35);

    // Mini-estalidos crepitantes adicionais (estalos de brasas)
    for (let i = 0; i < 3; i++) {
      const popTime = t + 0.05 + i * 0.08;
      const popOsc = ctx.createOscillator();
      popOsc.type = 'sawtooth';
      popOsc.frequency.setValueAtTime(800 + Math.random() * 600, popTime);
      popOsc.frequency.exponentialRampToValueAtTime(200, popTime + 0.03);

      const popGain = ctx.createGain();
      popGain.gain.setValueAtTime(0.2, popTime);
      popGain.gain.exponentialRampToValueAtTime(0.001, popTime + 0.03);

      popOsc.connect(popGain);
      popGain.connect(this.masterGain);

      popOsc.start(popTime);
      popOsc.stop(popTime + 0.04);
    }
  }

  /**
   * 11. Som de Debuff / Fraqueza / Vulnerável (playDebuff)
   */
  playDebuff() {
    const ctx = this.getContext();
    if (!ctx || this.muted) return;

    const t = ctx.currentTime;

    // Glissando etéreo descendente
    const osc = ctx.createOscillator();
    osc.type = 'sawtooth';
    osc.frequency.setValueAtTime(440, t);
    osc.frequency.exponentialRampToValueAtTime(95, t + 0.35);

    const filter = ctx.createBiquadFilter();
    filter.type = 'lowpass';
    filter.frequency.setValueAtTime(650, t);
    filter.frequency.exponentialRampToValueAtTime(180, t + 0.35);

    const gain = ctx.createGain();
    gain.gain.setValueAtTime(0.01, t);
    gain.gain.linearRampToValueAtTime(0.35, t + 0.04);
    gain.gain.exponentialRampToValueAtTime(0.001, t + 0.38);

    osc.connect(filter);
    filter.connect(gain);
    gain.connect(this.masterGain);

    osc.start(t);
    osc.stop(t + 0.4);
  }

  /**
   * 12. Som de Buff / Aumento de Força (playBuff)
   */
  playBuff() {
    const ctx = this.getContext();
    if (!ctx || this.muted) return;

    const t = ctx.currentTime;

    // Ressonância ascendente e triunfante
    const osc1 = ctx.createOscillator();
    osc1.type = 'triangle';
    osc1.frequency.setValueAtTime(180, t);
    osc1.frequency.exponentialRampToValueAtTime(520, t + 0.3);

    const osc2 = ctx.createOscillator();
    osc2.type = 'sine';
    osc2.frequency.setValueAtTime(270, t);
    osc2.frequency.exponentialRampToValueAtTime(780, t + 0.3);

    const gain = ctx.createGain();
    gain.gain.setValueAtTime(0.01, t);
    gain.gain.linearRampToValueAtTime(0.4, t + 0.08);
    gain.gain.exponentialRampToValueAtTime(0.001, t + 0.36);

    osc1.connect(gain);
    osc2.connect(gain);
    gain.connect(this.masterGain);

    osc1.start(t);
    osc2.start(t);
    osc1.stop(t + 0.38);
    osc2.stop(t + 0.38);
  }

  /**
   * 13. Som de Relíquia Obtida (playRelicObtained)
   */
  playRelicObtained() {
    const ctx = this.getContext();
    if (!ctx || this.muted) return;

    const t = ctx.currentTime;

    // Arpejo místico brilhante: C5 -> E5 -> G5 -> C6
    const relicNotes = [523.25, 659.25, 783.99, 1046.50];

    relicNotes.forEach((freq, idx) => {
      const noteTime = t + idx * 0.09;

      const osc = ctx.createOscillator();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, noteTime);

      const gain = ctx.createGain();
      gain.gain.setValueAtTime(0.01, noteTime);
      gain.gain.linearRampToValueAtTime(0.35, noteTime + 0.03);
      gain.gain.exponentialRampToValueAtTime(0.001, noteTime + 0.55);

      osc.connect(gain);
      gain.connect(this.masterGain);

      osc.start(noteTime);
      osc.stop(noteTime + 0.6);
    });

    // Shimmer de sinos em alta frequência
    const chimeOsc = ctx.createOscillator();
    chimeOsc.type = 'triangle';
    chimeOsc.frequency.setValueAtTime(1567.98, t + 0.28); // G6
    chimeOsc.frequency.exponentialRampToValueAtTime(1318.51, t + 0.7);

    const chimeGain = ctx.createGain();
    chimeGain.gain.setValueAtTime(0.01, t + 0.28);
    chimeGain.gain.linearRampToValueAtTime(0.2, t + 0.32);
    chimeGain.gain.exponentialRampToValueAtTime(0.001, t + 0.75);

    chimeOsc.connect(chimeGain);
    chimeGain.connect(this.masterGain);

    chimeOsc.start(t + 0.28);
    chimeOsc.stop(t + 0.8);
  }

  /**
   * 14. Som de Moedas de Ouro Tilintando no Comércio (playCoins)
   */
  playCoins() {
    const ctx = this.getContext();
    if (!ctx || this.muted) return;

    const t = ctx.currentTime;
    const coinFrequencies = [2400, 3100, 2750, 3500];

    coinFrequencies.forEach((freq, idx) => {
      const dropTime = t + idx * 0.055;
      const osc = ctx.createOscillator();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, dropTime);
      osc.frequency.exponentialRampToValueAtTime(freq * 0.82, dropTime + 0.1);

      const gain = ctx.createGain();
      gain.gain.setValueAtTime(0.01, dropTime);
      gain.gain.linearRampToValueAtTime(0.25, dropTime + 0.01);
      gain.gain.exponentialRampToValueAtTime(0.001, dropTime + 0.14);

      osc.connect(gain);
      gain.connect(this.masterGain);

      osc.start(dropTime);
      osc.stop(dropTime + 0.15);
    });
  }

  /**
   * 15. Som de Consumir Poção Mágica (playPotion)
   * Sintetiza o destampar da rolha seguido de borbulhas mágicas ascendentes.
   */
  playPotion() {
    const ctx = this.getContext();
    if (!ctx || this.muted) return;

    const t = ctx.currentTime;

    // Pop de rolha (curto e ressonante)
    const popOsc = ctx.createOscillator();
    popOsc.type = 'sine';
    popOsc.frequency.setValueAtTime(450, t);
    popOsc.frequency.exponentialRampToValueAtTime(180, t + 0.06);

    const popGain = ctx.createGain();
    popGain.gain.setValueAtTime(0.3, t);
    popGain.gain.exponentialRampToValueAtTime(0.01, t + 0.06);

    popOsc.connect(popGain);
    popGain.connect(this.masterGain);
    popOsc.start(t);
    popOsc.stop(t + 0.07);

    // Borbulhas líquidas ascendentes
    const bubblePitches = [320, 480, 640, 880, 1100];
    bubblePitches.forEach((freq, i) => {
      const bTime = t + 0.05 + i * 0.045;
      const bOsc = ctx.createOscillator();
      bOsc.type = 'sine';
      bOsc.frequency.setValueAtTime(freq, bTime);
      bOsc.frequency.exponentialRampToValueAtTime(freq * 1.35, bTime + 0.06);

      const bGain = ctx.createGain();
      bGain.gain.setValueAtTime(0.01, bTime);
      bGain.gain.linearRampToValueAtTime(0.2, bTime + 0.02);
      bGain.gain.exponentialRampToValueAtTime(0.001, bTime + 0.07);

      bOsc.connect(bGain);
      bGain.connect(this.masterGain);
      bOsc.start(bTime);
      bOsc.stop(bTime + 0.08);
    });
  }

  /**
   * 16. Som de Evento Narrativo Misterioso (playMysteryEvent)
   * Acorde misterioso de gongo/carrilhão místico com ressonância profunda.
   */
  playMysteryEvent() {
    const ctx = this.getContext();
    if (!ctx || this.muted) return;

    const t = ctx.currentTime;
    const mysteryNotes = [220, 277.18, 329.63, 415.3]; // A - C# - E - G# (Lírico místico)

    mysteryNotes.forEach((freq, idx) => {
      const osc = ctx.createOscillator();
      osc.type = idx % 2 === 0 ? 'triangle' : 'sine';
      osc.frequency.setValueAtTime(freq, t);

      const gain = ctx.createGain();
      gain.gain.setValueAtTime(0.01, t);
      gain.gain.linearRampToValueAtTime(0.18 / (idx + 1), t + 0.1);
      gain.gain.exponentialRampToValueAtTime(0.001, t + 1.8);

      osc.connect(gain);
      gain.connect(this.masterGain);

      osc.start(t);
      osc.stop(t + 1.9);
    });
  }

  // =========================================================================
  // COMBAT FX & JUICE AUDIO (FASE 5)
  // =========================================================================

  /**
   * 17. Som de Corte de Lâmina Afiada (playSlash)
   * Voo rápido de aço no ar com estalido metálico cortante e deslocamento supersônico.
   */
  playSlash() {
    const ctx = this.getContext();
    if (!ctx || this.muted) return;

    const t = ctx.currentTime;

    // Sopro cortante do ar (White noise varrendo de 1500Hz -> 4200Hz -> 850Hz)
    const noise = ctx.createBufferSource();
    noise.buffer = this.createNoiseBuffer(0.14);

    const filter = ctx.createBiquadFilter();
    filter.type = 'bandpass';
    filter.frequency.setValueAtTime(1500, t);
    filter.frequency.exponentialRampToValueAtTime(4200, t + 0.05);
    filter.frequency.exponentialRampToValueAtTime(850, t + 0.13);
    filter.Q.setValueAtTime(4.0, t);

    const noiseGain = ctx.createGain();
    noiseGain.gain.setValueAtTime(0.01, t);
    noiseGain.gain.linearRampToValueAtTime(0.42, t + 0.02);
    noiseGain.gain.exponentialRampToValueAtTime(0.001, t + 0.135);

    noise.connect(filter);
    filter.connect(noiseGain);
    noiseGain.connect(this.masterGain);
    noise.start(t);
    noise.stop(t + 0.15);

    // Zunido metálico da lâmina afiada
    const ringOsc = ctx.createOscillator();
    ringOsc.type = 'triangle';
    ringOsc.frequency.setValueAtTime(1600, t);
    ringOsc.frequency.exponentialRampToValueAtTime(820, t + 0.11);

    const ringGain = ctx.createGain();
    ringGain.gain.setValueAtTime(0.26, t);
    ringGain.gain.exponentialRampToValueAtTime(0.001, t + 0.12);

    ringOsc.connect(ringGain);
    ringGain.connect(this.masterGain);
    ringOsc.start(t);
    ringOsc.stop(t + 0.14);

    // Micro-baque de corte
    const snapOsc = ctx.createOscillator();
    snapOsc.type = 'sine';
    snapOsc.frequency.setValueAtTime(240, t);
    snapOsc.frequency.exponentialRampToValueAtTime(75, t + 0.05);

    const snapGain = ctx.createGain();
    snapGain.gain.setValueAtTime(0.3, t);
    snapGain.gain.exponentialRampToValueAtTime(0.001, t + 0.05);

    snapOsc.connect(snapGain);
    snapGain.connect(this.masterGain);
    snapOsc.start(t);
    snapOsc.stop(t + 0.06);
  }

  /**
   * 18. Som de Corte Pesado / Clivagem Titânica (playHeavySlash)
   * Impacto de grande arma de duas mãos com deslocamento violento de ar e vibração de aço.
   */
  playHeavySlash() {
    const ctx = this.getContext();
    if (!ctx || this.muted) return;

    const t = ctx.currentTime;

    // Vórtice cortante de ar denso
    const noise = ctx.createBufferSource();
    noise.buffer = this.createNoiseBuffer(0.26);

    const filter = ctx.createBiquadFilter();
    filter.type = 'bandpass';
    filter.frequency.setValueAtTime(700, t);
    filter.frequency.exponentialRampToValueAtTime(2900, t + 0.08);
    filter.frequency.exponentialRampToValueAtTime(320, t + 0.24);
    filter.Q.setValueAtTime(3.0, t);

    const noiseGain = ctx.createGain();
    noiseGain.gain.setValueAtTime(0.01, t);
    noiseGain.gain.linearRampToValueAtTime(0.48, t + 0.03);
    noiseGain.gain.exponentialRampToValueAtTime(0.001, t + 0.25);

    noise.connect(filter);
    filter.connect(noiseGain);
    noiseGain.connect(this.masterGain);
    noise.start(t);
    noise.stop(t + 0.27);

    // Massa de impacto sub-grave
    const subOsc = ctx.createOscillator();
    subOsc.type = 'sawtooth';
    subOsc.frequency.setValueAtTime(135, t);
    subOsc.frequency.exponentialRampToValueAtTime(36, t + 0.3);

    const subFilter = ctx.createBiquadFilter();
    subFilter.type = 'lowpass';
    subFilter.frequency.setValueAtTime(260, t);

    const subGain = ctx.createGain();
    subGain.gain.setValueAtTime(0.65, t);
    subGain.gain.exponentialRampToValueAtTime(0.001, t + 0.32);

    subOsc.connect(subFilter);
    subFilter.connect(subGain);
    subGain.connect(this.masterGain);
    subOsc.start(t);
    subOsc.stop(t + 0.34);

    // Vibração oscilante de lâmina pesada de duas mãos (detuned)
    [520, 534].forEach(freq => {
      const ringOsc = ctx.createOscillator();
      ringOsc.type = 'sine';
      ringOsc.frequency.setValueAtTime(freq, t);

      const ringGain = ctx.createGain();
      ringGain.gain.setValueAtTime(0.2, t);
      ringGain.gain.exponentialRampToValueAtTime(0.001, t + 0.24);

      ringOsc.connect(ringGain);
      ringGain.connect(this.masterGain);
      ringOsc.start(t);
      ringOsc.stop(t + 0.26);
    });
  }

  /**
   * 19. Som de Onda de Choque de Escudo / Barreira Rúnica (playShieldWave)
   * Ressonância límpida de cristal protetor e gongo rúnico ancestral.
   */
  playShieldWave() {
    const ctx = this.getContext();
    if (!ctx || this.muted) return;

    const t = ctx.currentTime;
    // Acorde nobre rúnico: D3, A3, D4, F#4
    const chordFreqs = [146.83, 220.00, 293.66, 369.99];

    chordFreqs.forEach((freq, idx) => {
      const osc = ctx.createOscillator();
      osc.type = idx % 2 === 0 ? 'sine' : 'triangle';
      osc.frequency.setValueAtTime(freq, t);

      const gain = ctx.createGain();
      gain.gain.setValueAtTime(0.001, t);
      gain.gain.linearRampToValueAtTime(0.32 / (idx + 1), t + 0.03);
      gain.gain.exponentialRampToValueAtTime(0.0001, t + 0.58);

      osc.connect(gain);
      gain.connect(this.masterGain);

      osc.start(t);
      osc.stop(t + 0.62);
    });

    // Pulso sub-grave de barreira protetora
    const subOsc = ctx.createOscillator();
    subOsc.type = 'sine';
    subOsc.frequency.setValueAtTime(82, t);
    subOsc.frequency.exponentialRampToValueAtTime(40, t + 0.4);

    const subGain = ctx.createGain();
    subGain.gain.setValueAtTime(0.4, t);
    subGain.gain.exponentialRampToValueAtTime(0.001, t + 0.42);

    subOsc.connect(subGain);
    subGain.connect(this.masterGain);
    subOsc.start(t);
    subOsc.stop(t + 0.45);
  }

  /**
   * 20. Som de Borbulhas & Gotículas de Veneno (playPoisonBubble)
   * Estalidos líquidos orgânicos e efervescência ácida.
   */
  playPoisonBubble() {
    const ctx = this.getContext();
    if (!ctx || this.muted) return;

    const t = ctx.currentTime;

    // 4 micro-borbulhas em rápida sucessão
    for (let i = 0; i < 4; i++) {
      const bTime = t + i * 0.05;
      const startFreq = 280 + Math.random() * 200;
      const endFreq = startFreq + 240 + Math.random() * 150;

      const osc = ctx.createOscillator();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(startFreq, bTime);
      osc.frequency.exponentialRampToValueAtTime(endFreq, bTime + 0.04);

      const gain = ctx.createGain();
      gain.gain.setValueAtTime(0.01, bTime);
      gain.gain.linearRampToValueAtTime(0.2, bTime + 0.01);
      gain.gain.exponentialRampToValueAtTime(0.001, bTime + 0.045);

      osc.connect(gain);
      gain.connect(this.masterGain);

      osc.start(bTime);
      osc.stop(bTime + 0.05);
    }
  }

  /**
   * 21. Som de Rajada de Fogo & Brasas (playFireBurst)
   * Labareda flamejante com rugido de calor e estalos.
   */
  playFireBurst() {
    const ctx = this.getContext();
    if (!ctx || this.muted) return;

    this.playBurn();

    const t = ctx.currentTime;
    const roarOsc = ctx.createOscillator();
    roarOsc.type = 'triangle';
    roarOsc.frequency.setValueAtTime(180, t);
    roarOsc.frequency.exponentialRampToValueAtTime(65, t + 0.35);

    const roarFilter = ctx.createBiquadFilter();
    roarFilter.type = 'lowpass';
    roarFilter.frequency.setValueAtTime(350, t);

    const roarGain = ctx.createGain();
    roarGain.gain.setValueAtTime(0.3, t);
    roarGain.gain.exponentialRampToValueAtTime(0.001, t + 0.38);

    roarOsc.connect(roarFilter);
    roarFilter.connect(roarGain);
    roarGain.connect(this.masterGain);

    roarOsc.start(t);
    roarOsc.stop(t + 0.4);
  }
}

// Instância Singleton Global
const soundInstance = new SoundSynthesizer();
if (typeof window !== 'undefined') {
  window.SoundFX = soundInstance;
  window.AudioManager = soundInstance;
}
if (typeof globalThis !== 'undefined') {
  globalThis.SoundFX = soundInstance;
  globalThis.AudioManager = soundInstance;
}
if (typeof module !== 'undefined' && module.exports) {
  module.exports = soundInstance;
}
export default soundInstance;
export { SoundSynthesizer, soundInstance };
