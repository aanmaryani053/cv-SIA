import React, { useState } from 'react';
import { CheckCircle2, Circle, Milestone, GraduationCap, ChevronRight } from 'lucide-react';
import { RoadmapYear } from '../types/portfolio';

interface RoadmapSectionProps {
  roadmap: RoadmapYear[];
}

export const RoadmapSection: React.FC<RoadmapSectionProps> = ({ roadmap }) => {
  const [activeYear, setActiveYear] = useState<number>(1);

  const selectedYearData = roadmap.find((r) => r.year === activeYear) || roadmap[0];

  return (
    <section id="roadmap" className="py-20 bg-paper border-b border-[#E3DFD5]">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#1E4D40] mb-2">
            <span>03. Peta Perjalanan Akademik</span>
            <span aria-hidden="true">·</span>
            <span>4-Year Academic Vision</span>
          </div>
          <h2 className="font-serif text-3xl md:text-4xl font-bold tracking-tight text-[#162E26]">
            Rencana Strategis 4 Tahun Kuliah di Sistem Informasi
          </h2>
          <p className="mt-3 text-sm md:text-base text-[#46554D] leading-relaxed">
            Menata target belajar yang terukur dari tahun pertama hingga meraih gelar Sarjana Komputer (S.Kom), memastikan keseimbangan antara prestasi akademik dan kesiapan karier profesional.
          </p>
        </div>

        {/* 4-Year Selector Bar (Segmented Controls) */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-10">
          {roadmap.map((item) => (
            <button
              key={item.year}
              onClick={() => setActiveYear(item.year)}
              className={`p-4 rounded-xl border text-left transition-all cursor-pointer ${
                activeYear === item.year
                  ? 'bg-white border-[#1E4D40] shadow-md ring-1 ring-[#1E4D40]'
                  : 'bg-white/60 border-[#E3DFD5] hover:bg-white hover:border-[#1E4D40]/30'
              }`}
            >
              <div className="flex items-center justify-between mb-1.5">
                <span className="font-mono text-xs font-bold text-[#1E4D40]">
                  TAHUN 0{item.year}
                </span>
                {item.status === 'active' ? (
                  <span className="text-[10px] font-semibold text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded">
                    Sedang Dijalani
                  </span>
                ) : (
                  <span className="text-[10px] text-[#7B8B82]">
                    Rencana
                  </span>
                )}
              </div>
              <h4 className="font-serif text-sm font-bold text-[#162E26] line-clamp-1">
                {item.phaseTitle.split(':')[1]?.trim() || item.phaseTitle}
              </h4>
              <span className="text-xs text-[#526359] block mt-0.5">
                {item.semesters}
              </span>
            </button>
          ))}
        </div>

        {/* Active Year Detail Card */}
        <div className="bg-white rounded-2xl border border-[#E3DFD5] p-8 md:p-10 shadow-xs">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-[#F0ECE1]">
            <div>
              <div className="flex items-center gap-2 text-xs text-[#1E4D40] font-semibold mb-1">
                <span>{selectedYearData.semesters}</span>
                <span aria-hidden="true">·</span>
                <span>Fokus Utama</span>
              </div>
              <h3 className="font-serif text-2xl md:text-3xl font-bold text-[#162E26]">
                {selectedYearData.phaseTitle}
              </h3>
            </div>
            <div className="flex items-center gap-2 text-xs font-medium text-[#526359] bg-[#F6F5F0] px-3 py-1.5 rounded-lg border border-[#E3DFD5] self-start md:self-auto">
              <GraduationCap className="w-4 h-4 text-[#1E4D40]" />
              <span>Menuju Sarjana Komputer (S.Kom)</span>
            </div>
          </div>

          <p className="mt-6 text-sm md:text-base text-[#46554D] leading-relaxed max-w-3xl">
            {selectedYearData.focus}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
            {/* Target & Rencana Belajar */}
            <div className="bg-[#FAF9F5] p-6 rounded-xl border border-[#EFECE3]">
              <h4 className="font-serif text-base font-bold text-[#162E26] mb-4 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#1E4D40]" />
                <span>Target & Rencana Capaian</span>
              </h4>
              <ul className="space-y-3">
                {selectedYearData.goals.map((goal, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#3E4E45]">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#1E4D40] shrink-0 mt-2" />
                    <span>{goal}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Target Milestone / Output Nyata */}
            <div className="bg-[#FAF9F5] p-6 rounded-xl border border-[#EFECE3]">
              <h4 className="font-serif text-base font-bold text-[#162E26] mb-4 flex items-center gap-2">
                <Milestone className="w-4 h-4 text-[#C78839]" />
                <span>Output & Pencapaian Kunci</span>
              </h4>
              <ul className="space-y-3">
                {selectedYearData.milestones.map((milestone, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#3E4E45]">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#C78839] shrink-0 mt-2" />
                    <span>{milestone}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
