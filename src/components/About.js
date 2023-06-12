import React from 'react'

export default function About(props) {
  return (
    <div className="accordion accordion-flush" id="accordionFlushExample" style={{backgroundColor:props.mode==='light'? "white" :"#2a2a2c",color:props.mode==='light'?"black":"white"}}>
        <h1>Want to know about TextUtils?</h1>
        <p>Welcome to Text Utils, the ultimate web application designed to empower you with effortless text manipulation. Whether you need to convert text to lowercase, uppercase, copy it, or perform find and replace operations, Text Utils has got you covered. With its intuitive interface and powerful functionality, you'll breeze through your text-related tasks like never before.Key Features:</p>
    <div className="accordion accordion-item" style={{backgroundColor:props.mode==='light'? "white" :"#323232", color:props.mode==='light'?"black":"white"}}>
      <h2 className="accordion-header" >
        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne" style={{backgroundColor:props.mode==='light'? "white" :"#323232",border:"2px solid rgb(0 118 255)", color:props.mode==='light'?"black":"white"}}>
        1. Convert to Lowercase 
        </button>
      </h2>
      <div id="flush-collapseOne" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
        <div className="accordion-body">Transform any text into lowercase with a single click. Lowercase text is useful for maintaining consistency, improving readability, and conforming to specific style guidelines.</div>
      </div>
    </div>
    <div className="accordion-item" style={{backgroundColor:props.mode==='light'? "white" :"#323232", color:props.mode==='light'?"black":"white"}}>
      <h2 className="accordion-header">
        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo" style={{backgroundColor:props.mode==='light'? "white" :"#323232",border:"2px solid rgb(0 118 255)", color:props.mode==='light'?"black":"white"}}>
        2. Convert to Uppercase
        </button>
      </h2>
      <div id="flush-collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
        <div className="accordion-body">Need to make your text stand out or emphasize a specific message? Our app allows you to convert text to uppercase effortlessly. Uppercase text grabs attention and adds a touch of boldness to your words.</div>
      </div>
    </div>
    <div className="accordion-item" style={{backgroundColor:props.mode==='light'? "white" :"#323232", color:props.mode==='light'?"black":"white"}}>
      <h2 className="accordion-header">
        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree" style={{backgroundColor:props.mode==='light'? "white" :"#323232",border:"2px solid rgb(0 118 255)", color:props.mode==='light'?"black":"white"}}>
        3. Find and Replace
        </button>
      </h2>
      <div id="flush-collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
        <div className="accordion-body">Say goodbye to manual text replacements. Our powerful find and replace tool enables you to locate specific words or phrases within your text and replace them with alternative ones. Save time and effort by automating this tedious process.</div>
      </div>
    </div>
    <div>
        <p className='my-3'>and many more..✌️</p>
    </div>
  </div>
  )
}
