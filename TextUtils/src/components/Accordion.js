import React, { useState } from "react";

export default function Accordion() {
  
  const [style, setStyle] = useState({
    color: "black",
    backgroundColor: "white",
  });

  const [btn , setbtn] = useState('Enable Dark Mode')

  function modeChange(){
    if(style.color === 'white'){
        setStyle({
            color: "black",
            backgroundColor: "white"            
        })
        setbtn('Enable Dark Mode')

    }
    else{
        setStyle({
        color: "white",
        backgroundColor: "black",
        border: "1px solid white",
        })
        setbtn('Enable Light Mode')
    }
  }
  return (
    <div className="accordion container my-4 py-3" id="accordionFlushExample" style={style}>
      <div className="accordion-item my-1">
        <h2 className="accordion-header" id="flush-headingOne">
          <button
            className="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#flush-collapseOne"
            aria-expanded="false"
            aria-controls="flush-collapseOne"
            style={style}
          >
            Accordion Item #1
          </button>
        </h2>
        <div
          id="flush-collapseOne"
          className="accordion-collapse collapse"
          aria-labelledby="flush-headingOne"
          data-bs-parent="#accordionFlushExample"
        >
          <div className="accordion-body" style={style}>
            Placeholder content for this accordion, which is intended to
            demonstrate the <code>.accordion-flush</code> className. This is the
            first item's accordion body.
          </div>
        </div>
      </div>
      <div className="accordion-item my-1">
        <h2 className="accordion-header" id="flush-headingTwo" style={style}>
          <button
            className="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#flush-collapseTwo"
            aria-expanded="false"
            aria-controls="flush-collapseTwo"
            style={style}
          >
            Accordion Item #2
          </button>
        </h2>
        <div
          id="flush-collapseTwo"
          className="accordion-collapse collapse"
          aria-labelledby="flush-headingTwo"
          data-bs-parent="#accordionFlushExample"
        >
          <div className="accordion-body" style={style}>
            Placeholder content for this accordion, which is intended to
            demonstrate the <code>.accordion-flush</code> className. This is the
            second item's accordion body. Let's imagine this being filled with
            some actual content.
          </div>
        </div>
      </div>
      <div className="accordion-item my-1">
        <h2 className="accordion-header" id="flush-headingThree" style={style}>
          <button
            className="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#flush-collapseThree"
            aria-expanded="false"
            aria-controls="flush-collapseThree"
            style={style}
          >
            Accordion Item #3
          </button>
        </h2>
        <div
          id="flush-collapseThree"
          className="accordion-collapse collapse"
          aria-labelledby="flush-headingThree"
          data-bs-parent="#accordionFlushExample"
        >
          <div className="accordion-body" style={style}>
            Placeholder content for this accordion, which is intended to
            demonstrate the <code>.accordion-flush</code> className. This is the
            third item's accordion body. Nothing more exciting happening here in
            terms of content, but just filling up the space to make it look, at
            least at first glance, a bit more representative of how this would
            look in a real-world application.
          </div>
        </div>
      </div>
      <button className="btn btn-primary mt-2 mx-2" onClick={modeChange}>{btn}</button>
    </div>
  );
}

