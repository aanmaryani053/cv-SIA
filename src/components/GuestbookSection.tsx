import React, { useState, useEffect } from 'react';
import { Send, MessageSquare, Check, Sparkles, User } from 'lucide-react';
import { GuestbookMessage } from '../types/portfolio';

const initialMessages: GuestbookMessage[] = [
  {
    id: 'msg-1',
    senderName: 'Rian Pratama',
    relation: 'Teman Seangkatan SI 2026',
    message: 'Salam kenal Aan! Keren banget portofolionya, rapi dan niat banget. Nanti semester 1 kita ambil kelompok bareng ya di mata kuliah Algoritma!',
    date: 'Hari ini, 09:15'
  },
  {
    id: 'msg-2',
    senderName: 'Kak Nadhira S.',
    relation: 'Kakak Tingkat / Pengurus HIMSISFO',
    message: 'Semangat masa perkuliahannya Aan! Senang melihat maba punya visi terarah dari awal di bidang UI/UX & Analisis Bisnis. Jangan lupa daftar open recruitment himpunan ya!',
    date: 'Kemarin, 16:40'
  }
];

export const GuestbookSection: React.FC = () => {
  const [messages, setMessages] = useState<GuestbookMessage[]>(() => {
    try {
      const saved = localStorage.getItem('si_portfolio_guestbook');
      return saved ? JSON.parse(saved) : initialMessages;
    } catch {
      return initialMessages;
    }
  });

  const [senderName, setSenderName] = useState('');
  const [relation, setRelation] = useState('Teman Seangkatan');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    try {
      localStorage.setItem('si_portfolio_guestbook', JSON.stringify(messages));
    } catch {
      // ignore
    }
  }, [messages]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!senderName.trim() || !message.trim()) return;

    const newMessage: GuestbookMessage = {
      id: `msg-${Date.now()}`,
      senderName: senderName.trim(),
      relation,
      message: message.trim(),
      date: 'Baru saja'
    };

    setMessages([newMessage, ...messages]);
    setSenderName('');
    setMessage('');
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <section id="kontak" className="py-20 bg-paper border-b border-[#E3DFD5]">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#1E4D40] mb-2">
            <span>05. Buku Tamu & Jejaring</span>
            <span aria-hidden="true">·</span>
            <span>Networking & Greeting</span>
          </div>
          <h2 className="font-serif text-3xl md:text-4xl font-bold tracking-tight text-[#162E26]">
            Sapaan & Kolaborasi Mahasiswa Baru
          </h2>
          <p className="mt-3 text-sm md:text-base text-[#46554D] leading-relaxed">
            Punya ide proyek bareng, saran mata kuliah, atau sekadar ingin berteman satu angkatan? Tinggalkan pesan sapaan Anda di bawah ini!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left: Message Input Form */}
          <div className="lg:col-span-5 bg-white p-7 rounded-2xl border border-[#E3DFD5] shadow-xs">
            <h3 className="font-serif text-xl font-bold text-[#162E26] mb-5 flex items-center gap-2">
              <MessageSquare className="w-5 h-5 text-[#1E4D40]" />
              <span>Kirim Pesan Sapaan</span>
            </h3>

            {submitted && (
              <div className="mb-5 p-3.5 bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs rounded-xl flex items-center gap-2">
                <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Terima kasih! Pesan sapaan Anda telah berhasil ditambahkan ke buku tamu.</span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4 text-xs sm:text-sm">
              <div>
                <label className="block font-medium text-[#162E26] mb-1.5">
                  Nama Anda / Panggilan *
                </label>
                <input
                  type="text"
                  required
                  placeholder="Contoh: Budi Santoso"
                  value={senderName}
                  onChange={(e) => setSenderName(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-lg border border-[#D9D4C7] bg-[#FAF9F5] text-[#162E26] focus:outline-none focus:border-[#1E4D40] focus:ring-1 focus:ring-[#1E4D40]"
                />
              </div>

              <div>
                <label className="block font-medium text-[#162E26] mb-1.5">
                  Kategori Hubungan
                </label>
                <select
                  value={relation}
                  onChange={(e) => setRelation(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-lg border border-[#D9D4C7] bg-[#FAF9F5] text-[#162E26] focus:outline-none focus:border-[#1E4D40]"
                >
                  <option value="Teman Seangkatan">Teman Seangkatan (SI 2026)</option>
                  <option value="Kakak Tingkat">Kakak Tingkat / Senior Kampus</option>
                  <option value="Dosen / Mentor">Dosen / Mentor Akademik</option>
                  <option value="Teman Sekolah Lama">Teman SMA / Alumni</option>
                  <option value="Pengunjung Umum">Pengunjung Umum / Rekan Industri</option>
                </select>
              </div>

              <div>
                <label className="block font-medium text-[#162E26] mb-1.5">
                  Pesan Sapaan / Ajakan Kolaborasi *
                </label>
                <textarea
                  required
                  rows={4}
                  placeholder="Tuliskan kata sapaan atau pesan Anda..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-lg border border-[#D9D4C7] bg-[#FAF9F5] text-[#162E26] focus:outline-none focus:border-[#1E4D40] focus:ring-1 focus:ring-[#1E4D40] resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full py-2.5 px-4 bg-[#1E4D40] hover:bg-[#163B31] text-white font-medium rounded-lg shadow-sm transition-colors flex items-center justify-center gap-2 cursor-pointer text-xs sm:text-sm"
              >
                <Send className="w-4 h-4" />
                <span>Kirim Sapaan Sekarang</span>
              </button>
            </form>
          </div>

          {/* Right: Message Feed */}
          <div className="lg:col-span-7 flex flex-col justify-start">
            <div className="flex items-center justify-between mb-4">
              <h4 className="font-serif text-lg font-bold text-[#162E26]">
                Pesan Terkini ({messages.length})
              </h4>
              <span className="text-xs text-[#7B8B82]">
                Tersimpan di Browser Anda
              </span>
            </div>

            <div className="space-y-3.5 max-h-[460px] overflow-y-auto pr-2">
              {messages.map((item) => (
                <div
                  key={item.id}
                  className="bg-white p-4 sm:p-5 rounded-xl border border-[#E3DFD5] shadow-xs"
                >
                  <div className="flex items-center justify-between gap-3 mb-2">
                    <div className="flex items-center gap-2.5">
                      <div className="w-7 h-7 rounded-full bg-[#E8F2EF] text-[#1E4D40] flex items-center justify-center font-bold text-xs shrink-0">
                        {item.senderName.charAt(0).toUpperCase()}
                      </div>
                      <div>
                        <span className="text-xs sm:text-sm font-bold text-[#162E26] block leading-tight">
                          {item.senderName}
                        </span>
                        <span className="text-[11px] text-[#526359] block">
                          {item.relation}
                        </span>
                      </div>
                    </div>
                    <span className="text-[11px] text-[#7B8B82] shrink-0">
                      {item.date}
                    </span>
                  </div>

                  <p className="text-xs sm:text-sm text-[#3E4E45] leading-relaxed mt-2.5 pl-9">
                    "{item.message}"
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
