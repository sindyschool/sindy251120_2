import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-white pt-16 pb-8 border-t border-brand/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold text-brand mb-4">Sindy</h3>
            <p className="text-gray-500 text-sm leading-relaxed max-w-sm">
              신디는 부부와 개인의 관계 회복을 돕는<br />
              멘탈케어 플랫폼입니다.<br />
              우리는 모든 관계가 더 건강해질 수 있다고 믿습니다.
            </p>
          </div>
          
          <div>
            <h4 className="font-bold text-gray-900 mb-4">Service</h4>
            <ul className="space-y-2 text-sm text-gray-500">
              <li><a href="#self-care" className="hover:text-brand">셀프케어</a></li>
              <li><a href="#counseling" className="hover:text-brand">전문가 상담</a></li>
              <li><a href="#" className="hover:text-brand">신디 매거진</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-gray-900 mb-4">Contact</h4>
            <ul className="space-y-2 text-sm text-gray-500">
              <li>support@sindy.me</li>
              <li>카카오톡 채널 @신디</li>
              <li>제휴 문의 partner@sindy.me</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-100 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-400">
          <p>&copy; 2024 Sindy Inc. All rights reserved.</p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <a href="#" className="hover:text-gray-600">이용약관</a>
            <a href="#" className="hover:text-gray-600 font-bold">개인정보처리방침</a>
            <a href="#" className="hover:text-gray-600">사업자정보</a>
          </div>
        </div>
      </div>
    </footer>
  );
};