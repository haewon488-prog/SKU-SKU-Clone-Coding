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

      <div className="lk-header-dropdown">
        <div className="lk-dropdown-inner">
          <div className="lk-dropdown-col">
            <h4>PROJECT</h4>
            {GENERATIONS.map((g) => (
              <Link to={`/project?tab=${g}`} key={"dp" + g}>
                {g}
              </Link>
            ))}
          </div>

          <div className="lk-dropdown-col">
            <h4>TEAM</h4>
            {GENERATIONS.map((g) => (
              <Link
                to={`/team?tab=${g}`}
                key={"dt" + g}
                className={g === "14기" ? "current" : ""}
              >
                {g}
              </Link>
            ))}
          </div>

          <div className="lk-dropdown-col">
            <h4>COMMUNITY</h4>
            <Link to="/community/recruit">모집공고</Link>
          </div>
        </div>
      </div>
    </header>
  );
}
