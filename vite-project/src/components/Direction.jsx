import React, { useEffect, useRef, useState } from 'react';
import './Direction.css';

// 원본 이미지 에셋 바인딩
import bgImg from '../assets/images/Main2.jpeg';
import iconSelf from '../assets/images/self.png';
import iconTeam from '../assets/images/cooperation.png';
import iconPossibility from '../assets/images/Possibility.png';

function Direction() {
  const directionRef = useRef(null);
  const [isIntersecting, setIsIntersecting] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsIntersecting(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    if (directionRef.current) observer.observe(directionRef.current);
    return () => { if (directionRef.current) observer.unobserve(directionRef.current); };
  }, []);

  return (
    <div 
      ref={directionRef} 
      className="relative sm:min-h-screen h-[250px] w-full px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 overflow-hidden"
    >
      {/* 배경 및 딤 처리 구역 */}
      <div 
        className="absolute inset-0 bg-cover bg-center sm:block hidden"
        style={{ backgroundImage: `url(${bgImg})` }}
      >
        <div className="absolute inset-0 bg-black opacity-80"></div>
      </div>
      <div 
        className="absolute inset-0 bg-cover bg-center sm:hidden block"
        style={{ backgroundImage: `url(${bgImg})` }}
      >
        <div className="absolute inset-0 bg-black opacity-80"></div>
      </div>

      {/* Hero와 통일된 감각의 스크롤 모션 클래스 적용 구역 */}
      <div 
        className={`relative flex flex-col justify-center h-full text-white items-center sm:space-y-30 sm:pt-32 py-16 space-y-3 ${
          isIntersecting ? 'direction__fade-in-up' : 'direction__hidden'
        }`}
      >
        {/* 상단 타이틀 구역 - font-extralight 및 font-semibold 추가 */}
        <div className="text-center sm:block flex flex-row justify-center items-center gap-1">
          <p className="sm:text-[clamp(9px,2.9vw,16px)] text-[11px] fontThin font-extralight">
            성결대학교 멋쟁이사자처럼의
          </p>
          <p className="sm:text-[clamp(20px,2.9vw,30px)] text-[12px] fontSB font-semibold">
            3가지 방향성
          </p>
        </div>

        {/* 모바일 전용 한 줄 슬로건 */}
        <p className="sm:hidden text-[9px] fontEL">"내 아이디어를 내 손으로 실현한다."</p>

        {/* 카드 리스트 구역 */}
        <div className="flex flex-wrap w-full px-4 sm:px-20 justify-center gap-x-2 gap-y-4 sm:gap-x-22 sm:gap-y-6 mt-2">
          
          {/* 카드 1: 자기주도성 */}
          <div 
            className="flex flex-1 min-w-0 sm:max-w-[25%] w-full h-auto sm:h-48 aspect-[4/3] sm:aspect-auto rounded-sm sm:rounded-xl items-center justify-evenly px-2 sm:px-3 py-2" 
            style={{ backgroundColor: 'rgb(75, 118, 211)' }}
          >
            <div className="flex flex-col justify-center gap-1 sm:gap-2 text-left overflow-hidden">
              {/* 아주 조금 더 얇게 조정한 세미볼드(font-semibold) 굵기 */}
              <p className="fontSB font-semibold text-[11px] sm:text-[clamp(11px,2.9vw,26px)] truncate">
                자기주도성
              </p>
              {/* 하단 인용구 구역과 통일된 얇은 굵기 (fontThin font-extralight) */}
              <div className="hidden lg:block fontThin font-extralight leading-5 break-words text-[clamp(8px,2vw,15px)]">
                나만의 커리어를 직접 설계하고,<br />만들어갈 수 있습니다
              </div>
            </div>
            <img alt="자기주도성" className="w-[clamp(24px,5vw,60px)] shrink-0" src={iconSelf} />
          </div>

          {/* 카드 2: 협력성 */}
          <div 
            className="flex flex-1 min-w-0 sm:max-w-[25%] w-full h-auto sm:h-48 aspect-[4/3] sm:aspect-auto rounded-sm sm:rounded-xl items-center justify-evenly px-2 sm:px-3 py-2" 
            style={{ backgroundColor: 'rgb(38, 76, 159)' }}
          >
            <div className="flex flex-col justify-center gap-1 sm:gap-2 text-left overflow-hidden">
              {/* 아주 조금 더 얇게 조정한 세미볼드(font-semibold) 굵기 */}
              <p className="fontSB font-semibold text-[11px] sm:text-[clamp(11px,2.9vw,26px)] truncate">
                협력성
              </p>
              {/* 하단 인용구 구역과 통일된 얇은 굵기 (fontThin font-extralight) */}
              <div className="hidden lg:block fontThin font-extralight leading-5 break-words text-[clamp(8px,2vw,15px)]">
                동료들과 개발 고민을 함께<br />협력하고 공유하며,<br />성장할 수 있습니다.
              </div>
            </div>
            <img alt="협력성" className="w-[clamp(40px,7vw,90px)] shrink-0" src={iconTeam} />
          </div>

          {/* 카드 3: 가능성 */}
          <div 
            className="flex flex-1 min-w-0 sm:max-w-[25%] w-full h-auto sm:h-48 aspect-[4/3] sm:aspect-auto rounded-sm sm:rounded-xl items-center justify-evenly px-2 sm:px-3 py-2" 
            style={{ backgroundColor: 'rgb(20, 47, 105)' }}
          >
            <div className="flex flex-col justify-center gap-1 sm:gap-2 text-left overflow-hidden">
              {/* 아주 조금 더 얇게 조정한 세미볼드(font-semibold) 굵기 */}
              <p className="fontSB font-semibold text-[11px] sm:text-[clamp(11px,2.9vw,26px)] truncate">
                가능성
              </p>
              {/* 하단 인용구 구역과 통일된 얇은 굵기 (fontThin font-extralight) */}
              <div className="hidden lg:block fontThin font-extralight leading-5 break-words text-[clamp(8px,2vw,15px)]">
                나만의 커리어를 직접 설계하고,<br />만들어갈 수 있습니다
              </div>
            </div>
            <img alt="가능성" className="w-[clamp(24px,5vw,60px)] shrink-0" src={iconPossibility} />
          </div>

        </div>

        {/* 데스크톱 전용 하단 인용구 구역 - font-extralight 및 font-medium 추가 */}
        <div className="text-center hidden sm:block leading-8">
          <p className="fontThin sm:text-[clamp(9px,2.9vw,16px)] font-extralight">
            <span className="fontMedium text-xl font-medium">"내 아이디어를 내 손으로 실현한다." </span>
            라는 모토를 가지고,
          </p>
          <p className="fontThin sm:text-[clamp(9px,2.9vw,16px)] font-extralight">
            실제 서비스를 구현하며 개발자의 꿈을 이루는데
          </p>
          <p className="fontThin sm:text-[clamp(9px,2.9vw,16px)] font-extralight">
            한걸음 더 다가가고자 합니다.
          </p>
        </div>

      </div>
    </div>
  );
}

export default Direction;