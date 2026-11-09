import React, { useState } from 'react';
import { Palette, TrendingUp, Code2, Database, Terminal, FolderKanban, Mic, Sparkles } from 'lucide-react';
import { SkillItem } from '../types/portfolio';

interface SkillsSectionProps {
  skills: SkillItem[];
}

export const SkillsSection: React.FC<SkillsSectionProps> = ({ skills }) => {
  const [filter, setFilter] = useState<'all' | 'design' | 'code' | 'data' | 'management' | 'soft'>('all');

  const filteredSkills = filter === 'all' 
    ? skills 
    : skills.filter(item => item.category === filter);

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Palette': return <Palette className="w-5 h-5 text-[#1E4D40]" />;
      case 'TrendingUp': return <TrendingUp className="w-5 h-5 text-[#1E4D40]" />;
      case 'Code2': return <Code2 className="w-5 h-5 text-[#1E4D40]" />;
      case 'Database': return <Database className="w-5 h-5 text-[#1E4D40]" />;
      case 'Terminal': return <Terminal className="w-5 h-5 text-[#1E4D40]" />;
      case 'FolderKanban': return <FolderKanban className="w-5 h-5 text-[#1E4D40]" />;
      case 'Mic': return <Mic className="w-5 h-5 text-[#1E4D40]" />;
      default: return <Sparkles className="w-5 h-5 text-[#1E4D40]" />;
    }
  };

  const getCategoryLabel = (category: string) => {
    switch (category) {
      case 'design': return 'UI/UX & Desain';
      case 'code': return 'Pemrograman & Web';
      case 'data': return 'Basis Data & Analisis';
      case 'management': return 'Manajemen & Proses Bisnis';
      case 'soft': return 'Soft Skills';
      default: return 'Umum';
    }
  };

  return (
    <section id="keahlian" className="py-20 bg-paper border-b border-[#E3DFD5]">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#1E4D40] mb-2">
              <span>02. Keahlian & Pembelajaran</span>
              <span aria-hidden="true">·</span>
              <span>Learning Journey</span>
            </div>
            <h2 className="font-serif text-3xl md:text-4xl font-bold tracking-tight text-[#162E26]">
              Perangkat & Keterampilan yang Sedang Dikembangkan
            </h2>
            <p className="mt-3 text-sm md:text-base text-[#46554D]">
              Kombinasi kemampuan analitika, keterampilan teknis, dan kepekaan desain yang saya latih secara konsisten sejak masa transisi ke dunia perkuliahan.
            </p>
          </div>

          {/* Interactive Filter Tabs (Segmented Controls) */}
          <div className="flex flex-wrap items-center gap-1.5 p-1.5 bg-[#EAE6DC] rounded-xl self-start md:self-auto border border-[#DDD8CD]">
            <button
              onClick={() => setFilter('all')}
              className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors cursor-pointer whitespace-nowrap shrink-0 ${
                filter === 'all'
                  ? 'bg-white text-[#162E26] shadow-xs'
                  : 'text-[#46554D] hover:text-[#162E26]'
              }`}
            >
              Semua ({skills.length})
            </button>
            <button
              onClick={() => setFilter('design')}
              className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors cursor-pointer whitespace-nowrap shrink-0 ${
                filter === 'design'
                  ? 'bg-white text-[#162E26] shadow-xs'
                  : 'text-[#46554D] hover:text-[#162E26]'
              }`}
            >
              UI/UX
            </button>
            <button
              onClick={() => setFilter('code')}
              className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors cursor-pointer whitespace-nowrap shrink-0 ${
                filter === 'code'
                  ? 'bg-white text-[#162E26] shadow-xs'
                  : 'text-[#46554D] hover:text-[#162E26]'
              }`}
            >
              Koding & Web
            </button>
            <button
              onClick={() => setFilter('data')}
              className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors cursor-pointer whitespace-nowrap shrink-0 ${
                filter === 'data'
                  ? 'bg-white text-[#162E26] shadow-xs'
                  : 'text-[#46554D] hover:text-[#162E26]'
              }`}
            >
              Basis Data
            </button>
            <button
              onClick={() => setFilter('management')}
              className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors cursor-pointer whitespace-nowrap shrink-0 ${
                filter === 'management'
                  ? 'bg-white text-[#162E26] shadow-xs'
                  : 'text-[#46554D] hover:text-[#162E26]'
              }`}
            >
              Manajemen Bisnis
            </button>
            <button
              onClick={() => setFilter('soft')}
              className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors cursor-pointer whitespace-nowrap shrink-0 ${
                filter === 'soft'
                  ? 'bg-white text-[#162E26] shadow-xs'
                  : 'text-[#46554D] hover:text-[#162E26]'
              }`}
            >
              Soft Skills
            </button>
          </div>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredSkills.map((item) => (
            <div
              key={item.id}
              className="bg-white p-6 rounded-2xl border border-[#E3DFD5] shadow-xs hover:border-[#1E4D40]/50 hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-[#E8F2EF] flex items-center justify-center">
                    {getIcon(item.iconName)}
                  </div>
                  {/* Clean unboxed metadata (NO PILLS) */}
                  <span className="text-[11px] font-medium text-[#1E4D40]">
                    {item.level}
                  </span>
                </div>

                <h3 className="font-serif text-lg font-bold text-[#162E26] mb-2">
                  {item.name}
                </h3>

                <p className="text-xs text-[#526359] leading-relaxed">
                  {item.description}
                </p>
              </div>

              {/* Footer metadata without pill boxes */}
              <div className="mt-5 pt-3 border-t border-[#F0ECE1] text-[11px] text-[#7B8B82] flex items-center gap-1.5">
                <span>{getCategoryLabel(item.category)}</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
