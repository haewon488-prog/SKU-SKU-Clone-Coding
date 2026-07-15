import React, { useEffect, useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';

import 'swiper/css';
import './Projects.css';

// 실제 폴더에 존재하는 이미지들 임포트
import imgSolvit from '../assets/images/2025영암체전.png'; // 청춘열전 승부예측
import imgCinderella from '../assets/images/신데렐라.png'; // 나는 어떤 신데렐라
import img13thSkuSku from '../assets/images/스쿠스쿠리뉴얼.png'; // 13th 스쿠스쿠 / 새로운 안녕 올라
import imgPage from '../assets/images/41대동연page.png'; // 페이지
import img12thSkuSku from '../assets/images/12기스쿠스쿠.png'; // 12th 스쿠스쿠
import imgRental from '../assets/images/퍼즐물품대여.png'; // 퍼즐물품 대여 서비스
import imgByElection from '../assets/images/2024보궐선거.png'; // 보궐선거
import imgMainElection from '../assets/images/2024총선거.png'; // 2024총선거
import imgGeulLover from '../assets/images/글천절.png'; // 글LOVER (글천절 이미지)
import imgSketch from '../assets/images/39대동연sketch.png'; // SKETCH VILLAGE
import imgCalc from '../assets/images/졸업학점계산기.png'; // 졸업학점계산기
import imgPoolus from '../assets/images/2023영암축전poolus.png'; // POOL:US

// ★★★ 보내주신 프로젝트 순서 & URL 링크 매칭 완료 ★★★
const PROJECT_DATA = [
  { 
    title: "승부예측 : SOLVIT-FINAL", 
    desc: "청춘열전 승부예측 (2025 영암체전 결승전)", 
    link: "https://solvit-final.sku-sku.com/", 
    bgImage: imgSolvit 
  },
  { 
    title: "나는 어떤 신데렐라일까?", 
    desc: "2025 동아리페스티벌 심리테스트", 
    link: "https://cinderella.sku-sku.com/", 
    bgImage: imgCinderella 
  },
  { 
    title: "13TH SKU-SKU", 
    desc: "성결대 멋쟁이사자처럼 13기 홈페이지", 
    link: "https://sku-sku.com/", 
    bgImage: img13thSkuSku 
  },
  { 
    title: "Page", 
    desc: "2025년 동아리 연합회 웹사이트", 
    link: "https://page.sku-sku.com/", 
    bgImage: imgPage 
  },
  { 
    title: "12TH SKU-SKU", 
    desc: "성결대 멋쟁이사자처럼 12기 홈페이지", 
    link: "https://legacy.sku-sku.com/", 
    bgImage: img12thSkuSku 
  },
  { 
    title: "퍼즐 물품 대여 서비스", 
    desc: "동아리원들의 편의성 확대", 
    link: "https://sku-sku.com/", 
    bgImage: imgRental 
  },
  { 
    title: "보궐선거", 
    desc: "입후보자 확인 및 투표 격려", 
    link: "https://vote2024.sku-sku.com/by-election", 
    bgImage: imgByElection 
  },
  { 
    title: "새로운 안녕 올라 HOLA!", 
    desc: "2024 신입생 오리엔테이션", 
    link: "https://welcome-hola.sku-sku.com/", 
    bgImage: img13thSkuSku 
  },
  { 
    title: "2024 총선거", 
    desc: "입후보자 확인 및 투표 격려", 
    link: "https://vote2024.sku-sku.com/main-election", 
    bgImage: imgMainElection 
  },
  { 
    title: "글LOVER 파동", 
    desc: "2023 글천절", 
    link: "https://glover.sku-sku.com/", 
    bgImage: imgGeulLover 
  },
  { 
    title: "SKETCH VILLAGE", 
    desc: "2023 동아리 페스티벌", 
    link: "https://sketch39.sku-sku.com/", 
    bgImage: imgSketch 
  },
  { 
    title: "졸업학점계산기", 
    desc: "졸업요건 확인", 
    link: "https://gcc.sku-sku.com/", 
    bgImage: imgCalc 
  },
  { 
    title: "POOL:US", 
    desc: "2023 영암축전", 
    link: "https://poolus.sku-sku.com/", 
    bgImage: imgPoolus 
  }
];

function Projects() {
  const projectsRef = useRef(null);
  const [isIntersecting, setIsIntersecting] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsIntersecting(entry.isIntersecting);
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );

    if (projectsRef.current) {
      observer.observe(projectsRef.current);
    }

    return () => {
      if (projectsRef.current) {
        observer.unobserve(projectsRef.current);
      }
    };
  }, []);

  return (
    <div className="section" ref={projectsRef}>
      <div className="bg-[#121212] pt-14 sm:pb-30 pb-12 overflow-hidden">
        
        {/* 타이틀 구역 */}
        <div 
          className="flex flex-col text-center justify-center transition-all duration-1000"
          style={{
            opacity: isIntersecting ? 1 : 0,
            transform: isIntersecting ? 'none' : 'translateY(30px)',
          }}
        >
          <p className="fontBold font-semibold sm:text-[30px] text-[20px]" style={{ color: '#3B79FF' }}>
            PROJECTS
          </p>
          <p className="fontThin text-[#ffffff] sm:mt-8 mt-2 sm:text-[18px] text-[9px] mb-12">
            성결대학교 멋쟁이사자처럼과 함께한 프로젝트들을 소개합니다.
          </p>
        </div>

        {/* 롤링 슬라이더 구역 */}
        <div 
          className="sm:mx-9 mx-4 transition-all duration-1000 delay-200"
          style={{
            opacity: isIntersecting ? 1 : 0,
            transform: isIntersecting ? 'none' : 'translateY(30px)',
          }}
        >
          <div className="flex justify-center items-center">
            <div className="w-[100%]">
              
              <Swiper
                modules={[Autoplay]}
                spaceBetween={0}
                slidesPerView={1}
                loop={true}
                speed={3000} // 물 흐르듯 천천히 넘어가는 속도
                autoplay={{
                  delay: 500, // 카드 영역에 머물러 있는 짧은 대기 시간
                  disableOnInteraction: false,
                }}
                cssMode={false}
                breakpoints={{
                  640: { slidesPerView: 2 },
                  1024: { slidesPerView: 3 }
                }}
                className="mySwiper rhythm-swiper"
              >
                {PROJECT_DATA.map((project, index) => (
                  <SwiperSlide key={index} className="h-auto">
                    <a 
                      href={project.link} 
                      className="flex justify-center items-center w-full cursor-pointer" 
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      <div 
                        className="w-full aspect-[16/9] rounded-[10px] overflow-hidden mx-2 sm:mx-3 md:mx-4 lg:mx-5 bg-cover bg-center flex flex-col justify-end p-4 project-card"
                        style={{
                          backgroundImage: `linear-gradient(to top, rgba(0, 0, 0, 0.8), transparent), url("${project.bgImage}")`
                        }}
                      >
                        <div className="text-[10px] sm:text-base md:text-lg lg:text-xl xl:text-2xl fontEB text-white">
                          {project.title}
                        </div>
                        <p className="pt-1 text-[8px] sm:text-sm md:text-base lg:text-lg text-white fontRegular">
                          {project.desc}
                        </p>
                      </div>
                    </a>
                  </SwiperSlide>
                ))}
              </Swiper>

            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Projects;