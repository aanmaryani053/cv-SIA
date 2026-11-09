import React, { useState } from 'react';
import { ArrowUpRight, X, Layers, Lightbulb, CheckCircle, ExternalLink } from 'lucide-react';
import { ProjectItem } from '../types/portfolio';

interface ProjectsSectionProps {
  projects: ProjectItem[];
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({ projects }) => {
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  return (
    <section id="eksplorasi" className="py-20 bg-[#F6F5F0] border-b border-[#E3DFD5]">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#1E4D40] mb-2">
            <span>03. Portofolio & Mini Proyek</span>
            <span aria-hidden="true">·</span>
            <span>Selected Explorations</span>
          </div>
          <h2 className="font-serif text-3xl md:text-4xl font-bold tracking-tight text-[#162E26]">
            Eksplorasi Studi Kasus & Karya Mandiri
          </h2>
          <p className="mt-3 text-sm md:text-base text-[#46554D] leading-relaxed">
            Kumpulan inisiatif mandiri, studi kasus UI/UX, dan eksplorasi sistem yang saya bangun untuk melatih penerapan teori ke dalam problem solving konkret.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <div
              key={project.id}
              onClick={() => setSelectedProject(project)}
              className="group bg-white rounded-2xl border border-[#E3DFD5] overflow-hidden shadow-xs hover:shadow-lg hover:border-[#1E4D40]/50 transition-all cursor-pointer flex flex-col justify-between"
            >
              <div className="p-7">
                {/* Clean unboxed metadata kicker */}
                <div className="flex items-center gap-2 text-xs text-[#526359] mb-3 font-medium">
                  <span>{project.category}</span>
                  <span aria-hidden="true">·</span>
                  <span>{project.period}</span>
                </div>

                <div className="flex items-start justify-between gap-4 mb-3">
                  <h3 className="font-serif text-xl md:text-2xl font-bold text-[#162E26] group-hover:text-[#1E4D40] transition-colors">
                    {project.title}
                  </h3>
                  <div className="w-8 h-8 rounded-full bg-[#F6F5F0] text-[#162E26] flex items-center justify-center shrink-0 group-hover:bg-[#1E4D40] group-hover:text-white transition-colors">
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </div>

                <p className="text-sm text-[#46554D] leading-relaxed mb-6">
                  {project.summary}
                </p>

                {/* Key problem & solution teaser */}
                <div className="bg-[#FAF9F5] p-4 rounded-xl border border-[#EFECE3] mb-4 space-y-2 text-xs">
                  <div>
                    <span className="font-semibold text-[#162E26]">Tantangan: </span>
                    <span className="text-[#526359]">{project.problem}</span>
                  </div>
                </div>
              </div>

              {/* Tools row and role at bottom */}
              <div className="px-7 py-4 bg-[#FBFBF9] border-t border-[#F0ECE1] flex flex-wrap items-center justify-between gap-3 text-xs text-[#526359]">
                <div className="flex items-center gap-2">
                  <span className="font-medium text-[#162E26]">Peran:</span>
                  <span>{project.role}</span>
                </div>
                <div className="flex items-center gap-1.5 text-[11px] text-[#7B8B82]">
                  {project.tools.join(' · ')}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal Detail Lightbox */}
        {selectedProject && (
          <div
            className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 md:p-6"
            onClick={() => setSelectedProject(null)}
          >
            <div
              className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto border border-[#D9D4C7] shadow-2xl p-6 sm:p-8"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Top Bar */}
              <div className="flex items-start justify-between gap-4 mb-6 pb-4 border-b border-[#E3DFD5]">
                <div>
                  <div className="flex items-center gap-2 text-xs text-[#526359] mb-1 font-medium">
                    <span>{selectedProject.category}</span>
                    <span aria-hidden="true">·</span>
                    <span>{selectedProject.period}</span>
                  </div>
                  <h3 className="font-serif text-2xl font-bold text-[#162E26]">
                    {selectedProject.title}
                  </h3>
                </div>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="p-2 text-[#526359] hover:text-[#162E26] hover:bg-[#F6F5F0] rounded-lg transition-colors cursor-pointer"
                  aria-label="Tutup Detail"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Content Body */}
              <div className="space-y-6 text-sm text-[#3E4E45]">
                <div>
                  <h4 className="font-serif text-base font-bold text-[#162E26] mb-2 flex items-center gap-2">
                    <Layers className="w-4 h-4 text-[#1E4D40]" />
                    <span>Latar Belakang & Masalah</span>
                  </h4>
                  <p className="leading-relaxed bg-[#FAF9F5] p-4 rounded-xl border border-[#EFECE3]">
                    {selectedProject.problem}
                  </p>
                </div>

                <div>
                  <h4 className="font-serif text-base font-bold text-[#162E26] mb-2 flex items-center gap-2">
                    <Lightbulb className="w-4 h-4 text-[#C78839]" />
                    <span>Pendekatan & Solusi Sistem</span>
                  </h4>
                  <p className="leading-relaxed bg-[#FAF9F5] p-4 rounded-xl border border-[#EFECE3]">
                    {selectedProject.solution}
                  </p>
                </div>

                <div>
                  <h4 className="font-serif text-base font-bold text-[#162E26] mb-2 flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-emerald-600" />
                    <span>Hasil & Dampak Pembelajaran</span>
                  </h4>
                  <p className="leading-relaxed bg-[#FAF9F5] p-4 rounded-xl border border-[#EFECE3]">
                    {selectedProject.outcome}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#E3DFD5] flex flex-wrap items-center justify-between gap-4 text-xs">
                  <div>
                    <span className="font-bold text-[#162E26]">Teknologi / Perangkat: </span>
                    <span className="text-[#526359]">{selectedProject.tools.join(', ')}</span>
                  </div>
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="px-4 py-2 bg-[#1E4D40] text-white rounded-lg text-xs font-medium hover:bg-[#163B31] transition-colors cursor-pointer"
                  >
                    Tutup Tinjauan
                  </button>
                </div>
              </div>

            </div>
          </div>
        )}

      </div>
    </section>
  );
};
