import "./endPage.css"
import { useEffect,useState } from "react";

function Score() {
  
  useEffect(() => {
    Object.assign(document.body.style, {
      backgroundColor: "#d9d9d9",
      border: "1px solid #ccc",
      margin: "3%",
      marginTop: "1%",
    }); // Example: dark bg

    return () => {
      // Cleanup to reset when leaving this page
      document.body.style.backgroundColor = '';
      document.body.style.color = '';
    };
  }, []);


    const [percent, setPercent] = useState<number | null>(null);

    useEffect(() => {
      const storedValue = sessionStorage.getItem("correctCount");
      const correctCount = storedValue ? parseInt(storedValue) : 0;
      const calculatedPercent = Math.floor(correctCount * 14.28571428571429);
      setPercent(calculatedPercent);
    }, []);

    let currentDate = new Date().toLocaleDateString(
        "en-GB"
    );
    
    if (percent !== null && percent > 70) {
      return (
        <div id="parent">
          <header id="endpage-header">
            <div id="endpage-heading-con">
              <header id="endpage-heading">Basic HTML Quiz</header>
            </div>
          </header>
  
          <div id="middleSection">
            <div id="scoreBoard">
              <p id="date-con">Date:{currentDate}</p>
              <h3 id="dearName">{ sessionStorage.getItem("name") === null ? "Dear Guest": `Dear ${ sessionStorage.getItem("name")}`} </h3>
               <p id="trophy">🏆</p>
              <p id="congratulation">Congratulations</p>
              <p id="whyPassOrFail">You have passed the HTML quiz</p>
              <p id="scoreIs">
                Your score is <span id="score">{percent}%</span>
              </p>
            </div>
            <div id="scoreFooter">
              Click (<span id="x">×</span>) on browser to close the window
            </div>
          </div>
  
          <footer id="endpage-footer"></footer>
        </div>
      );
    } else{
        return (
            <div id="box">
       

            <header id="endpage-header">
           <div id="heading-container"> <header id="endpage-heading">Basic HTML Quiz</header></div>
        
            </header>
    
            <div id="midSection">
              <div id="scoreBoard">
              <p id="date-con">Date:{currentDate}</p>
                <h3 id="dearName"></h3>
                <p id="sorry">Sorry!!</p>
                <p id="sadFace">☹️</p>
                                <p id="whyPassOrFail"></p>
                <p id="whyFailed">This is less than the required passing percentage of 70</p>
                <p id="scoreIs">Your score is <span id="score">{percent}%</span></p>
              </div>
              <div id="scoreFooter">Click (<span id="x">×</span>) on browser to close the window</div>
            </div>
    
            <footer id="endpage-footer">
    
            </footer>
    
        </div> 
        )
    }
  

   
}


export default Score;