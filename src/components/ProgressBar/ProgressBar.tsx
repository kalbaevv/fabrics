import React from "react";
import s from "./ProgressBar.module.scss";

interface ProgressBarProps {
  totalQuestions: number;
  completedQuestions: number;
}

const ProgressBar: React.FC<ProgressBarProps> = ({
  totalQuestions,
  completedQuestions,
}) => {
  const progress = (completedQuestions / totalQuestions) * 100;

  const activeSegments = Math.ceil((progress / 100) * 7);

  return (
    <div className={s.barContainer}>
      <span
        className={s.questions}
      >{`${completedQuestions} questions out of ${totalQuestions} passed`}</span>
      <div className={s.bar}>
        {Array.from({ length: 7 }).map((_, index) => (
          <div
            key={index}
            className={`${s.segment} ${
              index < activeSegments ? s.active : s.inactive
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default ProgressBar;
