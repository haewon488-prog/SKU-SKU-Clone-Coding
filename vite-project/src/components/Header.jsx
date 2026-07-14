import {
  BuildingIcon,
  GoogleIcon,
  InstagramIconLine,
  ChannelIcon,
} from "./Icons.jsx";
import { GENERATIONS } from "../data/teamData.jsx";

export default function Header() {
  return (
    <header className="lk-header">
      <div className="lk-header-inner">
        <div className="lk-logo">
          <img
            src="/logo/likelionLogo.png"
            alt="LIKELION SKU"
            className="logo-img"
          />
          <span>LIKELION SKU</span>
        </div>

        <nav className="lk-nav">
          <a href="/project" className="lk-nav-link">
            PROJECT
          </a>
          <a href="/team" className="lk-nav-link active">
            TEAM
          </a>
          <a href="/community" className="lk-nav-link">
            COMMUNITY
          </a>
        </nav>

        <div className="lk-actions">
          <a href="#" className="lk-icon-link" aria-label="Instagram">
            <InstagramIconLine />
          </a>
          <a href="#" className="lk-icon-link" aria-label="Channel Talk">
            <ChannelIcon />
          </a>
          <button className="lk-btn lk-btn-blue">
            <BuildingIcon /> CYBERCAMPUS
          </button>
          <button className="lk-btn lk-btn-white">
            <GoogleIcon /> <span>구글계정으로 계속하기</span>
          </button>
        </div>
      </div>

      <div className="lk-header-dropdown">
        <div className="lk-dropdown-inner">
          <div className="lk-dropdown-col">
            <h4>PROJECT</h4>
            {GENERATIONS.map((g) => (
              <a href={`/project?tab=${g}`} key={"dp" + g}>
                {g}
              </a>
            ))}
          </div>

          <div className="lk-dropdown-col">
            <h4>TEAM</h4>
            {GENERATIONS.map((g) => (
              <a
                href={`/team?tab=${g}`}
                key={"dt" + g}
                className={g === "14기" ? "current" : ""}
              >
                {g}
              </a>
            ))}
          </div>

          <div className="lk-dropdown-col">
            <h4>COMMUNITY</h4>
            <a href="/community/recruit">모집공고</a>
          </div>
        </div>
      </div>
    </header>
  );
}
