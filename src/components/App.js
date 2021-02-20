import React, {Component, useEffect, useState} from "react";
import '../styles/App.css';

const App = (props) => {
  const [index,setindex]=useState(0);

  const disable=(id)=>{
    // document.getElementById(id).removeAttribute("disabled");
    document.getElementById(id).setAttribute("disabled",true)
  } 
  const enable =(id)=>{
    document.getElementById(id).removeAttribute("disabled");
    // document.getElementById(id).setAttribute("disabled",false)
  }
  const handleNext=()=>{
    if(index+1<props.slides.length){
      setindex(index+1);
    }
    if(index+2==props.slides.length){
      disable("next");
    }
    enable("prev");
    enable("restart");
  }
  const handleRestart=()=>{
    setindex(0);
    disable("prev");
    disable("restart");
    enable("next");
  }
  const handlePrev=()=>{
    if(index>=1)
    setindex(index-1);
    if(index==1){
      disable("prev");
      disable("restart");
      enable("next");
    }
  }
  useEffect(()=>{
    if(index==0){
      disable("prev");
    disable("restart");
    }
  })
  return (
    <>
      <h1 data-testid="title">{props.slides[index].title}</h1>
      <p data-testid="text">{props.slides[index].text}</p>
      <button id="next" data-testid="button-next" onClick={handleNext} >Next</button>
      <button id="prev" data-testid="button-prev" onClick={handlePrev} disabled={false}>Prev</button>
      <button id="restart" data-testid="button-restart" onClick={handleRestart} disabled={false}>Restart</button>
    </>
  )
}

export default App;
