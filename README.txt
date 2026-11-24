ZAURA CLOTH — Website statis (multi-halaman)

CARA DEPLOY
- Upload seluruh isi folder ini ke Netlify (drag & drop) atau GitHub Pages.
- Setelah domain final ada, ganti "GANTI-DOMAIN-ANDA" di robots.txt dan sitemap.xml.

HARGA
- Harga saat ini disembunyikan ("Konsultasikan harga") sesuai aturan prompt.
- Setelah harga dipastikan masih berlaku: buka assets/js/data.js, ubah
  flags.showPrices menjadi true. Harga produk dan tabel sablon akan tampil.

DATA
- Semua produk, ulasan, dan info bisnis ada di assets/js/data.js.
- Foto produk: assets/products/<slug>/NN.webp

CATATAN SEBELUM PUBLISH
- Foto contoh kemeja, topi, dan lanyard memuat logo/nama pihak lain.
  Pastikan izin pemakaian atau ganti dengan foto bersih.
- Ikon media sosial dimuat dari CDN (jsdelivr); butuh koneksi internet.
- Animasi GSAP juga dimuat dari CDN jsdelivr.
