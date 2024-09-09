import React from "react";
import s from "./Question.module.scss";
import { QuestionType } from "@/types/types";

interface QuestionProps {
  question: QuestionType;
  onClick: (id: number) => void;
}

const Question = ({ question, onClick }: QuestionProps) => {
  return (
    <div
      className={`${s.question} ${question.completed ? s.completed : ""}`}
      onClick={() => onClick(question.id)}
    >
      <div>
        {question.completed ? (
          <img alt="check-icon" src={"/icons/check.svg"} className={s.icon} />
        ) : (
          ""
        )}
      </div>
      <p>{question.id}</p>
    </div>
  );
};

export default Question;
