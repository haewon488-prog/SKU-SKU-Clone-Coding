import React, { useEffect, useRef, useState } from 'react';
import './Tracks.css';

import imgReact from '../assets/images/Main4_React.png';
import imgSpring from '../assets/images/Main4_spring.png';
import imgFigma from '../assets/images/Main4_figma.png';

function Tracks() {
  const tracksRef = useRef(null);
  const [isIntersecting, setIsIntersecting] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsIntersecting(entry.isIntersecting);
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px"
      }
    );

    if (tracksRef.current) {
      observer.observe(tracksRef.current);
    }

    return () => {
      if (tracksRef.current) {
        observer.unobserve(tracksRef.current);
      }
    };
  }, []);

  return (
    <div className="section" ref={tracksRef}>
      <div className="bg-[#121212] py-[8%] flex flex-col items-center overflow-hidden">
        
        {/* 1. 상단 타이틀 구역 - Direction/Program과 동일한 인터랙션 적용 */}
        <div 
          className="flex flex-col text-center justify-center transition-all duration-1000"
          style={{
            opacity: isIntersecting ? 1 : 0,
            transform: isIntersecting ? 'none' : 'translateY(30px)',
          }}
        >
          {/* 
            ★ [수정 포인트] 기존 클래스(fontBold, font-semibold 등)를 하나도 빼지 않고 그대로 두되, 
            CSS 충돌을 뚫고 무조건 파란색이 나오도록 style={{ color: '#3B79FF' }}를 직접 주입했습니다.
          */}
          <p 
            className="text-[#3B79FF] fontBold font-semibold sm:text-[30px] text-[20px]"
            style={{ color: '#3B79FF' }}
          >
            TRACKS
          </p>
          
          {/* 설명문: 기존 컴포넌트들과 동일한 fontThin 베이스 */}
          <p className="fontThin text-[#ffffff] sm:mt-8 mt-2 sm:text-[18px] text-[9px]">
            멋쟁이사자처럼에서 각 트랙별로 세분화된 교육과 경험을 제공합니다.
          </p>
          
          <p className="fontMedium mt-4 text-white" style={{ opacity: 0 }}>
            상상을 현실로 만드는 시작, <span className="font-semibold" style={{ color: 'transparent' }}></span>팀 커리큘럼을 소개합니다.
          </p>
        </div>

        {/* 2. 하단 트랙 셀렉터 구역 */}
        <div 
          className="bg-[#262626] mt-10 w-full h-[160px] flex items-center justify-center text-white overflow-hidden transition-all duration-1000 delay-200"
          style={{
            opacity: isIntersecting ? 1 : 0,
            transform: isIntersecting ? 'none' : 'translateY(30px)',
          }}
        >
          <div className="flex justify-evenly w-full px-10">
            
            {/* 프론트엔드 */}
            <div className="flex items-center cursor-pointer transition-transform hover:scale-105 hover:text-[#F75222]">
              <img className="w-12 mr-4" alt="프론트엔드" src={imgReact} />
              <div>
                <span className="text-[18px]">프론트엔드</span>
                <span className="ml-3 fontEL text-[12px]">FRONT-END</span>
              </div>
            </div>

            {/* 백엔드 */}
            <div className="flex items-center cursor-pointer transition-transform hover:scale-105 hover:text-[#0ACF83]">
              <img className="w-12 mr-4" alt="백엔드" src={imgSpring} />
              <div>
                <span className="text-[18px]">백엔드</span>
                <span className="ml-3 fontEL text-[12px]">BACK-END</span>
              </div>
            </div>

            {/* 기획/디자인 */}
            <div className="flex items-center cursor-pointer transition-transform hover:scale-105 hover:text-[#FF6F71]">
              <img className="w-12 mr-4" alt="기획/디자인" src={imgFigma} />
              <div>
                <span className="text-[18px]">기획/디자인</span>
                <span className="ml-3 fontEL text-[12px]">PM/DESIGN</span>
              </div>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}

export default Tracks;