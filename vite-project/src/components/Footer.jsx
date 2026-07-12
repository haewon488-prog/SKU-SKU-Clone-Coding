import { GENERATIONS } from "../data/teamData.jsx";
import { InstagramIcon, TalkIcon, MailIcon } from "./Icons.jsx";

export default function Footer() {
  return (
    <footer className="lk-footer">
      <div className="lk-footer-top">
        <div className="lk-footer-col">
          <h4>PROJECT</h4>
          {GENERATIONS.map((g) => (
            <a href={`/project?tab=${g}`} key={"p" + g}>
              {g}
            </a>
          ))}
        </div>
        <div className="lk-footer-col">
          <h4>TEAM</h4>
          {GENERATIONS.map((g) => (
            <a href={`/team?tab=${g}`} key={"t" + g}>
              {g}
            </a>
          ))}
        </div>
        <div className="lk-footer-col">
          <h4>COMMUNITY</h4>
          <a href="/community/recruit">모집공고</a>
        </div>
      </div>

      <div className="lk-footer-divider" />

      <div className="lk-footer-bottom">
        <div className="lk-footer-info">
          <h4>INFO</h4>
          <p>멋쟁이사자처럼 성결대학교 | 대표자 조승민</p>
          <p>
            실습실: 경기도 안양시 만안구 성결대학로 53(안양동) 성결관,
            성결대학교
          </p>
          <p>
            동아리방: 경기도 안양시 만안구 성결대학로 53(안양동) 중생관 B11호
          </p>
        </div>

        <div className="lk-footer-contact">
          <h4>CONTACT</h4>
          <div className="lk-social">
            <a href="#" className="lk-social-icon" aria-label="Instagram">
              <InstagramIcon />
            </a>
            <a href="#" className="lk-social-icon" aria-label="KakaoTalk">
              <TalkIcon />
            </a>
            <a href="#" className="lk-social-icon" aria-label="Email">
              <MailIcon />
            </a>
          </div>
        </div>

        <div className="lk-footer-meta">
          <a href="#top" className="lk-top-link">
            TOP ▲
          </a>
          <p className="lk-edition">SKU LIKELION 14th Edition</p>
          <p className="lk-copyright">
            Copyright © 2026 SKU LIKELION. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
