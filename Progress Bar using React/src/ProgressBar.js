import { useState, useEffect } from "react";

export default function ProgressBar({ progress }) {
  const [animationProgress, setAnimationProgress] = useState(0);

  useEffect(() => {
    setTimeout(() => setAnimationProgress(progress), 100);
  }, [progress]);

  return (
    <div className="progress-bar">
      <div
        className="progress"
        style={{ transform: `translateX(${animationProgress - 100}%)` }}
      >
        {progress}%
      </div>
    </div>
  );
}
