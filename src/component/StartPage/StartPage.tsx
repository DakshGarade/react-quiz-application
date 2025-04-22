import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./StartPage.css";

export default function StartPage() {
  const [inpName, setInpName] = useState("");
  const navigate = useNavigate(); // Hook for navigation

  function submit() {
    if (inpName === "") {
      alert("Please Enter Your Name!!!");
    } else {
      sessionStorage.setItem("name", inpName);
      navigate("/MainPage"); // Navigate to mainPage route
    }
  }
  return (

    <div id="container">
      <div className="children">
        <input
          type="text"
          placeholder="Enter your full name..."
          id="inpBar"
          onChange={(e) => setInpName(e.target.value)}
        />
      </div>
      <div className="children" id="child2">
        <button id="submitButton" onClick={submit}>
          Start quiz
        </button>
      </div>
    </div>
  );
}
