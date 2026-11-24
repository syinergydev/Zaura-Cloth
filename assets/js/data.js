/*
 * ZAURA CLOTH — sumber data terpusat.
 * Semua informasi bisnis diambil dari prompt & ZIP klien.
 * Ubah di sini saja bila ada perubahan data.
 */
window.ZC = {
  flags: {
    /* Harga dari screenshot & tabel klien belum diverifikasi ulang.
       Ubah ke true HANYA setelah harga dipastikan masih berlaku. */
    showPrices: false
  },

  business: {
    name: "ZAURA CLOTH",
    tagline: "Sablon, Konveksi & Custom Apparel",
    wa: "6287822886243",
    waDisplay: "0878-2288-6243",
    address: "Jl. Tanjungsari, Jenek Wetan, Krembangan, Kec. Taman, Kabupaten Sidoarjo, Jawa Timur 61257",
    email: "devanosyahputra444@gmail.com",
    hours: "Buka hingga pukul 21.00",
    rating: "4,9",
    reviewCount: 48,
    maps: "https://maps.app.goo.gl/zMZdqFhpwHErRQPV6",
    mapsEmbed: "https://www.google.com/maps?q=" + encodeURIComponent("Jl. Tanjungsari, Jenek Wetan, Krembangan, Kec. Taman, Kabupaten Sidoarjo, Jawa Timur 61257") + "&output=embed",
    shopee: "https://id.shp.ee/dUqJLH6H",
    instagram: "https://www.instagram.com/zaura_cloth1",
    facebook: "https://www.facebook.com/share/1ESobMMGsb/",
    tiktok: "https://www.tiktok.com/@zauracloth"
  },

  /* Warna dari "Katalog Warna — Cotton Combed" (foto klien) */
  combedColors: [
    "Hitam", "Putih", "Abu Silver", "Abu Tua", "Cream",
    "Coklat Tua", "Maron", "Pink", "Fanta", "Ungu",
    "Merah", "Merah Jingga", "Jingga", "Kuning", "Marigold",
    "Ice Blue", "Navy", "Benhure", "Turkis Tua", "Turkis Muda",
    "Biru Tosca", "Tosca", "Hijau Tosca", "Hijau Fuji", "Hijau Botol",
    "Hijau Stabilo", "Hijau Army", "Cappucino"
  ],

  /* Tabel harga sablon dari foto klien (ribu rupiah). Dipakai hanya bila showPrices = true */
  sablonPrices: {
    "Combed 24s": [
      { ukuran: "10 x 10 cm", p: [50, 49, 48, 45] },
      { ukuran: "25 x 5 cm", p: [55, 54, 53, 51] },
      { ukuran: "25 x 10 cm", p: [60, 57, 55, 53] },
      { ukuran: "A5", p: [70, 68, 65, 63] },
      { ukuran: "A4", p: [75, 74, 73, 70] },
      { ukuran: "A3", p: [80, 79, 78, 75] }
    ],
    "Soft PE": [
      { ukuran: "10 x 10 cm", p: [35, 33, 31, 30] },
      { ukuran: "25 x 5 cm", p: [37, 35, 33, 31] },
      { ukuran: "25 x 10 cm", p: [40, 37, 35, 33] },
      { ukuran: "A5", p: [40, 37, 35, 33] },
      { ukuran: "A4", p: [45, 43, 41, 40] },
      { ukuran: "A3", p: [50, 48, 46, 44] }
    ],
    "Combed 30s": [
      { ukuran: "10 x 10 cm", p: [47, 46, 45, 44] },
      { ukuran: "25 x 5 cm", p: [55, 54, 53, 51] },
      { ukuran: "25 x 10 cm", p: [58, 57, 55, 53] },
      { ukuran: "A5", p: [65, 64, 63, 60] },
      { ukuran: "A4", p: [70, 69, 67, 65] },
      { ukuran: "A3", p: [75, 74, 73, 70] }
    ]
  },
  sablonQtyLabels: ["1–12 pcs", "13–24 pcs", "25–50 pcs", "51–100 pcs"],

  categories: [
    { key: "kaos-polos", name: "Kaos Polos", desc: "Combed 24s & 30s, pilihan warna lengkap" },
    { key: "kaos-sablon", name: "Kaos Sablon", desc: "Sablon custom untuk couple, komunitas & event" },
    { key: "jersey", name: "Jersey Custom", desc: "Full print sesuai desain tim Anda" },
    { key: "hoodie", name: "Hoodie & Sweater", desc: "Hoodie dewasa, zipper, anak, dan sweater" },
    { key: "polo", name: "Kaos Polo", desc: "Polo reguler dan polo premium" },
    { key: "kemeja", name: "Kemeja Kerja", desc: "Seragam kerja untuk tim dan perusahaan" },
    { key: "topi", name: "Topi Custom", desc: "Topi jaring dengan desain custom" },
    { key: "lanyard", name: "Lanyard Custom", desc: "Identitas untuk komunitas & acara" }
  ],

  products: [
    {
      slug: "kaos-polos-24s",
      name: "Kaos Polos Combed 24s",
      cat: "kaos-polos",
      short: "Kaos polos combed 24s, nyaman dipakai harian.",
      desc: "Kaos polos berbahan cotton combed 24s dengan pilihan warna lengkap dari katalog Cotton Combed. Cocok untuk seragam komunitas, kaos harian, atau dasar sablon.",
      bahan: "Cotton combed 24s",
      colors: "combed",
      sizes: [],
      sizeNote: "Konfirmasi pilihan ukuran lewat WhatsApp.",
      priceText: "Mulai Rp47.000",
      images: ["01"],
      chart: null
    },
    {
      slug: "kaos-polos-30s",
      name: "Kaos Polos Combed 30s",
      cat: "kaos-polos",
      short: "Kaos polos combed 30s, bahan lebih halus.",
      desc: "Kaos polos berbahan katun combed 30s dengan panduan ukuran dari klien. Pilihan warna sesuai katalog Cotton Combed.",
      bahan: "Katun combed 30s",
      colors: "combed",
      sizes: ["S", "M", "L", "XL", "2XL", "3XL"],
      sizeNote: "Ukuran bisa berbeda 1–2 cm karena proses produksi.",
      priceText: "Mulai Rp37.000",
      images: ["01"],
      chart: "size-kaos-dewasa"
    },
    {
      slug: "kaos-sablon",
      name: "Kaos Sablon Custom",
      cat: "kaos-sablon",
      short: "Sablon custom untuk couple, komunitas, dan event.",
      desc: "Kaos sablon custom dengan berbagai pilihan desain, dari tulisan couple hingga ilustrasi komunitas. Pilihan bahan: Combed 24s, Soft PE, dan Combed 30s dengan harga berjenjang sesuai jumlah pesanan.",
      bahan: "Combed 24s, Soft PE, Combed 30s",
      colors: "combed",
      sizes: ["S", "M", "L", "XL", "2XL", "3XL"],
      sizeNote: "Ukuran dan jumlah dikonfirmasi saat konsultasi.",
      priceText: "Kaos + sablon mulai Rp35.000",
      priceNote: "Kaos couple Rp100.000 per pasang (S–XL).",
      images: ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10"],
      chart: null,
      priceTable: true
    },
    {
      slug: "jersey-full-print",
      name: "Jersey Custom Full Print",
      cat: "jersey",
      short: "Jersey full print dengan desain sesuai tim Anda.",
      desc: "Jersey custom full print untuk tim, komunitas, atau sekolah. Desain, nama, dan nomor punggung disesuaikan saat konsultasi desain.",
      bahan: "Pilihan bahan: Benzema, Milano, Billabong, Brazil, Embos",
      colors: [],
      sizes: [],
      sizeNote: "Ukuran dan nama/nomor punggung dikonfirmasi saat konsultasi desain.",
      priceText: "Atasan mulai Rp70.000 · Setelan Rp105.000",
      images: ["01"],
      chart: null
    },
    {
      slug: "hoodie-dewasa",
      name: "Hoodie Dewasa",
      cat: "hoodie",
      short: "Hoodie dewasa katun fleece tebal, 9 pilihan warna.",
      desc: "Hoodie dewasa berbahan katun fleece PE tebal gramasi 280 dengan kantong depan dan tali serut. Pilihan warna tampil di galeri.",
      bahan: "Katun fleece PE tebal, gramasi 280",
      colors: ["Abu-abu", "Hijau Army", "Hijau Botol", "Abu Tua", "Putih", "Maroon", "Merah", "Hitam", "Navy"],
      sizes: ["XS", "S", "M", "L", "XL", "XXL"],
      sizeNote: "Ukuran bisa berbeda 1–2 cm karena proses produksi.",
      priceText: "Mulai Rp90.000",
      images: ["01", "02", "03", "04", "05", "06", "07", "08", "09"],
      chart: "size-hoodie"
    },
    {
      slug: "hoodie-zipper",
      name: "Hoodie Zipper",
      cat: "hoodie",
      short: "Hoodie resleting dengan tudung, nyaman untuk harian.",
      desc: "Hoodie zipper berbahan katun fleece PE tebal gramasi 280 dengan resleting depan. Galeri menampilkan model dan variasi warna yang tersedia.",
      bahan: "Katun fleece PE tebal, gramasi 280",
      colors: [],
      sizes: ["XS", "S", "M", "L", "XL", "XXL"],
      sizeNote: "Ukuran bisa berbeda 1–2 cm karena proses produksi.",
      priceText: "Mulai Rp95.000",
      images: ["01", "02", "03"],
      chart: "size-hoodie"
    },
    {
      slug: "hoodie-anak",
      name: "Hoodie Anak",
      cat: "hoodie",
      short: "Hoodie anak dengan bahan lembut dan hangat.",
      desc: "Hoodie anak berbahan katun fleece PE tebal gramasi 280, tampil di galeri bersama pilihan warna merah, navy, abu tua, dan hitam.",
      bahan: "Katun fleece PE tebal, gramasi 280",
      colors: ["Merah", "Navy", "Abu Tua", "Hitam"],
      sizes: [],
      sizeNote: "Konfirmasi ukuran anak lewat WhatsApp.",
      priceText: "Mulai Rp75.000",
      images: ["01", "02", "03", "04"],
      chart: null
    },
    {
      slug: "sweater-crewneck",
      name: "Sweater Crewneck",
      cat: "hoodie",
      short: "Sweater crewneck katun fleece, tanpa tudung.",
      desc: "Sweater crewneck berbahan katun fleece PE tebal gramasi 280. Cocok untuk seragam komunitas atau pakaian harian yang hangat.",
      bahan: "Katun fleece PE tebal, gramasi 280",
      colors: ["Merah", "Hijau Army", "Hitam", "Cokelat Muda", "Abu Tua", "Hijau Botol", "Navy", "Abu Muda"],
      sizes: [],
      sizeNote: "Konfirmasi ukuran lewat WhatsApp.",
      priceText: "Mulai Rp75.000",
      images: ["01", "02", "03", "04", "05", "06", "07", "08"],
      chart: null
    },
    {
      slug: "kaos-polo",
      name: "Kaos Polo Unisex",
      cat: "polo",
      short: "Kaos polo unisex dengan pilihan tiga jenis bahan.",
      desc: "Kaos polo unisex tersedia dalam tiga pilihan bahan: Lacoste Pique, Combed 24s, dan Cotton CVC 24s. Pilihan warna lengkap, konfirmasi lewat WhatsApp.",
      bahan: "Lacoste Pique · Combed 24s · Cotton CVC 24s",
      colors: [],
      sizes: ["XS", "S", "M", "L", "XL"],
      sizeNote: "Ukuran unisex XS–XL.",
      priceText: "Mulai Rp45.000",
      priceNote: "Lacoste Pique Rp45.000 · Combed 24s Rp60.000 · Cotton CVC 24s Rp75.000",
      images: ["01"],
      chart: null
    },
    {
      slug: "polo-premium",
      name: "Kaos Polo Premium",
      cat: "polo",
      short: "Polo premium bahan lacoste CVC dengan detail jahitan ganda.",
      desc: "Baju kerah polo berbahan lacoste CVC, 24s cotton CVC pique knit. Dilengkapi welt manset pada kerah dan lengan, penjahitan ganda di ujung bawah kaos, dan dua kancing berwarna serasi.",
      bahan: "Lacoste CVC · 24s cotton CVC pique knit",
      colors: ["Hitam", "Putih", "Merah", "Abu Muda", "Navy", "Biru", "Hijau", "Cokelat"],
      sizes: ["XS", "S", "M", "L", "XL", "XXL"],
      sizeNote: "Toleransi ±2 cm. Lihat panduan ukuran lengkap.",
      priceText: "Mulai Rp75.000",
      images: ["01", "02", "03", "04", "05"],
      chart: null
    },
    {
      slug: "kemeja-kerja",
      name: "Kemeja Kerja Standar",
      cat: "kemeja",
      short: "Kemeja kerja bahan Nagata Drill, gratis bordir 2 titik.",
      desc: "Kemeja kerja standar berbahan Nagata Drill. Cocok untuk seragam tim, karyawan, atau komunitas kerja. Pemesanan tim atau perusahaan dikonsultasikan lewat WhatsApp.",
      bahan: "Nagata Drill",
      colors: [],
      sizes: [],
      sizeNote: "Ukuran dan jumlah dikonfirmasi saat konsultasi.",
      priceText: "Mulai Rp135.000",
      features: ["Gratis bordir 2 titik"],
      images: ["01", "02", "03", "04", "05"],
      chart: null,
      note: "Foto contoh produksi."
    },
    {
      slug: "topi-custom",
      name: "Topi Jaring Custom",
      cat: "topi",
      short: "Topi jaring dengan desain bordir atau sablon custom.",
      desc: "Topi jaring dengan desain custom sesuai identitas Anda. Tampil dalam pilihan warna hitam dan putih.",
      bahan: "Topi jaring",
      colors: ["Hitam", "Putih"],
      sizes: [],
      sizeNote: "",
      priceText: "Topi jaring mulai Rp20.000",
      images: ["01", "02", "03"],
      chart: null,
      note: "Foto contoh produksi."
    },
    {
      slug: "lanyard-custom",
      name: "Tali Lanyard Custom",
      cat: "lanyard",
      short: "Lanyard custom lebar 2 cm untuk identitas acara dan komunitas.",
      desc: "Tali lanyard custom lebar 2 cm untuk kebutuhan identitas, komunitas, acara, atau perusahaan.",
      bahan: "Lebar 2 cm",
      colors: [],
      sizes: [],
      sizeNote: "Minimal pemesanan 2 lusin.",
      priceText: "Mulai Rp15.000",
      images: ["01"],
      chart: null,
      note: "Foto contoh produksi."
    }
  ],

  /* Ulasan — kutipan persis dari sumber klien */
  testimonials: [
    { text: "Harga murah kualitas juga oke, bisa pesan satuan dan partaian disini.", by: "Pelanggan Google Maps" },
    { text: "Hasil sablon bagus, harga terjangkau.", by: "Pelanggan Google Maps" },
    { text: "Keren banget, recom hasilnya sesuai ekspektasi, gak nyesel pokoknya.", by: "Pelanggan Google Maps" },
    { text: "Bahan kaosnya adem buat anak2 ditambah desain kartun anak yg lucu, gambar kartunnya tidak pernah luntur kalau dicuci.", by: "Pelanggan Google Maps" },
    { text: "Hasil bagus sesuai pesanan, kaosnya juga tebal bukan yg tipis, pengerjaan juga cepat, yg bikin suka bisa pesan satuan ga harus lusinan atau borongan.", by: "Pelanggan Google Maps" }
  ]
};
