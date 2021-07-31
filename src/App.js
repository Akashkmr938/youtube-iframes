import React, { useState } from "react";

const expression =
  /^(?:https?:\/\/)?(?:www\.)?(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))((\w|-){11})?$/;

const style = {
  input: {
    width: "80%",
    padding: "12px 20px",
    margin: "8px 10px",
    boxSizing: "border-box",
    border: "none",
    backgroundColor: "azure",
    color: "black",
    fontSize: "24px",
    borderRadius: "5px",
  },
  button: {
    boxShadow: "0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19)",
    backgroundColor: "#4CAF50",
    border: "none",
    color: "#FFFFFF",
    fontSize: "22px",
    margin: "10px 10px",
    padding: "10px",
    borderRadius: "5px",
    cursor: "pointer",
  },
};

const App = () => {
  const [inputState, setInputState] = useState("");
  const [endpoint, setEndpoint] = useState("");
  const [showUI, setShowUI] = useState(false);
  const handleSubmit = () => {
    if (expression.test(inputState)) {
      if (inputState.includes("v="))
        setEndpoint(
          inputState.split("v=")[1].substring(0, inputState.length - 1)
        );
      else if (inputState.includes("https://youtu.be/"))
        setEndpoint(
          inputState
            .split("https://youtu.be/JUMLOXFd2TU")[1]
            .substring(0, inputState.length - 1)
        );
      setShowUI(true);
    } else {
      console.log(inputState);
    }
  };

  return (
    <div style={{ backgroundColor: "#202020", minHeight: "100vh" }}>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <input
          style={style.input}
          onChange={(event) => setInputState(event.target.value)}
          value={inputState}
        />
        <button type="button" style={style.button} onClick={handleSubmit}>
          Submit
        </button>
      </div>
      <div
        style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}
      >
        {showUI &&
          [...Array(50)].map((e, index) => (
            <div key={index} style={{ margin: "15px" }}>
              <iframe
                loading="lazy"
                width="300"
                height="200"
                src={`https://www.youtube.com/embed/${endpoint}`}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          ))}
      </div>
    </div>
  );
};

export default App;
