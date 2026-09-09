import fotoProfil from './assets/foto-profil.jpg'
import biodieselDyno from './assets/biodiesel-dyno-test.jpg'
import biodieselUjiBbm from './assets/biodiesel-uji-bbm.jpg'
import biodieselPencampuran from './assets/biodiesel-pencampuran.jpg'
import biodieselPemurnian from './assets/biodiesel-pemurnian.jpg'
import epanetNetworkMap from './assets/epanet-network-map.png'
import epanetGoogleEarth from './assets/epanet-google-earth.jpg'
import epanetIsometrik from './assets/epanet-isometrik-pipa.jpg'
import magangBukitAsam from './assets/magang-bukit-asam.jpg'
import smelterManyar from './assets/smelter-manyar.jpg'
import softwareAnsysFluent from './assets/software-ansys-fluent.png'
import softwareAnsysFluent2 from './assets/software-ansys-fluent-2.png'
import softwareCaepipe from './assets/software-caepipe.png'
import softwareInventorCrane from './assets/software-inventor-crane.jpg'
import softwareInventorDrumlifter from './assets/software-inventor-drumlifter.jpg'
import softwareInventorPipecutter from './assets/software-inventor-pipecutter.jpg'
import './App.css'

function App() {
  return (
    <>
      <nav>
        <div className="wrap navbar">
          <div className="brand">Bama Yaza</div>
          <ul>
            <li><a href="#about">Tentang</a></li>
            <li><a href="#experience">Pengalaman</a></li>
            <li><a href="#projects">Proyek</a></li>
            <li><a href="#education">Pendidikan</a></li>
            <li><a href="#contact">Kontak</a></li>
          </ul>
        </div>
      </nav>

      <header className="hero">
        <div className="dot-deco" aria-hidden="true">
          <svg viewBox="0 0 200 200">
            {Array.from({ length: 8 }).map((_, row) =>
              Array.from({ length: 8 }).map((_, col) => (
                <circle key={`${row}-${col}`} cx={row * 26 + 10} cy={col * 26 + 10} r="1.6" fill="currentColor" />
              ))
            )}
          </svg>
        </div>

        <div className="wrap hero-grid">
          <div className="hero-text">
            <div className="eyebrow">Teknik Mesin Industri — Rekayasa Konversi Energi</div>
            <h1>Muhammad<br /><span>Bama Yaza</span></h1>
            <p className="role">
              Lulusan D4 Teknik Mesin Industri ITS dengan pengalaman langsung di
              produksi energi terbarukan, pemodelan sistem perpipaan, konversi
              kendaraan hybrid, dan manajemen logistik proyek.
            </p>
            <div className="cta-row">
              <a className="btn solid" href="#projects">Lihat proyek</a>
              <a className="btn ghost" href="#contact">Hubungi saya</a>
            </div>
          </div>

          <div className="hero-photo">
            <div className="photo-frame">
  <img src={fotoProfil} alt="Muhammad Bama Yaza" />
</div>
            <div className="photo-tag">Muhammad Bama Yaza</div>
          </div>
        </div>
      </header>

      <section id="about">
        <div className="wrap about-grid">
          <div className="stat-list">
            <div className="stat"><div className="num">3.41</div><div className="label">IPK dari 4.00 — D4 Teknik Mesin Industri</div></div>
            <div className="stat"><div className="num">2026</div><div className="label">Lulus, konsentrasi Rekayasa Konversi Energi</div></div>
            <div className="stat"><div className="num">02</div><div className="label">Pengalaman kerja industri</div></div>
          </div>
          <div className="about-text">
            <h2>Ringkasan</h2>
            <p>
              Lulusan D4 Teknik Mesin Industri dengan konsentrasi Rekayasa Konversi
              Energi dan analisis sistem mekanikal. Punya pengalaman langsung di
              produksi energi terbarukan, pemodelan sistem perpipaan, konversi
              kendaraan hybrid, dan manajemen logistik proyek.
            </p>
            <p>
              Terbiasa memakai software simulasi teknik tingkat lanjut, dengan
              kemampuan analitis yang terasah lewat riset laboratorium, proyek
              akademik, dan pengalaman lapangan industri.
            </p>

            <div className="skill-group">
              <h3>Software teknik</h3>
              <div className="tag-row">
                <span className="tag">SolidWorks</span>
                <span className="tag">Autodesk Inventor</span>
                <span className="tag">ANSYS Fluent</span>
                <span className="tag">CAEPIPE</span>
                <span className="tag">EPANET</span>
                <span className="tag">CAD 2D</span>
              </div>
            </div>
            <div className="skill-group">
              <h3>Kompetensi teknis</h3>
              <div className="tag-row">
                <span className="tag">Biodiesel &amp; transesterifikasi</span>
                <span className="tag">Konversi kendaraan hybrid</span>
                <span className="tag">Piping &amp; isometric drawing</span>
                <span className="tag">Diesel &amp; turbocharger</span>
              </div>
            </div>
            <div className="skill-group">
              <h3>Manajemen operasional</h3>
              <div className="tag-row">
                <span className="tag">Logistik proyek</span>
                <span className="tag">Supply chain</span>
                <span className="tag">Analisis data uji</span>
              </div>
            </div>

            <div className="attachment-block">
              <span className="attachment-heading">Lampiran</span>
              <div className="attachment-group">
                <span className="attachment-label">Autodesk Inventor</span>
                <div className="attachment-row">
                  <img src={softwareInventorCrane} alt="Render crane Autodesk Inventor" />
                  <img src={softwareInventorDrumlifter} alt="Render drum lifter Autodesk Inventor" />
                  <img src={softwareInventorPipecutter} alt="Render mesin potong pipa pneumatic Autodesk Inventor" />
                </div>
              </div>
              <div className="attachment-group">
                <span className="attachment-label">ANSYS Fluent</span>
                <div className="attachment-row">
                  <img src={softwareAnsysFluent} alt="Simulasi CFD ANSYS Fluent" />
                  <img src={softwareAnsysFluent2} alt="Simulasi CFD ANSYS Fluent (ETS)" />
                </div>
              </div>
              <div className="attachment-group">
                <span className="attachment-label">CAEPIPE</span>
                <div className="attachment-row">
                  <img src={softwareCaepipe} alt="Analisis tegangan pipa CAEPIPE" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="experience" className="alt-bg">
        <div className="wrap">
          <h2 className="section-title">Pengalaman kerja</h2>
          <div className="timeline">
            <div className="t-item">
              <div className="when">Feb 2025 — Jun 2025</div>
              <h3>Intern</h3>
              <div className="where">PT Bukit Asam — Tanjung Enim, Sumatera Selatan</div>
              <ul>
                <li>Observasi operasional &amp; analisis sistem mekanikal gearbox conveyor tambang.</li>
                <li>Analisis heat exchanger untuk pendinginan oli gearbox, perawatan &amp; perbaikan berbagai jenis gearbox conveyor.</li>
                <li>Merancang drum lifter untuk efisiensi pengisian oli gearbox, dan prototipe mobile crane untuk mesin bubut.</li>
              </ul>
              <div className="exp-photo">
                <img src={magangBukitAsam} alt="Bersama tim di bengkel reparasi PT Bukit Asam" />
              </div>
            </div>
            <div className="t-item">
              <div className="when">Jul 2023 — Aug 2023</div>
              <h3>Logistics Staff</h3>
              <div className="where">Proyek Smelter 150 kV Manyar — Gresik, Jawa Timur</div>
              <ul>
                <li>Mengelola alur barang &amp; material proyek untuk ketersediaan kebutuhan teknis di lapangan.</li>
                <li>Koordinasi dengan divisi operasional untuk mendukung efisiensi rantai pasok selama fase konstruksi kabel bawah tanah.</li>
              </ul>
              <div className="exp-photo">
                <img src={smelterManyar} alt="Bersama rekan kerja di lokasi Proyek Smelter Manyar" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="projects">
        <div className="wrap">
          <h2 className="section-title">Proyek &amp; riset akademik</h2>

          <div className="focus-card">
            <div>
              <span className="badge badge-thesis">Tugas Akhir</span>
              <div className="when">Sep 2025 — Mei 2026</div>
              <h3>Produksi Biodiesel &amp; Analisis Performa Emisi</h3>
              <p>
                Memformulasi biodiesel dari minyak jelantah lewat proses transesterifikasi,
                lalu menguji variasi campuran (B40, B70, B100) dibanding Pertamina Dex —
                menganalisis efisiensi termal, performa mesin diesel, dan tingkat emisi gas buang.
              </p>
              <div className="project-gallery">
                <img src={biodieselPemurnian} alt="Proses pemurnian biodiesel menggunakan aquades" />
                <img src={biodieselPencampuran} alt="Pencampuran Pertamina Dex dan B100" />
                <img src={biodieselUjiBbm} alt="Uji konsumsi BBM pada mesin diesel" />
                <img src={biodieselDyno} alt="Dyno test kendaraan uji tugas akhir" />
              </div>
            </div>
            <svg viewBox="0 0 300 150">
              <defs>
                <marker id="a1" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto">
                  <path d="M2 1L8 5L2 9" fill="#F5F1E8" />
                </marker>
                <linearGradient id="gold1" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor="#E3C158" />
                  <stop offset="100%" stopColor="#B3891C" />
                </linearGradient>
                <filter id="shadow1" x="-30%" y="-30%" width="160%" height="160%">
                  <feDropShadow dx="0" dy="2" stdDeviation="2.5" floodColor="#000" floodOpacity="0.45" />
                </filter>
              </defs>

              <rect x="14" y="45" width="76" height="60" rx="9" fill="#242424" stroke="#3A3A3A" filter="url(#shadow1)" />
              <circle cx="52" cy="65" r="8" fill="none" stroke="#C9A227" strokeWidth="1.4" />
              <path d="M52,59 C55,63 55,67 52,71 C49,67 49,63 52,59Z" fill="#C9A227" opacity="0.9" />
              <text x="52" y="87" textAnchor="middle" fontSize="8.6" fill="#B3ADA0">Minyak</text>
              <text x="52" y="98" textAnchor="middle" fontSize="8.6" fill="#B3ADA0">jelantah</text>

              <path d="M92,75 C102,75 106,75 116,75" stroke="#F5F1E8" strokeWidth="1.6" fill="none" markerEnd="url(#a1)" />

              <rect x="118" y="35" width="80" height="80" rx="9" fill="url(#gold1)" filter="url(#shadow1)" />
              <path d="M158,48 L158,60 L148,78 A11,11 0 0,0 168,78 L158,60" fill="none" stroke="#121212" strokeWidth="1.4" strokeLinejoin="round" />
              <line x1="150" y1="54" x2="166" y2="54" stroke="#121212" strokeWidth="1.4" />
              <text x="158" y="98" textAnchor="middle" fontSize="8.8" fill="#121212" fontWeight="600">Transesteri-</text>
              <text x="158" y="110" textAnchor="middle" fontSize="8.8" fill="#121212" fontWeight="600">fikasi</text>

              <path d="M200,75 C210,75 214,75 224,75" stroke="#F5F1E8" strokeWidth="1.6" fill="none" markerEnd="url(#a1)" />

              <rect x="226" y="45" width="60" height="60" rx="9" fill="#242424" stroke="#3A3A3A" filter="url(#shadow1)" />
              <rect x="246" y="58" width="20" height="26" rx="2" fill="none" stroke="#C9A227" strokeWidth="1.4" />
              <rect x="250" y="53" width="12" height="7" rx="1" fill="#C9A227" />
              <text x="256" y="98" textAnchor="middle" fontSize="9.5" fill="#F5F1E8" fontWeight="600">B100</text>
            </svg>
          </div>

          <div className="focus-card reverse">
            <svg viewBox="0 0 300 170">
              <defs>
                <marker id="a2" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto">
                  <path d="M2 1L8 5L2 9" fill="#F5F1E8" />
                </marker>
                <linearGradient id="gold2" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor="#E3C158" />
                  <stop offset="100%" stopColor="#B3891C" />
                </linearGradient>
                <filter id="shadow2" x="-30%" y="-30%" width="160%" height="160%">
                  <feDropShadow dx="0" dy="2" stdDeviation="2.5" floodColor="#000" floodOpacity="0.45" />
                </filter>
              </defs>

              <rect x="10" y="16" width="78" height="42" rx="8" fill="#242424" stroke="#3A3A3A" filter="url(#shadow2)" />
              <text x="49" y="41" textAnchor="middle" fontSize="8.6" fill="#B3ADA0">Mesin diesel</text>
              <path d="M90,37 C104,37 108,58 122,58" stroke="#F5F1E8" strokeWidth="1.6" fill="none" markerEnd="url(#a2)" />

              <rect x="10" y="112" width="78" height="42" rx="8" fill="url(#gold2)" filter="url(#shadow2)" />
              <path d="M42,124 L34,140 L40,140 L36,150 L48,132 L41,132 Z" fill="#121212" />
              <text x="58" y="137" textAnchor="middle" fontSize="8.6" fill="#121212" fontWeight="600">Motor</text>
              <text x="58" y="147" textAnchor="middle" fontSize="8.6" fill="#121212" fontWeight="600">listrik</text>
              <path d="M90,133 C104,133 108,112 122,112" stroke="#F5F1E8" strokeWidth="1.6" fill="none" markerEnd="url(#a2)" />

              <rect x="124" y="65" width="66" height="42" rx="8" fill="#242424" stroke="#3A3A3A" filter="url(#shadow2)" />
              <text x="157" y="90" textAnchor="middle" fontSize="8.6" fill="#B3ADA0">Transmisi</text>

              <path d="M192,86 C202,86 206,86 216,86" stroke="#F5F1E8" strokeWidth="1.6" fill="none" markerEnd="url(#a2)" />
              <rect x="218" y="65" width="60" height="42" rx="8" fill="#242424" stroke="#3A3A3A" filter="url(#shadow2)" />
              <circle cx="236" cy="86" r="8" fill="none" stroke="#C9A227" strokeWidth="1.6" />
              <circle cx="260" cy="86" r="8" fill="none" stroke="#C9A227" strokeWidth="1.6" />
              <text x="248" y="102" textAnchor="middle" fontSize="8.2" fill="#F5F1E8">Roda</text>

              <rect x="93" y="150" width="80" height="18" rx="5" fill="#1B1B1B" stroke="#3A3A3A" />
              <text x="133" y="163" textAnchor="middle" fontSize="7.8" fill="#B3ADA0">Baterai ⇄ Inverter</text>
              <path d="M58,154 C58,164 70,168 91,161" stroke="#C9A227" strokeWidth="1.3" fill="none" strokeDasharray="2.5,2.5" />
            </svg>
            <div>
              <span className="badge badge-course">Tugas Mata Kuliah</span>
              <div className="when">2024</div>
              <h3>Konversi Kendaraan Hybrid (Paralel Hybrid)</h3>
              <p>
                Berkontribusi mengonversi kendaraan diesel Panther 1994 menjadi sistem
                paralel hybrid — mesin diesel dan motor listrik sama-sama terhubung ke
                transmisi sehingga bisa menggerakkan roda sendiri-sendiri atau bersamaan.
                Menghitung spesifikasi baterai, motor listrik, dan inverter, serta merancang
                diagram pengkabelan dan sinkronisasi daya.
              </p>
            </div>
          </div>

          <div className="focus-card">
            <div>
              <span className="badge badge-course">Tugas Mata Kuliah</span>
              <div className="when">Apr 2026 — Mei 2026</div>
              <h3>Desain &amp; Simulasi Jaringan Distribusi Air Kampus</h3>
              <p>
                Merancang jaringan perpipaan terintegrasi untuk distribusi air bersih
                kampus, dengan pemodelan hidrolik &amp; simulasi di EPANET. Air dari
                reservoir besar dipompa lewat pipa utama ke reservoir gedung, lalu
                dibagi ke 3 cabang menuju tiap lantai — masing-masing cabang punya
                pompa rumah sendiri yang menyedot air dari reservoir gedung.
              </p>
              <div className="project-gallery">
                <img src={epanetNetworkMap} alt="Network map simulasi EPANET" />
                <img src={epanetGoogleEarth} alt="Skema jalur pipa di atas peta Google Earth" />
                <img src={epanetIsometrik} alt="Gambar isometrik jalur perpipaan" />
              </div>
            </div>
            <svg viewBox="0 0 320 200">
              <defs>
                <linearGradient id="gold3" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor="#E3C158" />
                  <stop offset="100%" stopColor="#B3891C" />
                </linearGradient>
                <filter id="shadow3" x="-30%" y="-30%" width="160%" height="160%">
                  <feDropShadow dx="0" dy="2" stdDeviation="2.5" floodColor="#000" floodOpacity="0.45" />
                </filter>
              </defs>

              <circle cx="36" cy="100" r="30" fill="#242424" stroke="#3A3A3A" filter="url(#shadow3)" />
              <text x="36" y="97" textAnchor="middle" fontSize="8.4" fill="#B3ADA0">Reservoir</text>
              <text x="36" y="109" textAnchor="middle" fontSize="8.4" fill="#B3ADA0">Besar</text>

              <line x1="66" y1="100" x2="122" y2="100" stroke="#F5F1E8" strokeWidth="3" strokeLinecap="round" />
              <rect x="84" y="88" width="24" height="24" rx="6" fill="url(#gold3)" filter="url(#shadow3)" />
              <path d="M92,94 L88,101 L92,101 L89,106 L100,97 L94,97 Z" fill="#121212" />
              <text x="96" y="130" textAnchor="middle" fontSize="7.4" fill="#B3ADA0">Pompa besar</text>

              <circle cx="152" cy="100" r="28" fill="#242424" stroke="#3A3A3A" filter="url(#shadow3)" />
              <text x="152" y="97" textAnchor="middle" fontSize="8.4" fill="#B3ADA0">Reservoir</text>
              <text x="152" y="109" textAnchor="middle" fontSize="8.4" fill="#B3ADA0">Gedung</text>

              <path d="M180,100 C202,100 200,42 224,42" stroke="#F5F1E8" strokeWidth="2.4" fill="none" strokeLinecap="round" />
              <path d="M180,100 L224,100" stroke="#F5F1E8" strokeWidth="2.4" fill="none" strokeLinecap="round" />
              <path d="M180,100 C202,100 200,158 224,158" stroke="#F5F1E8" strokeWidth="2.4" fill="none" strokeLinecap="round" />

              <rect x="224" y="34" width="17" height="17" rx="4" fill="url(#gold3)" filter="url(#shadow3)" />
              <circle cx="232.5" cy="42.5" r="4.2" fill="none" stroke="#121212" strokeWidth="1.2" />
              <rect x="224" y="92" width="17" height="17" rx="4" fill="url(#gold3)" filter="url(#shadow3)" />
              <circle cx="232.5" cy="100.5" r="4.2" fill="none" stroke="#121212" strokeWidth="1.2" />
              <rect x="224" y="150" width="17" height="17" rx="4" fill="url(#gold3)" filter="url(#shadow3)" />
              <circle cx="232.5" cy="158.5" r="4.2" fill="none" stroke="#121212" strokeWidth="1.2" />
              <text x="232.5" y="26" textAnchor="middle" fontSize="6.6" fill="#B3ADA0">Pompa</text>
              <text x="232.5" y="122" textAnchor="middle" fontSize="6.6" fill="#B3ADA0">Pompa</text>
              <text x="232.5" y="180" textAnchor="middle" fontSize="6.6" fill="#B3ADA0">Pompa</text>

              <line x1="241" y1="42" x2="254" y2="42" stroke="#F5F1E8" strokeWidth="2" strokeLinecap="round" />
              <line x1="241" y1="100" x2="254" y2="100" stroke="#F5F1E8" strokeWidth="2" strokeLinecap="round" />
              <line x1="241" y1="158" x2="254" y2="158" stroke="#F5F1E8" strokeWidth="2" strokeLinecap="round" />

              <rect x="256" y="29" width="58" height="26" rx="6" fill="#242424" stroke="#3A3A3A" filter="url(#shadow3)" />
              <text x="285" y="46" textAnchor="middle" fontSize="7.8" fill="#F5F1E8">Lantai 1</text>
              <rect x="256" y="87" width="58" height="26" rx="6" fill="#242424" stroke="#3A3A3A" filter="url(#shadow3)" />
              <text x="285" y="104" textAnchor="middle" fontSize="7.8" fill="#F5F1E8">Lantai 2</text>
              <rect x="256" y="145" width="58" height="26" rx="6" fill="#242424" stroke="#3A3A3A" filter="url(#shadow3)" />
              <text x="285" y="162" textAnchor="middle" fontSize="7.8" fill="#F5F1E8">Lantai 3</text>
            </svg>
          </div>
        </div>
      </section>

      <section id="education" className="alt-bg">
        <div className="wrap two-col">
          <div>
            <h2 className="section-title small">Pendidikan</h2>
            <div className="timeline">
              <div className="t-item">
                <div className="when">Lulus 2026</div>
                <h3>D4 Teknik Mesin Industri</h3>
                <div className="where">Institut Teknologi Sepuluh Nopember (ITS) — Konsentrasi Rekayasa Konversi Energi, IPK 3.41/4.00</div>
              </div>
            </div>
            <h2 className="section-title small" style={{ marginTop: '34px' }}>Pelatihan</h2>
            <div className="tag-row" style={{ flexDirection: 'column', alignItems: 'flex-start', gap: '8px' }}>
              <span className="tag">Digital Marketing — Revou</span>
              <span className="tag">Rahasia Konten Kreatif Anti Ribet dengan ChatGPT — Teknotama</span>
              <span className="tag">LKMM Pra-TD &amp; LKMM TD — ITS</span>
            </div>
          </div>
          <div>
            <h2 className="section-title small">Pengalaman kepanitiaan</h2>
            <div className="mini-card">
              <div className="when">2024</div>
              <h3>Expert Staff, Divisi Lisensi &amp; Keamanan</h3>
              <p>ITS Basketball League</p>
            </div>
            <div className="mini-card">
              <div className="when">2024</div>
              <h3>Expert Staff, Divisi Sponsorship</h3>
              <p>SEC 6.0</p>
            </div>
            <div className="mini-card">
              <div className="when">2023</div>
              <h3>Staff, Divisi Lisensi &amp; Keamanan</h3>
              <p>SEC 5.0</p>
            </div>
          </div>
        </div>
      </section>

      <section id="contact">
        <div className="wrap">
          <div className="contact-box">
            <div>
              <h2>Mari terhubung</h2>
              <p>Terbuka untuk peluang di bidang teknik mesin, konversi energi, maupun sistem fluida &amp; perpipaan.</p>
            </div>
            <ul className="clist">
              <li><span className="k">Email</span><a href="mailto:bamayaza@gmail.com">bamayaza@gmail.com</a></li>
              <li><span className="k">WhatsApp</span><a href="tel:+6282110681473">082110681473</a></li>
              <li><span className="k">LinkedIn</span><a href="https://linkedin.com/in/bamayaza" target="_blank" rel="noreferrer">linkedin.com/in/bamayaza</a></li>
              <li><span className="k">Domisili</span><span>Surabaya, Jawa Timur</span></li>
            </ul>
          </div>
        </div>
      </section>

      <footer>© 2026 Muhammad Bama Yaza.</footer>
    </>
  )
}

export default App
