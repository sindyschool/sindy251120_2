import React from 'react';
import { FadeIn } from './FadeIn';
import { Heart, Users, Baby, Smile, Home, ShieldCheck, Smartphone, Zap } from 'lucide-react';
import { CounselingCategory } from '../types';

const categories: CounselingCategory[] = [
  { id: 'c1', title: '부부 상담', icon: Users, description: '갈등의 원인을 찾고 소통방식을 개선합니다.' },
  { id: 'c2', title: '개인 상담', icon: Smile, description: '나를 힘들게 하는 정서적 문제를 다룹니다.' },
  { id: 'c3', title: '가족 상담', icon: Home, description: '가족 구성원 간의 얽힌 관계를 풉니다.' },
  { id: 'c4', title: '연애 상담', icon: Heart, description: '반복되는 연애 문제와 이별을 상담합니다.' },
  { id: 'c5', title: '육아 상담', icon: Baby, description: '양육 스트레스와 자녀 문제를 함께 고민합니다.' },
];

export const Counseling: React.FC = () => {
  return (
    <section id="counseling" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Counseling Header */}
        <FadeIn>
          <div className="text-center mb-16">
            <span className="text-brand font-bold mb-2 block">PROFESSIONAL COUNSELING</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              검증된 전문가가<br />
              당신의 이야기를 듣습니다
            </h2>
            <p className="text-gray-600 text-lg">
              신디가 엄선한 1급 심리상담사와 안전하게 연결됩니다.
            </p>
          </div>
        </FadeIn>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 mb-24">
          {categories.map((cat, idx) => (
            <FadeIn key={cat.id} delay={idx * 100}>
              <div className="bg-gray-50 rounded-2xl p-6 text-center hover:bg-brand-light transition-colors duration-300 group cursor-pointer border border-gray-100 hover:border-brand/20 h-full flex flex-col items-center">
                <div className="bg-white p-4 rounded-full shadow-sm mb-4 group-hover:scale-110 transition-transform">
                  <cat.icon size={28} className="text-gray-700 group-hover:text-brand" />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">{cat.title}</h3>
                <p className="text-xs text-gray-500 leading-relaxed">{cat.description}</p>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* App Download Persuasion - High Emphasis */}
        <FadeIn delay={300}>
          <div className="bg-[#1C1C1E] rounded-[2.5rem] p-8 md:p-16 text-white overflow-hidden relative">
            {/* Background accent */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-brand rounded-full blur-[120px] opacity-20 pointer-events-none"></div>
            
            <div className="relative z-10">
              <div className="text-center max-w-3xl mx-auto mb-16">
                <h3 className="text-2xl md:text-4xl font-bold mb-6">
                  "왜 상담은 <span className="text-brand">앱(App)</span>에서만 가능한가요?"
                </h3>
                <p className="text-gray-400 text-lg">
                  2분만 투자하여 앱을 설치해주세요.<br className="hidden md:block"/> 
                  신디가 더 안전하고 정확하게 도와드릴 수 있는 이유가 있습니다.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                <div className="bg-white/10 backdrop-blur-sm p-8 rounded-3xl border border-white/10">
                  <ShieldCheck className="text-brand mb-4" size={32} />
                  <h4 className="text-xl font-bold mb-2">철저한 정보 보호</h4>
                  <p className="text-gray-400 text-sm">민감한 개인·부부 상담 기록은 웹보다 보안이 강력한 앱 환경에서 암호화되어 안전하게 보호됩니다.</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm p-8 rounded-3xl border border-white/10">
                  <Smartphone className="text-brand mb-4" size={32} />
                  <h4 className="text-xl font-bold mb-2">최적화된 상담 경험</h4>
                  <p className="text-gray-400 text-sm">화상 상담 연결, 채팅 알림, 일정 관리 등 끊김 없는 상담 경험은 전용 앱에서만 구현 가능합니다.</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm p-8 rounded-3xl border border-white/10">
                  <Zap className="text-brand mb-4" size={32} />
                  <h4 className="text-xl font-bold mb-2">빠른 매칭 시스템</h4>
                  <p className="text-gray-400 text-sm">나의 상황에 딱 맞는 전문가를 실시간으로 추천받고 바로 연결할 수 있습니다.</p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <button className="flex items-center justify-center gap-3 bg-brand hover:bg-brand-dark text-white px-8 py-4 rounded-xl font-bold text-lg transition-all w-full sm:w-auto">
                  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor"><path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.23-3.14-2.47-1.73-2.55-3-7.22-1.26-10.22 1.41-2.44 3.88-2.66 4.62-2.63 1.27.04 2.4.83 3.11.83.7 0 2.01-1.05 3.43-1.03 2.32.18 3.69 1.35 4.2 2.12-.08.05-2.5 1.46-2.47 4.36.03 3.47 3.05 4.61 3.08 4.63-.03.08-.46 1.58-1.75 3.47zm-5.44-16.08c1.13-1.36 1.9-3.25 1.69-5.15-1.63.07-3.61 1.08-4.78 2.46-1.04 1.21-1.96 3.16-1.71 4.99 1.81.14 3.66-.93 4.8-2.3z"/></svg>
                  App Store
                </button>
                <button className="flex items-center justify-center gap-3 bg-white text-black hover:bg-gray-100 px-8 py-4 rounded-xl font-bold text-lg transition-all w-full sm:w-auto">
                  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor"><path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.5,12.92 20.16,13.19L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" /></svg>
                  Google Play
                </button>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};