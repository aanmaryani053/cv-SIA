import React, { useRef, useState } from 'react';
import { Mail, Phone, MapPin, Linkedin, Download, Printer, Copy, Check, ArrowLeft, Eye, RefreshCw } from 'lucide-react';
import { ProfileData } from '../types/portfolio';

interface IntroCardViewProps {
  profile: ProfileData;
  onBackToPortfolio: () => void;
  onOpenEditProfile: () => void;
  onUpdateFraming?: (scale: number, posY: number, shape?: 'organic' | 'framed') => void;
}

export const IntroCardView: React.FC<IntroCardViewProps> = ({
  profile,
  onBackToPortfolio,
  onOpenEditProfile,
  onUpdateFraming,
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [copied, setCopied] = useState(false);
  const [showOriginalRef, setShowOriginalRef] = useState(false);
  const [downloading, setDownloading] = useState(false);

  // Copy text introduction for WhatsApp/Discord/Class OSPEK introductions
  const handleCopyIntroText = () => {
    const text = `Halo semuanya! 👋✨\n\nPerkenalkan, saya *${profile.name}* (${profile.nickname}), Mahasiswa Baru *${profile.role}* di *${profile.university}* (${profile.cohort}).\n\n📖 *Tentang Saya:* ${profile.bioIntro}\n💡 *Minat Utama:* UI/UX Design, Analisis Proses Bisnis, dan Rekayasa Teknologi Informasi.\n\n📬 *Kontak & Jejaring:*\n• Email: ${profile.email}\n• WhatsApp: ${profile.phone}\n• LinkedIn: https://${profile.linkedin}\n• Domisili: ${profile.location}\n\nSenang bisa berkenalan dan siap berkolaborasi bersama teman-teman semua! 🚀`;
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handlePrint = () => {
    window.print();
  };

  // Canvas-based card export to PNG without external buggy libraries
  const handleDownloadCard = async () => {
    setDownloading(true);
    try {
      const canvas = document.createElement('canvas');
      // High-res canvas 1600 x 1000
      canvas.width = 1600;
      canvas.height = 1000;
      const ctx = canvas.getContext('2d');
      if (!ctx) return;

      // Draw warm paper background
      ctx.fillStyle = '#F4F2EC';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Subtle noise / speckles
      ctx.fillStyle = 'rgba(30, 77, 64, 0.04)';
      for (let i = 0; i < 600; i++) {
        const x = Math.random() * canvas.width;
        const y = Math.random() * canvas.height;
        const r = Math.random() * 2 + 0.5;
        ctx.beginPath();
        ctx.arc(x, y, r, 0, Math.PI * 2);
        ctx.fill();
      }

      // Draw organic teal shape on right
      ctx.fillStyle = '#1E4D40';
      ctx.beginPath();
      // Draw smooth organic blob
      ctx.ellipse(1250, 500, 320, 420, Math.PI / 12, 0, Math.PI * 2);
      ctx.fill();

      // Heading: "Hello, I am" in serif
      ctx.fillStyle = '#162E26';
      ctx.font = 'bold 84px "Playfair Display", Georgia, serif';
      ctx.fillText('Hello, I am', 100, 160);

      // Name in script style
      ctx.fillStyle = '#1E4D40';
      ctx.font = '600 86px "Caveat", cursive, sans-serif';
      const helloWidth = ctx.measureText('Hello, I am').width;
      ctx.fillText(profile.name, 100 + helloWidth + 30, 160);

      // Role & Cohort & University
      ctx.fillStyle = '#526359';
      ctx.font = 'bold 22px "Plus Jakarta Sans", sans-serif';
      ctx.fillText(`${profile.role.toUpperCase()} · ${profile.university.toUpperCase()} · ${profile.cohort.toUpperCase()}`, 100, 220);

      // Bio paragraphs
      ctx.fillStyle = '#3E4E45';
      ctx.font = '24px "Plus Jakarta Sans", sans-serif';
      
      const wrapText = (text: string, x: number, y: number, maxWidth: number, lineHeight: number) => {
        const words = text.split(' ');
        let line = '';
        let currentY = y;
        for (let n = 0; n < words.length; n++) {
          const testLine = line + words[n] + ' ';
          const metrics = ctx.measureText(testLine);
          if (metrics.width > maxWidth && n > 0) {
            ctx.fillText(line, x, currentY);
            line = words[n] + ' ';
            currentY += lineHeight;
          } else {
            line = testLine;
          }
        }
        ctx.fillText(line, x, currentY);
        return currentY + lineHeight;
      };

      let nextY = wrapText(profile.bioIntro, 100, 290, 720, 38);
      nextY = wrapText(profile.bioPassion, 100, nextY + 16, 720, 38);
      nextY = wrapText(profile.bioOutro, 100, nextY + 16, 720, 38);

      // Contact Title
      ctx.fillStyle = '#162E26';
      ctx.font = 'bold 44px "Playfair Display", Georgia, serif';
      ctx.fillText('Contact', 100, 750);

      // Contact details
      ctx.fillStyle = '#3E4E45';
      ctx.font = '22px "Plus Jakarta Sans", sans-serif';
      ctx.fillText(`✉  ${profile.email}`, 100, 810);
      ctx.fillText(`📞  ${profile.phone}`, 100, 860);
      ctx.fillText(`🔗  ${profile.linkedin}`, 480, 810);
      ctx.fillText(`📍  ${profile.location}`, 480, 860);

      // Load and draw photo
      const img = new Image();
      img.crossOrigin = 'anonymous';
      img.src = profile.photoUrl;
      img.onload = () => {
        ctx.save();
        ctx.beginPath();
        ctx.roundRect(1020, 140, 440, 660, 24);
        ctx.clip();
        
        // Calculate crop with aspect-ratio preservation and custom user scale & framing (2:3 ratio)
        const userScale = profile.photoScale ?? 1.0;
        const userPosY = (profile.photoPositionY ?? 15) / 100;
        const targetRatio = 440 / 660; // 2:3 ratio
        
        let sWidth = img.naturalWidth / userScale;
        let sHeight = sWidth / targetRatio;
        if (sHeight > img.naturalHeight) {
          sHeight = img.naturalHeight / userScale;
          sWidth = sHeight * targetRatio;
        }
        let sx = Math.max(0, (img.naturalWidth - sWidth) / 2);
        let sy = Math.max(0, Math.min(img.naturalHeight - sHeight, (img.naturalHeight - sHeight) * (userPosY * 1.4)));

        ctx.drawImage(img, sx, sy, sWidth, sHeight, 1020, 140, 440, 660);
        ctx.restore();

        // Trigger download
        const url = canvas.toDataURL('image/png');
        const a = document.createElement('a');
        a.href = url;
        a.download = `Kartu_Pengenalan_${profile.name.replace(/\s+/g, '_')}_SI.png`;
        a.click();
        setDownloading(false);
      };
      img.onerror = () => {
        // Trigger download even if image doesn't load
        const url = canvas.toDataURL('image/png');
        const a = document.createElement('a');
        a.href = url;
        a.download = `Kartu_Pengenalan_${profile.name.replace(/\s+/g, '_')}_SI.png`;
        a.click();
        setDownloading(false);
      };
    } catch {
      setDownloading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#EBE7DF] py-8 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        
        {/* Top Control Bar */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
          <button
            onClick={onBackToPortfolio}
            className="flex items-center gap-2 text-xs md:text-sm font-medium text-[#162E26] hover:text-[#1E4D40] bg-white px-4 py-2 rounded-lg border border-[#D9D4C7] shadow-xs cursor-pointer transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Kembali ke Halaman Portofolio</span>
          </button>

          <div className="flex flex-wrap items-center gap-2.5">
            {/* Toggle view original vs generated */}
            <button
              onClick={() => setShowOriginalRef(!showOriginalRef)}
              className="flex items-center gap-1.5 text-xs md:text-sm font-medium text-[#3E4E45] bg-white hover:bg-[#F4F2EC] px-3.5 py-2 rounded-lg border border-[#D9D4C7] transition-colors cursor-pointer"
            >
              <Eye className="w-4 h-4" />
              <span>{showOriginalRef ? 'Tampilkan Mode Interaktif' : 'Bandingkan Ref Gambar Asli'}</span>
            </button>

            <button
              onClick={handleCopyIntroText}
              className="flex items-center gap-1.5 text-xs md:text-sm font-medium text-[#3E4E45] bg-white hover:bg-[#F4F2EC] px-3.5 py-2 rounded-lg border border-[#D9D4C7] transition-colors cursor-pointer"
            >
              {copied ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
              <span>{copied ? 'Tersalin!' : 'Salin Teks Perkenalan'}</span>
            </button>

            <button
              onClick={handlePrint}
              className="flex items-center gap-1.5 text-xs md:text-sm font-medium text-[#3E4E45] bg-white hover:bg-[#F4F2EC] px-3.5 py-2 rounded-lg border border-[#D9D4C7] transition-colors cursor-pointer"
            >
              <Printer className="w-4 h-4" />
              <span>Cetak / PDF</span>
            </button>

            <button
              onClick={handleDownloadCard}
              disabled={downloading}
              className="flex items-center gap-1.5 text-xs md:text-sm font-medium text-white bg-[#1E4D40] hover:bg-[#163B31] px-4 py-2 rounded-lg shadow-sm transition-colors cursor-pointer disabled:opacity-50"
            >
              <Download className="w-4 h-4" />
              <span>{downloading ? 'Memproses...' : 'Unduh Gambar PNG'}</span>
            </button>
          </div>
        </div>

        {/* The Introduction Slide / Card */}
        {showOriginalRef ? (
          <div className="bg-white rounded-2xl p-6 sm:p-8 border border-[#D9D4C7] shadow-xl text-center">
            <div className="flex flex-wrap items-center justify-between gap-4 mb-5 pb-4 border-b border-[#E3DFD5]">
              <div className="text-left">
                <h4 className="font-serif text-lg font-bold text-[#162E26]">
                  Foto Anda Dimasukkan ke dalam Gambar Template Asli
                </h4>
                <p className="text-xs text-[#526359] mt-0.5">
                  Foto profil Anda telah dikomposisikan secara presisi ke dalam template grafis referensi.
                </p>
              </div>
              <a
                href="/assets/aistudio/aan_card_composite.webp"
                download={`Kartu_Komposit_${profile.name.replace(/\s+/g, '_')}.webp`}
                className="px-4 py-2 bg-[#1E4D40] hover:bg-[#163B31] text-white text-xs font-medium rounded-lg flex items-center gap-2 shadow-xs transition-colors"
              >
                <Download className="w-4 h-4" />
                <span>Unduh Gambar Komposit Asli</span>
              </a>
            </div>

            <div className="max-w-4xl mx-auto rounded-2xl overflow-hidden border-2 border-[#1E4D40]/20 shadow-lg">
              <img
                src="/assets/aistudio/aan_card_composite.webp"
                alt="Kartu Pengenalan Diri Komposit Asli"
                className="w-full h-auto object-contain"
              />
            </div>
            
            <p className="text-xs text-[#526359] mt-4">
              Anda juga dapat beralih ke <strong>Mode Interaktif S1 SI</strong> di atas untuk mengedit teks biodata atau mengekspor kartu format PNG beresolusi tinggi.
            </p>
          </div>
        ) : (
          <div
            ref={cardRef}
            className="w-full bg-[#F4F2EC] rounded-2xl md:rounded-3xl border border-[#D9D4C7] shadow-2xl p-6 sm:p-10 md:p-14 relative overflow-hidden bg-paper"
            style={{ minHeight: '620px' }}
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              {/* Left Column: Greeting, Bio, Contact */}
              <div className="lg:col-span-7 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#1E4D40] mb-3">
                    <span>{profile.university}</span>
                    <span aria-hidden="true">·</span>
                    <span>{profile.cohort}</span>
                  </div>

                  {/* Stately Title Lockup */}
                  <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1 mb-6">
                    <span className="font-serif text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight text-[#162E26]">
                      Hello, I am
                    </span>
                    <span className="font-script text-3xl sm:text-5xl md:text-6xl text-[#1E4D40] font-semibold">
                      {profile.name}
                    </span>
                  </div>

                  {/* Intro Text Paragraphs */}
                  <div className="space-y-4 text-xs sm:text-sm md:text-base text-[#3E4E45] leading-relaxed max-w-xl mb-8">
                    <p>
                      {profile.bioIntro}
                    </p>
                    <p>
                      {profile.bioPassion}
                    </p>
                    <p>
                      {profile.bioOutro}
                    </p>
                  </div>
                </div>

                {/* Contact Footer matching the bottom row of the reference graphic */}
                <div className="pt-6 border-t border-[#D9D4C7]">
                  <h3 className="font-serif text-2xl font-bold text-[#162E26] mb-4">
                    Contact
                  </h3>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-6 text-xs sm:text-sm text-[#3E4E45]">
                    {/* Email */}
                    <div className="flex items-center gap-3">
                      <span className="w-7 h-7 rounded-full bg-[#162E26] text-white flex items-center justify-center shrink-0">
                        <Mail className="w-3.5 h-3.5" />
                      </span>
                      <span className="truncate font-medium">{profile.email}</span>
                    </div>

                    {/* LinkedIn / Behance */}
                    <div className="flex items-center gap-3">
                      <span className="w-7 h-7 rounded-full bg-[#162E26] text-white flex items-center justify-center shrink-0">
                        <Linkedin className="w-3.5 h-3.5" />
                      </span>
                      <span className="truncate font-medium">{profile.linkedin}</span>
                    </div>

                    {/* Phone */}
                    <div className="flex items-center gap-3">
                      <span className="w-7 h-7 rounded-full bg-[#162E26] text-white flex items-center justify-center shrink-0">
                        <Phone className="w-3.5 h-3.5" />
                      </span>
                      <span className="truncate font-medium">{profile.phone}</span>
                    </div>

                    {/* Location */}
                    <div className="flex items-center gap-3">
                      <span className="w-7 h-7 rounded-full bg-[#162E26] text-white flex items-center justify-center shrink-0">
                        <MapPin className="w-3.5 h-3.5" />
                      </span>
                      <span className="truncate font-medium">{profile.location}</span>
                    </div>
                  </div>
                </div>

              </div>

              {/* Right Column: Organic Shape + Portrait Photo */}
              <div className="lg:col-span-5 flex justify-center items-center">
                <div className="relative w-full max-w-[340px] md:max-w-[370px] aspect-[2/3] flex items-center justify-center">
                  
                  {/* Organic Emerald Background Blob */}
                  <div className="absolute inset-0 bg-[#1E4D40] organic-blob shadow-2xl opacity-90 scale-106 transform -rotate-1" />

                  {/* High Quality Cutout Image with organic curve or framed */}
                  <div
                    className={`relative z-10 w-[94%] h-[96%] overflow-hidden shadow-2xl transition-all duration-500 bg-[#E8E4DA] ${
                      profile.photoShape === 'framed'
                        ? 'rounded-3xl border-2 border-white/40'
                        : 'organic-blob border-2 border-[#1E4D40]/25'
                    }`}
                  >
                    <img
                      src={profile.photoUrl}
                      alt={profile.name}
                      referrerPolicy="no-referrer"
                      style={{
                        transform: `scale(${profile.photoScale ?? 1.0})`,
                        objectPosition: `center ${profile.photoPositionY ?? 15}%`,
                      }}
                      className="w-full h-full object-cover transition-all duration-300 origin-top"
                    />

                    {/* Subtle Badge */}
                    <div className="absolute bottom-2.5 inset-x-2.5 bg-white/95 px-3 py-1.5 rounded-lg border border-[#D9D4C7] shadow-xs flex items-center justify-between">
                      <span className="text-[11px] font-bold text-[#162E26]">
                        {profile.nickname || 'Maba SI'}
                      </span>
                      <span className="text-[10px] text-[#1E4D40] font-semibold">
                        UNIKMA Majenang · SI '26
                      </span>
                    </div>
                  </div>

                </div>
              </div>

            </div>
          </div>
        )}

        {/* Tip & Framing Presets Bar */}
        <div className="mt-6 flex flex-wrap items-center justify-between gap-4 text-xs text-[#526359] px-2 bg-white/95 p-3 rounded-xl border border-[#D9D4C7] shadow-xs">
          <div className="flex flex-wrap items-center gap-2">
            <span className="font-semibold text-[#162E26]">Bentuk Foto:</span>
            <button
              onClick={() => {
                if (onUpdateFraming) onUpdateFraming(profile.photoScale ?? 1.0, profile.photoPositionY ?? 15, 'organic');
              }}
              className={`px-2.5 py-1 rounded-lg transition-colors cursor-pointer ${
                profile.photoShape !== 'framed'
                  ? 'bg-[#1E4D40] text-white font-medium shadow-xs'
                  : 'bg-[#F4F2EC] hover:bg-[#EAE6DC] text-[#3E4E45]'
              }`}
            >
              Kurva Organik (Persis Gambar Asli)
            </button>
            <button
              onClick={() => {
                if (onUpdateFraming) onUpdateFraming(profile.photoScale ?? 1.0, profile.photoPositionY ?? 15, 'framed');
              }}
              className={`px-2.5 py-1 rounded-lg transition-colors cursor-pointer ${
                profile.photoShape === 'framed'
                  ? 'bg-[#1E4D40] text-white font-medium shadow-xs'
                  : 'bg-[#F4F2EC] hover:bg-[#EAE6DC] text-[#3E4E45]'
              }`}
            >
              Bingkai Lengkung
            </button>

            <span className="text-[#D9D4C7] mx-1">|</span>

            <button
              onClick={() => {
                if (onUpdateFraming) onUpdateFraming(1.0, 15, profile.photoShape);
              }}
              className={`px-2 py-1 rounded text-xs transition-colors cursor-pointer ${
                (profile.photoScale ?? 1.0) <= 1.05
                  ? 'font-bold text-[#1E4D40] underline underline-offset-4'
                  : 'text-[#526359] hover:bg-[#F4F2EC]'
              }`}
            >
              Pas Penuh
            </button>
            <button
              onClick={() => {
                if (onUpdateFraming) onUpdateFraming(1.15, 12, profile.photoShape);
              }}
              className={`px-2 py-1 rounded text-xs transition-colors cursor-pointer ${
                (profile.photoScale ?? 1.0) > 1.05 && (profile.photoScale ?? 1.0) < 1.25
                  ? 'font-bold text-[#1E4D40] underline underline-offset-4'
                  : 'text-[#526359] hover:bg-[#F4F2EC]'
              }`}
            >
              Potret
            </button>
            <button
              onClick={() => {
                if (onUpdateFraming) onUpdateFraming(1.3, 8, profile.photoShape);
              }}
              className={`px-2 py-1 rounded text-xs transition-colors cursor-pointer ${
                (profile.photoScale ?? 1.0) >= 1.25
                  ? 'font-bold text-[#1E4D40] underline underline-offset-4'
                  : 'text-[#526359] hover:bg-[#F4F2EC]'
              }`}
            >
              Zoom
            </button>
          </div>

          <button
            onClick={onOpenEditProfile}
            className="text-[#1E4D40] font-semibold hover:underline flex items-center gap-1 cursor-pointer"
          >
            <RefreshCw className="w-3.5 h-3.5" />
            <span>Ubah Teks & Informasi Biodata</span>
          </button>
        </div>

      </div>
    </div>
  );
};
