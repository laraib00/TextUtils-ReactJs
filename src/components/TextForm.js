import React from 'react'
import { useState } from 'react'

export default function TextForm(props) {
const handleUpclick=() =>{
// console.log("Upper Case is Clicked");
let newText=text.toUpperCase();
settext(newText);
props.showAlert("Converted to Upper Case", "success");
}
const handleOnchange=(event) =>{
    // console.log("On Change");
    settext(event.target.value);
    
    }
    const [text, settext] = useState("");
    const handlelowclick=() =>{
        // console.log("Upper Case is Clicked");
        let newText=text.toLowerCase();
        settext(newText);
        props.showAlert("Converted to Lower Case", "success");
       
        }
        const handleClearclick=() =>{
            // console.log("Upper Case is Clicked");
            
            settext("");
            props.showAlert('Text is Cleared Successfully!', "success");
            }
    const handleCopy=() =>{
        var text=document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert('Text is Copied to Your Clipboard', "success");
       
    }

    const hnadleExtraSpaces=() =>
    {
        let newText=text.split(/[ ]+/);
        settext(newText.join(" "))
        props.showAlert('Extra Spaces has been Removed', "success");
    }


  return (
      <>
    <div className="container" style={{color:props.mode==='dark'?'white':'black'}}>
          <h1 className='my-2'>{props.heading}</h1>
<div className="mb-3">
  
  <textarea className="form-control" value={text} style= {{backgroundColor:props.mode==='dark'?'#13466e':'white' ,color:props.mode==='dark'?'white':'black'}}
  onChange={handleOnchange}  id="myBox" rows="8"></textarea>
</div>
<button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleUpclick}> Convert to Upper Case
  </button>
  <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handlelowclick}> Convert to Lower Case
  </button>
  <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleClearclick}> Clear Text
  </button>
  <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleCopy}> Copy Text
  </button>
  <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={hnadleExtraSpaces}> Remove Extra Spaces
  </button>
    </div>
    <div className="container my-2" style={{color:props.mode==='dark'?'white':'black'}}>
        <h2>
            Your text Summary
        </h2>
        <p>{text.split(" ").filter((element)=>{return element.length!==0}).length} Words and {text.length} Characters</p>
        <p>
            {0.08*text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes required to read
        </p>
        <h2>Preview</h2>
        <p>{text.length>0?text:'Nothing to Preview'}</p>
    </div>
    </>
  )
}
