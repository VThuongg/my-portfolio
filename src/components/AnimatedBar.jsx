export function AnimatedBar({ level, inView }) {
  return (
    <div className="animated-bar-bg">
      <div
        className="animated-bar-fill"
        style={{ width: inView ? `${level}%` : "0%" }}
      />
    </div>
  );
}
