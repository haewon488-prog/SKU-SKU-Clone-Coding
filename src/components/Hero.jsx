import React, { useEffect, useRef, useState } from 'react';
import './Hero.css';
// 이미지 리소스가 정상적으로 로드되도록 상대 경로 import 적용
import heroBg from '../assets/images/Main1.jpeg';
import mouseIcon from '../assets/images/Mouse.png';

function Hero() {
  const heroRef = useRef(null);
  const [isIntersecting, setIsIntersecting] = useState(false);

  useEffect(() => {
    // 화면에 Hero 섹션이 노출될 때마다 스크롤 모션이 매번 다시 감지되도록 옵저버를 구성합니다.
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsIntersecting(entry.isIntersecting);
      },
      { threshold: 0.1 } // 조금이라도 시야에 도달하면 즉시 모션을 활성화합니다.
    );

    if (heroRef.current) {
      observer.observe(heroRef.current);
    }

    return () => {
      if (heroRef.current) {
        observer.unobserve(heroRef.current);
      }
    };
  }, []);

  return (
    <div className="section" ref={heroRef}>
      <div className="relative h-screen w-full overflow-hidden px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
        
        {/* 모바일 배경 이미지 */}
        <div 
          className="absolute inset-0 bg-cover bg-no-repeat sm:hidden bg-center" 
          style={{ backgroundImage: `url(${heroBg})` }}
        >
          <div className="absolute inset-0 bg-black opacity-80"></div>
        </div>

        {/* PC 배경 이미지 */}
        <div 
          className="absolute inset-0 bg-cover bg-no-repeat hidden sm:block bg-center" 
          style={{ backgroundImage: `url(${heroBg})` }}
        >
          <div className="absolute inset-0 bg-black opacity-80"></div>
        </div>

        {/* 중앙 텍스트 콘텐츠 구역 */}
        <div 
          className={`relative flex flex-col justify-center h-full mt-3 text-white ${
            isIntersecting ? 'hero__fade-in-up' : 'hero__hidden'
          }`}
        >
          {/* 타이틀: 굵기(font-weight: 600) 유지 */}
          <div className="fontSB text-[28px] sm:leading-[clamp(3rem,4.3vw,4rem)] sm:pl-[8%] pl-6 sm:text-[clamp(28px,2.9vw,3rem)]" style={{ fontWeight: 600 }}>
            <p>상상을 현실로 만드는</p>
            <p>내 손 안에 <span className="text-[#3B79FF] block sm:inline">스쿠스쿠</span></p>
          </div>

          {/* 설명글: 두께를 100으로 줄여 훨씬 얇게 만들고, 밝은 회색(#E5E5E5)을 적용해 시각적 굵기를 한 단계 더 덜어냈습니다. */}
          <div 
            className="sm:leading-[30px] sm:pt-9 pt-6 sm:pl-[8%] pl-6 sm:text-[clamp(9px,2.9vw,16px)] text-[9px] text-[#E5E5E5]"
            style={{ fontWeight: 200 }}
          >
            <p><span className="fontSB" style={{ fontWeight: 600, color: '#ffffff' }}>성결대학교 멋쟁이사자처럼</span>은</p>
            <p>자신이 원하는 <span>IT</span> 서비스를 구현하고 싶은 성결대학교 학생들이 모인 동아리입니다.</p>
          </div>
        </div>

        {/* 하단 Scroll down 구역 */}
        <div className={`relative sm:flex hidden flex-col items-center bottom-[15%] ${
          isIntersecting ? 'hero__fade-in' : 'hero__hidden'
        }`}>
          <p className="fontSB text-sm text-[#666666] flex items-center" style={{ fontWeight: 600 }}>Scroll down</p>
          <img 
            alt="마우스 모양" 
            className="w-[23px] mt-2 hero__scroll-bounce" 
            src={mouseIcon} 
          />
        </div>

      </div>
    </div>
  );
}

export default Hero;