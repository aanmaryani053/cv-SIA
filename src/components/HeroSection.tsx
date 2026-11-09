import React, { useState } from 'react';
import { Mail, Phone, MapPin, Linkedin, Github, ExternalLink, Sparkles, BookOpen, UserCheck, ArrowRight } from 'lucide-react';
import { ProfileData } from '../types/portfolio';

interface HeroSectionProps {
  profile: ProfileData;
  onOpenCardView: () => void;
  onOpenEditProfile: () => void;
  onUpdateFraming?: (scale: number, posY: number, shape?: 'organic' | 'framed') => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  profile,
  onOpenCardView,
  onOpenEditProfile,
  onUpdateFraming,
}) => {
  const [imageError, setImageError] = useState(false);

  return (
    <section className="relative pt-8 pb-16 md:py-20 overflow-hidden bg-paper border-b border-[#E3DFD5]">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Main 2-Column Split: Editorial Typography on Left, Framed Visual on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          
          {/* Left Column (col-span-7): Greeting, Bio, and Contact Grid */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            
            {/* Minimal unboxed metadata kicker */}
            <div className="flex items-center gap-2 text-xs font-medium text-[#526359] mb-4 tracking-wide uppercase">
              <span>{profile.faculty}</span>
              <span aria-hidden="true">·</span>
              <span>{profile.cohort}</span>
              <span aria-hidden="true">·</span>
              <span>Semester 1</span>
            </div>

            {/* Editorial Stately Greeting matching the user's reference aesthetic */}
            <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1 mb-6">
              <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-[#162E26]">
                Hello, I am
              </h1>
              <span className="font-script text-4xl sm:text-5xl md:text-6xl text-[#1E4D40] font-semibold transform -rotate-1 inline-block">
                {profile.name}
              </span>
            </div>

            {/* Sub-headline / Identity statement */}
            <p className="text-lg md:text-xl font-medium text-[#1E4D40] mb-5 leading-snug">
              {profile.role} di {profile.university}
            </p>

            {/* Bio Paragraphs */}
            <div className="space-y-4 text-sm md:text-base text-[#3E4E45] leading-relaxed max-w-2xl mb-8">
              <p>
                {profile.bioIntro}
              </p>
              <p>
                {profile.bioPassion}
              </p>
              <p className="text-[#526359] italic text-xs md:text-sm">
                {profile.bioOutro}
              </p>
            </div>

            {/* Contact Section formatted cleanly like the reference card */}
            <div className="pt-4 border-t border-[#E3DFD5]/80">
              <h3 className="font-serif text-xl font-bold text-[#162E26] mb-4">
                Kontak & Tautan
              </h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-6 text-xs md:text-sm text-[#3E4E45]">
                {/* Email */}
                <a
                  href={`mailto:${profile.email}`}
                  className="flex items-center gap-2.5 group hover:text-[#1E4D40] transition-colors"
                >
                  <span className="w-7 h-7 rounded-full bg-[#162E26] text-white flex items-center justify-center shrink-0 group-hover:bg-[#1E4D40] transition-colors">
                    <Mail className="w-3.5 h-3.5" />
                  </span>
                  <span className="truncate">{profile.email}</span>
                </a>

                {/* Phone */}
                <a
                  href={`tel:${profile.phone.replace(/[^0-9+]/g, '')}`}
                  className="flex items-center gap-2.5 group hover:text-[#1E4D40] transition-colors"
                >
                  <span className="w-7 h-7 rounded-full bg-[#162E26] text-white flex items-center justify-center shrink-0 group-hover:bg-[#1E4D40] transition-colors">
                    <Phone className="w-3.5 h-3.5" />
                  </span>
                  <span className="truncate">{profile.phone}</span>
                </a>

                {/* LinkedIn */}
                <a
                  href={`https://${profile.linkedin}`}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2.5 group hover:text-[#1E4D40] transition-colors"
                >
                  <span className="w-7 h-7 rounded-full bg-[#162E26] text-white flex items-center justify-center shrink-0 group-hover:bg-[#1E4D40] transition-colors">
                    <Linkedin className="w-3.5 h-3.5" />
                  </span>
                  <span className="truncate">{profile.linkedin}</span>
                  <ExternalLink className="w-3 h-3 text-[#7B8B82] opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>

                {/* Location */}
                <div className="flex items-center gap-2.5 text-[#3E4E45]">
                  <span className="w-7 h-7 rounded-full bg-[#162E26] text-white flex items-center justify-center shrink-0">
                    <MapPin className="w-3.5 h-3.5" />
                  </span>
                  <span className="truncate">{profile.location}</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3.5 mt-7">
                <button
                  onClick={onOpenCardView}
                  className="px-5 py-2.5 text-xs md:text-sm font-medium text-white bg-[#1E4D40] hover:bg-[#163B31] rounded-lg transition-colors shadow-sm flex items-center gap-2 cursor-pointer"
                >
                  <span>Buka Slide Pengenalan Diri</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <button
                  onClick={onOpenEditProfile}
                  className="px-4 py-2.5 text-xs md:text-sm font-medium text-[#162E26] bg-[#EAE6DC] hover:bg-[#DFDACD] rounded-lg transition-colors flex items-center gap-2 cursor-pointer"
                >
                  <span>Sesuaikan Biodata</span>
                </button>

                <a
                  href="#roadmap"
                  className="px-4 py-2.5 text-xs md:text-sm font-medium text-[#46554D] hover:text-[#162E26] hover:bg-black/5 rounded-lg transition-colors"
                >
                  Peta Rencana Kuliah
                </a>
              </div>
            </div>

          </div>

          {/* Right Column (col-span-5): Framed Organic Shape & Portrait Photo */}
          <div className="lg:col-span-5 flex flex-col items-center lg:items-end justify-center">
            <div className="relative w-full max-w-[360px] md:max-w-[390px] aspect-[2/3] flex items-center justify-center">
              
              {/* Organic Emerald Blob Backdrop matching the reference image's wavy organic shape */}
              <div className="absolute inset-0 bg-[#1E4D40] organic-blob transform -rotate-1 shadow-2xl opacity-90 scale-106 transition-all duration-700 hover:rotate-0" />

              {/* Secondary warm accent background ring */}
              <div className="absolute -inset-2.5 border-2 border-dashed border-[#C78839]/35 organic-blob-alt rotate-2 pointer-events-none" />

              {/* Foreground Photo Container - in organic mode, takes the exact organic-blob shape of the background */}
              <div
                className={`relative z-10 w-[94%] h-[96%] overflow-hidden shadow-2xl transition-all duration-500 bg-[#EBE7DF] ${
                  profile.photoShape === 'framed'
                    ? 'rounded-3xl border-2 border-white/40'
                    : 'organic-blob border-2 border-[#1E4D40]/25'
                }`}
              >
                {!imageError ? (
                  <img
                    src={profile.photoUrl}
                    alt={`${profile.name} - Mahasiswa Baru Sistem Informasi`}
                    referrerPolicy="no-referrer"
                    onError={() => setImageError(true)}
                    style={{
                      transform: `scale(${profile.photoScale ?? 1.0})`,
                      objectPosition: `center ${profile.photoPositionY ?? 15}%`,
                    }}
                    className="w-full h-full object-cover transition-all duration-300 origin-top"
                  />
                ) : (
                  <div className="w-full h-full flex flex-col items-center justify-center p-6 text-center bg-gradient-to-br from-[#1E4D40] to-[#122B24] text-white">
                    <UserCheck className="w-16 h-16 mb-3 text-[#A3E5D4]" />
                    <span className="font-serif text-2xl font-bold">{profile.name}</span>
                    <span className="text-xs text-[#A3E5D4] mt-1">{profile.role}</span>
                  </div>
                )}

                {/* Floating minimal status tag */}
                <div className="absolute bottom-3 left-3 right-3 bg-white/95 backdrop-blur-md px-3.5 py-2 rounded-xl border border-[#E3DFD5] shadow-sm flex items-center justify-between">
                  <div className="text-left">
                    <p className="text-[11px] font-semibold text-[#162E26] leading-none">
                      {profile.cohort}
                    </p>
                    <p className="text-[10px] text-[#526359] mt-0.5">
                      Prodi Sistem Informasi
                    </p>
                  </div>
                  <span className="text-[11px] font-medium text-[#1E4D40] bg-[#E8F2EF] px-2 py-0.5 rounded">
                    Maba Aktif
                  </span>
                </div>
              </div>

            </div>

            {/* Quick Sizing & Shape Presets Bar */}
            <div className="mt-4 flex flex-wrap items-center justify-center gap-1.5 p-1 bg-white/95 rounded-xl border border-[#E3DFD5] text-[11px] text-[#526359] shadow-xs">
              <span className="px-2 font-medium text-[#162E26]">Gaya Bentuk:</span>
              <button
                onClick={() => {
                  if (onUpdateFraming) onUpdateFraming(profile.photoScale ?? 1.0, profile.photoPositionY ?? 15, 'organic');
                }}
                className={`px-2.5 py-1 rounded-lg transition-colors cursor-pointer ${
                  profile.photoShape !== 'framed'
                    ? 'bg-[#1E4D40] text-white font-semibold shadow-xs'
                    : 'hover:bg-[#F6F5F0] text-[#3E4E45]'
                }`}
              >
                Kurva Organik (Persis Ref)
              </button>
              <button
                onClick={() => {
                  if (onUpdateFraming) onUpdateFraming(profile.photoScale ?? 1.0, profile.photoPositionY ?? 15, 'framed');
                }}
                className={`px-2.5 py-1 rounded-lg transition-colors cursor-pointer ${
                  profile.photoShape === 'framed'
                    ? 'bg-[#1E4D40] text-white font-semibold shadow-xs'
                    : 'hover:bg-[#F6F5F0] text-[#3E4E45]'
                }`}
              >
                Bingkai Lengkung
              </button>

              <span className="text-[#D9D4C7] mx-1">|</span>

              <button
                onClick={() => {
                  if (onUpdateFraming) onUpdateFraming(1.0, 15, profile.photoShape);
                }}
                className={`px-2 py-1 rounded transition-colors cursor-pointer ${
                  (profile.photoScale ?? 1.0) <= 1.05
                    ? 'font-bold text-[#1E4D40] underline underline-offset-4'
                    : 'hover:bg-[#F6F5F0] text-[#526359]'
                }`}
              >
                Pas Penuh
              </button>
              <button
                onClick={() => {
                  if (onUpdateFraming) onUpdateFraming(1.15, 12, profile.photoShape);
                }}
                className={`px-2 py-1 rounded transition-colors cursor-pointer ${
                  (profile.photoScale ?? 1.0) > 1.05 && (profile.photoScale ?? 1.0) < 1.25
                    ? 'font-bold text-[#1E4D40] underline underline-offset-4'
                    : 'hover:bg-[#F6F5F0] text-[#526359]'
                }`}
              >
                Potret
              </button>
              <button
                onClick={() => {
                  if (onUpdateFraming) onUpdateFraming(1.3, 8, profile.photoShape);
                }}
                className={`px-2 py-1 rounded transition-colors cursor-pointer ${
                  (profile.photoScale ?? 1.0) >= 1.25
                    ? 'font-bold text-[#1E4D40] underline underline-offset-4'
                    : 'hover:bg-[#F6F5F0] text-[#526359]'
                }`}
              >
                Zoom
              </button>
            </div>
          </div>

        </div>

        {/* Full-Width Metrics Row below the Hero Split (conforming to portfolio guideline §2.B) */}
        <div className="mt-14 pt-8 border-t border-[#E3DFD5] grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="p-4 rounded-xl bg-white/70 border border-[#E3DFD5]/60">
            <span className="text-xs text-[#526359] block uppercase tracking-wider font-medium">Program Studi</span>
            <span className="font-serif text-lg font-bold text-[#162E26] mt-1 block">S1 Sistem Informasi</span>
            <span className="text-xs text-[#1E4D40] mt-0.5 block">Akreditasi Unggul</span>
          </div>

          <div className="p-4 rounded-xl bg-white/70 border border-[#E3DFD5]/60">
            <span className="text-xs text-[#526359] block uppercase tracking-wider font-medium">Fokus Peminatan</span>
            <span className="font-serif text-lg font-bold text-[#162E26] mt-1 block">UI/UX & Analisis Bisnis</span>
            <span className="text-xs text-[#1E4D40] mt-0.5 block">Human-Centered Tech</span>
          </div>

          <div className="p-4 rounded-xl bg-white/70 border border-[#E3DFD5]/60">
            <span className="text-xs text-[#526359] block uppercase tracking-wider font-medium">Target Capaian IPK</span>
            <span className="font-mono tabular-nums text-lg font-bold text-[#162E26] mt-1 block">{profile.targetGpa}</span>
            <span className="text-xs text-[#1E4D40] mt-0.5 block">Konsisten & Disiplin</span>
          </div>

          <div className="p-4 rounded-xl bg-white/70 border border-[#E3DFD5]/60">
            <span className="text-xs text-[#526359] block uppercase tracking-wider font-medium">Cita-Cita Karier</span>
            <span className="font-serif text-lg font-bold text-[#162E26] mt-1 block truncate" title={profile.dreamCareer}>
              {profile.dreamCareer}
            </span>
            <span className="text-xs text-[#1E4D40] mt-0.5 block">Industri Teknologi</span>
          </div>
        </div>

      </div>
    </section>
  );
};
