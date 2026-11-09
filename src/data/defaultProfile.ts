import { ProfileData, SkillItem, ProjectItem, RoadmapYear } from '../types/portfolio';

export const initialProfileData: ProfileData = {
  name: "Aan Maryani",
  nickname: "Aan",
  role: "Mahasiswa Baru S1 Sistem Informasi",
  cohort: "Angkatan 2026",
  university: "UNIKMA Majenang Cilacap",
  faculty: "Fakultas Ilmu Komputer & Teknologi Informasi",
  bioIntro: "Halo! Saya mahasiswa baru Program Studi S1 Sistem Informasi di UNIKMA Majenang Cilacap yang memiliki antusiasme tinggi terhadap titik temu antara kebutuhan bisnis, desain pengalaman pengguna (UI/UX), dan rekayasa teknologi digital.",
  bioPassion: "Saya sangat tertarik memecahkan persoalan nyata melalui solusi digital terintegrasi. Menjelang semester awal ini, saya aktif mempelajari fondasi logika pemrograman, analisis proses bisnis, dan perancangan antarmuka human-centered.",
  bioOutro: "Terbuka luas untuk berkenalan dengan sesama mahasiswa baru, berkolaborasi dalam proyek teknologi, belajar dari rekan-rekan senior, maupun berdiskusi seputar inovasi digital terkini!",
  email: "aanmaryani053@gmail.com",
  phone: "+62 812-8960-8080",
  location: "Majenang, Cilacap, Jawa Tengah",
  linkedin: "linkedin.com/in/aanmaryani",
  github: "github.com/aanmaryani",
  instagram: "@aanmaryani.si",
  photoUrl: "/assets/aistudio/aan_34798b5a.jpeg",
  photoScale: 1.0,
  photoPositionY: 15,
  photoShape: "organic",
  targetGpa: "3.85 / 4.00",
  dreamCareer: "Product Manager & UI/UX Specialist",
};

export const initialSkills: SkillItem[] = [
  {
    id: "figma",
    name: "UI/UX & Wireframing (Figma)",
    category: "design",
    level: "Sedang Aktif Dipelajari",
    iconName: "Palette",
    description: "Membuat alur pengguna (user flow), wireframe rendah-tinggi, dan prototipe aplikasi mobile kampus."
  },
  {
    id: "business-analysis",
    name: "Analisis Proses Bisnis (BPMN)",
    category: "management",
    level: "Fondasi Awal",
    iconName: "TrendingUp",
    description: "Memetakan alur kerja operasional organisasi menjadi diagram terstruktur untuk digitalisasi."
  },
  {
    id: "html-css-js",
    name: "Web Development (HTML, CSS, JS)",
    category: "code",
    level: "Fondasi Kuat",
    iconName: "Code2",
    description: "Membangun tampilan web responsif, semantic HTML5, dan styling modern dengan Tailwind CSS."
  },
  {
    id: "sql-db",
    name: "Basis Data & SQL Dasar",
    category: "data",
    level: "Eksplorasi Semester 1",
    iconName: "Database",
    description: "Memahami struktur Entity Relationship Diagram (ERD), normalisasi tabel, dan query relasional dasar."
  },
  {
    id: "python-basics",
    name: "Logika Pemrograman (Python)",
    category: "code",
    level: "Fondasi Awal",
    iconName: "Terminal",
    description: "Memahami struktur algoritma, kontrol alur, fungsi, serta manipulasi data dasar menggunakan Python."
  },
  {
    id: "notion-trello",
    name: "Manajemen Proyek & Kolaborasi",
    category: "management",
    level: "Mahir",
    iconName: "FolderKanban",
    description: "Dokumentasi sprint tugas kuliah, personal knowledge base di Notion, dan manajemen task tim."
  },
  {
    id: "public-speaking",
    name: "Public Speaking & Presentasi",
    category: "soft",
    level: "Terlatih",
    iconName: "Mic",
    description: "Mempresentasikan ide dan rancangan sistem di hadapan audiens dengan percaya diri dan artikulatif."
  },
  {
    id: "critical-thinking",
    name: "Critical Thinking & Riset Kebutuhan",
    category: "soft",
    level: "Aktif Dilatih",
    iconName: "Sparkles",
    description: "Menggali akar masalah (root cause analysis) sebelum merancang solusi sistem perangkat lunak."
  }
];

export const initialProjects: ProjectItem[] = [
  {
    id: "kampus-flow",
    title: "KampusFlow - Redesain Portal Akademik Mahasiswa",
    category: "UI/UX & Product Design",
    period: "2026 · Studi Kasus Mandiri",
    summary: "Konsep redesain portal mahasiswa yang lebih ramah pengguna untuk pengisian KRS, melihat jadwal kuliah, dan rekap nilai IPK.",
    tools: ["Figma", "User Flow Mapping", "Design System"],
    role: "Sole UI/UX Researcher & Designer",
    problem: "Banyak portal akademik lama terasa kaku di perangkat mobile, navigasi berbelit-belit saat masa pengisian KRS, dan informasi nilai semester tersembunyi.",
    solution: "Merancang tata letak kartu informatif dengan navigasi bottom bar mobile-friendly, pengingat jadwal kelas otomatis, dan simulasi penentuan KRS anti-bentrok.",
    outcome: "Prototipe interaktif diuji coba ke 10 mahasiswa seangkatan dengan feedback 9/10 untuk kemudahan navigasi dan kejernihan antarmuka.",
    imageFallbackGradient: "from-emerald-800 to-teal-950",
    demoUrl: "https://figma.com"
  },
  {
    id: "umkm-inventaris",
    title: "Sistem Pencatatan Penjualan UMKM 'Kue Ibu'",
    category: "Sistem Informasi & Bisnis",
    period: "2026 · Eksplorasi Digitalisasi",
    summary: "Rancangan template database dan dashboard pencatatan transaksi kasir berbasis spreadsheet cloud untuk toko kue lokal.",
    tools: ["Google Sheets API", "AppSheet", "Entity Diagram"],
    role: "System & Process Analyst",
    problem: "Pencatatan nota kasir masih menggunakan nota kertas tulisan tangan, sehingga sering terjadi selisih stok bahan baku dan laba bulanan sulit dihitung.",
    solution: "Menyusun struktur tabel inventaris terotomasi dengan formula kalkulasi stok sisa dan form input pesanan cepat via smartphone pemilik toko.",
    outcome: "Waktu rekapitulasi harian terpangkas dari 45 menit menjadi kurang dari 5 menit dengan akurasi stok 100%.",
    imageFallbackGradient: "from-teal-900 to-slate-900"
  },
  {
    id: "portfolio-web",
    title: "Portofolio Interaktif Mahasiswa Baru SI",
    category: "Web Development",
    period: "2026 · Proyek Showcase",
    summary: "Website personal bergaya editorial modern dengan fitur kartu pengenalan diri, roadmap 4 tahun kuliah, dan guestbook interaktif.",
    tools: ["React", "TypeScript", "Tailwind CSS"],
    role: "Frontend Developer & Designer",
    problem: "Mahasiswa baru sering kesulitan membagikan riwayat profil dan minat risetnya secara komprehensif saat perkenalan kelas atau pendaftaran organisasi kampus.",
    solution: "Mengembangkan platform profil digital responsif berestetika chic dengan opsi ekspor slide pengenalan diri.",
    outcome: "Portofolio siap pakai untuk penugasan PKKMB/Ospek, profil LinkedIn, serta jejaring sesama sivitas akademika.",
    imageFallbackGradient: "from-slate-800 to-emerald-950"
  },
  {
    id: "data-analisis-maba",
    title: "Eksplorasi Data: Tren Minat Peminatan Sistem Informasi",
    category: "Data & Analitika",
    period: "2026 · Riset Mini",
    summary: "Visualisasi perbandingan minat karir mahasiswa baru SI antara Software Engineering, Data Analyst, dan Product Management.",
    tools: ["Python", "Google Colab", "Data Visualization"],
    role: "Data Explorer",
    problem: "Maba sering bingung memilih jalur spesialisasi di Sistem Informasi karena luasnya cakupan keilmuan.",
    solution: "Mengolah survei angkatan dan memvisualisasikan korelasi minat mata kuliah dengan prospek karier masa depan.",
    outcome: "Memberikan panduan visual yang membantu mahasiswa seangkatan menyusun rencana studi mandiri sejak tahun pertama.",
    imageFallbackGradient: "from-[#1B4942] to-slate-900"
  }
];

export const studyRoadmap: RoadmapYear[] = [
  {
    year: 1,
    phaseTitle: "Tahun 1: Fondasi Logika & Adaptasi Kampus",
    semesters: "Semester 1 & 2",
    focus: "Membangun fondasi kuat dalam logika algoritma, basis data relasional, pengantar sistem informasi, dan aktif berjejaring di himpunan mahasiswa.",
    goals: [
      "Meraih IPK Semester 1 & 2 di atas 3.75",
      "Kuasai dasar pemrograman (Python / Java / JS) & SQL",
      "Aktif sebagai staf magang Himpunan Mahasiswa Sistem Informasi (HIMSISFO)",
      "Membangun portofolio 3 mini proyek mandiri"
    ],
    milestones: [
      "Lulus Dasar Pemrograman dengan nilai A",
      "Rampungkan sertifikasi online Google Data Analytics / UI/UX awal",
      "Mengikuti perlombaan ide bisnis IT tingkat regional"
    ],
    status: "active"
  },
  {
    year: 2,
    phaseTitle: "Tahun 2: Pendalaman Rekayasa & Kompetisi",
    semesters: "Semester 3 & 4",
    focus: "Mendalami Analisis & Perancangan Sistem Informasi (APSI), Rekayasa Perangkat Lunak, UI/UX Research, dan pembentukan tim lomba.",
    goals: [
      "Mengikuti kompetisi Business IT Case / Gemastik UI/UX",
      "Menjadi asisten laboratorium atau tutor sebaya",
      "Menyusun sistem informasi berskala tim kecil",
      "Memperdalam arsitektur cloud & database modeling"
    ],
    milestones: [
      "Publikasi studi kasus UI/UX pertama di Medium / Behance",
      "Masuk finalis kompetisi inovasi digital tingkat nasional"
    ],
    status: "upcoming"
  },
  {
    year: 3,
    phaseTitle: "Tahun 3: Magang Industri & Spesialisasi",
    semesters: "Semester 5 & 6",
    focus: "Mengikuti program MSIB (Magang Studi Independen Bersertifikat) di industri teknologi dan menetapkan topik riset tugas akhir.",
    goals: [
      "Magang sebagai Junior Product Manager / System Analyst / UI/UX Intern",
      "Praktik langsung arsitektur enterprise (ERP / Cloud Management)",
      "Mempersiapkan judul proposal Tugas Akhir / Skripsi terapan"
    ],
    milestones: [
      "Menyelesaikan magang industri selama 6 bulan dengan rekomendasi positif",
      "Mengantongi sertifikasi profesional internasional (misal: Scrum / AWS / Google Cloud)"
    ],
    status: "upcoming"
  },
  {
    year: 4,
    phaseTitle: "Tahun 4: Skripsi, Capstone & Persiapan Karier",
    semesters: "Semester 7 & 8",
    focus: "Menyelesaikan Skripsi berbasis solusi nyata untuk industri atau UMKM, publikasi ilmiah, dan melangkah ke dunia kerja profesional.",
    goals: [
      "Lulus tepat waktu (3.5 - 4 tahun) dengan predikat Cum Laude",
      "Mempublikasikan artikel ilmiah di jurnal terakreditasi SINTA / Konferensi",
      "Mendapatkan penawaran kerja (job offer) sebelum wisuda"
    ],
    milestones: [
      "Sidang Skripsi Selesai dengan nilai A",
      "Wisuda S1 Sistem Informasi dengan bangga"
    ],
    status: "upcoming"
  }
];

export const freshmanFacts = [
  {
    label: "Mengapa Pilih Sistem Informasi?",
    content: "Karena tertarik dengan jembatan antara manusia, proses bisnis, dan teknologi canggih. Bukan cuma ngoding, tapi memahami 'mengapa' teknologi itu dibutuhkan.",
    tag: "Motivasi Kuliah"
  },
  {
    label: "Aplikasi & Tools Favorit",
    content: "Figma untuk mendesain prototipe, VS Code untuk coding, Notion untuk merapikan catatan kuliah, dan Spotify untuk fokus belajar.",
    tag: "Tech Stack & Daily Tools"
  },
  {
    label: "Aktivitas di Luar Perkuliahan",
    content: "Membaca artikel tech-crunch & studi kasus startup, hunting foto estetik, eksplorasi kopi lokal, dan podcast seputar product management.",
    tag: "Hobi & Keseharian"
  },
  {
    label: "Motto Hidup",
    content: "\"Always stay curious, embrace mistakes as lessons, and design systems that bring real human value.\"",
    tag: "Prinsip Diri"
  }
];
