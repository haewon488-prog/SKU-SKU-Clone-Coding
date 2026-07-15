import React, { useEffect, useRef, useState } from 'react';
import './Program.css';

// 이미지 에셋 임포트 유지
import imgMain3_1 from '../assets/images/Main3_1.png';
import imgMain3_2 from '../assets/images/Main3_2.png';
import imgMain3_3 from '../assets/images/Main3_3.png';
import imgMain3_4 from '../assets/images/Main3_4.png';
import imgMain3_5 from '../assets/images/Main3_5.png';
import iconPlace from '../assets/images/place.png';
import iconDate from '../assets/images/date.png';

// 1. 개별 프로그램 카드 컴포넌트 (스크롤 반응형 무한 모션)
function ProgramCard({ program, index }) {
  const cardRef = useRef(null);
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

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, []);

  const isReverse = index % 2 !== 0;

  return (
    <div
      ref={cardRef}
      className={`flex flex-col sm:flex-row items-center gap-4 sm:gap-20 transition-all duration-700 ${
        isReverse ? 'sm:flex-row-reverse' : ''
      } ${isIntersecting ? 'program__fade-in-up' : 'program__hidden'}`}
    >
      <img
        alt={program.title}
        className="w-38 sm:w-[45%] sm:rounded-[15px] rounded-sm"
        src={program.img}
      />
      <div className="flex-1 text-white space-y-4 sm:space-y-6 sm:px-4">
        <p className="text-[12px] sm:text-[18px] md:text-[32px] fontSB font-semibold">
          {program.titlePrefix} <span className="text-[#72A6FF]">{program.titleHighlight}</span>
        </p>
        <p className="hidden sm:block text-[#E5E5E5] fontThin font-extralight text-[11px] sm:text-[12px] md:text-[15px] whitespace-pre-line">
          {program.description}
        </p>
        <div className="hidden sm:block text-[11px] sm:text-[12px] md:text-[13px] text-[#E5E5E5] fontThin font-extralight space-y-1">
          <div className="flex items-center gap-2">
            <img alt="장소" className="w-3" src={iconPlace} />
            <p>{program.place}</p>
          </div>
          <div className="flex items-center gap-2">
            <img alt="시간" className="w-3" src={iconDate} />
            <p>
              {program.time}{' '}
              {program.timeSub && (
                <span className="text-[11px] sm:text-[12px]">{program.timeSub}</span>
              )}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

// 2. 메인 Program 컴포넌트
function Program() {
  const headerRef = useRef(null);
  const [isHeaderIntersecting, setIsHeaderIntersecting] = useState(false);

  const beforeText = "멋쟁이사자처럼 14기에서 진행되는 ";
  const highlightText = "프로그램";
  const afterText = "을 소개합니다.";
  const fullText = beforeText + highlightText + afterText;

  const [displayedText, setDisplayedText] = useState("");

  // 상단 인트로 배너 관찰자 설정 (화면에 진입할 때마다 트리거)
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsHeaderIntersecting(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    if (headerRef.current) {
      observer.observe(headerRef.current);
    }

    return () => {
      if (headerRef.current) {
        observer.unobserve(headerRef.current);
      }
    };
  }, []);

  // 화면에 보이고 안 보임에 따라 타이핑 애니메이션 실행 및 리셋
  useEffect(() => {
    if (!isHeaderIntersecting) {
      // 화면 밖으로 완전히 나가면 텍스트 비우기
      setDisplayedText("");
      return;
    }

    let index = 0;
    const timer = setInterval(() => {
      setDisplayedText(fullText.slice(0, index + 1));
      index++;

      if (index >= fullText.length) {
        clearInterval(timer);
      }
    }, 80);

    return () => clearInterval(timer);
  }, [isHeaderIntersecting]);

  // 5개의 프로그램 데이터 배열
  const programData = [
    {
      img: imgMain3_1,
      titlePrefix: "함께 공부하는",
      titleHighlight: "스터디",
      title: "스터디",
      description: "공부하고 싶은 트랙을 함께 공부하며\n지식을 습득할 수 있는 학습의 장이 마련됩니다.",
      place: "성결대학교 성결관",
      time: "스터디 별로 상이",
      timeSub: "(스쿠스쿠 사이버캠퍼스 내 일정 참고)"
    },
    {
      img: imgMain3_2,
      titlePrefix: "세분화된 교육,",
      titleHighlight: "정기세션",
      title: "정기세션",
      description: "아기사자들에게 트랙별로 교육을 제공합니다.\n매주 정기세션에서 아기사자들과 운영진이 함께 성장합니다.",
      place: "성결대학교 성결관",
      time: "매주 목요일 18시-21시",
      timeSub: ""
    },
    {
      img: imgMain3_3,
      titlePrefix: "서비스의 초석",
      titleHighlight: "아이디어톤",
      title: "아이디어톤",
      description: "서비스 아이디어를 다듬고 실현 가능성을 테스트하는 시간입니다.\n열정적인 토론과 발표로 아이디어의 깊이를 더합니다.",
      place: "성결대학교 성결관",
      time: "스터디 별로 상이",
      timeSub: "(스쿠스쿠 사이버캠퍼스 내 일정 참고)"
    },
    {
      img: imgMain3_4,
      titlePrefix: "상상을 현실로 만드는",
      titleHighlight: "해커톤",
      title: "해커톤",
      description: "주어진 시간 내에 팀을 이뤄 서비스를 기획/개발합니다.\n실전 감각을 익히고 팀워크를 높이는 경험을 제공합니다.",
      place: "성결대학교 성결관",
      time: "스터디 별로 상이",
      timeSub: "(스쿠스쿠 사이버캠퍼스 내 일정 참고)"
    },
    {
      img: imgMain3_5,
      titlePrefix: "하계",
      titleHighlight: "MT",
      title: "MT",
      description: "팀워크를 다지는 특별한 시간!\n친목과 소통을 통해 끈끈한 유대감을 형성합니다.",
      place: "성결대학교 외부 장소",
      time: "방학 중 진행",
      timeSub: ""
    }
  ];

  return (
    <div className="program">
      {/* 1. 상단 인트로 배너 구역 - headerRef 추가 및 Intersection 기반 렌더링 클래스 적용 */}
      <div 
        ref={headerRef}
        className="hidden sm:flex bg-[#0E0E0E] text-white h-[300px] justify-center items-center text-[16px] sm:text-[20px] lg:text-[24px]"
      >
        <div className="program__text-container">
          <p className={`fontThin font-extralight text-center leading-none transition-all duration-700 ${
            isHeaderIntersecting ? 'opacity-100' : 'opacity-0 filter blur-xs'
          }`}>
            {displayedText.slice(
              0,
              Math.min(displayedText.length, beforeText.length)
            )}

            <span className="fontBold text-white">
              {displayedText.slice(
                beforeText.length,
                Math.min(
                  displayedText.length,
                  beforeText.length + highlightText.length
                )
              )}
            </span>

            {displayedText.slice(
              beforeText.length + highlightText.length
            )}
          </p>
        </div>
      </div>

      {/* 2. 하단 리스트 구역 */}
      <div className="px-4 sm:px-8 md:px-16 lg:px-14 xl:px-18 bg-[#1B1B1B] sm:py-20 py-12 sm:pb-40 pb-10 space-y-20">
        <p className="text-[#9ABFFF] fontSB font-semibold text-center text-[9px] sm:text-[14px] md:text-[18px]">
          @2026 PROGRAM info
        </p>

        {/* 관찰 대상 컨테이너 - 스크롤할 때마다 개별 카드 모션 반복 작동 */}
        <div className="max-w-5xl mx-auto sm:flex sm:flex-col max-sm:grid max-sm:grid-cols-2 sm:gap-25 gap-4">
          {programData.map((program, index) => (
            <ProgramCard 
              key={index} 
              program={program} 
              index={index} 
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Program;