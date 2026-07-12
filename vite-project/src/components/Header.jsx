import { BuildingIcon, GoogleIcon } from "./Icons.jsx";

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
          <button className="lk-btn lk-btn-blue">
            <BuildingIcon /> CYBERCAMPUS
          </button>
          <button className="lk-btn lk-btn-white">
            <GoogleIcon /> <span>구글계정으로 계속하기</span>
          </button>
        </div>
      </div>
    </header>
  );
}
