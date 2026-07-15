import { Link, useLocation } from "react-router-dom";
import {
  BuildingIcon,
  GoogleIcon,
  InstagramIconLine,
  ChannelIcon,
} from "./Icons.jsx";
import { GENERATIONS } from "../data/teamData.jsx";

export default function Header() {
  const { pathname } = useLocation();

  return (
    <header className="lk-header">
      <div className="lk-header-inner">
        <Link to="/" className="lk-logo">
          <img
            src="/logo/likelionLogo.png"
            alt="LIKELION SKU"
            className="logo-img"
          />
          <span>LIKELION SKU</span>
        </Link>

        <nav className="lk-nav">
          <Link
            to="/project"
            className={`lk-nav-link ${pathname.startsWith("/project") ? "active" : ""}`}
          >
            PROJECT
          </Link>
          <Link
            to="/team"
            className={`lk-nav-link ${pathname.startsWith("/team") ? "active" : ""}`}
          >
            TEAM
          </Link>
          <Link
            to="/community"
            className={`lk-nav-link ${pathname.startsWith("/community") ? "active" : ""}`}
          >
            COMMUNITY
          </Link>
        </nav>

        <div className="lk-actions">
          <a href="#" className="lk-icon-circle" aria-label="Instagram">
            <InstagramIconLine />
          </a>
          <a href="#" className="lk-icon-circle" aria-label="Channel Talk">
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

      {/* 드롭다운: 위 header-inner와 완전히 같은 구조를 재사용해서
          로고/버튼 자리는 투명하게 비워두고, nav 자리에만 기수 목록을 채운다.
          → PROJECT / TEAM / COMMUNITY 메뉴 바로 아래에 자동으로 정렬됨 */}
      <div className="lk-header-dropdown">
        <div className="lk-header-inner">
          <div className="lk-logo" style={{ visibility: "hidden" }}>
            <img src="/logo/likelionLogo.png" alt="" className="logo-img" />
            <span>LIKELION SKU</span>
          </div>

          <nav className="lk-nav">
            <div className="lk-dropdown-col">
              {GENERATIONS.map((g) => (
                <Link to={`/project?tab=${g}`} key={"dp" + g}>
                  {g}
                </Link>
              ))}
            </div>

            <div className="lk-dropdown-col">
              {GENERATIONS.map((g) => (
                <Link to={`/team?tab=${g}`} key={"dt" + g}>
                  {g}
                </Link>
              ))}
            </div>

            <div className="lk-dropdown-col">
              <Link to="/community/recruit">모집공고</Link>
            </div>
          </nav>

          <div className="lk-actions" style={{ visibility: "hidden" }}>
            <a href="#" className="lk-icon-circle" aria-hidden="true">
              <InstagramIconLine />
            </a>
            <a href="#" className="lk-icon-circle" aria-hidden="true">
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
      </div>
    </header>
  );
}
