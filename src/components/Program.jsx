import React from 'react';
import './Program.css';
import imgMain3_1 from '../assets/images/Main3_1.png';
import imgMain3_2 from '../assets/images/Main3_2.png';
import imgMain3_3 from '../assets/images/Main3_3.png';
import imgMain3_4 from '../assets/images/Main3_4.png';
import imgMain3_5 from '../assets/images/Main3_5.png';
import iconPlace from '../assets/images/place.png';
import iconDate from '../assets/images/date.png';

function Program() {
  return (
    <div className="program">
      {/* 1. 상단 인트로 배너 구역 */}
      <div className="program__intro">
        <p className="program__intro-text">
          멋쟁이사자처럼 14기에서 진행되는 <span className="program__intro-bold">프로그램</span>을 소개합니다.
        </p>
      </div>

      {/* 2. 메인 리스트 콘텐츠 구역 */}
      <div className="program__content">
        <p className="program__info-tag">@2026 PROGRAM info</p>
        
        <div className="program__list">
          
          {/* 프로그램 1: 스터디 */}
          <div className="program__item">
            <img alt="스터디" className="program__item-img" src={imgMain3_1} />
            <div className="program__item-info">
              <p className="program__item-title">함께 공부하는 <span className="program__highlight">스터디</span></p>
              <p className="program__item-desc">
                공부하고 싶은 트랙을 함께 공부하며{"\n"}
                지식을 습득할 수 있는 학습의 장이 마련됩니다.
              </p>
              <div className="program__meta">
                <div className="program__meta-row">
                  <img alt="장소" className="program__meta-icon" src={iconPlace} />
                  <p>성결대학교 성결관</p>
                </div>
                <div className="program__meta-row">
                  <img alt="시간" className="program__meta-icon" src={iconDate} />
                  <p>스터디 별로 상이 <span className="program__meta-sub">(스쿠스쿠 사이버캠퍼스 내 일정 참고)</span></p>
                </div>
              </div>
            </div>
          </div>

          {/* 프로그램 2: 정기세션 (reverse - 이미지 우측 배치) */}
          <div className="program__item program__item--reverse">
            <img alt="정기세션" className="program__item-img" src={imgMain3_2} />
            <div className="program__item-info">
              <p className="program__item-title">세분화된 교육, <span className="program__highlight">정기세션</span></p>
              <p className="program__item-desc">
                아기사자들에게 트랙별로 교육을 제공합니다.{"\n"}
                매주 정기세션에서 아기사자들과 운영진이 함께 성장합니다.
              </p>
              <div className="program__meta">
                <div className="program__meta-row">
                  <img alt="장소" className="program__meta-icon" src={iconPlace} />
                  <p>성결대학교 성결관</p>
                </div>
                <div className="program__meta-row">
                  <img alt="시간" className="program__meta-icon" src={iconDate} />
                  <p>매주 목요일 18시-21시</p>
                </div>
              </div>
            </div>
          </div>

          {/* 프로그램 3: 아이디어톤 */}
          <div className="program__item">
            <img alt="아이디어톤" className="program__item-img" src={imgMain3_3} />
            <div className="program__item-info">
              <p className="program__item-title">서비스의 초석 <span className="program__highlight">아이디어톤</span></p>
              <p className="program__item-desc">
                서비스 아이디어를 다듬고 실현 가능성을 테스트하는 시간입니다.{"\n"}
                열정적인 토론과 발표로 아이디어의 깊이를 더합니다.
              </p>
              <div className="program__meta">
                <div className="program__meta-row">
                  <img alt="장소" className="program__meta-icon" src={iconPlace} />
                  <p>성결대학교 성결관</p>
                </div>
                <div className="program__meta-row">
                  <img alt="시간" className="program__meta-icon" src={iconDate} />
                  <p>스터디 별로 상이 <span className="program__meta-sub">(스쿠스쿠 사이버캠퍼스 내 일정 참고)</span></p>
                </div>
              </div>
            </div>
          </div>

          {/* 프로그램 4: 해커톤 (reverse - 이미지 우측 배치) */}
          <div className="program__item program__item--reverse">
            <img alt="해커톤" className="program__item-img" src={imgMain3_4} />
            <div className="program__item-info">
              <p className="program__item-title">상상을 현실로 만드는 <span className="program__highlight">해커톤</span></p>
              <p className="program__item-desc">
                주어진 시간 내에 팀을 이뤄 서비스를 기획/개발합니다.{"\n"}
                실전 감각을 익히고 팀워크를 높이는 경험을 제공합니다.
              </p>
              <div className="program__meta">
                <div className="program__meta-row">
                  <img alt="장소" className="program__meta-icon" src={iconPlace} />
                  <p>성결대학교 성결관</p>
                </div>
                <div className="program__meta-row">
                  <img alt="시간" className="program__meta-icon" src={iconDate} />
                  <p>스터디 별로 상이 <span className="program__meta-sub">(스쿠스쿠 사이버캠퍼스 내 일정 참고)</span></p>
                </div>
              </div>
            </div>
          </div>

          {/* 프로그램 5: MT */}
          <div className="program__item">
            <img alt="MT" className="program__item-img" src={imgMain3_5} />
            <div className="program__item-info">
              <p className="program__item-title">하계 <span className="program__highlight">MT</span></p>
              <p className="program__item-desc">
                팀워크를 다지는 특별한 시간!{"\n"}
                친목과 소통을 통해 끈끈한 유대감을 형성합니다.
              </p>
              <div className="program__meta">
                <div className="program__meta-row">
                  <img alt="장소" className="program__meta-icon" src={iconPlace} />
                  <p>성결대학교 외부 장소</p>
                </div>
                <div className="program__meta-row">
                  <img alt="시간" className="program__meta-icon" src={iconDate} />
                  <p>방학 중 진행</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Program;