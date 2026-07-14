import "./Direction.css";
import bgImg from "../assets/images/Main2.jpeg";
import iconSelf from "../assets/images/self.png";
import iconTeam from "../assets/images/cooperation.png";
import iconPossibility from "../assets/images/Possibility.png";

function Direction() {
  return (
    <section
      className="direction"
      style={{ backgroundImage: `url(${bgImg})` }}
    >
      <div className="direction__dim"></div>

      <div className="direction__overlay">
        <div className="direction__heading">
          <p className="direction__subtitle">성결대학교 멋쟁이사자처럼의</p>
          <h2 className="direction__title">3가지 방향성</h2>
        </div>

        <div className="direction__cards">
          <div className="direction__card direction__card--1">
            <div className="direction__card-text">
              <p className="direction__card-title">자기주도성</p>
              <div className="direction__card-desc">
                나만의 커리어를 직접 설계하고,<br />만들어갈 수 있습니다
              </div>
            </div>
            <img alt="자기주도성" src={iconSelf} className="direction__card-icon" />
          </div>

          <div className="direction__card direction__card--2">
            <div className="direction__card-text">
              <p className="direction__card-title">협력성</p>
              <div className="direction__card-desc">
                동료들과 개발 고민을 함께<br />협력하고 공유하며,<br />성장할 수 있습니다.
              </div>
            </div>
            <img alt="협력성" src={iconTeam} className="direction__card-icon" />
          </div>

          <div className="direction__card direction__card--3">
            <div className="direction__card-text">
              <p className="direction__card-title">가능성</p>
              <div className="direction__card-desc">
                나만의 커리어를 직접 설계하고,<br />만들어갈 수 있습니다
              </div>
            </div>
            <img alt="가능성" src={iconPossibility} className="direction__card-icon" />
          </div>
        </div>

        <p className="direction__quote">
          <span className="direction__quote-highlight">"내 아이디어를 내 손으로 실현한다."</span> 라는 모토를 가지고,
          <br />
          실제 서비스를 구현하며 개발자의 꿈을 이루는데
          <br />
          한걸음 더 다가가고자 합니다.
        </p>
      </div>
    </section>
  );
}

export default Direction;