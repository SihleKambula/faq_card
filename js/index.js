const questionAndAnswer = document.querySelectorAll(".question-and-answer");

questionAndAnswer.forEach((container) => {
  const [questionContainer, answerContainer] = container.children;
  const [question, btn] = questionContainer.children;

  questionContainer.addEventListener("click", () => {
    answerContainer.classList.toggle("show");
    question.classList.toggle("bold");
    btn.classList.toggle("rotate");
  });
});
