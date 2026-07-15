export default function Avatar({ name, photo }) {
  if (photo) {
    return <img className="avatar" src={photo} alt={name} loading="lazy" />;
  }
  return <div className="avatar avatar-fallback">{name?.[0] ?? "?"}</div>;
}
