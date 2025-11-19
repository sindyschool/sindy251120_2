import React, { useState } from 'react';
import { FadeIn } from './FadeIn';
import { ChevronDown, ChevronUp, CheckCircle2 } from 'lucide-react';

export const Journey: React.FC = () => {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
        <FadeIn>
          <h2 className="text-3xl font-bold text-gray-900 mb-12">
            당신에게 필요한 여정을 선택하세요
          </h2>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <FadeIn delay={100}>
            <div className="bg-white p-8 rounded-3xl shadow-sm hover:shadow-md transition-all border-2 border-transparent hover:border-brand cursor-pointer h-full flex flex-col justify-center">
              <div className="text-4xl mb-4">📖</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">혼자서 해볼래요</h3>
              <p className="text-gray-500 mb-6">셀프케어 워크북 & 키트</p>
              <ul className="text-left text-sm text-gray-600 space-y-3 bg-gray-50 p-6 rounded-xl">
                <li className="flex items-center"><CheckCircle2 size={16} className="text-brand mr-2" /> 내 속도대로 진행 가능</li>
                <li className="flex items-center"><CheckCircle2 size={16} className="text-brand mr-2" /> 부담 없는 비용</li>
                <li className="flex items-center"><CheckCircle2 size={16} className="text-brand mr-2" /> 이론 기반의 체계적 정리</li>
              </ul>
            </div>
          </FadeIn>

          <FadeIn delay={200}>
            <div className="bg-white p-8 rounded-3xl shadow-sm hover:shadow-md transition-all border-2 border-transparent hover:border-brand cursor-pointer h-full flex flex-col justify-center">
              <div className="text-4xl mb-4">🤝</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">전문가와 함께할래요</h3>
              <p className="text-gray-500 mb-6">1:1 심리 상담</p>
              <ul className="text-left text-sm text-gray-600 space-y-3 bg-gray-50 p-6 rounded-xl">
                <li className="flex items-center"><CheckCircle2 size={16} className="text-brand mr-2" /> 맞춤형 솔루션 제공</li>
                <li className="flex items-center"><CheckCircle2 size={16} className="text-brand mr-2" /> 객관적인 문제 진단</li>
                <li className="flex items-center"><CheckCircle2 size={16} className="text-brand mr-2" /> 정서적 지지와 공감</li>
              </ul>
            </div>
          </FadeIn>
        </div>

        <FadeIn delay={400}>
          <div className="border-t border-gray-200 pt-8">
            <button 
              onClick={() => setShowDetails(!showDetails)}
              className="inline-flex items-center text-gray-500 hover:text-brand transition-colors font-medium text-sm"
            >
              {showDetails ? '상세 모델 접기' : '신디의 5단계 성장 모델 더보기'}
              {showDetails ? <ChevronUp size={16} className="ml-1" /> : <ChevronDown size={16} className="ml-1" />}
            </button>
            
            {showDetails && (
              <div className="mt-8 p-8 bg-white rounded-2xl shadow-inner text-left animate-fade-in-up">
                <h4 className="font-bold text-gray-900 mb-4">신디 관계 회복 5단계 모델</h4>
                <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-600 text-center md:text-left">
                  <div className="bg-gray-50 p-3 rounded-lg w-full md:w-auto">1. 멈춤</div>
                  <div className="hidden md:block text-gray-300">→</div>
                  <div className="bg-gray-50 p-3 rounded-lg w-full md:w-auto">2. 돌아봄</div>
                  <div className="hidden md:block text-gray-300">→</div>
                  <div className="bg-gray-50 p-3 rounded-lg w-full md:w-auto">3. 챙김</div>
                  <div className="hidden md:block text-gray-300">→</div>
                  <div className="bg-gray-50 p-3 rounded-lg w-full md:w-auto">4. 나눔</div>
                  <div className="hidden md:block text-gray-300">→</div>
                  <div className="bg-brand/10 text-brand font-bold p-3 rounded-lg w-full md:w-auto">5. 성장</div>
                </div>
                <p className="mt-4 text-xs text-gray-400 text-center">
                  * 이 모델은 신디의 모든 워크북과 상담 과정에 녹아있습니다.
                </p>
              </div>
            )}
          </div>
        </FadeIn>
      </div>
    </section>
  );
};