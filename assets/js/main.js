/* ==========================================================
   ZAURA CLOTH — Logika bersama (header, katalog, motion, dll.)
   ========================================================== */
(function () {
  "use strict";
  document.documentElement.classList.add("js");

  var B = window.ZC;
  var BIZ = B.business;
  var SHOW_PRICES = !!B.flags.showPrices;
  var ICON = "https://cdn.jsdelivr.net/npm/simple-icons@11.14.0/icons/";
  var REDUCED = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var HAS_GSAP = typeof window.gsap !== "undefined";
  var FINE_POINTER = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
  var DESKTOP = window.matchMedia("(min-width: 981px)").matches;

  /* ---------- Util ---------- */
  function esc(s) {
    return String(s == null ? "" : s).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }
  function waUrl(msg) {
    return "https://wa.me/" + BIZ.wa + "?text=" + encodeURIComponent(msg);
  }
  function $(sel, root) { return (root || document).querySelector(sel); }
  function $$(sel, root) { return Array.prototype.slice.call((root || document).querySelectorAll(sel)); }
  function getCat(key) {
    return B.categories.filter(function (c) { return c.key === key; })[0] || { name: key };
  }
  function productColors(p) {
    return p.colors === "combed" ? B.combedColors : (p.colors || []);
  }
  function imgPath(p, i) {
    var n = p.images[i || 0];
    return "assets/products/" + p.slug + "/" + n + ".webp";
  }
  function priceLine(p) {
    if (SHOW_PRICES && p.priceText) {
      return '<p class="price">' + esc(p.priceText) + "</p>";
    }
    return '<p class="price muted">Konsultasikan harga</p>';
  }
  function findProduct(slug) {
    return B.products.filter(function (p) { return p.slug === slug; })[0];
  }
  function socialIcon(name) {
    return ICON + name + ".svg";
  }

  /* ---------- Social & chrome ---------- */
  var SOCIALS = [
    { label: "WhatsApp", icon: "whatsapp", href: function () { return waUrl("Halo ZAURA CLOTH, saya ingin bertanya mengenai produk."); } },
    { label: "Instagram", icon: "instagram", href: function () { return BIZ.instagram; } },
    { label: "Facebook", icon: "facebook", href: function () { return BIZ.facebook; } },
    { label: "TikTok", icon: "tiktok", href: function () { return BIZ.tiktok; } },
    { label: "Shopee", icon: "shopee", href: function () { return BIZ.shopee; } },
    { label: "Google Maps", icon: "googlemaps", href: function () { return BIZ.maps; } },
    { label: "Email", icon: "gmail", href: function () { return "mailto:" + BIZ.email; } }
  ];

  function socialRow(extraClass) {
    return '<div class="social-row ' + (extraClass || "") + '">' + SOCIALS.map(function (s) {
      var external = s.icon !== "gmail" ? ' target="_blank" rel="noopener"' : "";
      return '<a class="social-link magnetic" href="' + esc(s.href()) + '"' + external +
        ' aria-label="' + esc(s.label) + ' ZAURA CLOTH" title="' + esc(s.label) + '">' +
        '<img src="' + socialIcon(s.icon) + '" alt="" width="20" height="20" loading="lazy"></a>';
    }).join("") + "</div>";
  }

  var NAV = [
    { href: "index.html", label: "Beranda", page: "home" },
    { href: "katalog.html", label: "Katalog", page: "catalog" },
    { href: "custom-order.html", label: "Custom Order", page: "custom" },
    { href: "portofolio.html", label: "Portofolio", page: "portfolio" },
    { href: "tentang.html", label: "Tentang Kami", page: "about" },
    { href: "panduan-ukuran.html", label: "Panduan & FAQ", page: "guide" },
    { href: "kontak.html", label: "Kontak", page: "contact" }
  ];

  function renderHeader(page) {
    var host = $("#chrome-header");
    if (!host) return;
    var links = NAV.map(function (n) {
      var cur = n.page === page ? ' aria-current="page"' : "";
      return '<li><a href="' + n.href + '"' + cur + ">" + esc(n.label) + "</a></li>";
    }).join("");
    host.outerHTML =
      '<header class="site-header" id="siteHeader">' +
        '<a href="index.html" class="brand" aria-label="ZAURA CLOTH — Beranda"><img src="assets/img/logo-white.png" alt="ZAURA CLOTH" width="150" height="30"></a>' +
        '<nav aria-label="Navigasi utama"><ul class="nav-links">' + links + "</ul></nav>" +
        '<div class="nav-cta">' +
          '<a class="btn btn-lime btn-sm btn-desk magnetic" href="' + esc(waUrl("Halo ZAURA CLOTH, saya ingin memesan.")) + '" target="_blank" rel="noopener">Pesan Sekarang</a>' +
          '<button class="menu-btn" type="button" aria-expanded="false" aria-controls="mobileMenu" aria-label="Buka menu"><span></span><span></span><span></span></button>' +
        "</div>" +
      "</header>" +
      '<div class="mobile-menu" id="mobileMenu" aria-hidden="true">' +
        NAV.map(function (n) { return '<a class="mm-link" href="' + n.href + '">' + esc(n.label) + "</a>"; }).join("") +
        socialRow() +
      "</div>";
  }

  function renderFooter() {
    var host = $("#chrome-footer");
    if (!host) return;
    host.outerHTML =
      '<footer class="site-footer">' +
        '<div class="container">' +
          '<div class="footer-grid">' +
            '<div class="footer-brand"><img src="assets/img/logo-white.png" alt="ZAURA CLOTH" width="180" height="56">' +
              '<p>' + esc(B.business.tagline) + ". Pesanan satuan maupun partai, konsultasi desain bersama kami.</p></div>" +
            "<div><h4>HALAMAN</h4><ul>" +
              '<li><a href="index.html">Beranda</a></li><li><a href="katalog.html">Katalog</a></li>' +
              '<li><a href="custom-order.html">Custom Order</a></li><li><a href="portofolio.html">Portofolio</a></li>' +
              '<li><a href="tentang.html">Tentang Kami</a></li><li><a href="panduan-ukuran.html">Panduan Ukuran & FAQ</a></li>' +
              '<li><a href="kontak.html">Kontak & Lokasi</a></li></ul></div>' +
            "<div><h4>KONTAK</h4><ul>" +
              '<li><a href="' + esc(waUrl("Halo ZAURA CLOTH, saya ingin bertanya.")) + '" target="_blank" rel="noopener">WhatsApp ' + esc(BIZ.waDisplay) + "</a></li>" +
              '<li><a href="mailto:' + esc(BIZ.email) + '">' + esc(BIZ.email) + "</a></li>" +
              "<li>" + esc(BIZ.address) + "</li>" +
              "<li>" + esc(BIZ.hours) + "</li></ul></div>" +
          "</div>" +
          '<div class="mt-lg">' + socialRow() + "</div>" +
          '<div class="footer-bottom"><span>© ' + new Date().getFullYear() + " ZAURA CLOTH. Hak cipta dilindungi.</span><span>Sablon · Konveksi · Custom Apparel</span></div>" +
        "</div>" +
      "</footer>" +
      '<a class="wa-float magnetic" href="' + esc(waUrl("Halo ZAURA CLOTH, saya ingin konsultasi pesanan.")) + '" target="_blank" rel="noopener" aria-label="Chat WhatsApp ZAURA CLOTH">' +
        '<img src="' + socialIcon("whatsapp") + '" alt="" width="30" height="30"><span class="tip">Chat kami di WhatsApp</span></a>' +
      '<div class="modal" id="quickModal" role="dialog" aria-modal="true" aria-labelledby="qmTitle"><div class="modal-box" id="qmBox"></div></div>' +
      '<div class="lightbox" id="lightbox" role="dialog" aria-modal="true" aria-label="Galeri foto"></div>';
  }

  function fillLinks() {
    var map = {
      wa: function () { return waUrl("Halo ZAURA CLOTH, saya ingin bertanya."); },
      maps: function () { return BIZ.maps; },
      shopee: function () { return BIZ.shopee; },
      ig: function () { return BIZ.instagram; },
      fb: function () { return BIZ.facebook; },
      tt: function () { return BIZ.tiktok; },
      email: function () { return "mailto:" + BIZ.email; }
    };
    $$("[data-fill]").forEach(function (el) {
      var k = el.getAttribute("data-fill");
      if (map[k]) el.setAttribute("href", map[k]());
      if (k === "phone") { el.textContent = BIZ.waDisplay; el.setAttribute("href", map.wa()); }
      if (k === "address") el.textContent = BIZ.address;
      if (k === "hours") el.textContent = BIZ.hours;
      if (k === "mapsEmbed") el.setAttribute("src", BIZ.mapsEmbed);
      if (k === "rating") el.textContent = BIZ.rating;
      if (k === "reviews") el.textContent = BIZ.reviewCount;
    });
  }

  /* ---------- Header behaviour & mobile menu ---------- */
  function setupHeader() {
    var header = $("#siteHeader");
    var btn = $(".menu-btn");
    var menu = $("#mobileMenu");
    if (!header || !btn || !menu) return;

    function onScroll() { header.classList.toggle("scrolled", window.scrollY > 40); }
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    function setMenu(open) {
      btn.setAttribute("aria-expanded", String(open));
      btn.setAttribute("aria-label", open ? "Tutup menu" : "Buka menu");
      menu.classList.toggle("open", open);
      menu.setAttribute("aria-hidden", String(!open));
      document.body.classList.toggle("nav-open", open);
      if (open && HAS_GSAP && !REDUCED) {
        gsap.fromTo($$(".mm-link, .mobile-menu .social-row", menu),
          { y: 26, opacity: 0 }, { y: 0, opacity: 1, stagger: 0.06, duration: 0.6, ease: "power3.out", delay: 0.25 });
      }
    }
    btn.addEventListener("click", function () { setMenu(btn.getAttribute("aria-expanded") !== "true"); });
    document.addEventListener("keydown", function (e) { if (e.key === "Escape") setMenu(false); });
    $$(".mm-link", menu).forEach(function (a) { a.addEventListener("click", function () { setMenu(false); }); });
  }

  /* ---------- Page transition veil ---------- */
  function setupVeil() {
    var veil = document.createElement("div");
    veil.className = "page-veil";
    document.body.appendChild(veil);
    if (HAS_GSAP && !REDUCED) {
      gsap.fromTo(veil, { scaleY: 1 }, { scaleY: 0, duration: 0.9, ease: "power4.inOut", delay: 0.05 });
    } else {
      veil.style.display = "none";
    }
    document.addEventListener("click", function (e) {
      var a = e.target.closest && e.target.closest("a");
      if (!a || !a.href) return;
      if (a.target === "_blank" || a.hasAttribute("download")) return;
      if (a.protocol !== "http:" && a.protocol !== "https:") return;
      if (a.origin !== window.location.origin) return;
      if (a.pathname === window.location.pathname && a.search === window.location.search && a.hash) return;
      if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.button !== 0) return;
      if (!HAS_GSAP || REDUCED) return;
      e.preventDefault();
      gsap.to(veil, {
        scaleY: 1, duration: 0.5, ease: "power3.inOut", transformOrigin: "bottom",
        onComplete: function () { window.location.href = a.href; }
      });
    });
    window.addEventListener("pageshow", function (ev) { if (ev.persisted) veil.style.display = "none"; });
  }

  /* ---------- Reveal on scroll (tanpa ketergantungan GSAP) ---------- */
  function setupReveal() {
    var els = $$(".reveal");
    if (!("IntersectionObserver" in window) || REDUCED) {
      els.forEach(function (el) { el.classList.add("in"); });
      return;
    }
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) { en.target.classList.add("in"); io.unobserve(en.target); }
      });
    }, { rootMargin: "0px 0px -8% 0px", threshold: 0.08 });
    els.forEach(function (el) { io.observe(el); });
  }

  /* ---------- Magnetic buttons (pointer halus saja) ---------- */
  function setupMagnetic() {
    if (!FINE_POINTER || REDUCED || !HAS_GSAP) return;
    $$(".magnetic").forEach(function (el) {
      el.addEventListener("mousemove", function (e) {
        var r = el.getBoundingClientRect();
        var dx = e.clientX - (r.left + r.width / 2);
        var dy = e.clientY - (r.top + r.height / 2);
        gsap.to(el, { x: dx * 0.22, y: dy * 0.28, duration: 0.4, ease: "power3.out" });
      });
      el.addEventListener("mouseleave", function () {
        gsap.to(el, { x: 0, y: 0, duration: 0.6, ease: "elastic.out(1, 0.5)" });
      });
    });
  }

  /* ---------- Lightbox ---------- */
  var LB = { list: [], i: 0 };
  function lbRender() {
    var lb = $("#lightbox");
    if (!lb || !LB.list.length) return;
    var item = LB.list[LB.i];
    lb.innerHTML =
      '<button class="lb-btn lb-close" type="button" aria-label="Tutup galeri">✕</button>' +
      (LB.list.length > 1 ? '<button class="lb-btn lb-prev" type="button" aria-label="Foto sebelumnya">‹</button><button class="lb-btn lb-next" type="button" aria-label="Foto berikutnya">›</button>' : "") +
      '<img src="' + esc(item.src) + '" alt="' + esc(item.alt) + '">' +
      '<div class="lb-cap">' + esc(item.alt) + " — " + (LB.i + 1) + " / " + LB.list.length + "</div>";
    $(".lb-close", lb).onclick = lbClose;
    var pv = $(".lb-prev", lb), nx = $(".lb-next", lb);
    if (pv) pv.onclick = function () { LB.i = (LB.i - 1 + LB.list.length) % LB.list.length; lbRender(); };
    if (nx) nx.onclick = function () { LB.i = (LB.i + 1) % LB.list.length; lbRender(); };
    lb.onclick = function (e) { if (e.target === lb) lbClose(); };
  }
  function lbOpen(list, i) {
    LB.list = list; LB.i = i || 0;
    var lb = $("#lightbox"); if (!lb) return;
    lbRender(); lb.classList.add("open");
    document.body.classList.add("nav-open");
  }
  function lbClose() {
    var lb = $("#lightbox"); if (!lb) return;
    lb.classList.remove("open");
    document.body.classList.remove("nav-open");
  }
  document.addEventListener("keydown", function (e) {
    var lb = $("#lightbox");
    if (!lb || !lb.classList.contains("open")) return;
    if (e.key === "Escape") lbClose();
    if (e.key === "ArrowRight" && LB.list.length > 1) { LB.i = (LB.i + 1) % LB.list.length; lbRender(); }
    if (e.key === "ArrowLeft" && LB.list.length > 1) { LB.i = (LB.i - 1 + LB.list.length) % LB.list.length; lbRender(); }
  });

  /* ---------- Product card ---------- */
  function cardHtml(p, opts) {
    opts = opts || {};
    var cat = getCat(p.cat);
    var alt = p.images[1] ? '<img class="alt" src="' + imgPath(p, 1) + '" alt="" loading="lazy">' : "";
    var quick = opts.quick ? '<button class="quick" type="button" data-quick="' + p.slug + '">Quick view</button>' : "";
    return (
      '<article class="p-card reveal' + (opts.featured ? " featured" : "") + '">' +
        '<span class="tag">' + esc(cat.name) + "</span>" +
        '<a class="media" href="produk.html?p=' + p.slug + '" aria-label="Lihat detail ' + esc(p.name) + '">' +
          '<img class="main" src="' + imgPath(p, 0) + '" alt="' + esc(p.name) + '" loading="lazy">' + alt +
        "</a>" + quick +
        '<div class="info">' +
          '<h3><a href="produk.html?p=' + p.slug + '">' + esc(p.name) + "</a></h3>" +
          '<p class="meta">' + esc(p.short) + "</p>" +
          priceLine(p) +
          '<div class="actions">' +
            '<a class="btn btn-dark btn-sm" href="produk.html?p=' + p.slug + '">Detail</a>' +
            '<a class="btn btn-ghost btn-sm" href="' + esc(waUrl("Halo ZAURA CLOTH, saya ingin bertanya mengenai produk " + p.name + ". Mohon informasi desain, ukuran, dan harganya.")) + '" target="_blank" rel="noopener">Tanya Produk</a>' +
          "</div>" +
        "</div>" +
      "</article>"
    );
  }

  /* ---------- Katalog ---------- */
  function initCatalog() {
    var grid = $("#productGrid");
    if (!grid) return;
    var chipsHost = $("#catChips"), search = $("#search"), sortSel = $("#sortSel"), colorSel = $("#colorSel"), count = $("#resultCount");
    var params = new URLSearchParams(window.location.search);
    var state = { cat: params.get("kategori") || "all", q: params.get("q") || "", sort: "default", color: "all" };
    if (search) search.value = state.q;

    chipsHost.innerHTML =
      '<button class="chip" type="button" data-cat="all" aria-pressed="false">Semua</button>' +
      B.categories.map(function (c) {
        return '<button class="chip" type="button" data-cat="' + c.key + '" aria-pressed="false">' + esc(c.name) + "</button>";
      }).join("");

    var colorSet = {};
    B.products.forEach(function (p) { productColors(p).forEach(function (c) { colorSet[c] = true; }); });
    colorSel.innerHTML = '<option value="all">Semua warna</option>' +
      Object.keys(colorSet).sort().map(function (c) { return '<option value="' + esc(c) + '">' + esc(c) + "</option>"; }).join("");

    function syncChips() {
      $$(".chip", chipsHost).forEach(function (b) { b.setAttribute("aria-pressed", String(b.getAttribute("data-cat") === state.cat)); });
    }

    function render() {
      var q = state.q.trim().toLowerCase();
      var list = B.products.filter(function (p) {
        if (state.cat !== "all" && p.cat !== state.cat) return false;
        if (state.color !== "all" && productColors(p).indexOf(state.color) === -1) return false;
        if (q) {
          var hay = (p.name + " " + p.desc + " " + p.bahan + " " + getCat(p.cat).name).toLowerCase();
          if (hay.indexOf(q) === -1) return false;
        }
        return true;
      });
      if (state.sort === "name") list.sort(function (a, b) { return a.name.localeCompare(b.name); });
      if (state.sort === "cat") list.sort(function (a, b) { return getCat(a.cat).name.localeCompare(getCat(b.cat).name) || a.name.localeCompare(b.name); });

      var useFeatured = state.cat === "all" && !q && state.color === "all" && state.sort === "default";
      if (!list.length) {
        grid.innerHTML = '<div class="empty-state"><p>Produk tidak ditemukan untuk pencarian ini.</p><button class="btn btn-dark btn-sm" type="button" id="resetBtn">Reset filter</button></div>';
        var rb = $("#resetBtn"); if (rb) rb.onclick = reset;
      } else {
        grid.innerHTML = list.map(function (p, i) {
          return cardHtml(p, { quick: true, featured: useFeatured && i === 0 });
        }).join("");
      }
      count.textContent = list.length + " produk";
      syncChips();
      setupReveal();
      if (HAS_GSAP && !REDUCED) {
        gsap.fromTo(grid.children, { y: 24, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6, stagger: 0.04, ease: "power3.out", clearProps: "transform" });
      }
      // quick view handlers
      $$("[data-quick]", grid).forEach(function (b) {
        b.addEventListener("click", function () { openQuick(b.getAttribute("data-quick")); });
      });
    }

    function reset() {
      state = { cat: "all", q: "", sort: "default", color: "all" };
      if (search) search.value = "";
      sortSel.value = "default"; colorSel.value = "all";
      render();
    }

    chipsHost.addEventListener("click", function (e) {
      var b = e.target.closest(".chip"); if (!b) return;
      state.cat = b.getAttribute("data-cat"); render();
    });
    search.addEventListener("input", function () { state.q = search.value; render(); });
    sortSel.addEventListener("change", function () { state.sort = sortSel.value; render(); });
    colorSel.addEventListener("change", function () { state.color = colorSel.value; render(); });
    $("#resetAll") && ($("#resetAll").onclick = reset);
    render();
  }

  function openQuick(slug) {
    var p = findProduct(slug); if (!p) return;
    var modal = $("#quickModal"), box = $("#qmBox");
    var cat = getCat(p.cat);
    box.innerHTML =
      '<button class="modal-close" type="button" aria-label="Tutup">✕</button>' +
      '<div class="m-img"><img src="' + imgPath(p, 0) + '" alt="' + esc(p.name) + '"></div>' +
      '<div class="m-info">' +
        '<span class="eyebrow">' + esc(cat.name) + "</span>" +
        '<h3 id="qmTitle">' + esc(p.name) + "</h3>" +
        "<p>" + esc(p.desc) + "</p>" +
        '<p><strong>Bahan:</strong> ' + esc(p.bahan) + "</p>" +
        priceLine(p) +
        '<div class="btn-row">' +
          '<a class="btn btn-lime" href="' + esc(waUrl("Halo ZAURA CLOTH, saya tertarik dengan produk " + p.name + ". Saya ingin konsultasi mengenai desain, ukuran, dan harga. Mohon informasinya.")) + '" target="_blank" rel="noopener">Pesan via WhatsApp</a>' +
          '<a class="btn btn-ghost" href="produk.html?p=' + p.slug + '">Lihat detail</a>' +
        "</div>" +
      "</div>";
    modal.classList.add("open");
    document.body.classList.add("nav-open");
    $(".modal-close", box).onclick = closeQuick;
  }
  function closeQuick() {
    var modal = $("#quickModal"); if (!modal) return;
    modal.classList.remove("open");
    document.body.classList.remove("nav-open");
  }
  document.addEventListener("click", function (e) {
    var m = $("#quickModal");
    if (m && m.classList.contains("open") && e.target === m) closeQuick();
  });
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") closeQuick();
  });

  /* ---------- Product detail ---------- */
  function initProduct() {
    var host = $("#productApp");
    if (!host) return;
    var slug = new URLSearchParams(window.location.search).get("p");
    var p = findProduct(slug);
    if (!p) {
      host.innerHTML = '<div class="container center" style="padding:160px 0 120px"><span class="eyebrow">Produk tidak ditemukan</span><h1 style="font-size:clamp(40px,7vw,80px);margin-top:18px">PRODUK TIDAK ADA</h1><p class="lead" style="margin:20px auto 30px">Silakan pilih produk dari katalog kami.</p><a class="btn btn-dark" href="katalog.html">Ke Katalog</a></div>';
      return;
    }
    var cat = getCat(p.cat);
    document.title = p.name + " — ZAURA CLOTH";
    var md = document.querySelector('meta[name="description"]');
    if (md) md.setAttribute("content", p.short + " " + p.desc.slice(0, 120));

    var colors = productColors(p);
    var state = { color: "", size: "", img: 0 };

    var thumbs = p.images.map(function (n, i) {
      return '<button type="button" data-i="' + i + '" aria-current="' + (i === 0) + '" aria-label="Foto ' + (i + 1) + '"><img src="' + imgPath(p, i) + '" alt="" loading="lazy"></button>';
    }).join("");

    var swatches = colors.length ? (
      '<div class="opt-group"><span class="lbl">Pilihan warna</span><div class="swatches" id="swatches">' +
        colors.map(function (c) { return '<button type="button" aria-pressed="false" data-c="' + esc(c) + '">' + esc(c) + "</button>"; }).join("") +
      "</div></div>") : "";

    var sizes = p.sizes && p.sizes.length ? (
      '<div class="opt-group"><span class="lbl">Pilihan ukuran</span><div class="size-list" id="sizeList">' +
        p.sizes.map(function (s) { return '<button type="button" aria-pressed="false" data-s="' + esc(s) + '">' + esc(s) + "</button>"; }).join("") +
      "</div></div>") : "";

    var features = p.features ? '<ul class="feature-list">' + p.features.map(function (f) { return "<li>✦ " + esc(f) + "</li>"; }).join("") + "</ul>" : "";
    var chartLink = p.chart ? '<p class="pd-note">Panduan ukuran tersedia di <a href="panduan-ukuran.html" style="font-weight:700;border-bottom:1px solid">halaman Panduan Ukuran</a>.</p>' : "";

    host.innerHTML =
      '<div class="container pd-wrap">' +
        '<div class="pd-gallery">' +
          '<div class="pd-main" id="pdMain" role="button" tabindex="0" aria-label="Perbesar foto"><img id="pdImg" src="' + imgPath(p, 0) + '" alt="' + esc(p.name) + '"></div>' +
          (p.images.length > 1 ? '<div class="pd-thumbs" id="pdThumbs">' + thumbs + "</div>" : "") +
        "</div>" +
        '<div class="pd-info">' +
          '<a class="cat-line" href="katalog.html?kategori=' + p.cat + '" style="text-decoration:underline;text-underline-offset:4px">' + esc(cat.name) + "</a>" +
          "<h1>" + esc(p.name) + "</h1>" +
          (SHOW_PRICES && p.priceText ? '<p class="pd-price">' + esc(p.priceText) + "</p>" : '<p class="pd-price muted">Konsultasikan harga</p>') +
          (p.priceNote ? '<p class="pd-note">' + esc(p.priceNote) + "</p>" : "") +
          '<p class="desc">' + esc(p.desc) + "</p>" +
          '<p class="pd-note"><strong>Bahan:</strong> ' + esc(p.bahan) + "</p>" +
          features +
          swatches + sizes +
          (p.sizeNote ? '<p class="pd-note">' + esc(p.sizeNote) + "</p>" : "") +
          (p.note ? '<p class="pd-note">' + esc(p.note) + "</p>" : "") +
          chartLink +
          '<div class="pd-cta">' +
            '<a class="btn btn-lime" id="ctaOrder" href="#" target="_blank" rel="noopener">Pesan via WhatsApp <span class="arrow">→</span></a>' +
            '<a class="btn btn-ghost" id="ctaAsk" href="#" target="_blank" rel="noopener">Tanya Produk</a>' +
            '<a class="btn btn-ghost" href="katalog.html?kategori=' + p.cat + '">Kembali ke Katalog</a>' +
          "</div>" +
          '<p class="pd-tip" id="pdTip">Pilih warna dan ukuran (jika ada), lalu tekan tombol WhatsApp. Pesan sudah terisi otomatis.</p>' +
        "</div>" +
      "</div>" +
      '<section class="section" style="padding-top:40px"><div class="container"><div class="section-head reveal"><span class="eyebrow">Produk serupa</span><h2>Lanjut Jelajahi</h2></div>' +
        '<div class="catalog-grid" id="relatedGrid"></div>' +
        '<div class="center mt-lg"><a class="btn btn-dark" href="katalog.html">Lihat Semua Produk</a></div>' +
      "</div></section>";

    function buildMsg(kind) {
      var c = state.color || "Belum dipilih";
      var s = p.sizes && p.sizes.length ? (state.size || "Belum dipilih") : "-";
      if (kind === "order") {
        return "Halo ZAURA CLOTH, saya tertarik dengan produk " + p.name + ".\n\n" +
          "Warna: " + c + "\nUkuran: " + s + "\n\n" +
          "Saya ingin memesan. Mohon informasi harga dan proses pemesanannya. Terima kasih.";
      }
      return "Halo ZAURA CLOTH, saya ingin bertanya mengenai produk " + p.name + ".\n\n" +
        "Warna: " + c + "\nUkuran: " + s + "\n\n" +
        "Saya ingin konsultasi mengenai desain, ukuran, dan harga. Mohon informasinya. Terima kasih.";
    }
    function updateLinks() {
      $("#ctaOrder").href = waUrl(buildMsg("order"));
      $("#ctaAsk").href = waUrl(buildMsg("ask"));
    }
    updateLinks();

    // gallery
    var mainImg = $("#pdImg");
    function showImg(i) {
      state.img = i;
      mainImg.classList.add("swap");
      setTimeout(function () {
        mainImg.src = imgPath(p, i);
        mainImg.classList.remove("swap");
      }, 180);
      $$("#pdThumbs button").forEach(function (b, k) { b.setAttribute("aria-current", String(k === i)); });
    }
    var thumbsHost = $("#pdThumbs");
    if (thumbsHost) thumbsHost.addEventListener("click", function (e) {
      var b = e.target.closest("button"); if (!b) return;
      showImg(Number(b.getAttribute("data-i")));
    });
    var pdMain = $("#pdMain");
    function openMain() {
      lbOpen(p.images.map(function (n, i) { return { src: imgPath(p, i), alt: p.name + " " + (i + 1) }; }), state.img);
    }
    pdMain.addEventListener("click", openMain);
    pdMain.addEventListener("keydown", function (e) { if (e.key === "Enter") openMain(); });

    // options
    var sw = $("#swatches");
    if (sw) sw.addEventListener("click", function (e) {
      var b = e.target.closest("button"); if (!b) return;
      var c = b.getAttribute("data-c");
      state.color = state.color === c ? "" : c;
      $$("button", sw).forEach(function (x) { x.setAttribute("aria-pressed", String(x.getAttribute("data-c") === state.color)); });
      updateLinks();
    });
    var sl = $("#sizeList");
    if (sl) sl.addEventListener("click", function (e) {
      var b = e.target.closest("button"); if (!b) return;
      var s = b.getAttribute("data-s");
      state.size = state.size === s ? "" : s;
      $$("button", sl).forEach(function (x) { x.setAttribute("aria-pressed", String(x.getAttribute("data-s") === state.size)); });
      updateLinks();
    });

    // related
    var related = B.products.filter(function (x) { return x.slug !== p.slug; });
    related.sort(function (a, b) { return (b.cat === p.cat) - (a.cat === p.cat); });
    $("#relatedGrid").innerHTML = related.slice(0, 4).map(function (x) { return cardHtml(x, {}); }).join("");
    setupReveal();
    if (HAS_GSAP && !REDUCED) {
      gsap.fromTo(".pd-gallery", { opacity: 0, x: -30 }, { opacity: 1, x: 0, duration: 1, ease: "power3.out" });
      gsap.fromTo(".pd-info > *", { opacity: 0, y: 24 }, { opacity: 1, y: 0, duration: 0.8, stagger: 0.06, ease: "power3.out", delay: 0.15 });
    }
  }

  /* ---------- Form pesan kustom ---------- */
  function initCustomOrder() {
    var form = $("#orderForm");
    if (!form) return;
    var jenis = $("#jenis");
    var types = ["Kaos Sablon (Custom)", "Kaos Polos Combed 24s", "Kaos Polos Combed 30s", "Jersey Custom Full Print",
      "Hoodie / Sweater", "Kaos Polo", "Kemeja Kerja", "Topi Custom", "Lanyard Custom", "Lainnya (tulis di catatan)"];
    jenis.innerHTML = '<option value="">Pilih jenis produk</option>' + types.map(function (t) { return "<option>" + esc(t) + "</option>"; }).join("");
    var pre = new URLSearchParams(window.location.search).get("produk");
    if (pre) {
      var match = types.filter(function (t) { return t.toLowerCase().indexOf(pre.toLowerCase()) !== -1; })[0];
      if (match) jenis.value = match;
    }

    /* Tabel harga sablon: hanya dirender jika flags.showPrices = true */
    if (SHOW_PRICES && $("#sablonBox")) {
      var qty = B.sablonQtyLabels;
      $("#sablonBox").innerHTML = Object.keys(B.sablonPrices).map(function (bahan) {
        var rows = B.sablonPrices[bahan].map(function (r) {
          return "<tr><th>" + esc(r.ukuran) + "</th>" + r.p.map(function (v) { return "<td>Rp" + v + ".000</td>"; }).join("") + "</tr>";
        }).join("");
        return '<div class="table-wrap" style="max-width:820px;width:100%"><table class="size-table"><caption style="padding:14px;font-weight:800;text-align:center">Kaos + Sablon · ' + esc(bahan) + "</caption><thead><tr><th>Ukuran cetak</th>" +
          qty.map(function (q) { return "<th>" + esc(q) + "</th>"; }).join("") + "</tr></thead><tbody>" + rows + "</tbody></table></div>";
      }).join("");
    }

    var file = $("#refFile"), prev = $("#refPreview");
    file.addEventListener("change", function () {
      prev.innerHTML = "";
      Array.prototype.slice.call(file.files || []).slice(0, 6).forEach(function (f) {
        if (!/^image\//.test(f.type)) return;
        var img = document.createElement("img");
        img.alt = "Preview referensi: " + f.name;
        img.src = URL.createObjectURL(f);
        prev.appendChild(img);
      });
    });

    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var v = function (id) { return ($("#" + id).value || "").trim(); };
      var nama = v("nama");
      if (!nama || !jenis.value) {
        var msg = $("#formMsg");
        msg.textContent = "Mohon isi nama dan jenis produk terlebih dahulu.";
        msg.style.color = "#b42318";
        (nama ? jenis : $("#nama")).focus();
        return;
      }
      var mode = (form.querySelector('input[name="mode"]:checked') || {}).value || "Satuan";
      var text =
        "Halo ZAURA CLOTH, saya ingin berkonsultasi pesanan.\n\n" +
        "Nama: " + nama + "\n" +
        "Jenis produk: " + jenis.value + "\n" +
        "Pemesanan: " + mode + "\n" +
        "Jumlah pesanan: " + (v("jumlah") || "-") + "\n" +
        "Ukuran: " + (v("ukuran") || "-") + "\n" +
        "Warna: " + (v("warna") || "-") + "\n" +
        "Kebutuhan desain: " + (v("desain") || "-") + "\n" +
        "Catatan: " + (v("catatan") || "-") + "\n\n" +
        "Mohon informasi harga dan proses pemesanannya. Terima kasih.";
      window.open(waUrl(text), "_blank", "noopener");
      var out = $("#formMsg");
      out.style.color = "#1b7f3b";
      out.textContent = "Pesan sudah disiapkan di WhatsApp. Silakan tekan kirim di aplikasi. Jika ada foto referensi, lampirkan langsung di chat karena file ini tidak terkirim otomatis ke server kami.";
    });
  }

  /* ---------- Portofolio ---------- */
  function initPortfolio() {
    var grid = $("#masonry");
    if (!grid) return;
    var chipsHost = $("#pfChips");
    var items = [];
    B.products.forEach(function (p) {
      p.images.forEach(function (n, i) {
        items.push({ src: imgPath(p, i), alt: p.name + (p.images.length > 1 ? " — foto " + (i + 1) : ""), cat: p.cat, name: p.name });
      });
    });
    chipsHost.innerHTML = '<button class="chip" type="button" data-cat="all" aria-pressed="true">Semua</button>' +
      B.categories.map(function (c) { return '<button class="chip" type="button" data-cat="' + c.key + '" aria-pressed="false">' + esc(c.name) + "</button>"; }).join("");
    var current = items;
    function render(cat) {
      current = cat === "all" ? items : items.filter(function (it) { return it.cat === cat; });
      grid.innerHTML = current.map(function (it, i) {
        return '<button class="masonry-item reveal" type="button" data-i="' + i + '" aria-label="Perbesar ' + esc(it.alt) + '">' +
          '<img src="' + it.src + '" alt="' + esc(it.alt) + '" loading="lazy">' +
          '<span class="cap">' + esc(it.name) + "</span></button>";
      }).join("");
      $$(".chip", chipsHost).forEach(function (b) { b.setAttribute("aria-pressed", String(b.getAttribute("data-cat") === cat)); });
      $$(".masonry-item", grid).forEach(function (b) {
        b.addEventListener("click", function () {
          lbOpen(current.map(function (x) { return { src: x.src, alt: x.alt }; }), Number(b.getAttribute("data-i")));
        });
      });
      setupReveal();
      if (HAS_GSAP && !REDUCED) gsap.fromTo(grid.children, { opacity: 0, y: 26 }, { opacity: 1, y: 0, duration: .7, stagger: .05, ease: "power3.out", clearProps: "transform" });
    }
    chipsHost.addEventListener("click", function (e) {
      var b = e.target.closest(".chip"); if (b) render(b.getAttribute("data-cat"));
    });
    render("all");
  }

  /* ---------- Beranda: motion ---------- */
  function initHome() {
    var storyEl = $(".story");
    if (storyEl && (!HAS_GSAP || REDUCED || !DESKTOP)) storyEl.classList.add("is-static");
    if (!HAS_GSAP || REDUCED) {
      var pl0 = $("#preloader"); if (pl0) pl0.remove();
      var tr0 = $(".hscroll-track"); if (tr0) tr0.classList.add("mobile-scroll");
      setupReveal();
      setupQuotes();
      return;
    }
    gsap.registerPlugin(ScrollTrigger);

    /* Preloader */
    var pre = $("#preloader");
    var words = $$(".hero h1 .word");
    var heroTl = gsap.timeline({ defaults: { ease: "power4.out" } });
    if (pre) {
      var pl = gsap.timeline({ onComplete: function () { pre.remove(); } });
      pl.fromTo(".pl-logo", { scale: 0.86, opacity: 0 }, { scale: 1, opacity: 1, duration: 0.9, ease: "power3.out" })
        .fromTo(".pl-bar i", { scaleX: 0 }, { scaleX: 1, duration: 0.9, ease: "power2.inOut" }, "-=0.4")
        .to(pre, { clipPath: "inset(0% 0% 100% 0%)", duration: 0.9, ease: "power4.inOut", delay: 0.1 })
        .set(pre, { display: "none" });
      heroTl.delay(1.5);
    }
    heroTl
      .fromTo(words, { yPercent: 110 }, { yPercent: 0, duration: 1.1, stagger: 0.12 })
      .fromTo(".hero .eyebrow, .hero-sub, .hero-desc, .hero .btn-row", { opacity: 0, y: 24 }, { opacity: 1, y: 0, duration: 0.9, stagger: 0.1 }, "-=0.7")
      .fromTo(".hero-visual figure", { clipPath: "inset(100% 0% 0% 0%)" }, { clipPath: "inset(0% 0% 0% 0%)", duration: 1.2, stagger: 0.14, ease: "power4.inOut" }, "-=0.9")
      .fromTo(".hero-visual img", { scale: 1.25 }, { scale: 1, duration: 1.8, stagger: 0.14, ease: "power3.out" }, "<")
      .fromTo(".hero-stats div", { opacity: 0, y: 16 }, { opacity: 1, y: 0, duration: .7, stagger: .08 }, "-=1");

    gsap.to(".hero-bg", { yPercent: 14, ease: "none", scrollTrigger: { trigger: ".hero", start: "top top", end: "bottom top", scrub: true } });
    gsap.to(".hero-visual", { y: -40, ease: "none", scrollTrigger: { trigger: ".hero", start: "top top", end: "bottom top", scrub: true } });

    /* Horizontal category (desktop pin) */
    var track = $(".hscroll-track");
    if (track && DESKTOP) {
      var dist = function () { return Math.max(0, track.scrollWidth - window.innerWidth); };
      gsap.to(track, {
        x: function () { return -dist(); }, ease: "none",
        scrollTrigger: { trigger: ".hscroll", start: "top top", end: function () { return "+=" + dist(); }, pin: true, scrub: 0.8, invalidateOnRefresh: true, anticipatePin: 1 }
      });
    } else if (track) {
      track.classList.add("mobile-scroll");
    }

    /* Pinned story (desktop) */
    var stage = $(".story-stage");
    var figs = $$(".story-visual figure");
    var caps = $$(".story-captions .cap-item");
    var dots = $$(".story-dots i");
    function setActive(i) {
      figs.forEach(function (f, k) {
        gsap.to(f, { opacity: k === i ? 1 : 0, scale: k === i ? 1 : 0.88, duration: 0.6, ease: "power3.out", overwrite: true });
      });
      caps.forEach(function (c, k) { gsap.to(c, { opacity: k === i ? 1 : 0, y: k === i ? 0 : 14, duration: 0.5, overwrite: true }); });
      dots.forEach(function (d, k) { d.classList.toggle("on", k === i); });
    }
    if (stage && DESKTOP) {
      setActive(0);
      ScrollTrigger.create({
        trigger: ".story", start: "top top", end: "+=" + (figs.length * 90) + "%",
        pin: ".story-stage", scrub: true,
        onUpdate: function (self) {
          var i = Math.min(figs.length - 1, Math.floor(self.progress * figs.length));
          if (i !== setActive.cur) { setActive.cur = i; setActive(i); }
        }
      });
    }

    /* Video reveal */
    var vf = $(".video-frame");
    if (vf) {
      gsap.fromTo(vf, { clipPath: "inset(18% 18% 18% 18% round 22px)" }, {
        clipPath: "inset(0% 0% 0% 0% round 22px)", ease: "power3.out", duration: 1.2,
        scrollTrigger: { trigger: vf, start: "top 80%", once: true }
      });
    }

    /* Footer reveal */
    gsap.from(".site-footer .footer-grid > *", { opacity: 0, y: 30, stagger: 0.12, duration: 0.9, ease: "power3.out", scrollTrigger: { trigger: ".site-footer", start: "top 88%", once: true } });

    setupReveal();
    setupQuotes();
  }

  function setupQuotes() {
    var stage = $("#quoteStage");
    if (!stage) return;
    var items = B.testimonials;
    var starSvg = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2.5l2.9 6.2 6.8.8-5 4.7 1.3 6.7L12 17.5l-6 3.4 1.3-6.7-5-4.7 6.8-.8z"/></svg>';
    stage.innerHTML = items.map(function (t, i) {
      return '<figure class="quote' + (i === 0 ? " on" : "") + '" style="margin:0"><div class="stars" aria-label="Rating 5 dari 5">' + starSvg.repeat(5) + "</div>" +
        "<blockquote>“" + esc(t.text) + "”</blockquote><cite>" + esc(t.by) + "</cite></figure>";
    }).join("");
    var count = $("#quoteCount");
    var idx = 0;
    function show(i) {
      idx = (i + items.length) % items.length;
      $$(".quote", stage).forEach(function (q, k) { q.classList.toggle("on", k === idx); });
      if (count) count.textContent = String(idx + 1).padStart(2, "0") + " / " + String(items.length).padStart(2, "0");
    }
    var prev = $("#qPrev"), next = $("#qNext");
    if (prev) prev.onclick = function () { show(idx - 1); reset(); };
    if (next) next.onclick = function () { show(idx + 1); reset(); };
    var timer;
    function reset() {
      clearInterval(timer);
      if (!REDUCED) timer = setInterval(function () { show(idx + 1); }, 6500);
    }
    stage.addEventListener("mouseenter", function () { clearInterval(timer); });
    stage.addEventListener("mouseleave", reset);
    show(0);
    reset();
  }

  /* Video player (tanpa autoplay, tanpa audio otomatis) */
  function initVideo() {
    var v = $("#prodVideo");
    if (!v) return;
    var overlay = $("#vOverlay"), btnPlay = $("#vPlay"), btnMute = $("#vMute"), btnRestart = $("#vRestart");
    function toggle() {
      if (v.paused) v.play(); else v.pause();
    }
    function sync() {
      overlay.classList.toggle("hidden", !v.paused);
      btnPlay.innerHTML = v.paused ? "▶ Putar" : "❚❚ Jeda";
      btnMute.innerHTML = v.muted ? "🔇 Suara mati" : "🔊 Suara aktif";
    }
    overlay.addEventListener("click", toggle);
    v.addEventListener("click", toggle);
    v.addEventListener("play", sync);
    v.addEventListener("pause", sync);
    v.addEventListener("ended", sync);
    btnPlay.addEventListener("click", toggle);
    btnMute.addEventListener("click", function () { v.muted = !v.muted; sync(); });
    btnRestart.addEventListener("click", function () { v.currentTime = 0; v.play(); });
    sync();
  }

  /* ---------- Boot ---------- */
  function boot() {
    var page = document.body.getAttribute("data-page") || "";
    renderHeader(page);
    renderFooter();
    fillLinks();
    var sh = $("#socialHost"); if (sh) sh.innerHTML = socialRow();
    setupHeader();
    setupVeil();
    setupMagnetic();
    setupReveal();
    initCatalog();
    initProduct();
    initCustomOrder();
    initPortfolio();
    initVideo();
    if (page === "home") initHome();
    else if (HAS_GSAP && !REDUCED) {
      gsap.registerPlugin(ScrollTrigger);
      gsap.fromTo(".page-hero .eyebrow, .page-hero h1, .page-hero .lead", { opacity: 0, y: 28 }, { opacity: 1, y: 0, duration: 1, stagger: 0.12, ease: "power3.out", delay: 0.25 });
    }
  }
  /* Pengaman: preloader tidak boleh menutup situs bila terjadi error */
  setTimeout(function () { var pl = $("#preloader"); if (pl) pl.remove(); var v = $(".page-veil"); if (v && !HAS_GSAP) v.remove(); }, 4500);
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", boot);
  else boot();

  window.ZCUI = { waUrl: waUrl, lbOpen: lbOpen };
})();
