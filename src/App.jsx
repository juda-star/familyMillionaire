import { useEffect, useMemo, useState } from "react";
import "./App.css";
import Timer from "./components/features/Timer/Timer";
import { Trivia } from "./components/Trivia/Trivia";
import Start from "./components/features/Start/Start";

function App() {
  const [username, setUsername] = useState(null);
  const [questionNumber, setQuestionNumber] = useState(1);
  const [stop, setStop] = useState(false);
  const [earned, setEarned] = useState("$ 0");
  const data = [
    {
      id: 1,
      question: "Who was good at the kitchen?",
      answers: [
        {
          text: "Shlomo",
          correct: true,
        },
        {
          text: "Kasia",
          correct: false,
        },
        {
          text: "David",
          correct: false,
        },
        {
          text: "Yoni",
          correct: false,
        },
      ],
    },
    {
      id: 2,
      question: "Who play the best Music?",
      answers: [
        {
          text: "Shlomo",
          correct: false,
        },
        {
          text: "Kasia",
          correct: false,
        },
        {
          text: "David",
          correct: true,
        },
        {
          text: "Yoni",
          correct: false,
        },
      ],
    },
    {
      id: 3,
      question: "Who like To Dance?",
      answers: [
        {
          text: "Shlomo",
          correct: true,
        },
        {
          text: "Kasia",
          correct: false,
        },
        {
          text: "David",
          correct: false,
        },
        {
          text: "Yoni",
          correct: false,
        },
      ],
    },
    {
      id: 4,
      question: "Who good at UX/UI?",
      answers: [
        {
          text: "Shlomo",
          correct: false,
        },
        {
          text: "Kasia",
          correct: false,
        },
        {
          text: "David",
          correct: true,
        },
        {
          text: "Yoni",
          correct: false,
        },
      ],
    },
    {
      id: 5,
      question: "Who sleeps in class?",
      answers: [
        {
          text: "Shlomo",
          correct: false,
        },
        {
          text: "Kasia",
          correct: true,
        },
        {
          text: "David",
          correct: false,
        },
        {
          text: "Yoni",
          correct: false,
        },
      ],
    },
    {
      id: 6,
      question: "how like basketball?",
      answers: [
        {
          text: "Shlomo",
          correct: false,
        },
        {
          text: "Kasia",
          correct: false,
        },
        {
          text: "David",
          correct: false,
        },
        {
          text: "Yoni",
          correct: true,
        },
      ],
    },
    {
      id: 7,
      question: "the best knowledge in anime?",
      answers: [
        {
          text: "Shlomo",
          correct: false,
        },
        {
          text: "Kasia",
          correct: false,
        },
        {
          text: "Yosef",
          correct: true,
        },
        {
          text: "Yoni",
          correct: false,
        },
      ],
    },
    {
      id: 8,
      question: "who's the tallest?",
      answers: [
        {
          text: "Y.Bayena",
          correct: false,
        },
        {
          text: "Juda",
          correct: true,
        },
        {
          text: "Yosef",
          correct: false,
        },
        {
          text: "Yoni",
          correct: false,
        },
      ],
    },
    {
      id: 9,
      question: "the best knowledge in Anime?",
      answers: [
        {
          text: "Shlomo",
          correct: false,
        },
        {
          text: "Kasia",
          correct: false,
        },
        {
          text: "Yosef",
          correct: true,
        },
        {
          text: "Yoni",
          correct: false,
        },
      ],
    },
    {
      id: 10,
      question: "who is the Chillest?",
      answers: [
        {
          text: "Shlomo",
          correct: false,
        },
        {
          text: "Kasia",
          correct: false,
        },
        {
          text: "Yosef",
          correct: false,
        },
        {
          text: "Juda",
          correct: true,
        },
      ],
    },
    {
      id: 11,
      question: "3/3 Strike wining in Hakathon?",
      answers: [
        {
          text: "Shlomo",
          correct: false,
        },
        {
          text: "Kasia",
          correct: false,
        },
        {
          text: "Yosef",
          correct: false,
        },
        {
          text: "Yoni",
          correct: true,
        },
      ],
    },
    {
      id: 12,
      question: "3/3 Strike wining in Hakathon?",
      answers: [
        {
          text: "Shlomo",
          correct: false,
        },        {
          text: "Kasia",
          correct: false,
        },
        {
          text: "Yosef",
          correct: false,
        },
        {
          text: "Yoni",
          correct: true,
        },
      ],
    },
    {
      id: 13,
      question: "Who has air conditioners in the room?",
      answers: [
        {
          text: "Shlomo",
          correct: true,
        },
        {
          text: "Kasia",
          correct: true,
        },
        {
          text: "Juda",
          correct: false,
        },
        {
          text: "Yoni",
          correct: false,
        },
      ],
    },
    {
      id: 14,
      question: "Who has air conditioners in the room?",
      answers: [
        {
          text: "Shlomo",
          correct: true,
        },
        {
          text: "Kasia",
          correct: true,
        },
        {
          text: "Juda",
          correct: false,
        },
        {
          text: "Yoni",
          correct: false,
        },
      ],
    },
    {
      id: 15,
      question: "Who like corona beer?",
      answers: [
        {
          text: "Shlomo",
          correct: false,
        },
        {
          text: "Kasia",
          correct: false,
        },
        {
          text: "Yosef",
          correct: true,
        },
        {
          text: "Yoni",
          correct: false,
        },
      ],
    },
  ];
  const moneyPyramid = useMemo(
    () =>
      [
        { id: 1, amount: "$ 100" },
        { id: 2, amount: "$ 200" },
        { id: 3, amount: "$ 300" },
        { id: 4, amount: "$ 500" },
        { id: 5, amount: "$ 1 000" },
        { id: 6, amount: "$ 2 000" },
        { id: 7, amount: "$ 4 000" },
        { id: 8, amount: "$ 8 000" },
        { id: 9, amount: "$ 16 000" },
        { id: 10, amount: "$ 32 000" },
        { id: 11, amount: "$ 64 000" },
        { id: 12, amount: "$ 125 000" },
        { id: 13, amount: "$ 500 000" },
        { id: 14, amount: "$ 1 000 000" },
      ].reverse(),
    []
  );
  useEffect(() => {
    questionNumber > 1 &&
      setEarned(moneyPyramid.find((m) => m.id === questionNumber - 1).amount);
  }, [questionNumber]);
  return (
    <div className="App">
      {username ? (
        <>
          <div className="main">
            {/* <h2> hii {username} Welcome to Who Wants to Be a Millionaire</h2> */}
            {stop ? (
              <h1 className="endText">
                {username} You earned : {earned}
              </h1>
            ) : (
              <>
                <div className="top">
                  <div className="timer">
                    <Timer setStop={setStop} questionNumber={questionNumber} />
                  </div>
                </div>
                <div className="bottom">
                  <Trivia
                    data={data}
                    setStop={setStop}
                    setQuestionNumber={setQuestionNumber}
                    questionNumber={questionNumber}
                  />
                </div>
              </>
            )}
          </div>
          <div className="pyramid">
            <ul className="moneyList">
              {moneyPyramid.map((m) => (
                <li
                  className={
                    questionNumber === m.id
                      ? "moneyListItem active"
                      : "moneyListItem"
                  }
                >
                  <span className="moneyListItemNumber">{m.id}</span>
                  <span className="moneyListItemAmount">{m.amount}</span>
                </li>
              ))}
            </ul>
          </div>
        </>
      ) : (
        <Start setUsername={setUsername} />
      )}
    </div>
  );
}

export default App;
