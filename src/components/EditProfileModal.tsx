import React, { useState } from 'react';
import { X, Check, RotateCcw, User, Mail, Phone, MapPin, GraduationCap } from 'lucide-react';
import { ProfileData } from '../types/portfolio';
import { initialProfileData } from '../data/defaultProfile';

interface EditProfileModalProps {
  isOpen: boolean;
  onClose: () => void;
  profile: ProfileData;
  onSave: (updated: ProfileData) => void;
}

export const EditProfileModal: React.FC<EditProfileModalProps> = ({
  isOpen,
  onClose,
  profile,
  onSave,
}) => {
  const [formData, setFormData] = useState<ProfileData>(profile);

  if (!isOpen) return null;

  const handleChange = (field: keyof ProfileData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave(formData);
    onClose();
  };

  const handleReset = () => {
    setFormData(initialProfileData);
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 md:p-6 overflow-y-auto">
      <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[92vh] overflow-y-auto border border-[#D9D4C7] shadow-2xl p-6 sm:p-8">
        
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-[#E3DFD5] mb-6">
          <div>
            <h3 className="font-serif text-xl font-bold text-[#162E26]">
              Sesuaikan Data Biodata Mahasiswa
            </h3>
            <p className="text-xs text-[#526359] mt-0.5">
              Ubah data diri Anda untuk disesuaikan dengan kebutuhan tugas ospek atau portofolio pribadi.
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-[#526359] hover:text-[#162E26] hover:bg-[#F6F5F0] rounded-lg transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5 text-xs sm:text-sm">
          {/* Identitas Pokok */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block font-medium text-[#162E26] mb-1">
                Nama Lengkap *
              </label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => handleChange('name', e.target.value)}
                className="w-full px-3 py-2 rounded-lg border border-[#D9D4C7] bg-[#FAF9F5] text-[#162E26] focus:outline-none focus:border-[#1E4D40]"
              />
            </div>
            <div>
              <label className="block font-medium text-[#162E26] mb-1">
                Nama Panggilan
              </label>
              <input
                type="text"
                value={formData.nickname}
                onChange={(e) => handleChange('nickname', e.target.value)}
                className="w-full px-3 py-2 rounded-lg border border-[#D9D4C7] bg-[#FAF9F5] text-[#162E26] focus:outline-none focus:border-[#1E4D40]"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block font-medium text-[#162E26] mb-1">
                Peran / Status
              </label>
              <input
                type="text"
                value={formData.role}
                onChange={(e) => handleChange('role', e.target.value)}
                className="w-full px-3 py-2 rounded-lg border border-[#D9D4C7] bg-[#FAF9F5] text-[#162E26] focus:outline-none focus:border-[#1E4D40]"
              />
            </div>
            <div>
              <label className="block font-medium text-[#162E26] mb-1">
                Angkatan
              </label>
              <input
                type="text"
                value={formData.cohort}
                onChange={(e) => handleChange('cohort', e.target.value)}
                className="w-full px-3 py-2 rounded-lg border border-[#D9D4C7] bg-[#FAF9F5] text-[#162E26] focus:outline-none focus:border-[#1E4D40]"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block font-medium text-[#162E26] mb-1">
                Nama Universitas / Perguruan Tinggi
              </label>
              <input
                type="text"
                value={formData.university}
                onChange={(e) => handleChange('university', e.target.value)}
                className="w-full px-3 py-2 rounded-lg border border-[#D9D4C7] bg-[#FAF9F5] text-[#162E26] focus:outline-none focus:border-[#1E4D40]"
              />
            </div>
            <div>
              <label className="block font-medium text-[#162E26] mb-1">
                Fakultas
              </label>
              <input
                type="text"
                value={formData.faculty}
                onChange={(e) => handleChange('faculty', e.target.value)}
                className="w-full px-3 py-2 rounded-lg border border-[#D9D4C7] bg-[#FAF9F5] text-[#162E26] focus:outline-none focus:border-[#1E4D40]"
              />
            </div>
          </div>

          {/* Bio Paragraf */}
          <div>
            <label className="block font-medium text-[#162E26] mb-1">
              Paragraf 1: Pengenalan Diri
            </label>
            <textarea
              rows={2}
              value={formData.bioIntro}
              onChange={(e) => handleChange('bioIntro', e.target.value)}
              className="w-full px-3 py-2 rounded-lg border border-[#D9D4C7] bg-[#FAF9F5] text-[#162E26] focus:outline-none focus:border-[#1E4D40] resize-none"
            />
          </div>

          <div>
            <label className="block font-medium text-[#162E26] mb-1">
              Paragraf 2: Minat Belajar & Passion
            </label>
            <textarea
              rows={2}
              value={formData.bioPassion}
              onChange={(e) => handleChange('bioPassion', e.target.value)}
              className="w-full px-3 py-2 rounded-lg border border-[#D9D4C7] bg-[#FAF9F5] text-[#162E26] focus:outline-none focus:border-[#1E4D40] resize-none"
            />
          </div>

          <div>
            <label className="block font-medium text-[#162E26] mb-1">
              Paragraf 3: Ajakan Berjejaring & Kalimat Penutup
            </label>
            <textarea
              rows={2}
              value={formData.bioOutro}
              onChange={(e) => handleChange('bioOutro', e.target.value)}
              className="w-full px-3 py-2 rounded-lg border border-[#D9D4C7] bg-[#FAF9F5] text-[#162E26] focus:outline-none focus:border-[#1E4D40] resize-none"
            />
          </div>

          {/* Kontak */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block font-medium text-[#162E26] mb-1">
                Email
              </label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) => handleChange('email', e.target.value)}
                className="w-full px-3 py-2 rounded-lg border border-[#D9D4C7] bg-[#FAF9F5] text-[#162E26] focus:outline-none focus:border-[#1E4D40]"
              />
            </div>
            <div>
              <label className="block font-medium text-[#162E26] mb-1">
                No. Telepon / WhatsApp
              </label>
              <input
                type="text"
                value={formData.phone}
                onChange={(e) => handleChange('phone', e.target.value)}
                className="w-full px-3 py-2 rounded-lg border border-[#D9D4C7] bg-[#FAF9F5] text-[#162E26] focus:outline-none focus:border-[#1E4D40]"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block font-medium text-[#162E26] mb-1">
                Lokasi / Domisili
              </label>
              <input
                type="text"
                value={formData.location}
                onChange={(e) => handleChange('location', e.target.value)}
                className="w-full px-3 py-2 rounded-lg border border-[#D9D4C7] bg-[#FAF9F5] text-[#162E26] focus:outline-none focus:border-[#1E4D40]"
              />
            </div>
            <div>
              <label className="block font-medium text-[#162E26] mb-1">
                Tautan LinkedIn
              </label>
              <input
                type="text"
                value={formData.linkedin}
                onChange={(e) => handleChange('linkedin', e.target.value)}
                className="w-full px-3 py-2 rounded-lg border border-[#D9D4C7] bg-[#FAF9F5] text-[#162E26] focus:outline-none focus:border-[#1E4D40]"
              />
            </div>
          </div>

          {/* Target Akademik & Karier */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block font-medium text-[#162E26] mb-1">
                Target IPK
              </label>
              <input
                type="text"
                value={formData.targetGpa}
                onChange={(e) => handleChange('targetGpa', e.target.value)}
                className="w-full px-3 py-2 rounded-lg border border-[#D9D4C7] bg-[#FAF9F5] text-[#162E26] focus:outline-none focus:border-[#1E4D40]"
              />
            </div>
            <div>
              <label className="block font-medium text-[#162E26] mb-1">
                Cita-Cita Karier
              </label>
              <input
                type="text"
                value={formData.dreamCareer}
                onChange={(e) => handleChange('dreamCareer', e.target.value)}
                className="w-full px-3 py-2 rounded-lg border border-[#D9D4C7] bg-[#FAF9F5] text-[#162E26] focus:outline-none focus:border-[#1E4D40]"
              />
            </div>
          </div>

          {/* Path Foto Profil & Framing */}
          <div>
            <label className="block font-medium text-[#162E26] mb-1">
              Path / URL Foto Profil
            </label>
            <div className="flex items-center gap-3">
              <input
                type="text"
                value={formData.photoUrl}
                onChange={(e) => handleChange('photoUrl', e.target.value)}
                placeholder="/assets/aistudio/aan_34798b5a.jpeg"
                className="flex-1 px-3 py-2 rounded-lg border border-[#D9D4C7] bg-[#FAF9F5] text-[#162E26] focus:outline-none focus:border-[#1E4D40]"
              />
              <div className="w-12 h-16 rounded-lg overflow-hidden border border-[#D9D4C7] shrink-0 bg-[#E8E4DA]">
                <img
                  src={formData.photoUrl}
                  alt="Preview"
                  style={{
                    transform: `scale(${formData.photoScale ?? 1.0})`,
                    objectPosition: `center ${formData.photoPositionY ?? 15}%`,
                  }}
                  className="w-full h-full object-cover origin-top"
                />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 bg-[#FAF9F5] p-3 rounded-xl border border-[#E3DFD5]">
            <div>
              <label className="block font-medium text-[#162E26] text-xs mb-1">
                Zoom / Skala Foto: {(formData.photoScale ?? 1.0).toFixed(2)}x
              </label>
              <input
                type="range"
                min="0.9"
                max="1.5"
                step="0.05"
                value={formData.photoScale ?? 1.0}
                onChange={(e) => setFormData((prev) => ({ ...prev, photoScale: parseFloat(e.target.value) }))}
                className="w-full accent-[#1E4D40]"
              />
            </div>
            <div>
              <label className="block font-medium text-[#162E26] text-xs mb-1">
                Fokus Posisi Atas/Bawah: {formData.photoPositionY ?? 15}%
              </label>
              <input
                type="range"
                min="5"
                max="45"
                step="1"
                value={formData.photoPositionY ?? 15}
                onChange={(e) => setFormData((prev) => ({ ...prev, photoPositionY: parseInt(e.target.value, 10) }))}
                className="w-full accent-[#1E4D40]"
              />
            </div>
          </div>

          <div>
            <label className="block font-medium text-[#162E26] text-xs mb-1.5">
              Gaya Bentuk Bingkai Foto
            </label>
            <div className="flex items-center gap-3">
              <label className="flex items-center gap-2 cursor-pointer text-xs text-[#3E4E45]">
                <input
                  type="radio"
                  name="photoShape"
                  value="organic"
                  checked={formData.photoShape !== 'framed'}
                  onChange={() => setFormData((prev) => ({ ...prev, photoShape: 'organic' }))}
                  className="accent-[#1E4D40]"
                />
                <span>Kurva Organik (Persis Gambar Referensi Asli)</span>
              </label>
              <label className="flex items-center gap-2 cursor-pointer text-xs text-[#3E4E45]">
                <input
                  type="radio"
                  name="photoShape"
                  value="framed"
                  checked={formData.photoShape === 'framed'}
                  onChange={() => setFormData((prev) => ({ ...prev, photoShape: 'framed' }))}
                  className="accent-[#1E4D40]"
                />
                <span>Bingkai Lengkung Modern</span>
              </label>
            </div>
          </div>

          {/* Action buttons */}
          <div className="pt-4 border-t border-[#E3DFD5] flex items-center justify-between gap-4">
            <button
              type="button"
              onClick={handleReset}
              className="text-xs text-[#526359] hover:text-[#162E26] flex items-center gap-1.5 cursor-pointer"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Reset ke Bawaan</span>
            </button>

            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2 text-xs font-medium text-[#526359] hover:text-[#162E26] cursor-pointer"
              >
                Batal
              </button>
              <button
                type="submit"
                className="px-5 py-2 text-xs font-medium text-white bg-[#1E4D40] hover:bg-[#163B31] rounded-lg shadow-sm transition-colors flex items-center gap-1.5 cursor-pointer"
              >
                <Check className="w-4 h-4" />
                <span>Simpan Perubahan</span>
              </button>
            </div>
          </div>
        </form>

      </div>
    </div>
  );
};
