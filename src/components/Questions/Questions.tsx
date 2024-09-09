"use client";

import React, { useState, useEffect } from "react";
import s from "./Questions.module.scss";
import Question from "@/components/Questions/Question/Question";
import questionsData from "../../../questions.json";

const Questions = () => {
  const [questions, setQuestions] = useState(questionsData);

  useEffect(() => {
    const savedCompleted = JSON.parse(
      localStorage.getItem("completedQuestions") || "[]",
    );
    if (savedCompleted.length > 0) {
      const updatedQuestions = questionsData.map((question) =>
        savedCompleted.includes(question.id)
          ? { ...question, completed: true }
          : question,
      );
      setQuestions(updatedQuestions);
    }
  }, []);

  const handleQuestionClick = (id: number) => {
    const updatedQuestions = questions.map((question: any) =>
      question.id === id
        ? { ...question, completed: !question.completed }
        : question,
    );
    setQuestions(updatedQuestions);

    const completed = updatedQuestions
      .filter((q) => q.completed)
      .map((q) => q.id);
    localStorage.setItem("completedQuestions", JSON.stringify(completed));
  };

  return (
    <div className={s.container}>
      <div className={s.wrapper}>
        <span className={s.title}>Tests</span>
      </div>
      <div className={s.questionsList}>
        {questions.map((question: any) => (
          <Question
            key={question.id}
            question={question}
            onClick={handleQuestionClick}
          />
        ))}
      </div>
    </div>
  );
};

export default Questions;
