import "./endPage.css"

function Score() {
    
    return(
        <div id="parent">
       

        <header id="header">
       <div id="endpage-heading-con"> <header id="endpage-heading">Basic HTML Quiz</header></div>
    
        </header>

        <div id="middleSection">
          <div id="scoreBoard">
            <p id="date-con"></p>
            <h3 id="dearName"></h3>
            <p id="sorry">Sorry!!</p>
            <p id="sadFace">☹️</p>
            <p id="trophy">🏆</p>
            <p id="congratulation">Congratulations</p>
            <p id="whyPassOrFail"></p>
            <p id="whyFailed">This is less than the required passing percentage of 70</p>
            <p id="scoreIs">Your score is <span id="score"></span></p>
          </div>
          <div id="scoreFooter">Click (<span id="x">×</span>) on browser to close the window</div>
        </div>

        <footer id="footer">

        </footer>

    </div>
    )
}

Score();
export default Score;