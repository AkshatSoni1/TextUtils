import React, {useEffect, useState} from 'react'

export default function Textform(props) {
    const clickedUpCase=()=>{
        let temp = text.toUpperCase();
        setText(temp);
        props.setAppAlert('Converted to Upper Case!👍');
    }
    const changed=(event)=>{
        setText(event.target.value);
    }
    const convertLowerCase=()=>{
        let temp = text.toLowerCase();
        setText(temp);
        props.setAppAlert('Converted to Lower Case!👍');
    }
    const clearText=()=>{
        setText("");
        props.setAppAlert(`Clean 'N' Clear!😊`);
    }
    const replaceText=()=>{
        let existing = prompt("Enter the text to replace");
        let beingReplaced = prompt("Enter new text");
        let temp = text.replaceAll(existing,beingReplaced);
        setText(temp);
        props.setAppAlert('The text has been replaced!🔁');
    }
    const reverseText=()=>{
        let revTxt = text.split('').reverse().join('');
        setText(revTxt);
        props.setAppAlert('The text has been reversed!◀️');
    }
    const removeExtraSpaces=()=>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.setAppAlert('Extra spaces are removed!😉');
    }
    const removeTrailingSpaces=()=>{
        let newtext = text.trim();
        setText(newtext);
        props.setAppAlert('Trailing spaces are removed!😉');
    }
    const alternateLetters=()=>{
        let arr = text.split('');
        for(let i=0; i<arr.length; i++){
            if(arr[i] !== ' '){
                if(arr[i]>='A'&&arr[i]<='Z'){
                    arr[i] = arr[i].toLowerCase();
                }
                else{
                    arr[i] = arr[i].toUpperCase();
                }
            }
        }
        let txt = arr.join('');
        setText(txt);
        props.setAppAlert('Text Alternated(Upper->lower & vice versa)!😁');
    }
    async function copyText(){
        try{
            await navigator.clipboard.writeText(text);
            props.setAppAlert('Text copied!✅');
        }catch(e){
            console.log(e);
        }
    }
    const [text, setText] = useState("");//useState hook
    useEffect(()=>{
        props.setAppAlert("Welcome to my Text-Utils App🤗");
    },[])
    return (
        <>

        {/* <div className="alert alert-primary d-flex align-items-center" style={{marginBottom:"10px"}} role="alert">
            Welcome to my Text-Utils App🤗
        </div> */}

        <div className={`text-${props.mode==='light'?'dark':'light'}`}>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea  className="form-control" value={text} style={{backgroundColor:props.mode==='light'? "white" :"#323232",border:"1px solid rgb(0 118 255)", color:props.mode==='light'?"black":"white"}} onChange={changed} id="exampleFormControlTextarea1" rows="7"></textarea>
            </div>
            {/* border: 1px solid rgb(0 118 255);
    background: #323232; */}
    {/* {border:"1px solid #71b2fe"} */}
            <button disabled={text.length===0} className="btn btn-outline-primary me-2 mb-2" onClick={clickedUpCase}>Convert to UpperCase</button>
            <button disabled={text.length===0} className="btn btn-outline-primary me-2 mb-2" onClick={convertLowerCase}>Convert to LowerCase</button>
            <button disabled={text.length===0} className="btn btn-outline-primary me-2 mb-2" onClick={replaceText}>Find and Replace</button>
            <button disabled={text.length===0} className="btn btn-outline-primary me-2 mb-2" onClick={reverseText}>Reverse</button>
            <button disabled={text.length===0} className="btn btn-outline-primary me-2 mb-2" onClick={removeExtraSpaces}>Remove extra spaces</button>
            <button disabled={text.length===0} className="btn btn-outline-primary me-2 mb-2" onClick={removeTrailingSpaces}>Remove trailing spaces</button>
            <button disabled={text.length===0} className="btn btn-outline-primary me-2 mb-2" onClick={alternateLetters}>AlTeRnAtE</button>
            <button disabled={text.length===0} className="btn btn-outline-primary me-2 mb-2" onClick={copyText}>Copy</button>
            <button disabled={text.length===0} className="btn btn-outline-primary me-2 mb-2" onClick={clearText}>Clear text</button>
        </div>
        <div className={`my-4 text-${props.mode==='light'?'dark':'light'}`}>
            <h2>Your text summary</h2>
            <p><b>{text.split(/\s+/).filter(word=>word!=="").length}</b> word(s) <b>{text.length}</b> characters</p>
            <p><b>{0.008*text.split(/\s+/).filter(word=>word!=="").length}</b> min read</p>
            <h4>Preview of your text:</h4>
            <p style={{wordWrap:"normal"}}>{text.length>0 ? text : "Enter something in the textbox above to preview your text."}</p>
        </div>
        </>
    )
}