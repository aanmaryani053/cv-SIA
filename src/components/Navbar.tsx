import React from 'react';
import { Download, SlidersHorizontal } from 'lucide-react';

interface NavbarProps {
  onOpenCardView: () => void;
  onOpenEditProfile: () => void;
  activeView: 'portfolio' | 'card';
  setActiveView: (view: 'portfolio' | 'card') => void;
  name: string;
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenEditProfile,
  activeView,
  setActiveView,
  name,
}) => {
  return (
    <header className="sticky top-0 z-40 bg-[#F6F5F0]/90 backdrop-blur-md border-b border-[#E3DFD5]">
      <div className="max-w-6xl mx-auto px-6 h-18 flex items-center justify-between gap-8">
        {/* Zone 1: Brand Wordmark (Single text element) */}
        <button
          onClick={() => setActiveView('portfolio')}
          className="text-left group cursor-pointer"
        >
          <span className="font-serif text-xl md:text-2xl font-bold tracking-tight text-[#162E26] group-hover:text-[#1E4D40] transition-colors whitespace-nowrap shrink-0 block">
            {name}
          </span>
          <span className="text-xs text-[#526359] block -mt-1 font-sans">
            S1 Sistem Informasi · UNIKMA Majenang Cilacap
          </span>
        </button>

        {/* Zone 2: 4-5 Concise Single-Line Nav Links */}
        <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-[#46554D]">
          <a
            href="#tentang"
            onClick={(e) => {
              if (activeView !== 'portfolio') {
                e.preventDefault();
                setActiveView('portfolio');
                setTimeout(() => {
                  document.getElementById('tentang')?.scrollIntoView({ behavior: 'smooth' });
                }, 50);
              }
            }}
            className="hover:text-[#162E26] hover:underline underline-offset-8 transition-colors whitespace-nowrap shrink-0"
          >
            Tentang Saya
          </a>
          <a
            href="#keahlian"
            onClick={(e) => {
              if (activeView !== 'portfolio') {
                e.preventDefault();
                setActiveView('portfolio');
                setTimeout(() => {
                  document.getElementById('keahlian')?.scrollIntoView({ behavior: 'smooth' });
                }, 50);
              }
            }}
            className="hover:text-[#162E26] hover:underline underline-offset-8 transition-colors whitespace-nowrap shrink-0"
          >
            Keahlian
          </a>

          <a
            href="#roadmap"
            onClick={(e) => {
              if (activeView !== 'portfolio') {
                e.preventDefault();
                setActiveView('portfolio');
                setTimeout(() => {
                  document.getElementById('roadmap')?.scrollIntoView({ behavior: 'smooth' });
                }, 50);
              }
            }}
            className="hover:text-[#162E26] hover:underline underline-offset-8 transition-colors whitespace-nowrap shrink-0"
          >
            Peta Kuliah
          </a>
          <a
            href="#kontak"
            onClick={(e) => {
              if (activeView !== 'portfolio') {
                e.preventDefault();
                setActiveView('portfolio');
                setTimeout(() => {
                  document.getElementById('kontak')?.scrollIntoView({ behavior: 'smooth' });
                }, 50);
              }
            }}
            className="hover:text-[#162E26] hover:underline underline-offset-8 transition-colors whitespace-nowrap shrink-0"
          >
            Buku Tamu
          </a>
        </nav>

        {/* Zone 3: 1 Primary Action + Quick Customize */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            onClick={onOpenEditProfile}
            title="Kustomisasi Profil & Biodata"
            className="p-2 text-[#46554D] hover:text-[#162E26] hover:bg-[#EAE6DC] rounded-lg transition-colors cursor-pointer"
            aria-label="Edit Profile"
          >
            <SlidersHorizontal className="w-4 h-4" />
          </button>

          <button
            onClick={() => setActiveView(activeView === 'portfolio' ? 'card' : 'portfolio')}
            className="px-4 py-2 text-xs md:text-sm font-medium text-white bg-[#1E4D40] hover:bg-[#163B31] rounded-lg transition-colors whitespace-nowrap shrink-0 shadow-sm flex items-center gap-2 cursor-pointer"
          >
            <Download className="w-4 h-4" />
            <span>{activeView === 'portfolio' ? 'Lihat Kartu Intro' : 'Kembali ke Web'}</span>
          </button>
        </div>
      </div>
    </header>
  );
};
