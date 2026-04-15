<!DOCTYPE html>
<html lang="tr">
<head>
<meta charset="UTF-8"/>
<meta name="viewport" content="width=device-width, initial-scale=1.0"/>
<title>Fiyat Etiketi Sistemi</title>
<link href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700;800;900&display=swap" rel="stylesheet"/>
<script src="https://cdnjs.cloudflare.com/ajax/libs/qrcodejs/1.0.0/qrcode.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/xlsx/0.18.5/xlsx.full.min.js"></script>
<style>
:root {
  --green: #16a34a;
  --green-dark: #15803d;
  --green-light: #dcfce7;
  --green-xlight: #f0fdf4;
  --blue: #1d4ed8;
  --blue-light: #dbeafe;
  --red: #dc2626;
  --red-light: #fee2e2;
  --orange: #ea580c;
  --orange-light: #fff7ed;
  --gray-50: #f9fafb;
  --gray-100: #f3f4f6;
  --gray-200: #e5e7eb;
  --gray-300: #d1d5db;
  --gray-400: #9ca3af;
  --gray-500: #6b7280;
  --gray-600: #4b5563;
  --gray-700: #374151;
  --gray-800: #1f2937;
  --gray-900: #111827;
  --shadow: 0 4px 24px rgba(0,0,0,0.10);
  --shadow-lg: 0 8px 40px rgba(0,0,0,0.14);
  --radius: 16px;
  --radius-sm: 10px;
}

* { box-sizing: border-box; margin: 0; padding: 0; }

body {
  font-family: 'Nunito', sans-serif;
  background: var(--gray-50);
  color: var(--gray-800);
  min-height: 100vh;
  font-size: 17px;
  line-height: 1.6;
}

/* ── HEADER ── */
.site-header {
  background: white;
  border-bottom: 3px solid var(--green);
  padding: 18px 32px;
  display: flex;
  align-items: center;
  gap: 16px;
  position: sticky;
  top: 0;
  z-index: 200;
  box-shadow: var(--shadow);
}
.header-logo {
  width: 52px; height: 52px;
  background: linear-gradient(135deg, var(--green), var(--green-dark));
  border-radius: 14px;
  display: flex; align-items: center; justify-content: center;
  font-size: 28px;
  flex-shrink: 0;
  box-shadow: 0 4px 12px rgba(22,163,74,0.35);
}
.header-title { font-size: 24px; font-weight: 900; color: var(--gray-900); line-height: 1.1; }
.header-sub { font-size: 14px; color: var(--green); font-weight: 700; }
.header-btns { margin-left: auto; display: flex; gap: 10px; }

/* ── LAYOUT ── */
.main-layout {
  display: grid;
  grid-template-columns: 340px 1fr;
  gap: 24px;
  padding: 28px 32px;
  max-width: 1300px;
  margin: 0 auto;
}
@media (max-width: 900px) {
  .main-layout { grid-template-columns: 1fr; padding: 16px; }
  .site-header { padding: 14px 20px; }
}

/* ── PANELS ── */
.panel {
  background: white;
  border-radius: var(--radius);
  box-shadow: var(--shadow);
  overflow: hidden;
}
.panel-header {
  background: var(--green);
  color: white;
  padding: 16px 22px;
  font-size: 18px;
  font-weight: 900;
  display: flex;
  align-items: center;
  gap: 10px;
}
.panel-body { padding: 22px; }

/* ── STEP NAV ── */
.step-nav {
  display: flex;
  border-bottom: 2px solid var(--gray-200);
  background: white;
  overflow-x: auto;
  border-radius: 0;
}
.step-btn {
  flex: 1;
  padding: 16px 8px 14px;
  border: none;
  background: transparent;
  cursor: pointer;
  font-family: 'Nunito', sans-serif;
  font-size: 14px;
  font-weight: 700;
  color: var(--gray-500);
  border-bottom: 3px solid transparent;
  transition: all 0.2s;
  min-width: 90px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
}
.step-btn.active {
  color: var(--green);
  border-bottom-color: var(--green);
  background: var(--green-xlight);
}
.step-btn:hover:not(.active) { background: var(--gray-50); color: var(--gray-700); }
.step-icon { font-size: 24px; line-height: 1; }
.step-num {
  width: 24px; height: 24px;
  background: var(--gray-200);
  border-radius: 50%;
  font-size: 12px;
  font-weight: 900;
  display: flex; align-items: center; justify-content: center;
  color: var(--gray-600);
}
.step-btn.active .step-num { background: var(--green); color: white; }
.step-btn.done .step-num { background: var(--green-dark); color: white; }

/* ── FORM CONTROLS ── */
.form-group { margin-bottom: 18px; }
.form-label {
  display: block;
  font-size: 16px;
  font-weight: 800;
  color: var(--gray-700);
  margin-bottom: 8px;
}
.form-input {
  width: 100%;
  padding: 14px 16px;
  font-size: 17px;
  font-family: 'Nunito', sans-serif;
  border: 2.5px solid var(--gray-300);
  border-radius: var(--radius-sm);
  background: white;
  color: var(--gray-900);
  transition: border 0.15s;
  outline: none;
}
.form-input:focus { border-color: var(--green); box-shadow: 0 0 0 4px rgba(22,163,74,0.12); }
.form-hint { font-size: 13px; color: var(--gray-500); margin-top: 5px; }
.form-row { display: grid; grid-template-columns: 1fr 1fr; gap: 14px; }
@media (max-width: 500px) { .form-row { grid-template-columns: 1fr; } }

/* ── BUTTONS ── */
.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 14px 24px;
  font-size: 17px;
  font-weight: 800;
  font-family: 'Nunito', sans-serif;
  border: none;
  border-radius: var(--radius-sm);
  cursor: pointer;
  transition: all 0.15s;
  text-decoration: none;
  white-space: nowrap;
}
.btn:hover { transform: translateY(-1px); box-shadow: 0 6px 20px rgba(0,0,0,0.15); }
.btn:active { transform: translateY(0); }
.btn-green { background: var(--green); color: white; }
.btn-green:hover { background: var(--green-dark); }
.btn-blue { background: var(--blue); color: white; }
.btn-gray { background: var(--gray-200); color: var(--gray-700); }
.btn-gray:hover { background: var(--gray-300); }
.btn-red { background: var(--red); color: white; }
.btn-outline { background: white; color: var(--green); border: 2.5px solid var(--green); }
.btn-sm { padding: 9px 16px; font-size: 15px; }
.btn-lg { padding: 18px 36px; font-size: 20px; }
.btn-full { width: 100%; }
.btn:disabled { opacity: 0.4; cursor: not-allowed; transform: none; }

/* ── PRESETS ── */
.preset-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 12px; }
.preset-card {
  border: 3px solid var(--gray-200);
  border-radius: var(--radius-sm);
  padding: 16px 14px;
  cursor: pointer;
  transition: all 0.15s;
  background: white;
  text-align: left;
}
.preset-card:hover { border-color: var(--green); background: var(--green-xlight); }
.preset-card.selected { border-color: var(--green); background: var(--green-xlight); }
.preset-card .preset-name { font-size: 16px; font-weight: 900; color: var(--gray-800); }
.preset-card .preset-size { font-size: 13px; color: var(--gray-500); margin-top: 3px; }
.preset-card .preset-icon { font-size: 28px; margin-bottom: 6px; }

/* ── PRODUCT LIST ── */
.product-list { display: flex; flex-direction: column; gap: 8px; margin-bottom: 16px; }
.product-item {
  border: 2.5px solid var(--gray-200);
  border-radius: var(--radius-sm);
  padding: 14px 16px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 12px;
  transition: all 0.15s;
  background: white;
}
.product-item:hover { border-color: var(--green); background: var(--green-xlight); }
.product-item.selected { border-color: var(--green); background: var(--green-xlight); }
.product-num {
  width: 36px; height: 36px;
  background: var(--gray-200);
  border-radius: 50%;
  display: flex; align-items: center; justify-content: center;
  font-weight: 900; font-size: 16px;
  flex-shrink: 0;
  color: var(--gray-600);
}
.product-item.selected .product-num { background: var(--green); color: white; }
.product-info { flex: 1; min-width: 0; }
.product-name { font-weight: 800; font-size: 15px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
.product-price { font-size: 13px; color: var(--gray-500); margin-top: 2px; }

/* ── PRODUCT NAV ── */
.product-nav {
  display: flex;
  align-items: center;
  gap: 12px;
  background: var(--green-xlight);
  border: 2px solid var(--green-light);
  border-radius: var(--radius-sm);
  padding: 12px 16px;
  margin-bottom: 16px;
}
.nav-arrow {
  width: 44px; height: 44px;
  background: white;
  border: 2.5px solid var(--green);
  border-radius: 10px;
  font-size: 20px;
  cursor: pointer;
  display: flex; align-items: center; justify-content: center;
  flex-shrink: 0;
  transition: all 0.15s;
  color: var(--green);
  font-weight: 900;
}
.nav-arrow:hover:not(:disabled) { background: var(--green); color: white; }
.nav-arrow:disabled { border-color: var(--gray-300); color: var(--gray-300); cursor: not-allowed; }
.nav-info { flex: 1; text-align: center; }
.nav-count { font-size: 14px; font-weight: 700; color: var(--green-dark); }
.nav-name { font-size: 15px; font-weight: 800; color: var(--gray-800); overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }

/* ── DROP ZONE ── */
.drop-zone {
  border: 3px dashed var(--gray-300);
  border-radius: var(--radius-sm);
  padding: 28px 20px;
  text-align: center;
  cursor: pointer;
  transition: all 0.2s;
  background: white;
  margin-bottom: 14px;
}
.drop-zone:hover, .drop-zone.drag-over { border-color: var(--green); background: var(--green-xlight); }
.drop-zone-icon { font-size: 42px; margin-bottom: 8px; }
.drop-zone-title { font-size: 18px; font-weight: 800; color: var(--green); margin-bottom: 4px; }
.drop-zone-sub { font-size: 14px; color: var(--gray-500); }

/* ── LABEL PREVIEW ── */
.preview-area {
  background: #ddd;
  border-radius: var(--radius);
  padding: 28px;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 220px;
  position: relative;
  overflow: auto;
}
.preview-wrapper { position: relative; }
.label-paper {
  background: white;
  border: 2px solid #555;
  position: relative;
  overflow: hidden;
  font-family: Arial, Helvetica, sans-serif;
  color: #000;
  box-shadow: 0 4px 24px rgba(0,0,0,0.2);
  flex-shrink: 0;
}
.label-elem {
  position: absolute;
  overflow: hidden;
  cursor: grab;
  transition: outline 0.1s;
  display: flex;
  align-items: center;
}
.label-elem:hover { outline: 1px dashed rgba(29,78,216,0.4); }
.label-elem.selected { outline: 2px solid #2563eb !important; z-index: 10; cursor: grabbing; }
.label-elem.editing-inline { cursor: text; }
.margin-guide {
  position: absolute;
  pointer-events: none;
  z-index: 50;
  border: 1px dashed rgba(29,78,216,0.25);
}

/* ── INLINE EDIT ── */
.inline-edit-input {
  width: 100%; height: 100%;
  font-family: Arial, Helvetica, sans-serif;
  border: 2px solid #2563eb;
  outline: none;
  padding: 2px 4px;
  background: rgba(219,234,254,0.9);
  color: #000;
  resize: none;
}

/* ── FONT EDITOR ── */
.font-row {
  background: var(--gray-50);
  border: 2px solid var(--gray-200);
  border-radius: var(--radius-sm);
  padding: 14px 16px;
  margin-bottom: 10px;
  transition: border-color 0.15s;
}
.font-row:hover { border-color: var(--green-light); }
.font-row-title {
  font-size: 16px;
  font-weight: 800;
  color: var(--gray-800);
  margin-bottom: 10px;
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
}
.font-row-title input {
  border: 1.5px solid var(--gray-300);
  border-radius: 6px;
  padding: 3px 8px;
  font-size: 14px;
  font-family: 'Nunito', sans-serif;
  color: var(--gray-800);
  background: white;
  outline: none;
  width: 200px;
}
.font-row-title input:focus { border-color: var(--green); }
.font-controls { display: flex; align-items: center; gap: 10px; flex-wrap: wrap; }
.font-size-ctrl { display: flex; align-items: center; gap: 6px; }
.size-btn {
  width: 36px; height: 36px;
  background: white;
  border: 2px solid var(--gray-300);
  border-radius: 8px;
  font-size: 20px;
  font-weight: 900;
  cursor: pointer;
  display: flex; align-items: center; justify-content: center;
  color: var(--gray-700);
  transition: all 0.12s;
}
.size-btn:hover { border-color: var(--green); color: var(--green); background: var(--green-xlight); }
.size-val {
  min-width: 52px;
  text-align: center;
  font-size: 18px;
  font-weight: 900;
  color: var(--green-dark);
  background: var(--green-xlight);
  border: 2px solid var(--green-light);
  border-radius: 8px;
  padding: 4px 0;
}
.align-btns { display: flex; gap: 4px; }
.align-btn {
  width: 36px; height: 36px;
  border: 2px solid var(--gray-300);
  border-radius: 7px;
  background: white;
  cursor: pointer;
  font-size: 16px;
  display: flex; align-items: center; justify-content: center;
  transition: all 0.12s;
}
.align-btn.active { border-color: var(--blue); background: var(--blue-light); color: var(--blue); }
.align-btn:hover:not(.active) { border-color: var(--gray-400); }
.font-preview {
  margin-top: 10px;
  background: white;
  border: 1px solid var(--gray-200);
  border-radius: 6px;
  padding: 6px 12px;
  overflow: hidden;
  text-align: left;
  font-family: Arial, Helvetica, sans-serif;
  color: #000;
}
.prefix-edit {
  margin-top: 8px;
  display: flex;
  align-items: center;
  gap: 8px;
}
.prefix-label { font-size: 13px; color: var(--gray-500); font-weight: 700; white-space: nowrap; }
.prefix-input {
  flex: 1;
  padding: 6px 10px;
  font-size: 13px;
  font-family: 'Nunito', sans-serif;
  border: 1.5px solid var(--gray-300);
  border-radius: 6px;
  outline: none;
  background: white;
}
.prefix-input:focus { border-color: var(--green); }

/* ── QR FIELDS ── */
.qr-field {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 14px 16px;
  background: var(--gray-50);
  border: 2px solid var(--gray-200);
  border-radius: var(--radius-sm);
  margin-bottom: 8px;
}
.toggle-wrap { flex-shrink: 0; }
.toggle {
  width: 52px; height: 28px;
  background: var(--gray-300);
  border-radius: 14px;
  cursor: pointer;
  position: relative;
  transition: background 0.2s;
  border: none;
  outline: none;
}
.toggle.on { background: var(--green); }
.toggle-knob {
  position: absolute;
  top: 3px; left: 3px;
  width: 22px; height: 22px;
  background: white;
  border-radius: 50%;
  transition: left 0.2s;
  pointer-events: none;
  box-shadow: 0 1px 4px rgba(0,0,0,0.2);
}
.toggle.on .toggle-knob { left: 27px; }
.qr-field-info { flex: 1; }
.qr-field-name { font-size: 16px; font-weight: 800; color: var(--gray-700); }
.qr-field-val { font-size: 13px; color: var(--green-dark); font-family: monospace; margin-top: 2px; }
.qr-preview-box {
  background: var(--gray-900);
  color: #4ade80;
  border-radius: var(--radius-sm);
  padding: 14px 16px;
  font-family: monospace;
  font-size: 15px;
  word-break: break-all;
  line-height: 1.8;
  margin-bottom: 16px;
}

/* ── ZOOM CONTROLS ── */
.zoom-bar {
  display: flex;
  align-items: center;
  gap: 10px;
  background: white;
  border: 2px solid var(--gray-200);
  border-radius: var(--radius-sm);
  padding: 10px 14px;
  margin-bottom: 16px;
}
.zoom-label { font-size: 15px; font-weight: 700; color: var(--gray-600); }
.zoom-val { min-width: 54px; text-align: center; font-size: 17px; font-weight: 900; color: var(--green-dark); }

/* ── CARDS ── */
.info-card {
  background: var(--blue-light);
  border: 2px solid #93c5fd;
  border-radius: var(--radius-sm);
  padding: 14px 18px;
  font-size: 15px;
  color: #1e40af;
  font-weight: 600;
  margin-bottom: 16px;
  display: flex;
  align-items: flex-start;
  gap: 10px;
}
.info-icon { font-size: 22px; flex-shrink: 0; margin-top: 1px; }
.success-toast {
  position: fixed;
  top: 90px; right: 24px;
  background: var(--green);
  color: white;
  padding: 14px 22px;
  border-radius: var(--radius-sm);
  font-size: 17px;
  font-weight: 800;
  z-index: 999;
  box-shadow: var(--shadow-lg);
  display: flex; align-items: center; gap: 10px;
  animation: slideIn 0.3s ease;
}
@keyframes slideIn { from { transform: translateX(120%); } to { transform: translateX(0); } }

/* ── SECTION TITLE ── */
.section-title {
  font-size: 20px;
  font-weight: 900;
  color: var(--gray-900);
  margin-bottom: 14px;
  display: flex;
  align-items: center;
  gap: 8px;
}
.section-title .icon { font-size: 24px; }

/* ── MARGINS ── */
.margin-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 12px; }

/* ── PRINT AREA ── */
#print-area { display: none; }
@media print {
  body > *:not(#print-area) { display: none !important; }
  #print-area { display: block !important; }
}
</style>
</head>
<body>

<!-- HEADER -->
<header class="site-header">
  <div class="header-logo">🏷️</div>
  <div>
    <div class="header-title">Fiyat Etiketi Sistemi</div>
    <div class="header-sub">Kolay · Hızlı · Profesyonel</div>
  </div>
  <div class="header-btns">
    <button class="btn btn-gray btn-sm" onclick="saveData()">💾 Kaydet</button>
    <button class="btn btn-blue btn-sm" onclick="exportPDF()">📄 PDF</button>
    <button class="btn btn-green btn-sm" onclick="doPrint()">🖨️ Yazdır</button>
  </div>
</header>

<!-- TOAST -->
<div id="toast" class="success-toast" style="display:none">✅ <span id="toast-msg">Kaydedildi!</span></div>

<!-- MAIN -->
<div class="main-layout">

  <!-- LEFT: Controls -->
  <div>

    <!-- STEP NAVIGATION -->
    <div class="panel" style="margin-bottom:20px">
      <div class="step-nav" id="step-nav">
        <button class="step-btn active" onclick="showStep(1)" id="step-btn-1">
          <span class="step-icon">📐</span>
          <span class="step-num" id="stepnum-1">1</span>
          <span>Boyut</span>
        </button>
        <button class="step-btn" onclick="showStep(2)" id="step-btn-2">
          <span class="step-icon">📦</span>
          <span class="step-num" id="stepnum-2">2</span>
          <span>Ürün</span>
        </button>
        <button class="step-btn" onclick="showStep(3)" id="step-btn-3">
          <span class="step-icon">🔤</span>
          <span class="step-num" id="stepnum-3">3</span>
          <span>Yazılar</span>
        </button>
        <button class="step-btn" onclick="showStep(4)" id="step-btn-4">
          <span class="step-icon">🔲</span>
          <span class="step-num" id="stepnum-4">4</span>
          <span>QR Kod</span>
        </button>
      </div>

      <!-- STEP 1: BOYUT -->
      <div id="step-1" class="panel-body">
        <div class="section-title"><span class="icon">📐</span> Etiket Boyutu Seçin</div>
        <div class="preset-grid" id="preset-grid">
          <div class="preset-card selected" onclick="selectPreset('v30x70')" id="preset-v30x70">
            <div class="preset-icon">📄</div>
            <div class="preset-name">Dik</div>
            <div class="preset-size">30 × 70 mm</div>
          </div>
          <div class="preset-card" onclick="selectPreset('h80x38')" id="preset-h80x38">
            <div class="preset-icon">🗒️</div>
            <div class="preset-name">Yatay Geniş</div>
            <div class="preset-size">80 × 38 mm</div>
          </div>
          <div class="preset-card" onclick="selectPreset('h50x35')" id="preset-h50x35">
            <div class="preset-icon">🏷️</div>
            <div class="preset-name">Yatay Orta</div>
            <div class="preset-size">50 × 35 mm</div>
          </div>
          <div class="preset-card" onclick="selectPreset('custom')" id="preset-custom">
            <div class="preset-icon">⚙️</div>
            <div class="preset-name">Özel Ölçü</div>
            <div class="preset-size">İstediğiniz boyut</div>
          </div>
        </div>
        <div id="custom-size" style="display:none;margin-top:16px">
          <div class="form-row">
            <div class="form-group">
              <label class="form-label">Genişlik (mm)</label>
              <input class="form-input" type="number" id="cw" value="60" min="10" max="300" onchange="onCustomSize()"/>
            </div>
            <div class="form-group">
              <label class="form-label">Yükseklik (mm)</label>
              <input class="form-input" type="number" id="ch" value="70" min="10" max="300" onchange="onCustomSize()"/>
            </div>
          </div>
        </div>

        <div class="section-title" style="margin-top:22px"><span class="icon">📏</span> Kenar Boşlukları (mm)</div>
        <div class="margin-grid">
          <div class="form-group"><label class="form-label">Üst</label><input class="form-input" type="number" id="mg-top" value="1" step="0.5" min="0" onchange="renderLabel()"/></div>
          <div class="form-group"><label class="form-label">Alt</label><input class="form-input" type="number" id="mg-bottom" value="1" step="0.5" min="0" onchange="renderLabel()"/></div>
          <div class="form-group"><label class="form-label">Sol</label><input class="form-input" type="number" id="mg-left" value="1" step="0.5" min="0" onchange="renderLabel()"/></div>
          <div class="form-group"><label class="form-label">Sağ</label><input class="form-input" type="number" id="mg-right" value="1" step="0.5" min="0" onchange="renderLabel()"/></div>
        </div>
        <button class="btn btn-green btn-full" onclick="showStep(2)">Devam Et →</button>
      </div>

      <!-- STEP 2: ÜRÜN -->
      <div id="step-2" class="panel-body" style="display:none">
        <div class="product-nav">
          <button class="nav-arrow" id="nav-prev" onclick="prevProduct()">◀</button>
          <div class="nav-info">
            <div class="nav-count" id="nav-count">1 / 1 ürün</div>
            <div class="nav-name" id="nav-name">—</div>
          </div>
          <button class="nav-arrow" id="nav-next" onclick="nextProduct()">▶</button>
        </div>

        <div class="info-card">
          <span class="info-icon">💡</span>
          <span>Excel dosyası yükleyerek birden fazla ürünü bir anda girebilirsiniz. Veya aşağıdaki formu doldurun.</span>
        </div>

        <div style="display:grid;grid-template-columns:1fr 1fr;gap:12px;margin-bottom:16px">
          <div class="drop-zone" id="drop-zone" onclick="document.getElementById('excel-file').click()" ondrop="handleDrop(event)" ondragover="handleDragOver(event)" ondragleave="handleDragLeave(event)">
            <div class="drop-zone-icon">📊</div>
            <div class="drop-zone-title">Excel Yükle</div>
            <div class="drop-zone-sub">Tıkla veya sürükle</div>
          </div>
          <button class="drop-zone" style="border-color:#93c5fd;background:var(--blue-light)" onclick="downloadTemplate()">
            <div class="drop-zone-icon">📥</div>
            <div class="drop-zone-title" style="color:var(--blue)">Şablon İndir</div>
            <div class="drop-zone-sub">Örnek Excel dosyası</div>
          </button>
        </div>
        <input type="file" id="excel-file" accept=".xlsx,.xls,.csv" style="display:none" onchange="loadExcel(this.files[0])"/>

        <div class="form-group">
          <label class="form-label">📦 Ürün Adı</label>
          <input class="form-input" id="f-urunAdi" type="text" placeholder="Örn: ARİFOĞLU SUMAK 175GR" oninput="updateCurProduct()"/>
        </div>
        <div class="form-row">
          <div class="form-group">
            <label class="form-label">⚖️ Ağırlık (gr)</label>
            <input class="form-input" id="f-agirlik" type="number" placeholder="175" oninput="updateCurProduct()"/>
          </div>
          <div class="form-group">
            <label class="form-label">💰 Fiyat (₺)</label>
            <input class="form-input" id="f-fiyat" type="number" step="0.01" placeholder="169.95" oninput="updateCurProduct()"/>
          </div>
        </div>
        <div class="form-group">
          <label class="form-label">🔢 Barkod Numarası</label>
          <input class="form-input" id="f-barkod" type="text" placeholder="8691530013718" oninput="updateCurProduct()"/>
        </div>
        <div class="form-row">
          <div class="form-group">
            <label class="form-label">📅 Fiyat Değişim Tarihi</label>
            <input class="form-input" id="f-fdt" type="text" placeholder="GG.AA.YYYY" oninput="updateCurProduct()"/>
          </div>
          <div class="form-group">
            <label class="form-label">📅 Etiket Tarihi</label>
            <input class="form-input" id="f-et" type="text" placeholder="GG.AA.YYYY" oninput="updateCurProduct()"/>
          </div>
        </div>
        <div class="form-group">
          <label class="form-label">🌍 Menşei / Üretim Yeri</label>
          <input class="form-input" id="f-mensei" type="text" placeholder="KONS-BAHARAT" oninput="updateCurProduct()"/>
        </div>

        <div style="display:flex;gap:10px;margin-top:8px">
          <button class="btn btn-green" onclick="addProduct()" style="flex:1">+ Yeni Ürün Ekle</button>
          <button class="btn btn-red btn-sm" onclick="deleteProduct()">🗑</button>
        </div>
        <button class="btn btn-green btn-full" style="margin-top:12px" onclick="showStep(3)">Devam Et →</button>
      </div>

      <!-- STEP 3: YAZILAR -->
      <div id="step-3" class="panel-body" style="display:none">
        <div class="section-title"><span class="icon">🔤</span> Yazı Boyutları ve Hizalama</div>
        <div class="info-card">
          <span class="info-icon">💡</span>
          <span>Her satırın başlığına tıklayarak değiştirebilirsiniz. Sağ taraftaki önizlemede anlık olarak görebilirsiniz.</span>
        </div>
        <div id="font-editor"></div>
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-top:14px">
          <button class="btn btn-gray btn-sm" onclick="applyFontPreset('standart')">Standart</button>
          <button class="btn btn-gray btn-sm" onclick="applyFontPreset('buyuk')">Büyük Yazı</button>
          <button class="btn btn-gray btn-sm" onclick="applyFontPreset('kompakt')">Kompakt</button>
          <button class="btn btn-gray btn-sm" onclick="applyFontPreset('vurgu')">Fiyat Vurgu</button>
        </div>
        <button class="btn btn-green btn-full" style="margin-top:14px" onclick="showStep(4)">Devam Et →</button>
      </div>

      <!-- STEP 4: QR -->
      <div id="step-4" class="panel-body" style="display:none">
        <div class="section-title"><span class="icon">🔲</span> QR Kod İçeriği</div>
        <div class="info-card">
          <span class="info-icon">💡</span>
          <span>QR koda hangi bilgilerin ekleneceğini seçin. Telefon veya okuyucu ile tarandığında bu bilgiler görünecektir.</span>
        </div>
        <div id="qr-field-list"></div>
        <div style="background:var(--gray-100);border-radius:var(--radius-sm);padding:16px;margin-top:14px">
          <div style="font-size:16px;font-weight:800;color:var(--gray-700);margin-bottom:10px">+ Özel Bilgi Ekle</div>
          <div class="form-row">
            <div class="form-group"><input class="form-input" id="qr-custom-label" placeholder="Bilgi adı (örn: Lot No)"/></div>
            <div class="form-group"><input class="form-input" id="qr-custom-val" placeholder="Değer (örn: LOT2026)"/></div>
          </div>
          <button class="btn btn-green btn-sm" onclick="addCustomQrField()">Ekle</button>
        </div>
        <div style="margin-top:16px">
          <div style="font-size:15px;font-weight:800;color:var(--gray-600);margin-bottom:8px">QR İçerik Önizleme:</div>
          <div class="qr-preview-box" id="qr-content-preview">—</div>
          <div style="display:flex;justify-content:center">
            <div id="qr-big-preview"></div>
          </div>
        </div>
      </div>
    </div>

  </div>

  <!-- RIGHT: Preview -->
  <div>
    <div class="panel" style="position:sticky;top:90px">
      <div class="panel-header">
        👁️ Canlı Önizleme
        <span style="margin-left:auto;font-size:14px;opacity:0.85" id="preview-size-label"></span>
      </div>
      <div class="panel-body" style="padding:16px">

        <!-- Zoom -->
        <div class="zoom-bar">
          <span class="zoom-label">🔍 Yakınlaştır:</span>
          <button class="size-btn" onclick="changeZoom(-0.15)">−</button>
          <span class="zoom-val" id="zoom-val">100%</span>
          <button class="size-btn" onclick="changeZoom(0.15)">+</button>
          <button class="btn btn-gray btn-sm" onclick="setZoom(1)" style="margin-left:auto">Sıfırla</button>
          <button class="btn btn-gray btn-sm" onclick="resetLayout()">↺ Düzeni Sıfırla</button>
        </div>

        <div class="info-card" style="font-size:14px;padding:10px 14px">
          <span class="info-icon" style="font-size:18px">👆</span>
          <span>Etiketteki yazılara <strong>tıklayarak sürükleyin</strong>. <strong>Çift tıklayarak</strong> metni düzenleyin.</span>
        </div>

        <!-- Label canvas -->
        <div class="preview-area" id="preview-area">
          <div class="preview-wrapper" id="preview-wrapper">
            <div class="label-paper" id="label-paper"></div>
          </div>
        </div>

        <!-- Print buttons -->
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:12px;margin-top:16px">
          <button class="btn btn-green btn-lg" onclick="doPrint()">🖨️ Yazdır</button>
          <button class="btn btn-blue btn-lg" onclick="exportPDF()">📄 PDF Kaydet</button>
        </div>

        <!-- Product nav under preview -->
        <div class="product-nav" style="margin-top:14px">
          <button class="nav-arrow" onclick="prevProduct()">◀</button>
          <div class="nav-info">
            <div class="nav-count" id="nav-count2">1 / 1</div>
            <div class="nav-name" id="nav-name2">—</div>
          </div>
          <button class="nav-arrow" onclick="nextProduct()">▶</button>
        </div>

      </div>
    </div>
  </div>
</div>

<!-- PRINT AREA -->
<div id="print-area"></div>

<script>
// ─── STATE ────────────────────────────────────────────────────────────────────
const PX = 3.7795275591;
let zoom = 1;
let presetId = 'v30x70';
let selEl = null;
let selElId = null;
let dragOffset = { x: 0, y: 0 };

const PRESETS = {
  v30x70:  { w: 30, h: 70 },
  h80x38:  { w: 80, h: 38 },
  h50x35:  { w: 50, h: 35 },
  custom:  { w: null, h: null },
};

const ELEM_DEFS = [
  { id: 'urunAdi',            type: 'field',  label: 'Ürün Adı',             field: 'urunAdi',            bold: true,  defaultAlign: 'center' },
  { id: 'kdvDahil',           type: 'field',  label: 'KDV Dahil',            field: 'kdvDahil',           bold: false, defaultAlign: 'right'  },
  { id: 'fiyat',              type: 'price',  label: 'Fiyat',                field: 'fiyat',              bold: true,  defaultAlign: 'center' },
  { id: 'kiloFiyat',          type: 'kilo',   label: 'Kilo Fiyatı',          field: null,                 bold: false, defaultAlign: 'center' },
  { id: 'fiyatDegisimTarihi', type: 'field',  label: 'Fiyat Değişim Tarihi', field: 'fiyatDegisimTarihi', bold: false, defaultAlign: 'left',  prefix: 'Fiyat Değişim Tarihi : ' },
  { id: 'etiketTarihi',       type: 'field',  label: 'Etiket Tarihi',        field: 'etiketTarihi',       bold: false, defaultAlign: 'left',  prefix: 'Etiket Tarihi : ' },
  { id: 'mensei',             type: 'field',  label: 'Menşei',               field: 'mensei',             bold: false, defaultAlign: 'left',  prefix: 'Ü.YERİ : ' },
  { id: 'qr',                 type: 'qr',     label: 'QR Kod',               field: null,                 bold: false, defaultAlign: 'center' },
  { id: 'barkod',             type: 'field',  label: 'Barkod No',            field: 'barkod',             bold: false, defaultAlign: 'center', mono: true },
];

let fontSizes = { urunAdi: 14, fiyat: 20, kiloFiyat: 6, fiyatDegisimTarihi: 6, etiketTarihi: 6, mensei: 6, barkod: 6, kdvDahil: 6, qr: 6 };
let aligns    = { urunAdi:'center', kdvDahil:'right', fiyat:'center', kiloFiyat:'center', fiyatDegisimTarihi:'left', etiketTarihi:'left', mensei:'left', qr:'center', barkod:'center' };
let prefixes  = { urunAdi:'', kdvDahil:'', fiyat:'', kiloFiyat:'', fiyatDegisimTarihi:'Fiyat Değişim Tarihi : ', etiketTarihi:'Etiket Tarihi : ', mensei:'Ü.YERİ : ', qr:'', barkod:'' };
let customLabels = {};
let margins   = { top: 1, bottom: 1, left: 1, right: 1 };
let layout    = [];
let products  = [{ urunAdi:'ARİFOĞLU LİMON TUZU PARÇA 250GR', agirlik:250, fiyat:111.95, fiyatDegisimTarihi:'12.03.2026', etiketTarihi:'12.03.2026', barkod:'8691530011318', mensei:'KONS-BAHARAT', kdvDahil:'KDV Dahil' }];
let selProd   = 0;
let qrFields  = [
  { id:'qr_barkod', type:'field', label:'Barkod',              field:'barkod',             enabled:true  },
  { id:'qr_fdt',    type:'field', label:'Fiyat Değişim Tarihi',field:'fiyatDegisimTarihi', enabled:true  },
  { id:'qr_et',     type:'field', label:'Etiket Tarihi',       field:'etiketTarihi',       enabled:true  },
  { id:'qr_fiyat',  type:'field', label:'Fiyat',               field:'fiyat',              enabled:false },
  { id:'qr_urun',   type:'field', label:'Ürün Adı',            field:'urunAdi',            enabled:false },
  { id:'qr_mensei', type:'field', label:'Menşei',              field:'mensei',             enabled:false },
  { id:'qr_kilo',   type:'kilo',  label:'Kilo Fiyatı',         field:null,                 enabled:false },
];

// ─── HELPERS ─────────────────────────────────────────────────────────────────
function getLW() { return presetId === 'custom' ? (parseFloat(document.getElementById('cw').value)||30) : PRESETS[presetId].w; }
function getLH() { return presetId === 'custom' ? (parseFloat(document.getElementById('ch').value)||70) : PRESETS[presetId].h; }
function getMg() { return { top: +document.getElementById('mg-top').value||0, bottom: +document.getElementById('mg-bottom').value||0, left: +document.getElementById('mg-left').value||0, right: +document.getElementById('mg-right').value||0 }; }
function getCur() { return products[selProd] || products[0]; }
function getKilo(p) { return p.fiyat && p.agirlik ? (parseFloat(p.fiyat) / (parseFloat(p.agirlik)/1000)).toLocaleString('tr-TR',{minimumFractionDigits:2}) : null; }
function getQrData() {
  const p = getCur();
  const kilo = getKilo(p);
  return qrFields.filter(f=>f.enabled).map(f=>{
    if (f.type==='field') return p[f.field]||'';
    if (f.type==='kilo')  return kilo ? `Kilo:${kilo}` : '';
    if (f.type==='custom') return f.value||'';
    return '';
  }).filter(Boolean).join('|');
}

// ─── LAYOUT ──────────────────────────────────────────────────────────────────
function buildLayout() {
  const W = getLW(), H = getLH();
  const portrait = H > W;
  if (portrait) {
    layout = [
      { id:'urunAdi',            x:0,      y:0,       w:W,      h:H*0.17 },
      { id:'kdvDahil',           x:0,      y:H*0.17,  w:W,      h:H*0.05 },
      { id:'fiyat',              x:0,      y:H*0.22,  w:W,      h:H*0.14 },
      { id:'kiloFiyat',          x:0,      y:H*0.36,  w:W,      h:H*0.06 },
      { id:'fiyatDegisimTarihi', x:0,      y:H*0.42,  w:W,      h:H*0.07 },
      { id:'etiketTarihi',       x:0,      y:H*0.49,  w:W,      h:H*0.07 },
      { id:'mensei',             x:0,      y:H*0.56,  w:W,      h:H*0.06 },
      { id:'qr',                 x:W*0.15, y:H*0.63,  w:W*0.7,  h:H*0.27 },
      { id:'barkod',             x:0,      y:H*0.91,  w:W,      h:H*0.09 },
    ];
  } else {
    const qW = Math.min(W*0.3, H*0.85);
    layout = [
      { id:'fiyatDegisimTarihi', x:0,     y:0,      w:W*0.55,   h:H*0.18 },
      { id:'etiketTarihi',       x:W*0.5, y:0,      w:W*0.5,    h:H*0.18 },
      { id:'urunAdi',            x:0,     y:H*0.18, w:W-qW-2,   h:H*0.22 },
      { id:'kdvDahil',           x:0,     y:H*0.40, w:W-qW-2,   h:H*0.10 },
      { id:'fiyat',              x:0,     y:H*0.50, w:W-qW-2,   h:H*0.26 },
      { id:'kiloFiyat',          x:0,     y:H*0.76, w:W-qW-2,   h:H*0.10 },
      { id:'mensei',             x:0,     y:H*0.86, w:W-qW-2,   h:H*0.14 },
      { id:'qr',                 x:W-qW,  y:H*0.10, w:qW,       h:H*0.65 },
      { id:'barkod',             x:W-qW,  y:H*0.76, w:qW,       h:H*0.24 },
    ];
  }
  renderLabel();
}
function resetLayout() { buildLayout(); }

// ─── RENDER LABEL ────────────────────────────────────────────────────────────
let qrCache = {};
let lastQrData = '';

function renderLabel() {
  const W = getLW(), H = getLH();
  const paper = document.getElementById('label-paper');
  if (!paper) return;
  paper.style.width  = (W * PX * zoom) + 'px';
  paper.style.height = (H * PX * zoom) + 'px';
  paper.style.transform = '';

  const mg = getMg();
  const p  = getCur();
  const kilo = getKilo(p);
  const qrData = getQrData();

  document.getElementById('preview-size-label').textContent = `${W}×${H} mm`;

  // Build QR if data changed
  if (qrData !== lastQrData) {
    lastQrData = qrData;
    const qrEl = document.getElementById('qr-big-preview');
    if (qrEl) { qrEl.innerHTML=''; try { new QRCode(qrEl, { text: qrData||' ', width:120, height:120, colorDark:'#000', colorLight:'#fff' }); } catch {} }
  }

  // QR preview content
  const qrPrev = document.getElementById('qr-content-preview');
  if (qrPrev) qrPrev.textContent = qrData || '— (hiç alan seçilmedi)';

  // Margin guide
  paper.innerHTML = `<div class="margin-guide" style="left:${mg.left*PX*zoom}px;top:${mg.top*PX*zoom}px;width:${(W-mg.left-mg.right)*PX*zoom}px;height:${(H-mg.top-mg.bottom)*PX*zoom}px"></div>`;

  // Render each element
  layout.forEach(item => {
    const def = ELEM_DEFS.find(e => e.id === item.id);
    if (!def) return;
    const x = item.x * PX * zoom, y = item.y * PX * zoom;
    const iw = item.w * PX * zoom, ih = item.h * PX * zoom;
    const fs = (fontSizes[item.id] || 6) * zoom;
    const align = aligns[item.id] || def.defaultAlign;
    const prefix = prefixes[item.id] !== undefined ? prefixes[item.id] : (def.prefix||'');
    const isSelected = selElId === item.id;

    const div = document.createElement('div');
    div.className = 'label-elem' + (isSelected ? ' selected' : '');
    div.dataset.id = item.id;
    div.style.cssText = `left:${x}px;top:${y}px;width:${iw}px;height:${ih}px;`;

    if (def.type === 'qr') {
      div.style.justifyContent = 'center';
      const qrSize = Math.round(Math.min(iw, ih) - 2);
      const qrContainer = document.createElement('div');
      qrContainer.style.cssText = `width:${qrSize}px;height:${qrSize}px;flex-shrink:0;`;
      const cacheKey = qrData + '_' + qrSize;
      if (qrCache[cacheKey]) {
        const img = document.createElement('img');
        img.src = qrCache[cacheKey]; img.width = qrSize; img.height = qrSize;
        img.style.imageRendering = 'pixelated';
        qrContainer.appendChild(img);
      } else {
        const tmp = document.createElement('div');
        tmp.style.cssText = 'position:fixed;left:-9999px;';
        document.body.appendChild(tmp);
        try {
          new QRCode(tmp, { text: qrData||' ', width: qrSize, height: qrSize, colorDark:'#000', colorLight:'#fff' });
          setTimeout(() => {
            const c = tmp.querySelector('canvas');
            if (c) {
              const src = c.toDataURL('image/png');
              qrCache[cacheKey] = src;
              qrContainer.innerHTML = `<img src="${src}" width="${qrSize}" height="${qrSize}" style="image-rendering:pixelated;display:block"/>`;
            }
            document.body.removeChild(tmp);
          }, 100);
        } catch { document.body.removeChild(tmp); }
        qrContainer.textContent = 'QR';
        qrContainer.style.cssText += 'font-size:8px;color:#aaa;border:1px dashed #ccc;display:flex;align-items:center;justify-content:center;';
      }
      div.appendChild(qrContainer);
    } else {
      let text = '';
      if (def.type === 'price') {
        text = p.fiyat ? Number(p.fiyat).toLocaleString('tr-TR',{minimumFractionDigits:2}) + '₺' : '—';
      } else if (def.type === 'kilo') {
        text = kilo ? `Kilo Fiyatı : ${kilo}₺` : '';
      } else {
        text = prefix + (def.field ? (p[def.field]||'') : '');
      }
      div.style.justifyContent = align==='center'?'center':align==='right'?'flex-end':'flex-start';
      const span = document.createElement('span');
      span.style.cssText = `font-size:${fs}px;font-weight:${def.bold?900:400};line-height:1.3;font-family:${def.mono?'monospace':'Arial,Helvetica,sans-serif'};text-align:${align};display:block;width:100%;overflow:hidden;`;
      span.textContent = text;
      div.appendChild(span);
    }

    // Drag
    div.addEventListener('mousedown', startDrag);
    div.addEventListener('touchstart', startDragTouch, { passive: false });
    // Double-click to edit
    div.addEventListener('dblclick', startInlineEdit);

    paper.appendChild(div);
  });

  updateProductNav();
}

// ─── DRAG ─────────────────────────────────────────────────────────────────────
function startDrag(e) {
  if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;
  e.preventDefault();
  const id = e.currentTarget.dataset.id;
  selElId = id;
  const item = layout.find(l => l.id === id);
  if (!item) return;
  const startX = e.clientX, startY = e.clientY;
  const startIx = item.x, startIy = item.y;
  const W = getLW(), H = getLH();
  const mg = getMg();

  const move = (me) => {
    const dx = (me.clientX - startX) / (PX * zoom);
    const dy = (me.clientY - startY) / (PX * zoom);
    item.x = Math.max(mg.left, Math.min(W - mg.right - item.w, startIx + dx));
    item.y = Math.max(mg.top,  Math.min(H - mg.bottom - item.h, startIy + dy));
    renderLabel();
  };
  const up = () => { window.removeEventListener('mousemove', move); window.removeEventListener('mouseup', up); renderLabel(); };
  window.addEventListener('mousemove', move);
  window.addEventListener('mouseup', up);
  renderLabel();
}
function startDragTouch(e) {
  const t = e.touches[0];
  const id = e.currentTarget.dataset.id;
  selElId = id;
  const item = layout.find(l => l.id === id);
  if (!item) return;
  const startX = t.clientX, startY = t.clientY;
  const startIx = item.x, startIy = item.y;
  const W = getLW(), H = getLH();
  const mg = getMg();
  const move = (te) => {
    const tt = te.touches[0];
    const dx = (tt.clientX - startX) / (PX * zoom);
    const dy = (tt.clientY - startY) / (PX * zoom);
    item.x = Math.max(mg.left, Math.min(W - mg.right - item.w, startIx + dx));
    item.y = Math.max(mg.top,  Math.min(H - mg.bottom - item.h, startIy + dy));
    renderLabel();
  };
  const up = () => { window.removeEventListener('touchmove', move); window.removeEventListener('touchend', up); };
  window.addEventListener('touchmove', move, { passive: true });
  window.addEventListener('touchend', up);
  renderLabel();
}

// ─── INLINE EDIT ──────────────────────────────────────────────────────────────
function startInlineEdit(e) {
  e.stopPropagation();
  const id = e.currentTarget.dataset.id;
  const def = ELEM_DEFS.find(d => d.id === id);
  if (!def || def.type === 'qr' || def.type === 'price' || def.type === 'kilo') return;
  const item = layout.find(l => l.id === id);
  if (!item) return;

  const paper = document.getElementById('label-paper');
  const W = getLW(), H = getLH();
  const iw = item.w * PX * zoom, ih = item.h * PX * zoom;
  const fs = (fontSizes[id] || 6) * zoom;
  const prefix = prefixes[id] !== undefined ? prefixes[id] : (def.prefix||'');
  const p = getCur();
  const currentVal = def.field ? (p[def.field]||'') : '';

  // Remove old div
  const existing = paper.querySelector(`[data-id="${id}"]`);
  if (existing) existing.remove();

  const editDiv = document.createElement('div');
  editDiv.className = 'label-elem selected editing-inline';
  editDiv.dataset.id = id;
  editDiv.style.cssText = `left:${item.x*PX*zoom}px;top:${item.y*PX*zoom}px;width:${iw}px;height:${ih}px;flex-direction:column;`;

  // Prefix input
  const prefixInp = document.createElement('input');
  prefixInp.className = 'inline-edit-input';
  prefixInp.value = prefix;
  prefixInp.placeholder = 'Ön metin...';
  prefixInp.style.cssText = `font-size:${Math.max(fs*0.7,7)}px;height:40%;border-bottom:1px solid #93c5fd;background:rgba(219,234,254,0.7);`;

  // Value input
  const valInp = document.createElement('input');
  valInp.className = 'inline-edit-input';
  valInp.value = currentVal;
  valInp.placeholder = def.label + '...';
  valInp.style.cssText = `font-size:${fs}px;font-weight:${def.bold?900:400};height:60%;`;

  const commit = () => {
    prefixes[id] = prefixInp.value;
    if (def.field) products[selProd][def.field] = valInp.value;
    syncFormFields();
    renderLabel();
    renderFontEditor();
  };

  [prefixInp, valInp].forEach(inp => {
    inp.addEventListener('keydown', (ev) => { if (ev.key === 'Enter' || ev.key === 'Escape') commit(); });
    inp.addEventListener('blur', () => setTimeout(commit, 150));
  });

  editDiv.appendChild(prefixInp);
  editDiv.appendChild(valInp);
  paper.appendChild(editDiv);
  valInp.focus();
  valInp.select();
}

// ─── PRODUCT NAV ──────────────────────────────────────────────────────────────
function updateProductNav() {
  const total = products.length;
  const cur = getCur();
  const name = cur.urunAdi || `Ürün #${selProd+1}`;
  ['nav-count','nav-count2'].forEach(id => { const el=document.getElementById(id); if(el) el.textContent=`${selProd+1} / ${total} ürün`; });
  ['nav-name','nav-name2'].forEach(id => { const el=document.getElementById(id); if(el) el.textContent=name; });
  const np = document.getElementById('nav-prev'); if(np) np.disabled = selProd===0;
  const nn = document.getElementById('nav-next'); if(nn) nn.disabled = selProd===total-1;
}
function prevProduct() { if (selProd > 0) { selProd--; syncFormFields(); renderLabel(); } }
function nextProduct() { if (selProd < products.length-1) { selProd++; syncFormFields(); renderLabel(); } }

function syncFormFields() {
  const p = getCur();
  const map = { 'f-urunAdi':'urunAdi','f-agirlik':'agirlik','f-fiyat':'fiyat','f-barkod':'barkod','f-fdt':'fiyatDegisimTarihi','f-et':'etiketTarihi','f-mensei':'mensei' };
  Object.entries(map).forEach(([elId, key]) => { const el=document.getElementById(elId); if(el) el.value=p[key]||''; });
}
function updateCurProduct() {
  const p = products[selProd];
  const map = { 'f-urunAdi':'urunAdi','f-agirlik':'agirlik','f-fiyat':'fiyat','f-barkod':'barkod','f-fdt':'fiyatDegisimTarihi','f-et':'etiketTarihi','f-mensei':'mensei' };
  Object.entries(map).forEach(([elId, key]) => { const el=document.getElementById(elId); if(el) p[key]=el.value; });
  p.kdvDahil = 'KDV Dahil';
  renderLabel();
}
function addProduct() {
  products.push({ urunAdi:`Yeni Ürün ${products.length+1}`, agirlik:0, fiyat:0, fiyatDegisimTarihi:'', etiketTarihi:'', barkod:'', mensei:'', kdvDahil:'KDV Dahil' });
  selProd = products.length - 1;
  syncFormFields();
  renderLabel();
  showToast('Yeni ürün eklendi!');
}
function deleteProduct() {
  if (products.length <= 1) { showToast('En az 1 ürün olmalı!'); return; }
  products.splice(selProd, 1);
  selProd = Math.max(0, selProd-1);
  syncFormFields();
  renderLabel();
}

// ─── PRESETS ──────────────────────────────────────────────────────────────────
function selectPreset(id) {
  presetId = id;
  document.querySelectorAll('.preset-card').forEach(c => c.classList.remove('selected'));
  document.getElementById('preset-'+id).classList.add('selected');
  document.getElementById('custom-size').style.display = id==='custom'?'block':'none';
  buildLayout();
}
function onCustomSize() { buildLayout(); }

// ─── ZOOM ─────────────────────────────────────────────────────────────────────
function changeZoom(delta) { setZoom(Math.max(0.3, Math.min(3, zoom + delta))); }
function setZoom(v) { zoom = v; document.getElementById('zoom-val').textContent = Math.round(v*100)+'%'; qrCache={}; renderLabel(); }

// ─── FONT EDITOR ─────────────────────────────────────────────────────────────
function renderFontEditor() {
  const container = document.getElementById('font-editor');
  if (!container) return;
  const p = getCur();
  container.innerHTML = '';
  ELEM_DEFS.forEach(def => {
    const fs = fontSizes[def.id] || 6;
    const align = aligns[def.id] || def.defaultAlign;
    const prefix = prefixes[def.id] !== undefined ? prefixes[def.id] : (def.prefix||'');
    const label = customLabels[def.id] || def.label;
    let previewText = def.type==='price' ? `${Number(p.fiyat||0).toLocaleString('tr-TR',{minimumFractionDigits:2})}₺`
      : def.type==='kilo' ? `Kilo Fiyatı : ${getKilo(p)||'—'}₺`
      : `${prefix}${def.field?(p[def.field]||def.label):''}`;

    const row = document.createElement('div');
    row.className = 'font-row';
    row.innerHTML = `
      <div class="font-row-title" title="Başlığa tıklayarak düzenleyin">
        <input value="${label}" onchange="customLabels['${def.id}']=this.value;renderFontEditor()" style="font-weight:800;font-size:15px;" title="Başlık adını değiştirin"/>
      </div>
      <div class="font-controls">
        <div class="font-size-ctrl">
          <span style="font-size:14px;font-weight:700;color:var(--gray-600)">Punto:</span>
          <button class="size-btn" onclick="changeFontSize('${def.id}', -1)">−</button>
          <div class="size-val">${fs}pt</div>
          <button class="size-btn" onclick="changeFontSize('${def.id}', 1)">+</button>
          <input type="range" min="4" max="48" value="${fs}" oninput="setFontSize('${def.id}',this.value)" style="width:80px;accent-color:var(--green)"/>
        </div>
        <div class="align-btns">
          <button class="align-btn ${align==='left'?'active':''}" onclick="setAlign('${def.id}','left')" title="Sola">◀</button>
          <button class="align-btn ${align==='center'?'active':''}" onclick="setAlign('${def.id}','center')" title="Ortala">●</button>
          <button class="align-btn ${align==='right'?'active':''}" onclick="setAlign('${def.id}','right')" title="Sağa">▶</button>
        </div>
      </div>
      ${def.prefix!==undefined ? `
      <div class="prefix-edit">
        <span class="prefix-label">Ön Metin:</span>
        <input class="prefix-input" value="${prefix.replace(/"/g,'&quot;')}" placeholder="Ön metin..." onchange="prefixes['${def.id}']=this.value;renderLabel()"/>
      </div>` : ''}
      <div class="font-preview" style="text-align:${align};font-size:${fs}px;font-weight:${def.bold?900:400};font-family:${def.mono?'monospace':'Arial,Helvetica,sans-serif'}">
        ${previewText || '—'}
      </div>
    `;
    container.appendChild(row);
  });
}
function changeFontSize(id, delta) { setFontSize(id, (fontSizes[id]||6) + delta); }
function setFontSize(id, v) { fontSizes[id] = Math.max(4, Math.min(72, parseInt(v))); renderLabel(); renderFontEditor(); }
function setAlign(id, v) { aligns[id] = v; renderLabel(); renderFontEditor(); }

const FONT_PRESETS = {
  standart: { urunAdi:14, fiyat:20, kiloFiyat:6, fiyatDegisimTarihi:6, etiketTarihi:6, mensei:6, barkod:6, kdvDahil:6 },
  buyuk:    { urunAdi:18, fiyat:26, kiloFiyat:8, fiyatDegisimTarihi:8, etiketTarihi:8, mensei:8, barkod:7, kdvDahil:7 },
  kompakt:  { urunAdi:10, fiyat:16, kiloFiyat:5, fiyatDegisimTarihi:5, etiketTarihi:5, mensei:5, barkod:5, kdvDahil:5 },
  vurgu:    { urunAdi:14, fiyat:30, kiloFiyat:7, fiyatDegisimTarihi:6, etiketTarihi:6, mensei:6, barkod:6, kdvDahil:6 },
};
function applyFontPreset(k) { Object.assign(fontSizes, FONT_PRESETS[k]); renderLabel(); renderFontEditor(); showToast('Yazı şablonu uygulandı!'); }

// ─── QR FIELDS ────────────────────────────────────────────────────────────────
function renderQrFields() {
  const c = document.getElementById('qr-field-list');
  if (!c) return;
  c.innerHTML = '';
  const p = getCur();
  qrFields.forEach((qf, i) => {
    const valText = qf.type==='field' && qf.field ? (p[qf.field]||'—') : qf.type==='custom' ? (qf.value||'—') : qf.type==='kilo' ? (getKilo(p)||'—')+'₺' : '';
    const div = document.createElement('div');
    div.className = 'qr-field';
    div.innerHTML = `
      <div class="toggle-wrap">
        <button class="toggle ${qf.enabled?'on':''}" onclick="toggleQrField(${i})" title="${qf.enabled?'Kapat':'Aç'}">
          <div class="toggle-knob"></div>
        </button>
      </div>
      <div class="qr-field-info">
        <div class="qr-field-name">${qf.label}</div>
        ${qf.enabled&&valText ? `<div class="qr-field-val">${valText}</div>` : ''}
        ${qf.type==='custom' ? `<input class="form-input" style="margin-top:6px;font-size:14px;padding:6px 10px" value="${qf.value||''}" placeholder="Değer girin..." oninput="qrFields[${i}].value=this.value;updateQrPreview()"/>` : ''}
      </div>
      ${qf.type==='custom' ? `<button class="btn btn-red btn-sm" onclick="removeQrField(${i})" style="padding:6px 10px;font-size:16px;flex-shrink:0">×</button>` : ''}
    `;
    c.appendChild(div);
  });
  updateQrPreview();
}
function toggleQrField(i) { qrFields[i].enabled = !qrFields[i].enabled; qrCache={}; renderLabel(); renderQrFields(); }
function removeQrField(i) { qrFields.splice(i,1); renderLabel(); renderQrFields(); }
function addCustomQrField() {
  const lb = document.getElementById('qr-custom-label').value.trim();
  const val = document.getElementById('qr-custom-val').value.trim();
  if (!lb) return;
  qrFields.push({ id:'c_'+Date.now(), type:'custom', label:lb, field:null, value:val, enabled:true });
  document.getElementById('qr-custom-label').value='';
  document.getElementById('qr-custom-val').value='';
  renderLabel(); renderQrFields();
}
function updateQrPreview() {
  const data = getQrData();
  const el = document.getElementById('qr-content-preview');
  if (el) el.textContent = data || '— (hiç alan seçilmedi)';
  const prev = document.getElementById('qr-big-preview');
  if (prev) { prev.innerHTML=''; if(data) { try { new QRCode(prev, { text:data, width:120, height:120, colorDark:'#000', colorLight:'#fff' }); } catch {} } }
}

// ─── EXCEL ────────────────────────────────────────────────────────────────────
function handleDrop(e) { e.preventDefault(); document.getElementById('drop-zone').classList.remove('drag-over'); loadExcel(e.dataTransfer.files[0]); }
function handleDragOver(e) { e.preventDefault(); document.getElementById('drop-zone').classList.add('drag-over'); }
function handleDragLeave() { document.getElementById('drop-zone').classList.remove('drag-over'); }

function loadExcel(file) {
  if (!file) return;
  const reader = new FileReader();
  reader.onload = e => {
    try {
      const wb = XLSX.read(e.target.result, { type:'binary' });
      const ws = wb.Sheets[wb.SheetNames[0]];
      const rows = XLSX.utils.sheet_to_json(ws, { defval:'' });
      const g = (row, ...pats) => { for (const p of pats) { const k = Object.keys(row).find(k=>k.toLowerCase().includes(p)); if(k!==undefined) return row[k]; } return ''; };
      const mapped = rows.map(row => ({
        urunAdi: g(row,'ürün','urun','ad','isim','name'),
        agirlik: parseFloat(String(g(row,'ağırlık','agirlik','gram','weight')).replace(',','.')) || 0,
        fiyat:   parseFloat(String(g(row,'fiyat','price')).replace(',','.')) || 0,
        fiyatDegisimTarihi: g(row,'değişim','degisim','fiyat tar'),
        etiketTarihi:       g(row,'etiket tar','basım','basim'),
        barkod:  String(g(row,'barkod','barcode','ean','kod')),
        mensei:  g(row,'menşe','mense','origin','ülke','country'),
        kdvDahil: 'KDV Dahil',
      })).filter(p => p.urunAdi || p.fiyat);
      if (mapped.length) {
        products = mapped; selProd = 0; syncFormFields(); renderLabel();
        showToast(`${mapped.length} ürün yüklendi!`);
      } else alert('Eşleşen sütun bulunamadı. Lütfen şablonu indirip kullanın.');
    } catch(err) { alert('Hata: ' + err.message); }
  };
  reader.readAsBinaryString(file);
}

function downloadTemplate() {
  const wb = XLSX.utils.book_new();
  const headers = ['Ürün Adı','Fiyat','Ağırlık (gr)','Barkod','Fiyat Değişim Tarihi','Etiket Tarihi','Menşei'];
  const data = [headers,
    ['ARİFOĞLU SUMAK 175GR YOPET',169.95,175,'8691530013718','16.03.2026','23.03.2026','KONS-BAHARAT'],
    ['ARİFOĞLU LİMON TUZU 250GR', 111.95,250,'8691530011318','12.03.2026','12.03.2026','KONS-BAHARAT'],
  ];
  const ws = XLSX.utils.aoa_to_sheet(data);
  ws['!cols'] = [35,10,14,18,22,16,16].map(w=>({wch:w}));
  XLSX.utils.book_append_sheet(wb, ws, 'Ürünler');
  XLSX.writeFile(wb, 'etiket_sablon.xlsx');
  showToast('Şablon indirildi!');
}

// ─── SAVE / LOAD ──────────────────────────────────────────────────────────────
function saveData() {
  try {
    localStorage.setItem('labelApp', JSON.stringify({ presetId, fontSizes, aligns, prefixes, customLabels, products, qrFields, layout }));
    showToast('Kaydedildi!');
  } catch { showToast('Kaydetme başarısız!'); }
}
function loadData() {
  try {
    const d = JSON.parse(localStorage.getItem('labelApp'));
    if (!d) return;
    if (d.presetId) { presetId=d.presetId; selectPreset(presetId); }
    if (d.fontSizes) fontSizes = { ...fontSizes, ...d.fontSizes };
    if (d.aligns) aligns = { ...aligns, ...d.aligns };
    if (d.prefixes) prefixes = { ...prefixes, ...d.prefixes };
    if (d.customLabels) customLabels = d.customLabels;
    if (d.products) { products = d.products; selProd = 0; syncFormFields(); }
    if (d.qrFields) qrFields = d.qrFields;
    if (d.layout) layout = d.layout;
    renderLabel(); renderFontEditor(); renderQrFields();
  } catch {}
}

// ─── PRINT / PDF ──────────────────────────────────────────────────────────────
function getPrintHTML() {
  const W = getLW(), H = getLH();
  const p = getCur();
  const mg = getMg();
  const kilo = getKilo(p);
  const qrData = getQrData();
  let elems = '';
  layout.forEach(item => {
    const def = ELEM_DEFS.find(e=>e.id===item.id);
    if (!def) return;
    const x=item.x*PX, y=item.y*PX, iw=item.w*PX, ih=item.h*PX;
    const fs=fontSizes[item.id]||6;
    const align=aligns[item.id]||def.defaultAlign;
    const prefix=prefixes[item.id]!==undefined?prefixes[item.id]:(def.prefix||'');
    if (def.type==='qr') {
      const sz=Math.round(Math.min(iw,ih)-2);
      elems+=`<div style="position:absolute;left:${x}px;top:${y}px;width:${iw}px;height:${ih}px;display:flex;align-items:center;justify-content:center"><div id="prqr" style="width:${sz}px;height:${sz}px"></div></div>`;
    } else {
      let txt=def.type==='price'?(p.fiyat?Number(p.fiyat).toLocaleString('tr-TR',{minimumFractionDigits:2})+'₺':'—'):def.type==='kilo'?(kilo?`Kilo Fiyatı : ${kilo}₺`:''):(prefix+(def.field?(p[def.field]||''):''));
      const jc=align==='center'?'center':align==='right'?'flex-end':'flex-start';
      elems+=`<div style="position:absolute;left:${x}px;top:${y}px;width:${iw}px;height:${ih}px;overflow:hidden;display:flex;align-items:center;justify-content:${jc}"><span style="font-size:${fs}px;font-weight:${def.bold?900:400};line-height:1.3;font-family:${def.mono?'monospace':'Arial,Helvetica,sans-serif'};text-align:${align};display:block;width:100%;overflow:hidden">${txt}</span></div>`;
    }
  });
  return `<div style="width:${W*PX}px;height:${H*PX}px;background:white;border:1px solid #999;position:relative;font-family:Arial,Helvetica,sans-serif;color:#000;overflow:hidden">${elems}</div>`;
}

function doPrint() {
  const W=getLW(),H=getLH();
  const qrData=getQrData();
  const html=getPrintHTML();
  const win=window.open('','_blank');
  win.document.write(`<!DOCTYPE html><html><head><title>Etiket</title>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/qrcodejs/1.0.0/qrcode.min.js"><\/script>
  <style>*{margin:0;padding:0;box-sizing:border-box;}@media print{@page{size:${W}mm ${H}mm;margin:0;}}body{background:#fff;display:flex;align-items:center;justify-content:center;min-height:100vh;}img{image-rendering:pixelated;display:block;}</style>
  </head><body>${html}
  <script>var el=document.getElementById('prqr');if(el){try{new QRCode(el,{text:'${qrData.replace(/'/g,"\\'")}',width:el.offsetWidth||60,height:el.offsetHeight||60,colorDark:'#000',colorLight:'#fff'});}catch{}}setTimeout(()=>window.print(),800);<\/script></body></html>`);
  win.document.close(); win.focus();
}

function exportPDF() {
  const W=getLW(),H=getLH();
  const qrData=getQrData();
  const html=getPrintHTML();
  const win=window.open('','_blank');
  win.document.write(`<!DOCTYPE html><html><head><title>${getCur().urunAdi||'Etiket'}</title>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/qrcodejs/1.0.0/qrcode.min.js"><\/script>
  <style>*{margin:0;padding:0;box-sizing:border-box;}@media print{@page{size:${W}mm ${H}mm;margin:0;}}body{background:#fff;padding:20px;display:flex;flex-direction:column;align-items:center;gap:16px;font-family:sans-serif;}.hint{font-size:13px;color:#666;padding:8px 16px;background:#f0f0f0;border-radius:6px;text-align:center;}img{image-rendering:pixelated;display:block;}</style>
  </head><body>
  <div class="hint">📄 PDF olarak kaydetmek için: <strong>Dosya → Yazdır → PDF Olarak Kaydet</strong> (${W}×${H}mm)</div>
  ${html}
  <script>var el=document.getElementById('prqr');if(el){try{new QRCode(el,{text:'${qrData.replace(/'/g,"\\'")}',width:el.offsetWidth||60,height:el.offsetHeight||60,colorDark:'#000',colorLight:'#fff'});}catch{}}setTimeout(()=>window.print(),800);<\/script></body></html>`);
  win.document.close(); win.focus();
}

// ─── STEPS ────────────────────────────────────────────────────────────────────
let curStep = 1;
function showStep(n) {
  curStep = n;
  for (let i=1; i<=4; i++) {
    document.getElementById('step-'+i).style.display = i===n ? 'block' : 'none';
    const btn = document.getElementById('step-btn-'+i);
    btn.classList.toggle('active', i===n);
    btn.classList.toggle('done', i<n);
  }
  if (n===3) renderFontEditor();
  if (n===4) { renderQrFields(); updateQrPreview(); }
  renderLabel();
}

// ─── TOAST ────────────────────────────────────────────────────────────────────
let toastTimer;
function showToast(msg) {
  const t = document.getElementById('toast');
  document.getElementById('toast-msg').textContent = msg;
  t.style.display = 'flex';
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => t.style.display='none', 2200);
}

// ─── INIT ────────────────────────────────────────────────────────────────────
window.addEventListener('DOMContentLoaded', () => {
  buildLayout();
  syncFormFields();
  loadData();
  setInterval(saveData, 30000); // Auto-save every 30s
});
</script>
</body>
</html>