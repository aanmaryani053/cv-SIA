import React, { useState } from 'react';
import { freshmanFacts } from '../data/defaultProfile';
import { HelpCircle, ChevronDown, Sparkles } from 'lucide-react';

export const InteractiveTrivia: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 bg-[#F6F5F0] border-b border-[#E3DFD5]">
      <div className="max-w-6xl mx-auto px-6">
        
        <div className="max-w-2xl mb-10">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#1E4D40] mb-2">
            <span>05. Trivia & Sudut Personal</span>
            <span aria-hidden="true">·</span>
            <span>Fast Facts</span>
          </div>
          <h2 className="font-serif text-3xl font-bold tracking-tight text-[#162E26]">
            Kenali Saya Lebih Dekat
          </h2>
          <p className="mt-2 text-sm text-[#46554D]">
            Sedikit cerita dan preferensi santai seputar kehidupan belajar dan keseharian saya.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {freshmanFacts.map((fact, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl border border-[#E3DFD5] overflow-hidden shadow-xs transition-colors hover:border-[#1E4D40]/40"
            >
              <button
                onClick={() => toggle(idx)}
                className="w-full p-5 text-left flex items-center justify-between gap-4 cursor-pointer"
              >
                <div>
                  <span className="text-[11px] font-semibold text-[#1E4D40] uppercase tracking-wider block mb-1">
                    {fact.tag}
                  </span>
                  <span className="font-serif text-base font-bold text-[#162E26] block">
                    {fact.label}
                  </span>
                </div>
                <div
                  className={`w-7 h-7 rounded-full bg-[#F6F5F0] flex items-center justify-center shrink-0 transition-transform duration-200 ${
                    openIndex === idx ? 'rotate-180 bg-[#1E4D40] text-white' : 'text-[#526359]'
                  }`}
                >
                  <ChevronDown className="w-4 h-4" />
                </div>
              </button>

              {openIndex === idx && (
                <div className="px-5 pb-5 pt-1 text-xs md:text-sm text-[#46554D] leading-relaxed border-t border-[#F0ECE1] bg-[#FAF9F5]">
                  {fact.content}
                </div>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
