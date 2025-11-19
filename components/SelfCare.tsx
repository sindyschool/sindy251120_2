import React from 'react';
import { FadeIn } from './FadeIn';
import { Product } from '../types';
import { BookOpen, Package } from 'lucide-react';

const products: Product[] = [
  {
    id: 'wb1',
    title: '부부 관계 개선 워크북',
    subtitle: '서로의 마음을 확인하는 4주 완성 가이드',
    tag: 'Best Seller',
    image: 'https://picsum.photos/400/300?random=1'
  },
  {
    id: 'wb2',
    title: '나를 찾는 감정 워크북',
    subtitle: '내 안의 불안과 우울을 다스리는 법',
    tag: 'Steady',
    image: 'https://picsum.photos/400/300?random=2'
  },
  {
    id: 'kit1',
    title: '커플 대화 카드 키트',
    subtitle: '어색한 대화를 자연스럽게 푸는 50가지 질문',
    tag: 'New',
    image: 'https://picsum.photos/400/300?random=3'
  }
];

export const SelfCare: React.FC = () => {
  return (
    <section id="self-care" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="mb-12">
            <span className="text-brand font-bold mb-2 block">SELF CARE</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              내 속도에 맞춰<br />
              스스로 마음을 돌봅니다
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl">
              과학적 심리이론을 기반으로 설계된 워크북과 키트로<br />
              문제를 이해하고, 정리하고, 실천해보세요.
            </p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((product, idx) => (
            <FadeIn key={product.id} delay={idx * 150}>
              <div className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer transform hover:-translate-y-2">
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={product.image} 
                    alt={product.title} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  {product.tag && (
                    <span className="absolute top-4 left-4 bg-black/50 backdrop-blur-md text-white text-xs font-bold px-3 py-1 rounded-full">
                      {product.tag}
                    </span>
                  )}
                </div>
                <div className="p-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{product.title}</h3>
                  <p className="text-gray-500 mb-6 line-clamp-2">{product.subtitle}</p>
                  <button className="flex items-center font-semibold text-brand hover:text-brand-dark transition-colors">
                    자세히 보기 <BookOpen size={16} className="ml-2" />
                  </button>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};