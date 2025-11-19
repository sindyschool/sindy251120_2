import React from 'react';
import { FadeIn } from './FadeIn';
import { Star } from 'lucide-react';
import { Review } from '../types';

const reviews: Review[] = [
  {
    id: 'r1',
    user: '결혼 3년차 부부',
    rating: 5,
    type: 'Counseling',
    content: "처음엔 앱으로 상담받는 게 낯설었는데, 오히려 얼굴 안 보고 채팅으로 하니 속마음이 술술 나왔어요. 남편도 저도 많이 울고 웃었습니다."
  },
  {
    id: 'r2',
    user: '30대 예비신부',
    rating: 5,
    type: 'Self-Care',
    content: "워크북 질문들이 정말 날카로워요. 결혼 전에 이 책을 만나서 다행입니다. 서로 어떤 가치관을 가졌는지 확실히 알게 됐어요."
  },
  {
    id: 'r3',
    user: '육아맘 김**님',
    rating: 4,
    type: 'Counseling',
    content: "육아 때문에 밖으로 나가서 상담받기가 불가능했는데, 아이 재우고 밤에 앱으로 상담받을 수 있어서 저를 살렸습니다."
  }
];

export const Reviews: React.FC = () => {
  return (
    <section className="py-24 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              이미 많은 분들이<br />
              관계를 회복하고 있습니다
            </h2>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, idx) => (
            <FadeIn key={review.id} delay={idx * 150}>
              <div className="bg-gray-50 p-8 rounded-3xl h-full flex flex-col relative">
                <div className="flex gap-1 text-yellow-400 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} fill={i < review.rating ? "currentColor" : "none"} strokeWidth={i < review.rating ? 0 : 2} className="text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-700 text-lg mb-6 flex-grow leading-relaxed">
                  "{review.content}"
                </p>
                <div className="mt-auto">
                  <p className="text-sm font-bold text-gray-900">{review.user}</p>
                  <span className="text-xs text-brand font-medium bg-brand/10 px-2 py-1 rounded-full mt-2 inline-block">
                    {review.type} 이용 고객
                  </span>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};