import "./endPage.css"
import { useEffect,useState } from "react";

function Score() {

    const [percent, setPercent] = useState<number | null>(null);

    useEffect(() => {
      const storedValue = sessionStorage.getItem("correctCount");
      const correctCount = storedValue ? parseInt(storedValue) : 0;
      const calculatedPercent = Math.floor(correctCount * 14.28571428571429);
      setPercent(calculatedPercent);
    }, []);
  
    if (percent !== null && percent < 70) {
      return (
        <div id="parent">
          <header id="header">
            <div id="endpage-heading-con">
              <header id="endpage-heading">Basic HTML Quiz</header>
            </div>
          </header>
  
          <div id="middleSection">
            <div id="scoreBoard">
              <p id="date-con"></p>
              <h3 id="dearName"></h3>
               <p id="trophy">🏆</p>
              <p id="congratulation">Congratulations</p>
              <p id="whyPassOrFail"></p>
              <p id="scoreIs">
                Your score is <span id="score">{percent}</span>
              </p>
            </div>
            <div id="scoreFooter">
              Click (<span id="x">×</span>) on browser to close the window
            </div>
          </div>
  
          <footer id="footer"></footer>
        </div>
      );
    } else{
        return (
            
        )
    }
  

   
}


export default Score;