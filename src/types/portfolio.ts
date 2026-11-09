export interface ProfileData {
  name: string;
  nickname: string;
  role: string;
  cohort: string;
  university: string;
  faculty: string;
  bioIntro: string;
  bioPassion: string;
  bioOutro: string;
  email: string;
  phone: string;
  location: string;
  linkedin: string;
  github: string;
  instagram: string;
  photoUrl: string;
  photoScale?: number; // e.g. 1.0, 1.15, 1.3
  photoPositionY?: number; // percentage, e.g. 20, 25, 30
  photoShape?: 'organic' | 'framed'; // organic curve matching previous image vs framed
  targetGpa: string;
  dreamCareer: string;
}

export interface SkillItem {
  id: string;
  name: string;
  category: 'design' | 'code' | 'data' | 'management' | 'soft';
  level: string; // e.g., 'Sedang Mendalami', 'Fondasi Kuat', 'Eksplorasi Awal'
  iconName: string;
  description: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  category: string;
  period: string;
  summary: string;
  tools: string[];
  role: string;
  problem: string;
  solution: string;
  outcome: string;
  imageFallbackGradient: string;
  demoUrl?: string;
}

export interface RoadmapYear {
  year: number;
  phaseTitle: string;
  semesters: string;
  focus: string;
  goals: string[];
  milestones: string[];
  status: 'active' | 'upcoming';
}

export interface GuestbookMessage {
  id: string;
  senderName: string;
  relation: string; // 'Teman Seangkatan' | 'Kakak Tingkat' | 'Dosen' | 'Pengunjung Umum'
  message: string;
  date: string;
}
