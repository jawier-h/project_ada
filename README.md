# 🌸 PROJECT ADA — Birthday Website

Website ultah yang penuh cinta, dibuat khusus buat kamu.

---

## 📁 Struktur Folder

```
project_ada/
├── index.html              ← File utama, buka ini di browser
├── assets/
│   ├── css/
│   │   └── style.css       ← Semua tampilan/design
│   ├── js/
│   │   └── main.js         ← Logika + AREA KONFIGURASI
│   ├── images/             ← Taruh foto kamu di sini
│   │   ├── foto1.jpg
│   │   ├── foto2.jpg
│   │   └── foto3.jpg
│   └── music/              ← Taruh lagu di sini
│       └── our-song.mp3
└── README.md               ← Panduan ini
```

---

## ⚙️ Cara Edit Konten

**Buka file:** `assets/js/main.js`

Di bagian atas ada `const CONFIG = { ... }` — edit di sini saja, tidak perlu sentuh bagian lain.

### Yang bisa diedit:

| Bagian | Konfigurasi |
|--------|-------------|
| Nama sayang | `CONFIG.namaSayang` |
| Tanggal ultah | `CONFIG.tanggalUltah` |
| Teks sambutan | `CONFIG.welcome` |
| Teks intro | `CONFIG.intro` |
| 3 foto + caption | `CONFIG.fotos[0..2]` |
| Link Spotify | `CONFIG.spotify.embedUrl` |
| Pertanyaan kuis | `CONFIG.quiz.pertanyaan` |
| Surat cinta | `CONFIG.suratCinta.isi` |
| Nama file lagu | `CONFIG.suratCinta.musik.file` |
| Pesan bunga akhir | `CONFIG.flower` |

---

## 🖼️ Cara Memasukkan Foto

1. Siapkan 3 foto (format `.jpg` atau `.png`)
2. Rename menjadi `foto1.jpg`, `foto2.jpg`, `foto3.jpg`
3. Taruh di folder `assets/images/`
4. Jika ingin nama file berbeda, ubah di `CONFIG.fotos[x].file`

---

## 🎵 Cara Memasukkan Lagu

1. Siapkan file lagu format `.mp3`
2. Rename sesuai `CONFIG.suratCinta.musik.file` (default: `our-song.mp3`)
3. Taruh di folder `assets/music/`
4. Lagu akan **otomatis nyala** saat masuk screen surat cinta (Screen 3 - Climax)
5. Ada tombol pause/play di bagian atas screen surat

> **Catatan:** Browser modern membatasi autoplay. Jika lagu tidak langsung nyala, tap tombol ▶ di layar.

---

## 🎵 Cara Mendapatkan Spotify Embed URL

1. Buka Spotify (web atau app)
2. Pilih lagu atau playlist
3. Klik ••• (titik tiga) → **Share** → **Embed track/playlist**
4. Copy URL yang ada di dalam `src="..."` pada iframe
5. Paste ke `CONFIG.spotify.embedUrl`

---

## 🚀 Cara Menjalankan

### Cara Termudah:
1. Buka file `index.html` langsung di browser (double-click)

### Cara Terbaik (jika ada server lokal):
```bash
# Python
python -m http.server 8000

# Node.js (npx)
npx serve .
```
Lalu buka `http://localhost:8000`

> **Penting:** Untuk fitur autoplay lagu, gunakan server lokal atau hosting online.

---

## 🌸 Flow Website

```
INTRO
┌─────────────────────────────────────────┐
│  Screen 1: HBD + NEXT button            │
│  Screen 2: "Mini Scrapbook for your..." │
│  Screen 3: Foto 1 (tap untuk lanjut)    │
│  Screen 4: Foto 2 (tap untuk lanjut)    │
│  Screen 5: Foto 3 (tap → ke CLIMAX)     │
└─────────────────────────────────────────┘
           ↓ (fade transition)
CLIMAX
┌─────────────────────────────────────────┐
│  Screen 1: Spotify Embed + NEXT         │
│  Screen 2: Mini Game Kuis + NEXT        │
│  Screen 3: Surat Cinta + Musik Auto     │
│  Screen 4: Bunga Animasi + Confetti     │
└─────────────────────────────────────────┘
```

---

Made with 💕 — PROJECT ADA
