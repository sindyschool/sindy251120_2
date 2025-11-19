import React from 'react';
import { ArrowRight, HeartHandshake, User } from 'lucide-react';
import { FadeIn } from './FadeIn';

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center bg-gradient-to-b from-brand-light/30 to-white pt-16 overflow-hidden">
      {/* Decorative Background Blobs */}
      <div className="absolute top-[-10%] left-[-10%] w-96 h-96 bg-brand/10 rounded-full blur-3xl opacity-50" />
      <div className="absolute bottom-[10%] right-[-5%] w-72 h-72 bg-blue-200/20 rounded-full blur-3xl opacity-50" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center relative z-10">
        <FadeIn delay={100}>
          <span className="inline-block py-1 px-3 rounded-full bg-brand/10 text-brand text-sm font-semibold mb-6">
            국내 최초 부부커플 관계 회복 서비스
          </span>
        </FadeIn>
        
        <FadeIn delay={200}>
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight tracking-tight mb-6">
            부부·개인의 관계를 다시 살리는<br />
            <span className="text-brand">가장 쉬운 시작</span>
          </h1>
        </FadeIn>

        <FadeIn delay={300}>
          <p className="text-lg md:text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
            혼자서 차근차근 회복하고 싶으신가요?<br className="md:hidden" /> 
            아니면 전문가의 도움이 필요하신가요?
          </p>
        </FadeIn>

        <FadeIn delay={400}>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a 
              href="#self-care"
              className="w-full sm:w-auto group flex items-center justify-center gap-2 bg-brand text-white px-8 py-4 rounded-2xl text-lg font-bold hover:bg-brand-dark transition-all hover:scale-105 shadow-lg shadow-brand/20"
            >
              <User size={20} />
              셀프케어 시작하기
              <ArrowRight size={18} className="opacity-0 group-hover:opacity-100 transition-opacity" />
            </a>
            
            <a 
              href="#counseling"
              className="w-full sm:w-auto group flex items-center justify-center gap-2 bg-white border-2 border-brand/10 text-brand px-8 py-4 rounded-2xl text-lg font-bold hover:bg-brand-light transition-all hover:scale-105"
            >
              <HeartHandshake size={20} />
              전문가 상담 받기
            </a>
          </div>
        </FadeIn>

        <FadeIn delay={600}>
          <div className="mt-12 flex items-center justify-center gap-2 text-sm text-gray-400">
            <span>✨ 12,400+ 건의 상담 완료</span>
            <span className="w-1 h-1 rounded-full bg-gray-300"></span>
            <span>4.9/5.0 유저 만족도</span>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};