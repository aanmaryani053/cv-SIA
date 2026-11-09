/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { initialProfileData, initialSkills, initialProjects, studyRoadmap } from './data/defaultProfile';
import { ProfileData } from './types/portfolio';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { IntroCardView } from './components/IntroCardView';
import { AboutSection } from './components/AboutSection';
import { SkillsSection } from './components/SkillsSection';
import { ProjectsSection } from './components/ProjectsSection';
import { RoadmapSection } from './components/RoadmapSection';
import { InteractiveTrivia } from './components/InteractiveTrivia';
import { GuestbookSection } from './components/GuestbookSection';
import { EditProfileModal } from './components/EditProfileModal';
import { Footer } from './components/Footer';

export default function App() {
  const [profile, setProfile] = useState<ProfileData>(() => {
    try {
      const saved = localStorage.getItem('si_student_profile');
      if (saved) {
        const parsed = JSON.parse(saved);
        if (!parsed.photoUrl || !parsed.photoUrl.includes('aan_34798b5a')) {
          parsed.photoUrl = initialProfileData.photoUrl;
          parsed.photoScale = 1.0;
          parsed.photoPositionY = 15;
        }
        if (!parsed.university || parsed.university.includes('Terkemuka')) {
          parsed.university = initialProfileData.university;
          parsed.location = initialProfileData.location;
          parsed.bioIntro = initialProfileData.bioIntro;
        }
        return parsed;
      }
      return initialProfileData;
    } catch {
      return initialProfileData;
    }
  });

  const [activeView, setActiveView] = useState<'portfolio' | 'card'>('portfolio');
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);

  useEffect(() => {
    try {
      localStorage.setItem('si_student_profile', JSON.stringify(profile));
    } catch {
      // ignore
    }
  }, [profile]);

  const handleSaveProfile = (updated: ProfileData) => {
    setProfile(updated);
  };

  const handleUpdateFraming = (scale: number, posY: number, shape?: 'organic' | 'framed') => {
    setProfile((prev) => ({
      ...prev,
      photoScale: scale,
      photoPositionY: posY,
      ...(shape ? { photoShape: shape } : {}),
    }));
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F6F5F0] text-[#1E2922]">
      {/* Top Navigation Bar */}
      <Navbar
        name={profile.name}
        activeView={activeView}
        setActiveView={setActiveView}
        onOpenCardView={() => setActiveView('card')}
        onOpenEditProfile={() => setIsEditModalOpen(true)}
      />

      {/* Main Content Area */}
      <main className="flex-1">
        {activeView === 'card' ? (
          <IntroCardView
            profile={profile}
            onBackToPortfolio={() => setActiveView('portfolio')}
            onOpenEditProfile={() => setIsEditModalOpen(true)}
            onUpdateFraming={handleUpdateFraming}
          />
        ) : (
          <>
            {/* 1. Hero Section matching the user's reference image visual */}
            <HeroSection
              profile={profile}
              onOpenCardView={() => setActiveView('card')}
              onOpenEditProfile={() => setIsEditModalOpen(true)}
              onUpdateFraming={handleUpdateFraming}
            />

            {/* 2. About Me & Why Information Systems */}
            <AboutSection profile={profile} />

            {/* 3. Skills & Learning Journey */}
            <SkillsSection skills={initialSkills} />

            {/* 4. Showcase & Mini Projects */}
            <ProjectsSection projects={initialProjects} />

            {/* 5. 4-Year Academic & Career Roadmap */}
            <RoadmapSection roadmap={studyRoadmap} />

            {/* 6. Interactive Personal Trivia */}
            <InteractiveTrivia />

            {/* 7. Networking & Guestbook */}
            <GuestbookSection />
          </>
        )}
      </main>

      {/* Footer (only displayed on portfolio view) */}
      {activeView === 'portfolio' && <Footer name={profile.name} />}

      {/* Profile Edit Drawer / Modal */}
      <EditProfileModal
        isOpen={isEditModalOpen}
        onClose={() => setIsEditModalOpen(false)}
        profile={profile}
        onSave={handleSaveProfile}
      />
    </div>
  );
}
