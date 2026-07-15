import React, { useEffect, useRef, useState } from 'react';
import './Hero.css';
import heroBg from '../assets/images/Main1.jpeg';
import mouseIcon from '../assets/images/Mouse.png';

function Hero() {
  const heroRef = useRef(null); // (1) DOM 요소를 선택하기 위한 참조 생성
  const [isIntersecting, setIsIntersecting] = useState(false); // (2) 화면 노출 여부를 담는 상태값

  useEffect(() => {
    // (3) 화면 노출 감지 센서(Intersection Observer) 설정
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsIntersecting(entry.isIntersecting); // (4) 감지 상태 업데이트 (보이면 true, 안 보이면 false)
      },
      { threshold: 0.1 } // (5) 대상 영역이 10% 이상 보일 때 즉시 작동
    );

    if (heroRef.current) {
      observer.observe(heroRef.current); // (6) Hero 영역 감지 시작
    }

    return () => {
      if (heroRef.current) {
        observer.unobserve(heroRef.current); // (7) 언마운트 시 감지 중단 및 메모리 정리
      }
    };
  }, []); // (8) 첫 렌더링 시 딱 한 번만 실행

  return (
    <div className="section" ref={heroRef}>
      <div className="relative h-screen w-full overflow-hidden px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
        
        {/* 모바일 전용 배경 이미지 구역 */}
        <div 
          className="absolute inset-0 bg-cover bg-no-repeat sm:hidden bg-center" 
          style={{ backgroundImage: `url(${heroBg})` }}
        >
          <div className="absolute inset-0 bg-black opacity-80"></div>
        </div>

        {/* PC 전용 배경 이미지 구역 */}
        <div 
          className="absolute inset-0 bg-cover bg-no-repeat hidden sm:block bg-center" 
          style={{ backgroundImage: `url(${heroBg})` }}
        >
          <div className="absolute inset-0 bg-black opacity-80"></div>
        </div>

        {/* 중앙 텍스트 구역 (화면 감지 여부에 따라 다른 애니메이션 적용) */}
        <div 
          className={`relative flex flex-col justify-center h-full mt-3 text-white ${
            isIntersecting ? 'hero__fade-in-up' : 'hero__hidden'
          }`}
        >
          <div className="fontSB text-[28px] sm:leading-[clamp(3rem,4.3vw,4rem)] sm:pl-[8%] pl-6 sm:text-[clamp(28px,2.9vw,3rem)]" style={{ fontWeight: 600 }}>
            <p>상상을 현실로 만드는</p>
            <p>내 손 안에 <span className="text-[#3B79FF] block sm:inline">스쿠스쿠</span></p>
          </div>

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