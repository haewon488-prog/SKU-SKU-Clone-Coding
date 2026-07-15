import Avatar from "./Avatar.jsx";

export default function TeamSection({ section }) {
  return (
    <div
      className={`lk-section ${section.layout === "full" ? "lk-section-full" : ""}`}
    >
      <h3 className="lk-section-title">{section.title}</h3>
      <div className="lk-card">
        {section.members.map((m, i) => (
          <div className="lk-member" key={i}>
            <Avatar name={m.name} photo={m.photo} />
            <div className="lk-member-info">
              <p className="lk-member-name">
                {m.name} <span className="lk-member-role">{m.role}</span>
              </p>
              <p className="lk-member-dept">
                {m.dept} {m.year}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
