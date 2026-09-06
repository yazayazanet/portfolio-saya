import './App.css'

function App() {
  return (
    <>
      <nav>
        <div className="wrap navbar">
          <div className="brand">M. Bama Yaza</div>
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
        <div className="wrap hero-solo">
          <div className="eyebrow">Teknik Mesin Industri — Rekayasa Konversi Energi</div>
          <h1>Muhammad<br />Bama Yaza</h1>
          <p className="role">
            Lulusan D4 Teknik Mesin Industri ITS dengan pengalaman langsung di
            produksi energi terbarukan (biodiesel), pemodelan sistem perpipaan,
            konversi kendaraan hybrid, dan manajemen logistik proyek.
          </p>
          <div className="cta-row">
            <a className="btn solid" href="#projects">Lihat proyek</a>
            <a className="btn ghost" href="#contact">Hubungi saya</a>
          </div>
        </div>
      </header>

      <section id="about">
        <div className="wrap about-grid">
          <div className="stat-list">
            <div className="stat"><div className="num">3.41 / 4.00</div><div className="label">IPK — D4 Teknik Mesin Industri, ITS</div></div>
            <div className="stat"><div className="num">Surabaya</div><div className="label">Domisili — siap penempatan luar kota</div></div>
            <div className="stat"><div className="num">2026</div><div className="label">Lulus — konsentrasi Rekayasa Konversi Energi</div></div>
          </div>
          <div className="about-text">
            <h2 style={{ fontSize: '1.5rem', marginBottom: '14px' }}>Ringkasan</h2>
            <p>
              Lulusan D4 Teknik Mesin Industri dengan konsentrasi Rekayasa Konversi
              Energi dan analisis sistem mekanikal. Punya pengalaman langsung di
              produksi energi terbarukan (biodiesel), pemodelan sistem perpipaan,
              konversi kendaraan hybrid, dan manajemen logistik proyek.
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
          </div>
        </div>
      </section>

      <section id="experience" className="alt-bg">
        <div className="wrap">
          <h2 style={{ fontSize: '1.7rem', marginBottom: '36px' }}>Pengalaman kerja</h2>
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
            </div>
            <div className="t-item">
              <div className="when">Jul 2023 — Aug 2023</div>
              <h3>Logistics Staff</h3>
              <div className="where">Proyek Smelter 150 kV Manyar — Gresik, Jawa Timur</div>
              <ul>
                <li>Mengelola alur barang &amp; material proyek untuk ketersediaan kebutuhan teknis di lapangan.</li>
                <li>Koordinasi dengan divisi operasional untuk mendukung efisiensi rantai pasok selama fase konstruksi kabel bawah tanah.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section id="projects">
        <div className="wrap">
          <h2 style={{ fontSize: '1.7rem', marginBottom: '36px' }}>Proyek &amp; riset akademik</h2>

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
            </div>
            <svg viewBox="0 0 300 180">
              <defs>
                <marker id="a1" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto">
                  <path d="M2 1L8 5L2 9" fill="#23262B" />
                </marker>
              </defs>
              <rect x="30" y="30" width="60" height="50" rx="4" fill="#7B95A8" />
              <text x="60" y="59" textAnchor="middle" fontSize="10" fill="#23262B">Minyak jelantah</text>
              <path d="M92,55 L128,55" stroke="#23262B" strokeWidth="1.5" fill="none" markerEnd="url(#a1)" />
              <rect x="130" y="30" width="70" height="50" rx="4" fill="#A6613D" />
              <text x="165" y="55" textAnchor="middle" fontSize="9.5" fill="#F7F4EE">Transesteri-</text>
              <text x="165" y="68" textAnchor="middle" fontSize="9.5" fill="#F7F4EE">fikasi</text>
              <path d="M202,55 L238,55" stroke="#23262B" strokeWidth="1.5" fill="none" markerEnd="url(#a1)" />
              <rect x="240" y="30" width="45" height="50" rx="4" fill="#3E5C76" />
              <text x="262" y="59" textAnchor="middle" fontSize="10" fill="#F7F4EE">B40/70/100</text>
              <line x1="40" y1="120" x2="260" y2="120" stroke="#C9C2B4" strokeWidth="1" />
              <line x1="40" y1="120" x2="40" y2="90" stroke="#C9C2B4" strokeWidth="1" />
              <path d="M50,115 C110,110 170,95 250,95" stroke="#3E5C76" strokeWidth="2" fill="none" />
              <text x="120" y="150" fontSize="10" fill="#565349">Efisiensi termal vs rasio campuran biodiesel</text>
            </svg>
          </div>

          <div className="focus-card reverse">
            <svg viewBox="0 0 300 180">
              <defs>
                <marker id="a2" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto">
                  <path d="M2 1L8 5L2 9" fill="#23262B" />
                </marker>
              </defs>
              <rect x="20" y="90" width="120" height="50" rx="6" fill="#7B95A8" />
              <text x="80" y="119" textAnchor="middle" fontSize="10" fill="#23262B">Mesin diesel Panther</text>
              <path d="M142,115 L178,115" stroke="#23262B" strokeWidth="1.5" fill="none" markerEnd="url(#a2)" />
              <rect x="180" y="60" width="55" height="45" rx="6" fill="#A6613D" />
              <text x="207" y="86" textAnchor="middle" fontSize="9" fill="#F7F4EE">Motor listrik</text>
              <rect x="180" y="115" width="55" height="45" rx="6" fill="#3E5C76" />
              <text x="207" y="141" textAnchor="middle" fontSize="9" fill="#F7F4EE">Inverter</text>
              <rect x="245" y="90" width="45" height="45" rx="6" fill="#565349" />
              <text x="267" y="116" textAnchor="middle" fontSize="9" fill="#F7F4EE">Baterai</text>
              <line x1="237" y1="82" x2="243" y2="98" stroke="#23262B" strokeWidth="1.2" />
              <line x1="237" y1="148" x2="243" y2="126" stroke="#23262B" strokeWidth="1.2" />
            </svg>
            <div>
              <span className="badge badge-course">Tugas Mata Kuliah</span>
              <div className="when">2024</div>
              <h3>Konversi Kendaraan Hybrid</h3>
              <p>
                Berkontribusi mengonversi kendaraan diesel Panther 1994 menjadi sistem
                motor listrik hybrid — menghitung spesifikasi baterai, motor listrik, dan
                inverter, serta merancang diagram pengkabelan dan sinkronisasi daya.
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
                kampus, dengan pemodelan hidrolik &amp; simulasi di EPANET — termasuk
                perhitungan kapasitas reservoir, spesifikasi pompa, dan analisis aliran fluida.
              </p>
            </div>
            <svg viewBox="0 0 300 180">
              <circle cx="50" cy="90" r="26" fill="#7B95A8" />
              <text x="50" y="94" textAnchor="middle" fontSize="9" fill="#23262B">Reservoir</text>
              <line x1="76" y1="90" x2="130" y2="90" stroke="#3E5C76" strokeWidth="3" />
              <rect x="130" y="78" width="26" height="24" rx="4" fill="#A6613D" />
              <text x="143" y="118" textAnchor="middle" fontSize="9" fill="#565349">Pompa</text>
              <line x1="156" y1="90" x2="200" y2="90" stroke="#3E5C76" strokeWidth="3" />
              <line x1="200" y1="90" x2="200" y2="50" stroke="#3E5C76" strokeWidth="2.5" />
              <line x1="200" y1="90" x2="200" y2="130" stroke="#3E5C76" strokeWidth="2.5" />
              <line x1="200" y1="50" x2="250" y2="50" stroke="#3E5C76" strokeWidth="2" />
              <line x1="200" y1="130" x2="250" y2="130" stroke="#3E5C76" strokeWidth="2" />
              <circle cx="250" cy="50" r="5" fill="#565349" />
              <circle cx="250" cy="130" r="5" fill="#565349" />
              <text x="230" y="42" fontSize="8.5" fill="#565349">Gedung A</text>
              <text x="230" y="146" fontSize="8.5" fill="#565349">Gedung B</text>
            </svg>
          </div>
        </div>
      </section>

      <section id="education" className="alt-bg">
        <div className="wrap two-col">
          <div>
            <h2 style={{ fontSize: '1.5rem', marginBottom: '22px' }}>Pendidikan</h2>
            <div className="timeline">
              <div className="t-item">
                <div className="when">Lulus 2026</div>
                <h3>D4 Teknik Mesin Industri</h3>
                <div className="where">Institut Teknologi Sepuluh Nopember (ITS) — Konsentrasi Rekayasa Konversi Energi, IPK 3.41/4.00</div>
              </div>
            </div>
            <h2 style={{ fontSize: '1.3rem', margin: '34px 0 14px' }}>Pelatihan</h2>
            <div className="tag-row" style={{ flexDirection: 'column', alignItems: 'flex-start', gap: '8px' }}>
              <span className="tag">Digital Marketing — Revou</span>
              <span className="tag">Rahasia Konten Kreatif Anti Ribet dengan ChatGPT — Teknotama</span>
              <span className="tag">LKMM Pra-TD &amp; LKMM TD — ITS</span>
            </div>
          </div>
          <div>
            <h2 style={{ fontSize: '1.5rem', marginBottom: '22px' }}>Pengalaman kepanitiaan</h2>
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
