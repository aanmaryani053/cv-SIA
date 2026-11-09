import React from 'react';
import { ArrowUp, Heart } from 'lucide-react';

interface FooterProps {
  name: string;
}

export const Footer: React.FC<FooterProps> = ({ name }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#EFECE4] border-t border-[#D9D4C7] py-12 text-[#526359]">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <span className="font-serif text-lg font-bold text-[#162E26] block">
            {name}
          </span>
          <p className="text-xs text-[#7B8B82] mt-1">
            Mahasiswa Baru S1 Program Studi Sistem Informasi · UNIKMA Majenang Cilacap · Angkatan 2026
          </p>
        </div>

        <div className="flex items-center gap-6 text-xs text-[#526359]">
          <a href="#tentang" className="hover:text-[#162E26] transition-colors">Tentang</a>
          <a href="#keahlian" className="hover:text-[#162E26] transition-colors">Keahlian</a>
          <a href="#roadmap" className="hover:text-[#162E26] transition-colors">Peta Kuliah</a>
          <a href="#kontak" className="hover:text-[#162E26] transition-colors">Buku Tamu</a>
        </div>

        <div className="flex items-center gap-4">
          <span className="text-xs text-[#7B8B82]">
            Dibuat untuk PKKMB & Portofolio Akademik
          </span>
          <button
            onClick={scrollToTop}
            className="w-8 h-8 rounded-full bg-white border border-[#D9D4C7] text-[#162E26] flex items-center justify-center hover:bg-[#1E4D40] hover:text-white transition-colors cursor-pointer"
            aria-label="Kembali ke atas"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  );
};
