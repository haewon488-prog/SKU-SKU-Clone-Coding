import React, { useEffect, useRef, useState } from 'react';
import './Tracks.css';

import imgReact from '../assets/images/Main4_React.png';
import imgSpring from '../assets/images/Main4_spring.png';
import imgFigma from '../assets/images/Main4_figma.png';

// 상세 커리큘럼 이미지 임포트
import imgBackDetail from '../assets/images/back_.png';
import imgFrontDetail from '../assets/images/front.png';
import imgDesignDetail from '../assets/images/design_.png';

function Tracks() {
  const tracksRef = useRef(null);
  const [isIntersecting, setIsIntersecting] = useState(false);

  // 현재 어떤 트랙이 활성화(클릭)되었는지 관리하는 상태 (기본값 null)
  const [activeTrack, setActiveTrack] = useState(null);

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

  // 트랙별 동적 데이터 (보내주신 고유 RGB 색상값 완벽 대입)
  const trackDetails = {
    'FRONT-END': {
      teamName: "프론트엔드",
      engName: "FRONT-END",
      bgColor: "#B74321",
      textColor: "rgb(247, 82, 34)", // 프론트엔드 주황
      icon: imgReact,
      detailImg: imgFrontDetail,
      imgClass: "md:w-[50%] w-[700px]"
    },
    'BACK-END': {
      teamName: "백엔드",
      engName: "BACK-END",
      bgColor: "#1C7674",
      textColor: "rgb(10, 207, 131)", // 백엔드 그린
      icon: imgSpring,
      detailImg: imgBackDetail,
      imgClass: "md:w-[50%] w-[900px]"
    },
    'DESIGN': {
      teamName: "기획/디자인",
      engName: "PM/DESIGN",
      bgColor: "#CF637E",
      textColor: "rgb(255, 111, 113)", // 기획/디자인 핑크
      icon: imgFigma,
      detailImg: imgDesignDetail,
      imgClass: "md:w-[50%] w-[700px]"
    }
  };

  // 트랙 클릭 핸들러
  const handleTrackClick = (e, trackName) => {
    e.stopPropagation();
    setActiveTrack(trackName);
  };

  // 배경 클릭 시 리셋
  const handleReset = () => {
    setActiveTrack(null);
  };

  return (
    <div className="section" ref={tracksRef} onClick={handleReset}>
      <div className="bg-[#121212] py-[8%] flex flex-col items-center overflow-hidden">
        
        {/* 1. 상단 타이틀 구역 */}
        <div 
          className="flex flex-col text-center justify-center transition-all duration-1000"
          style={{
            opacity: isIntersecting ? 1 : 0,
            transform: isIntersecting ? 'none' : 'translateY(30px)',
          }}
        >
          <p 
            className="text-[#3B79FF] fontBold sm:text-[30px] text-[20px]"
            style={{ color: '#3B79FF' }}
          >
            TRACKS
          </p>
          
          <p className="fontThin text-[#ffffff] sm:mt-8 mt-2 sm:text-[18px] text-[9px]">
            멋쟁이사자처럼에서 각 트랙별로 세분화된 교육과 경험을 제공합니다.
          </p>
          
          {/* 
            ★ [개발자 도구 스타일 전면 반영] ★
            - 클래스명을 fontMedium mt-4 text-white로 동일하게 지정
            - opacity는 상태에 따라 1과 0으로 고정하여 레이아웃 밀림 방지
            - 각 파트별 텍스트 색상을 동적으로 매핑
          */}
          <p 
            className="fontMedium mt-4 text-white text-[10px] sm:text-[16px] transition-all duration-300" 
            style={{ 
              opacity: activeTrack ? 1 : 0,
              visibility: activeTrack ? 'visible' : 'hidden'
            }}
          >
            상상을 현실로 만드는 시작,{' '}
            <span 
              className="font-semibold" 
              style={{ color: activeTrack ? trackDetails[activeTrack].textColor : 'transparent' }}
            >
              {activeTrack ? trackDetails[activeTrack].teamName : ''}
            </span>
            팀 커리큘럼을 소개합니다.
          </p>
        </div>

        {/* 2. 하단 트랙 셀렉터 / 커리큘럼 노출 구역 */}
        <div 
          className="bg-[#262626] mt-10 w-full h-[160px] flex items-center justify-center text-white overflow-hidden transition-all duration-1000 delay-200"
          style={{
            opacity: isIntersecting ? 1 : 0,
            transform: isIntersecting ? 'none' : 'translateY(30px)',
          }}
        >
          {!activeTrack ? (
            /* [원래 스타일] 아무것도 선택하지 않았을 때 원래 스타일 유지 */
            <div className="flex justify-evenly w-full px-10">
              
              {/* 프론트엔드 */}
              <div 
                onClick={(e) => handleTrackClick(e, 'FRONT-END')}
                className="flex items-center cursor-pointer transition-transform hover:scale-105 hover:text-[#F75222]"
              >
                <img className="w-12 mr-4" alt="프론트엔드" src={imgReact} />
                <div>
                  <span className="text-[18px]">프론트엔드</span>
                  <span className="ml-3 fontEL text-[12px]">FRONT-END</span>
                </div>
              </div>

              {/* 백엔드 */}
              <div 
                onClick={(e) => handleTrackClick(e, 'BACK-END')}
                className="flex items-center cursor-pointer transition-transform hover:scale-105 hover:text-[#0ACF83]"
              >
                <img className="w-12 mr-4" alt="백엔드" src={imgSpring} />
                <div>
                  <span className="text-[18px]">백엔드</span>
                  <span className="ml-3 fontEL text-[12px]">BACK-END</span>
                </div>
              </div>

              {/* 기획/디자인 */}
              <div 
                onClick={(e) => handleTrackClick(e, 'DESIGN')}
                className="flex items-center cursor-pointer transition-transform hover:scale-105 hover:text-[#FF6F71]"
              >
                <img className="w-12 mr-4" alt="기획/디자인" src={imgFigma} />
                <div>
                  <span className="text-[18px]">기획/디자인</span>
                  <span className="ml-3 fontEL text-[12px]">PM/DESIGN</span>
                </div>
              </div>

            </div>
          ) : (
            /* [클릭했을 때 변하는 스타일] 높이가 160px를 절대 넘지 않게 맞춘 커리큘럼 영역 */
            <div 
              className="flex items-center justify-evenly h-[160px] w-full transition-all duration-500 animate-fade-in" 
              style={{ 
                backgroundColor: trackDetails[activeTrack].bgColor,
                opacity: 1, 
                transform: 'none' 
              }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex select-none">
                <img className="w-12 mr-4 object-contain" alt="" src={trackDetails[activeTrack].icon} />
                <div className="text-center flex items-center">
                  <p className="text-[20px] font-semibold">{trackDetails[activeTrack].teamName}</p>
                  <p className="text-[14px] ml-2 text-white/95">{trackDetails[activeTrack].engName}</p>
                </div>
              </div>

              <img 
                className={`text-[16px] ${trackDetails[activeTrack].imgClass} h-full object-contain py-3 select-none`} 
                alt="" 
                src={trackDetails[activeTrack].detailImg} 
              />
            </div>
          )}
        </div>

      </div>
    </div>
  );
}

export default Tracks;