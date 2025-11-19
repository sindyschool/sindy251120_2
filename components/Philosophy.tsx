import React from 'react';
import { FadeIn } from './FadeIn';
import { Split, Puzzle, Layers } from 'lucide-react';

export const Philosophy: React.FC = () => {
  return (
    <section id="philosophy" className="py-24 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <FadeIn>
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              관계 회복은 <span className="text-brand">'이해 → 정리 → 실천'</span>에서 시작됩니다
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              신디는 그동안 수많은 부부와 개인을 만나왔습니다.<br />
              우리는 한 가지 중요한 사실을 깨달았습니다.
            </p>
          </div>
        </FadeIn>

        <div className="space-y-6">
          <FadeIn delay={200}>
            <div className="bg-gray-50 p-8 rounded-3xl border border-gray-100">
              <div className="flex items-start gap-4">
                <div className="bg-red-100 p-3 rounded-full text-red-500 flex-shrink-0">
                  <Puzzle size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">너무 복잡했던 기존의 방법들</h3>
                  <p className="text-gray-600 leading-relaxed">
                    진단, 교육, 상담, 워크북... <br/>
                    회복을 위해 해야 할 것이 너무 많아 오히려 시작조차 못하는 분들이 많았습니다.
                  </p>
                </div>
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={400}>
            <div className="bg-brand-light/30 p-8 rounded-3xl border border-brand/10">
              <div className="flex items-start gap-4">
                <div className="bg-brand p-3 rounded-full text-white flex-shrink-0">
                  <Split size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">그래서 신디는 단순해졌습니다</h3>
                  <p className="text-gray-600 leading-relaxed">
                    복잡한 과정은 다 걷어내고, 가장 확실한 두 가지 길만 남겼습니다.<br />
                    <span className="font-bold text-brand">혼자서 정리하는 '셀프케어'</span>와 
                    <span className="font-bold text-brand"> 전문가와 함께하는 '상담'</span>입니다.
                  </p>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};