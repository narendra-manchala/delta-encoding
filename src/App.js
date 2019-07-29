import React from 'react';
import './App.css';
import fossilDelta from "fossil-delta";

function App() {

  const [text, setText] = React.useState("");

  const onTextChange = (e) => {
    const newText = e.target.value
    // console.log(text, newText)
    const delta = fossilDelta.create(text, newText)
    const newData = fossilDelta.apply(text, delta)
    console.log(delta, newData.join(""))
    const size = fossilDelta.outputSize(delta)
    console.log("***********SIZE************")
    console.log(size);
    console.log("***********SIZE************")
    setText(newText)
  }
  return (
    <div className="App" >
      <textarea onChange={onTextChange} style={{width: "500px", height: "100px"}}>

      </textarea>
      
    </div>
  );
}

export default App;
