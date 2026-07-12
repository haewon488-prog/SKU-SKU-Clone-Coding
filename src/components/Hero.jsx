import "./Hero.css";
import heroBg from "../assets/images/Main1.jpeg";
import scrollIcon from "../assets/images/Mouse.png";

function Hero() {
  return (
    <section
      className="hero"
      style={{ backgroundImage: `url(${heroBg})` }}
    >
      <div className="hero__overlay">
        <div className="hero__text">
          <h1 className="hero__title">
            상상을 현실로 만드는
            <br />
            내 손 안에 <span className="hero__highlight">스쿠스쿠</span>
          </h1>
          <p className="hero__desc">
            <strong>성결대학교 멋쟁이사자처럼</strong> 
            은 <br />자신이 원하는 IT 서비스를 구현하고 싶은 성결대학교 학생들이 모인 동아리입니다.
          </p>
        </div>

        <div className="hero__scroll">
          <span>Scroll down</span>
          <img src={scrollIcon} alt="scroll down" />
        </div>
      </div>
    </section>
  );
}

export default Hero;