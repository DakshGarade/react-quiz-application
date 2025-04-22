import "./MainPage.css";
import { useEffect, useState } from "react";

export default function MainPage() {
  var questionsInfo = [
    {
      questionNo: 1,
      question: "Q1. What does HTML stand for ?",
      option1: "Hyper Text Markup Language",
      option2: "HyperLinks and Text Markup Language",
      option3: "Home Tool Markup Language",
      option4: "HyperLink Markup Language",
      ans: "Hyper Text Markup Language",
    },
    {
      questionNo: 2,
      question:
        "Q2. The Bootstrap grid system is based on how many columns ?",
      option1: 6,
      option2: 9,
      option3: 12,
      option4: 3,
      ans: 12,
    },
    {
      questionNo: 3,
      question: "Q3. What does CSS stand for ?",
      option1: "Colorful Style Sheets",
      option2: "Cascading Style Sheets",
      option3: "Creative Style Sheets",
      option4: "Computer Style Sheets",
      ans: "Cascading Style Sheets",
    },
    {
      questionNo: 4,
      question: "Q4. Which property is used to change the background color ?",
      option1: "bgcolor",
      option2: "color",
      option3: "background-color",
      option4: "text-align",
      ans: "background-color",
    },
    {
      questionNo: 5,
      question: "Q5. Javasctipt is the same as Java ?",
      option1: "True",
      option2: "False",
      option3: "Both Of Above",
      option4: "None Of These",
      ans: "False",
    },
    {
      questionNo: 6,
      question:
        "Q6. Which event occurs when the user clicks on an HTML element ?",
      option1: "onchange",
      option2: "onmouseclick",
      option3: "onmouseover",
      option4: "onclick",
      ans: "onclick",
    },
    {
      questionNo: 7,
      question: "Q7. Is JavaScript case-sensitive ?",
      option1: "True",
      option2: "False",
      option3: "Both Of Above",
      option4: "None Of These",
      ans: "True",
    },
  ];

  const [num, setNum] = useState(0);
  const [correctCount, setCorrectCount] = useState(0);
  const [isDisabled, setIsDisabled] = useState(true);
  const [selectedOption, setSelectedOption] = useState("");
  const [isShowingSubmitButton,setIsShowingSubmitButton] = useState("inline");
  const [isShowingContinueButton,setIsShowingContinueButton] = useState("none");
  const [answerStatus, setAnswerStatus] = useState<{
    correctOption: string;
    selectedOption: string;
  } | null>(null);// null or { correctOption, selectedOption }
  // Initial style for disabled button
    const [btnStyle, setBtnStyle] = useState({
      fontSize: "20px",
      fontFamily: "Arial",
      marginTop: "3%",
      padding: "0.5%",
      paddingLeft: "1%",
      paddingRight: "1%",
      color: "black",
      backgroundColor: "#d9d9d9",
      border: "2px solid black",
      borderRadius: "5px",
      marginLeft: "8%",
      marginBottom: "47px",
    });
    const [classIs,setClassIs] = useState( answerStatus
        ? answerStatus.correctOption ==="option1"
          ? "correctAnswer"
          : answerStatus.selectedOption === "opt1"
          ? "wrongAnswer"
          : ""
        : selectedOption === "opt1"
        ? "selectAnswer"
        :""
     );

  const [seconds, setSeconds] = useState(0);

  const [userName, setUserName] = useState("");

  useEffect(() => {
    let nameFromStorage = sessionStorage.getItem("name");

    if (nameFromStorage) {
      setUserName(nameFromStorage.toUpperCase());
    } else {
      setUserName("Guest");
    }
  }, []);

  function submitYourAnswer() {
    setIsShowingSubmitButton("none");
    setIsShowingContinueButton("inline");

    
    const currentQuestion = questionsInfo[num];
    const actualOptionKey = selectedOption.replace("opt", "option"); // "opt1" → "option1"
    const selectedValue = currentQuestion[actualOptionKey as keyof typeof currentQuestion];
      // opt1 -> currentQuestion.option1, etc.
  
    const isCorrect = selectedValue === currentQuestion.ans;
    if (isCorrect) {
      setCorrectCount((prev) => prev + 1);
        }
    console.log(selectedValue);
    const correctKey = Object.keys(currentQuestion).find(
        (key) =>
          key.startsWith("option") &&
          currentQuestion[key as keyof typeof currentQuestion] === currentQuestion.ans
      );
      
      setAnswerStatus({
        correctOption: correctKey ?? "", // fallback to empty string if not found
        selectedOption,
      });
      console.log(selectedValue);
  }

  function continueToNextQuestion() {  
    if (num !< questionsInfo.length - 1) {
    setIsShowingSubmitButton("inline");
    setIsShowingContinueButton("none");
    setIsDisabled(true)
    setNum((prev) => prev + 1);
    setBtnStyle({
         fontSize: "20px",
        fontFamily: "Arial",
        marginTop: "3%",
        padding: "0.5%",
        paddingLeft: "1%",
        paddingRight: "1%",
        color: "black",
        backgroundColor: "#d9d9d9",
        border: "2px solid black",
        borderRadius: "5px",
        marginLeft: "8%",
        marginBottom: "47px",
    })
    
}
//   else {
//   }
  }

  function midInfo() {
   
  
    let question = questionsInfo[num].question;
    let opt1 = questionsInfo[num].option1;
    let opt2 = questionsInfo[num].option2;
    let opt3 = questionsInfo[num].option3;
    let opt4 = questionsInfo[num].option4;

    useEffect(() => {
      const timer = setInterval(() => {
        setSeconds((prev) => prev + 1);
      }, 1000);

      return () => clearInterval(timer);
    }, []);

    // Format seconds into hh:mm:ss
    const formatTime = () => {
      const hrs = String(Math.floor(seconds / 3600)).padStart(2, "0");
      const mins = String(Math.floor((seconds % 3600) / 60)).padStart(2, "0");
      const secs = String(seconds % 60).padStart(2, "0");
      return `${hrs} : ${mins} : ${secs}`;
    };

   


    // Simulating the enableBtn() function from your JS
    const enableBtn = (optionValue: string) => {
      setIsDisabled(false);
      setBtnStyle({
        backgroundColor: "#0ca2fd",
        color: "white",
        border: "#0ca2fd",
        borderRadius: "0px",
        fontSize: "20px",
        fontFamily: "Arial",
        marginTop: "3%",
        padding: "0.5%",
        paddingLeft: "1%",
        paddingRight: "1%",
        marginLeft: "8%",
        marginBottom: "47px",
      });
      setSelectedOption(optionValue);
      setIsDisabled(false);
      setBtnStyle({
        backgroundColor: "#0ca2fd",
        color: "white",
        border: "#0ca2fd",
        borderRadius: "0px",
        fontSize: "20px",
        fontFamily: "Arial",
        marginTop: "3%",
        padding: "0.5%",
        paddingLeft: "1%",
        paddingRight: "1%",
        marginLeft: "8%",
        marginBottom: "47px",
      });
    };

  
  

    return (
      <>
        <div>
          <div id="mid-child1">
            <div id="questions-counter-con">
              <p id="questions-counter" className="mid-btn">
                Question <span id="ques-no">{num + 1}</span>/7
              </p>
            </div>
            <div id="correct-counter-con">
              {" "}
              <p id="correct-counter" className="mid-btn">
                <span id="no-correct-count">{correctCount}</span>/7 Correct
              </p>
            </div>
            <div id="timer-con">
              <p id="timer" className="mid-btn">
                {formatTime()}
              </p>
            </div>
          </div>
          <br />
          <br />
          <h2 id="question">{question}</h2>
          <ul id="optList">
            <li className="opts">
              <input
                type="radio"
                name="option"
                value=""
                id="opt1"
                className="optInp"
                onClick={() => {
                  enableBtn("opt1");
                }}
              />
              <label
                htmlFor="opt1"
                id="l1"
className={classIs}
              >
                {opt1}
              </label>
            </li>
            <li className="opts">
              <input
                type="radio"
                name="option"
                id="opt2"
                value=""
                className="optInp"
                onClick={() => {
                  enableBtn("opt2");
                }}
              />
              <label
                htmlFor="opt2"
                id="l2"
className={classIs}          >
                {opt2}
              </label>
            </li>
            <li className="opts">
              <input
                type="radio"
                name="option"
                value=""
                id="opt3"
                className="optInp"
                onClick={() => {
                  enableBtn("opt3");
                }}
              />
              <label
                htmlFor="opt3"
                id="l3"
className={classIs}          >
                {opt3}
              </label>
            </li>
            <li className="opts">
              <input
                type="radio"
                name="option"
                value="Hyperlink Markup Language"
                id="opt4"
                className="optInp"
                onClick={() => {
                  enableBtn("opt4");
                }}
              />
              <label
                htmlFor="opt4"
                id="l4"
className={classIs}          >
                {opt4}
              </label>
            </li>
          
          </ul>
          <button id="submitBtn" style={{ ...btnStyle, display:isShowingSubmitButton }} disabled={isDisabled} onClick={submitYourAnswer} >
            SUBMIT
          </button>
          <button id="continueBtn" style={{ display: isShowingContinueButton }}  onClick={continueToNextQuestion}>
          {num >= questionsInfo.length - 1 ? "FINISH":"CONTINUE"}
          </button>

          
        </div>
      </>
    );
  }
  return (
    <>
      <div id="box">
        <header id="header">
          <div id="heading-con">
            {" "}
            <h1 id="heading">Basic HTML Quiz</h1>
          </div>
          <div id="child">
            {" "}
            <div id="name">
              {" "}
              <div id="name-con">{userName}</div>
            </div>
            <div id="exitBtn-con">
              <header id="exitBtn">×</header>
            </div>
          </div>
        </header>
        <div id="midSection">{midInfo()}</div>
        <footer id="footer"></footer>
      </div>
    </>
  );
  }