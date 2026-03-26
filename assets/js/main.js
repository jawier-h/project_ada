/* ============================================================
   PROJECT ADA — MAIN JAVASCRIPT
   ============================================================
   KONFIGURASI: Edit bagian CONFIG di bawah ini untuk mengubah
   foto, teks, musik, dan konten lainnya.
   ============================================================ */

// ═══════════════════════════════════════════════════════════
//  ⚙️  AREA KONFIGURASI — EDIT DI SINI
// ═══════════════════════════════════════════════════════════

const CONFIG = {

  // ─── Info Umum ───
  namaSayang: "Sayang",           // Nama yang akan muncul di layar pembuka
  tanggalUltah: "26 Maret 2025",  // Tanggal ultah

  // ─── Screen 1: Welcome ───
  welcome: {
    hbd:     "Happy Birthday",
    tagline: "untukmu, dengan sepenuh hati 🌸"
  },

  // ─── Screen 2: Intro ───
  intro: {
    labelAtas: "sebuah persembahan kecil",
    judul:     "Mini\nScrapbook",
    subjudul:  "for your",
    // Teks di bawah judul
    keterangan: "Kumpulan momen kita yang selalu aku simpan di dalam hati ✨"
  },

  // ─── Screens 3-5: Foto ───
  // Letakkan foto di folder: assets/images/
  fotos: [
    {
      label:         "Foto 1",
      file:          "1.png",        // nama file di assets/images/
      captionAtas:   "Momen pertama...", // teks di atas foto
      captionBawah:  "Hari itu aku sadar, kamu spesial 💕"
    },
    {
      label:         "Foto 2",
      file:          "2.png",
      captionAtas:   "Selalu bersamamu...",
      captionBawah:  "Setiap momen bersamamu adalah kenangan 🌸"
    },
    {
      label:         "Foto 3",
      file:          "3.png",
      captionAtas:   "Dan selamanya...",
      captionBawah:  "Kamu adalah rumah yang selalu aku rindu 🏡"
    }
  ],

  // ─── CLIMAX Screen 1: Spotify ───
  spotify: {
    // Ganti dengan embed URL dari Spotify:
    // Buka Spotify → pilih lagu/playlist → Share → Embed → copy src URL
    embedUrl: "https://open.spotify.com/embed/playlist/37i9dQZF1DXcBWIGoYBM5M",
    judul: "Our Playlist",
    subjudul: "lagu-lagu yang selalu mengingatkanku padamu"
  },

  // ─── CLIMAX Screen 2: Mini Games (Kuis) ───
  quiz: {
    pertanyaan: [
      {
        soal:    "Kapan kita pertama kali ketemu?",
        pilihan: ["Agustus", "Februari", "Desember", "April"],
        benar:   0,                        // index jawaban benar (0 = pilihan pertama)
        pesan:   "Tepat! Kamu ingat 🥺💕"
      },
      {
        soal:    "Warna favoritku apa?",
        pilihan: ["Merah", "Biru", "Pink", "Ungu"],
        benar:   2,
        pesan:   "Benar! Kamu kenal aku 🌸"
      },
      {
        soal:    "Makanan favoritku?",
        pilihan: ["Pizza", "Sushi", "Mie Ayam", "Nasi Padang"],
        benar:   3,
        pesan:   "Yes! Kamu hapal 😍"
      }
    ]
  },

  // ─── CLIMAX Screen 3: Long Text + Musik ───
  suratCinta: {
    judul: "Untuk Kamu, Sayang",
    // Musik yang otomatis nyala — letakkan file di assets/music/
    musik: {
      file:  "our-song.mp3",  // nama file di assets/music/
      judul: "Our Song 🎵"
    },
    // Isi surat — bisa lebih dari satu paragraf
    isi: [
      "Hei, kamu. Ya, kamu yang lagi baca ini sekarang.",
      "Aku mau bilang sesuatu yang udah lama banget aku pendam. Sejak pertama kita ketemu, ada sesuatu yang berbeda. Kamu bikin dunia ini terasa lebih berwarna, lebih hangat, lebih berarti.",
      "Setiap pagi yang aku bangun, kamu adalah salah satu alasan aku tersenyum. Setiap malam, namamu yang terakhir ada di pikiranku sebelum aku tidur.",
      "Aku bersyukur banget bisa kenal kamu, bisa ada di sisi kamu, bisa jadi bagian dari hidup kamu.",
      "Kamu mungkin nggak sadar betapa besar pengaruhmu buat aku. Cara kamu ketawa, cara kamu berbicara, cara kamu peduli — semua itu bikin aku jatuh semakin dalam setiap harinya.",
      "Di hari ulang tahunmu ini, satu harapanku yang paling tulus: semoga kamu selalu bahagia. Semoga semua mimpi kamu terwujud. Semoga kamu selalu dikelilingi oleh orang-orang yang menyayangimu.",
      "Dan semoga aku bisa terus ada, menemanimu, mendukungmu, mencintaimu.",
      "Selamat ulang tahun, Sayang. Kamu layak mendapatkan seluruh kebaikan di dunia ini. 🌸✨"
    ]
  },

  // ─── CLIMAX Screen 4: Flower ───
  flower: {
    pesanUtama:  "Selalu bersamamu 🌸",
    pesanAkhir:  "I love you, more than words can say 💕",
    dotsTotal:   4,              // total dot untuk navigasi screen flower
    dotAktif:    3               // dot ke berapa yang aktif (0-based = dot ke-4 = index 3)
  }

};

// ═══════════════════════════════════════════════════════════
//  JANGAN EDIT DI BAWAH INI (KECUALI KAMU PAHAM KODE)
// ═══════════════════════════════════════════════════════════

// ─── PETA NAVIGASI ───────────────────────────────────────────
// Urutan semua screen dari awal sampai akhir (index 0 = pertama)
// Jika ingin menonaktifkan tombol back di screen tertentu,
// tambahkan id screen-nya ke array NO_BACK_SCREENS di bawah ini.

const SCREEN_ORDER = [
  // INTRO
  { id: 'welcome',    section: 'intro',  label: 'Welcome'   },  // 0
  { id: 'intro-text', section: 'intro',  label: 'Intro'     },  // 1
  { id: 'photo-0',    section: 'intro',  label: 'Foto 1'    },  // 2
  { id: 'photo-1',    section: 'intro',  label: 'Foto 2'    },  // 3
  { id: 'photo-2',    section: 'intro',  label: 'Foto 3'    },  // 4
  // CLIMAX
  { id: 'spotify',    section: 'climax', label: 'Spotify'   },  // 5
  { id: 'games',      section: 'climax', label: 'Mini Game' },  // 6
  { id: 'longtext',   section: 'climax', label: 'Surat'     },  // 7
  { id: 'flower',     section: 'climax', label: 'Bunga'     },  // 8
];

// Screen yang TIDAK punya tombol back (screen pertama tidak perlu back)
const NO_BACK_SCREENS = ['welcome'];

class ProjectAda {
  constructor() {
    this.currentIndex   = 0;         // index di SCREEN_ORDER
    this.audio          = null;
    this.audioPlaying   = false;
    this.quizState      = { index: 0, score: 0, answered: false };
    this.confettiActive = false;

    // Touch/swipe state
    this.touchStartX = 0;
    this.touchStartY = 0;

    this.init();
  }

  get currentScreenData() { return SCREEN_ORDER[this.currentIndex]; }
  get currentSection()    { return this.currentScreenData.section; }

  init() {
    this.buildDOM();
    this.setupAudio();
    this.showScreen(0);
    this.setupConfetti();
  }

  // ─── DOM Builder ─────────────────────────────────────────

  buildDOM() {
    const wrapper = document.querySelector('.screens-wrapper');
    wrapper.innerHTML = `
      ${this.buildWelcome()}
      ${this.buildIntroText()}
      ${this.buildPhoto(0)}
      ${this.buildPhoto(1)}
      ${this.buildPhoto(2)}
      ${this.buildSpotify()}
      ${this.buildGames()}
      ${this.buildLongText()}
      ${this.buildFlower()}
    `;

    // Isi CONFIG data ke DOM
    this.injectConfig();
  }

  buildWelcome() {
    return `
    <div class="screen screen-welcome" id="screen-welcome">
      <div class="welcome-top">
        <span class="welcome-eyebrow">${CONFIG.welcome.hbd}</span>
        <span class="welcome-date">${CONFIG.tanggalUltah}</span>
      </div>
      <div class="welcome-ring"></div>
      <div class="welcome-hero">
        <div class="welcome-hbd">${CONFIG.welcome.hbd}</div>
        <div class="welcome-name">${CONFIG.namaSayang}</div>
        <div class="welcome-sub">${CONFIG.welcome.tagline}</div>
      </div>
      <button class="btn-next" id="btn-welcome-next">
        Buka <span>→</span>
      </button>
    </div>`;
  }

  buildBackBtn() {
    return `<button class="btn-back" data-back="true" title="Kembali">←</button>`;
  }

  buildIntroText() {
    const lines = CONFIG.intro.judul.split('\n');
    return `
    <div class="screen screen-intro" id="screen-intro-text">
      ${this.buildBackBtn()}
      <span class="intro-label">${CONFIG.intro.labelAtas}</span>
      <div class="intro-title">
        ${lines[0]}
        <span>${lines[1] || ''}</span>
      </div>
      <div class="intro-sub">${CONFIG.intro.subjudul}<br>${CONFIG.intro.keterangan}</div>
      <div class="intro-deco">📸</div>
      ${this.buildDots(4, 0)}
    </div>`;
  }

  buildPhoto(idx) {
    const f = CONFIG.fotos[idx];
    return `
    <div class="screen screen-photo" id="screen-photo-${idx}">
      ${this.buildBackBtn()}
      <div class="photo-label">${f.label}</div>
      <div class="photo-caption-top">${f.captionAtas}</div>
      <div class="photo-frame">
        <img 
          src="assets/images/${f.file}" 
          alt="${f.label}"
          onerror="this.parentElement.innerHTML='<div class=\\'photo-placeholder\\'><div class=\\'ph-icon\\'>📷</div><div class=\\'ph-text\\'>Taruh foto di assets/images/${f.file}</div></div>'"
        >
      </div>
      <div class="photo-caption-bottom">${f.captionBawah}</div>
      ${this.buildDots(4, idx + 1)}
      <div class="swipe-hint">← geser untuk kembali &nbsp;·&nbsp; geser untuk lanjut →</div>
    </div>`;
  }

  buildDots(total, activeIdx) {
    let html = '<div class="dots">';
    for (let i = 0; i < total; i++) {
      html += `<div class="dot ${i === activeIdx ? 'active' : ''}"></div>`;
    }
    html += '</div>';
    return html;
  }

  buildSpotify() {
    return `
    <div class="screen screen-spotify" id="screen-spotify">
      ${this.buildBackBtn()}
      <span class="spotify-label">🎵 our music</span>
      <div class="spotify-title">
        ${CONFIG.spotify.judul}
        <span>${CONFIG.spotify.subjudul}</span>
      </div>
      <div class="spotify-embed-wrap">
        <iframe 
          src="${CONFIG.spotify.embedUrl}" 
          height="232" 
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
        ></iframe>
      </div>
      <button class="btn-next" id="btn-spotify-next">Lanjut →</button>
    </div>`;
  }

  buildGames() {
    return `
    <div class="screen screen-games" id="screen-games">
      ${this.buildBackBtn()}
      <span class="games-label">✨ mini game</span>
      <div class="games-title">Seberapa Kenal<br>Kamu Aku? 💕</div>
      <div class="quiz-box">
        <div class="quiz-question" id="quiz-question">Memuat pertanyaan...</div>
        <div class="quiz-options" id="quiz-options"></div>
        <div class="quiz-result" id="quiz-result"></div>
        <div class="quiz-score" id="quiz-score"></div>
      </div>
      <button class="btn-next" id="btn-games-next" style="display:none">Lanjut →</button>
    </div>`;
  }

  buildLongText() {
    const paragraphs = CONFIG.suratCinta.isi.map(p => `<p>${p}</p>`).join('');
    return `
    <div class="screen screen-longtext" id="screen-longtext">
      ${this.buildBackBtn()}
      <div class="longtext-header">
        <div class="longtext-label">✉️ sebuah surat</div>
        <div class="longtext-title">${CONFIG.suratCinta.judul}</div>
      </div>
      <div class="music-bar" id="music-bar">
        <span class="music-icon" id="music-icon">🎵</span>
        <div class="music-info">
          <div class="music-name" id="music-name">${CONFIG.suratCinta.musik.judul}</div>
          <div class="music-status" id="music-status">Memuat lagu...</div>
        </div>
        <button class="music-toggle" id="music-toggle" title="Play/Pause">▶</button>
      </div>
      <div class="longtext-scroll">
        <div class="longtext-content">${paragraphs}</div>
      </div>
      <div class="longtext-footer">
        <button class="btn-last" id="btn-last-step">last step ✨</button>
      </div>
    </div>`;
  }

  buildFlower() {
    return `
    <div class="screen screen-flower" id="screen-flower">
      <div class="flower-label">🌸 untuk kamu</div>
      <div class="flower-title">${CONFIG.namaSayang}</div>
      <div class="flower-sub">${CONFIG.flower.pesanUtama}</div>
      <div class="flower-stage">
        ${this.buildFlowerSVG()}
      </div>
      <div class="flower-message">${CONFIG.flower.pesanAkhir}</div>
      <div class="flower-dots-wrap">
        ${this.buildDots(CONFIG.flower.dotsTotal, CONFIG.flower.dotAktif)}
      </div>
    </div>`;
  }

  buildFlowerSVG() {
    // SVG bunga animasi
    const colors = ['#f7a8c4','#e87fa8','#c084fc','#f472b6','#fb7185','#e879f9','#c084fc','#f7a8c4'];
    let petals = '';
    for (let i = 0; i < 8; i++) {
      const angle = (i * 45) * (Math.PI / 180);
      const cx = 110 + Math.cos(angle) * 48;
      const cy = 110 + Math.sin(angle) * 48;
      petals += `
        <ellipse 
          class="flower-petal" 
          cx="${cx.toFixed(1)}" cy="${cy.toFixed(1)}" 
          rx="22" ry="14" 
          fill="${colors[i]}" 
          opacity="0.88"
          transform="rotate(${i*45}, ${cx.toFixed(1)}, ${cy.toFixed(1)})"
        />`;
    }
    return `
    <svg class="flower-svg" viewBox="0 0 220 220" xmlns="http://www.w3.org/2000/svg">
      <!-- Petals -->
      ${petals}
      <!-- Center circle -->
      <circle cx="110" cy="110" r="26" fill="#ffd700" opacity="0.95"/>
      <circle cx="110" cy="110" r="18" fill="#ffb300"/>
      <!-- Center detail -->
      <text x="110" y="116" text-anchor="middle" font-size="16" fill="white">🌸</text>
    </svg>`;
  }

  // ─── Inject Config ───────────────────────────────────────

  injectConfig() {
    // Welcome name
    const nameEl = document.querySelector('.welcome-name');
    if (nameEl) nameEl.textContent = CONFIG.namaSayang;
  }

  // ─── Audio Setup ─────────────────────────────────────────

  setupAudio() {
    this.audio = new Audio(`assets/music/${CONFIG.suratCinta.musik.file}`);
    this.audio.loop = true;
    this.audio.volume = 0.65;

    this.audio.addEventListener('canplaythrough', () => {
      const status = document.getElementById('music-status');
      if (status) status.textContent = 'Siap diputar ♪';
    });

    this.audio.addEventListener('error', () => {
      const status = document.getElementById('music-status');
      if (status) status.textContent = `Taruh lagu di assets/music/${CONFIG.suratCinta.musik.file}`;
      const icon = document.getElementById('music-icon');
      if (icon) icon.textContent = '🎵';
    });

    this.audio.addEventListener('play', () => {
      const status = document.getElementById('music-status');
      const toggle = document.getElementById('music-toggle');
      const icon   = document.getElementById('music-icon');
      if (status) status.textContent = 'Sedang diputar ♪';
      if (toggle) toggle.textContent = '⏸';
      if (icon) icon.style.animation = 'music-bounce 0.6s ease-in-out infinite alternate';
      this.audioPlaying = true;
    });

    this.audio.addEventListener('pause', () => {
      const status = document.getElementById('music-status');
      const toggle = document.getElementById('music-toggle');
      if (status) status.textContent = 'Dijeda';
      if (toggle) toggle.textContent = '▶';
      this.audioPlaying = false;
    });
  }

  playAudio() {
    if (!this.audio) return;
    this.audio.play().catch(() => {
      // Autoplay blocked — show play button
      const status = document.getElementById('music-status');
      if (status) status.textContent = 'Tap ▶ untuk putar lagu';
    });
  }

  // ─── Screen Navigation (UNIFIED) ─────────────────────────

  // showScreen: instantly shows a screen by its SCREEN_ORDER index
  showScreen(index) {
    document.querySelectorAll('.screen').forEach(s => {
      s.classList.remove('active', 'exit-left', 'exit-right', 'enter-from-left');
    });

    const { id, section } = SCREEN_ORDER[index];
    const target = document.getElementById(`screen-${id}`);
    if (target) target.classList.add('active');

    this.currentIndex = index;

    // Hide back button on screens that don't need it
    document.querySelectorAll('[data-back]').forEach(btn => {
      const parentScreen = btn.closest('.screen');
      const screenId = parentScreen?.id?.replace('screen-', '');
      btn.style.display = NO_BACK_SCREENS.includes(screenId) ? 'none' : 'flex';
    });
  }

  // navigateTo: animated transition FORWARD (slide left)
  navigateTo(index) {
    if (index < 0 || index >= SCREEN_ORDER.length) return;

    // Animate current screen out to the LEFT
    document.querySelectorAll('.screen.active').forEach(s => {
      s.classList.add('exit-left');
      setTimeout(() => s.classList.remove('active', 'exit-left'), 500);
    });

    setTimeout(() => {
      this.showScreen(index);

      // Per-screen hooks
      const { id } = SCREEN_ORDER[index];
      if (id === 'games')    this.initQuiz();
      if (id === 'longtext') this.onEnterLongText();
      if (id === 'flower')   this.onEnterFlower();
    }, 380);
  }

  // navigateBack: animated transition BACKWARD (slide right)
  navigateBack() {
    const prevIndex = this.currentIndex - 1;
    if (prevIndex < 0) return;

    // If going back from climax to intro (index 5 → 4), use fade
    if (this.currentIndex === 5) {
      this.goBackWithFade(prevIndex);
      return;
    }

    // Pause audio when navigating back from longtext
    if (SCREEN_ORDER[this.currentIndex].id === 'longtext') {
      if (this.audio && this.audioPlaying) this.audio.pause();
    }

    // Animate current screen out to the RIGHT
    document.querySelectorAll('.screen.active').forEach(s => {
      s.classList.add('exit-right');
      setTimeout(() => s.classList.remove('active', 'exit-right'), 500);
    });

    setTimeout(() => {
      // Target screen enters from the LEFT
      const { id } = SCREEN_ORDER[prevIndex];
      const target = document.getElementById(`screen-${id}`);
      if (target) {
        target.classList.add('enter-from-left');
        this.showScreen(prevIndex);
        // Trigger reflow then remove enter class for animation
        requestAnimationFrame(() => {
          requestAnimationFrame(() => {
            target.classList.remove('enter-from-left');
          });
        });
      }

      // Per-screen hooks on back
      if (id === 'games') this.initQuiz();
    }, 380);
  }

  goToClimax() {
    const overlay = document.getElementById('transition-overlay');
    if (overlay) {
      overlay.classList.add('fade-in');
      setTimeout(() => {
        this.showScreen(5); // spotify = index 5
        overlay.classList.remove('fade-in');
        overlay.classList.add('fade-out');
        setTimeout(() => overlay.classList.remove('fade-out'), 400);
      }, 400);
    } else {
      this.navigateTo(5);
    }
  }

  goBackWithFade(prevIndex) {
    const overlay = document.getElementById('transition-overlay');
    if (overlay) {
      overlay.classList.add('fade-in');
      setTimeout(() => {
        this.showScreen(prevIndex);
        overlay.classList.remove('fade-in');
        overlay.classList.add('fade-out');
        setTimeout(() => overlay.classList.remove('fade-out'), 400);
      }, 400);
    } else {
      this.navigateBack();
    }
  }

  // ─── Event Listeners ─────────────────────────────────────

  setupEvents() {
    // ── Back buttons (all screens) ──
    document.querySelectorAll('[data-back]').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        this.navigateBack();
      });
    });

    // ── Intro: Welcome NEXT ──
    document.getElementById('btn-welcome-next')?.addEventListener('click', () => {
      this.navigateTo(1); // intro-text
    });

    // ── Intro text: tap anywhere (not button) → photo 1 ──
    const introScreen = document.getElementById('screen-intro-text');
    if (introScreen) {
      introScreen.addEventListener('click', (e) => {
        if (!e.target.closest('button')) {
          this.navigateTo(2); // photo-0
        }
      });
    }

    // ── Photo screens: tap to go next ──
    [0, 1, 2].forEach(i => {
      const el = document.getElementById(`screen-photo-${i}`);
      if (!el) return;
      el.addEventListener('click', (e) => {
        if (e.target.closest('[data-back]')) return; // handled by back button
        if (i < 2) {
          this.navigateTo(3 + i); // photo-1, photo-2
        } else {
          this.goToClimax(); // photo-2 → climax
        }
      });
    });

    // ── Climax: Spotify NEXT ──
    document.getElementById('btn-spotify-next')?.addEventListener('click', () => {
      this.navigateTo(6); // games
    });

    // ── Climax: Games NEXT (after quiz) ──
    document.getElementById('btn-games-next')?.addEventListener('click', () => {
      this.navigateTo(7); // longtext
    });

    // ── Climax: Long Text "last step" ──
    document.getElementById('btn-last-step')?.addEventListener('click', () => {
      this.navigateTo(8); // flower
    });

    // ── Music toggle ──
    document.getElementById('music-toggle')?.addEventListener('click', () => {
      if (this.audioPlaying) {
        this.audio.pause();
      } else {
        this.audio.play();
      }
    });

    // ── Swipe gestures (touch) ──
    const phone = document.querySelector('.phone');
    if (phone) {
      phone.addEventListener('touchstart', (e) => {
        this.touchStartX = e.touches[0].clientX;
        this.touchStartY = e.touches[0].clientY;
      }, { passive: true });

      phone.addEventListener('touchend', (e) => {
        const dx = e.changedTouches[0].clientX - this.touchStartX;
        const dy = e.changedTouches[0].clientY - this.touchStartY;

        // Only horizontal swipe (not vertical scroll)
        if (Math.abs(dx) < 50 || Math.abs(dy) > Math.abs(dx)) return;

        const currentId = SCREEN_ORDER[this.currentIndex].id;

        // Block swipe on screens where vertical scroll matters
        if (currentId === 'longtext') return;

        // Swipe RIGHT → go BACK
        if (dx > 50) {
          this.navigateBack();
        }

        // Swipe LEFT → go FORWARD (only on photo screens and intro-text)
        if (dx < -50) {
          const swipeableForward = ['intro-text', 'photo-0', 'photo-1', 'photo-2'];
          if (swipeableForward.includes(currentId)) {
            if (currentId === 'photo-2') {
              this.goToClimax();
            } else {
              this.navigateTo(this.currentIndex + 1);
            }
          }
        }
      }, { passive: true });
    }
  }

  // ─── Quiz Logic ──────────────────────────────────────────

  initQuiz() {
    this.quizState = { index: 0, score: 0, answered: false };
    this.renderQuizQuestion();
  }

  renderQuizQuestion() {
    const { index } = this.quizState;
    const q = CONFIG.quiz.pertanyaan;

    if (index >= q.length) {
      this.endQuiz();
      return;
    }

    const current = q[index];
    const qEl   = document.getElementById('quiz-question');
    const optEl = document.getElementById('quiz-options');
    const resEl = document.getElementById('quiz-result');
    const scrEl = document.getElementById('quiz-score');

    if (qEl) qEl.textContent = current.soal;
    if (resEl) resEl.textContent = '';
    if (scrEl) scrEl.textContent = `Soal ${index+1} dari ${q.length}`;

    if (optEl) {
      optEl.innerHTML = '';
      current.pilihan.forEach((p, i) => {
        const btn = document.createElement('button');
        btn.className = 'quiz-opt';
        btn.textContent = p;
        btn.addEventListener('click', () => this.answerQuiz(i));
        optEl.appendChild(btn);
      });
    }

    this.quizState.answered = false;
  }

  answerQuiz(selectedIdx) {
    if (this.quizState.answered) return;
    this.quizState.answered = true;

    const q = CONFIG.quiz.pertanyaan[this.quizState.index];
    const opts = document.querySelectorAll('.quiz-opt');
    const resEl = document.getElementById('quiz-result');

    opts.forEach((btn, i) => {
      btn.disabled = true;
      if (i === q.benar) btn.classList.add('correct');
      else if (i === selectedIdx) btn.classList.add('wrong');
    });

    if (selectedIdx === q.benar) {
      this.quizState.score++;
      if (resEl) resEl.textContent = q.pesan;
    } else {
      if (resEl) resEl.textContent = '✗ Jawaban salah, tapi tetep cute kok 😅';
    }

    setTimeout(() => {
      this.quizState.index++;
      this.renderQuizQuestion();
    }, 1600);
  }

  endQuiz() {
    const qEl  = document.getElementById('quiz-question');
    const optEl= document.getElementById('quiz-options');
    const resEl= document.getElementById('quiz-result');
    const scrEl= document.getElementById('quiz-score');
    const nextBtn = document.getElementById('btn-games-next');

    const { score } = this.quizState;
    const total = CONFIG.quiz.pertanyaan.length;

    if (qEl) qEl.textContent = `Skor kamu: ${score}/${total} 🎉`;
    if (optEl) optEl.innerHTML = '';
    if (resEl) {
      resEl.textContent = score === total
        ? 'Sempurna! Kamu kenal aku banget 🥺💕'
        : score >= total / 2
        ? 'Lumayan! Tapi masih perlu banyak waktu bersamaku 😉'
        : 'Kurang nih~ kita perlu lebih sering ngobrol 💬';
    }
    if (scrEl) scrEl.textContent = '';
    if (nextBtn) nextBtn.style.display = 'inline-flex';
  }

  // ─── Screen Enter Hooks ──────────────────────────────────

  onEnterLongText() {
    // Autoplay audio
    setTimeout(() => {
      this.playAudio();
    }, 800);
  }

  onEnterFlower() {
    // Stop audio slowly
    if (this.audio && this.audioPlaying) {
      let vol = this.audio.volume;
      const fadeOut = setInterval(() => {
        vol = Math.max(0, vol - 0.05);
        this.audio.volume = vol;
        if (vol <= 0) { clearInterval(fadeOut); this.audio.pause(); }
      }, 200);
    }

    // Confetti!
    this.launchConfetti();
  }

  // ─── Confetti ────────────────────────────────────────────

  setupConfetti() {
    const canvas = document.getElementById('confetti-canvas');
    if (!canvas) return;
    this.confettiCanvas  = canvas;
    this.confettiCtx     = canvas.getContext('2d');
    this.confettiPieces  = [];
    canvas.width  = window.innerWidth;
    canvas.height = window.innerHeight;
    window.addEventListener('resize', () => {
      canvas.width  = window.innerWidth;
      canvas.height = window.innerHeight;
    });
  }

  launchConfetti() {
    if (!this.confettiCtx) return;
    const colors = ['#f7a8c4','#c084fc','#ffd700','#86efac','#7dd3fc','#f472b6'];
    this.confettiPieces = [];
    for (let i = 0; i < 120; i++) {
      this.confettiPieces.push({
        x:   Math.random() * this.confettiCanvas.width,
        y:   Math.random() * this.confettiCanvas.height - this.confettiCanvas.height,
        r:   Math.random() * 6 + 3,
        d:   Math.random() * 80 + 20,
        color: colors[Math.floor(Math.random() * colors.length)],
        tilt: Math.random() * 10 - 5,
        tiltAngle: 0,
        tiltAngleIncrement: Math.random() * 0.08 + 0.04
      });
    }
    this.confettiActive = true;
    this.animateConfetti();
  }

  animateConfetti() {
    if (!this.confettiActive) return;
    const ctx = this.confettiCtx;
    const W   = this.confettiCanvas.width;
    const H   = this.confettiCanvas.height;

    ctx.clearRect(0, 0, W, H);

    let alive = false;
    this.confettiPieces.forEach(p => {
      p.tiltAngle += p.tiltAngleIncrement;
      p.y += (Math.cos(p.d) + 3 + p.r / 2) * 0.8;
      p.x += Math.sin(0.01);
      p.tilt = Math.sin(p.tiltAngle) * 12;

      if (p.y < H) alive = true;

      ctx.beginPath();
      ctx.lineWidth = p.r / 2;
      ctx.strokeStyle = p.color;
      ctx.moveTo(p.x + p.tilt + p.r / 4, p.y);
      ctx.lineTo(p.x + p.tilt, p.y + p.tilt + p.r / 4);
      ctx.stroke();
    });

    if (alive) {
      requestAnimationFrame(() => this.animateConfetti());
    } else {
      this.confettiActive = false;
      ctx.clearRect(0, 0, W, H);
    }
  }
}

// ─── Start App ───────────────────────────────────────────────
window.addEventListener('DOMContentLoaded', () => {
  const app = new ProjectAda();
  // Defer events to after DOM build
  setTimeout(() => app.setupEvents(), 100);
});
