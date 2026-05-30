export function AnimatedBar({ level, inView, color }) {
  return (
    <div className="animated-bar-bg">
      <div
        className="animated-bar-fill"
        style={{
          width: inView ? `${level}%` : "0%",
          background: color ? `linear-gradient(90deg, ${color}, ${color}cc)` : undefined
        }}
      />
    </div>
  );
}

