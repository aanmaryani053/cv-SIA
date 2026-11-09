import React from 'react';
import { Compass, Lightbulb, Users, Target, CheckCircle2 } from 'lucide-react';
import { ProfileData } from '../types/portfolio';

interface AboutSectionProps {
  profile: ProfileData;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ profile }) => {
  return (
    <section id="tentang" className="py-20 bg-[#F6F5F0] border-b border-[#E3DFD5]">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#1E4D40] mb-2">
            <span>01. Pengenalan Diri & Nilai</span>
            <span aria-hidden="true">·</span>
            <span>Filosofi Belajar</span>
          </div>
          <h2 className="font-serif text-3xl md:text-4xl font-bold tracking-tight text-[#162E26] text-balance">
            Menghubungkan Potensi Teknologi dengan Kebutuhan Manusia & Bisnis
          </h2>
          <p className="mt-4 text-base text-[#46554D] leading-relaxed">
            Sebagai mahasiswa baru di Program Studi Sistem Informasi, saya memandang teknologi bukan hanya deretan kode, melainkan sarana untuk menyederhanakan kehidupan sehari-hari dan mendorong efisiensi organisasi.
          </p>
        </div>

        {/* 3 Core Pillars of Information Systems according to the student */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {/* Pillar 1 */}
          <div className="bg-white p-7 rounded-2xl border border-[#E3DFD5] shadow-xs hover:border-[#1E4D40]/40 transition-colors">
            <div className="w-12 h-12 rounded-xl bg-[#E8F2EF] text-[#1E4D40] flex items-center justify-center mb-5">
              <Compass className="w-6 h-6" />
            </div>
            <h3 className="font-serif text-xl font-bold text-[#162E26] mb-2.5">
              Business Mindset
            </h3>
            <p className="text-sm text-[#46554D] leading-relaxed">
              Memahami bagaimana suatu bisnis berjalan, menemukan titik inefisiensi, serta merumuskan strategi transformasi digital yang berkelanjutan bagi organisasi.
            </p>
            <div className="mt-5 pt-4 border-t border-[#F0ECE1] text-xs text-[#526359] flex items-center gap-2">
              <span>Fokus:</span>
              <span>BPMN · Analisis Kebutuhan · KPI</span>
            </div>
          </div>

          {/* Pillar 2 */}
          <div className="bg-white p-7 rounded-2xl border border-[#E3DFD5] shadow-xs hover:border-[#1E4D40]/40 transition-colors">
            <div className="w-12 h-12 rounded-xl bg-[#F8EFE4] text-[#C78839] flex items-center justify-center mb-5">
              <Lightbulb className="w-6 h-6" />
            </div>
            <h3 className="font-serif text-xl font-bold text-[#162E26] mb-2.5">
              Human-Centered UI/UX
            </h3>
            <p className="text-sm text-[#46554D] leading-relaxed">
              Mengutamakan kemudahan pengguna melalui perancangan antarmuka visual yang bersih, intuitif, dan dapat diakses dengan nyaman oleh berbagai kalangan pengguna.
            </p>
            <div className="mt-5 pt-4 border-t border-[#F0ECE1] text-xs text-[#526359] flex items-center gap-2">
              <span>Fokus:</span>
              <span>Wireframing · Prototyping · Figma</span>
            </div>
          </div>

          {/* Pillar 3 */}
          <div className="bg-white p-7 rounded-2xl border border-[#E3DFD5] shadow-xs hover:border-[#1E4D40]/40 transition-colors">
            <div className="w-12 h-12 rounded-xl bg-[#E8F0F8] text-[#2563EB] flex items-center justify-center mb-5">
              <Target className="w-6 h-6" />
            </div>
            <h3 className="font-serif text-xl font-bold text-[#162E26] mb-2.5">
              Data & System Engineering
            </h3>
            <p className="text-sm text-[#46554D] leading-relaxed">
              Membangun fondasi logika pemodelan basis data terstruktur (SQL), integrasi sistem informasi, dan pengembangan aplikasi berbasis web yang stabil.
            </p>
            <div className="mt-5 pt-4 border-t border-[#F0ECE1] text-xs text-[#526359] flex items-center gap-2">
              <span>Fokus:</span>
              <span>ERD Database · SQL · Python · Web</span>
            </div>
          </div>
        </div>

        {/* Deep Dive Narrative & Core Values */}
        <div className="bg-white rounded-2xl p-8 md:p-10 border border-[#E3DFD5] shadow-xs">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-7 space-y-4 text-sm md:text-base text-[#3E4E45] leading-relaxed">
              <h3 className="font-serif text-2xl font-bold text-[#162E26] mb-4">
                Mengapa Saya Memilih S1 Sistem Informasi?
              </h3>
              <p>
                Ketika pertama kali memutuskan jurusan kuliah, saya mencari bidang yang seimbang: tidak murni berkutat pada rumus teknis semata, namun juga memahami manusia, komunikasi, dan organisasi bisnis. Di Program Studi Sistem Informasi, saya menemukan wadah yang tepat.
              </p>
              <p>
                Saya percaya bahwa produk teknologi terbaik bukan sekadar yang paling rumit kodenya, melainkan yang paling berhasil memecahkan rasa frustrasi pengguna dan menghasilkan dampak positif yang nyata.
              </p>
            </div>

            <div className="lg:col-span-5 bg-[#F6F5F0] p-6 rounded-xl border border-[#E3DFD5]">
              <h4 className="text-xs font-semibold uppercase tracking-wider text-[#1E4D40] mb-4">
                Prinsip Belajar Saya
              </h4>
              <ul className="space-y-3 text-xs md:text-sm text-[#3E4E45]">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1E4D40] shrink-0 mt-0.5" />
                  <span><strong>Konsistensi Belajar Mandiri:</strong> Meluangkan waktu 1-2 jam setiap hari di luar kelas untuk eksplorasi studi kasus dan latihan koding.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1E4D40] shrink-0 mt-0.5" />
                  <span><strong>Kolaboratif & Terbuka:</strong> Menghargai sudut pandang berbeda dalam kerja kelompok dan tidak ragu bertanya saat menemukan kendala.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1E4D40] shrink-0 mt-0.5" />
                  <span><strong>Berorientasi Solusi Nyata:</strong> Selalu menguji karya dengan umpan balik pengguna asli untuk perbaikan berkelanjutan.</span>
                </li>
              </ul>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
