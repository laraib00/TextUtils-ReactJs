import React, { useState } from 'react'

export default function About() {

const [mystyle,setmystyle]=useState
({
color:'black',
backgroundColor: 'White'
    })
    const [btntxt,setbtntxt]=useState("Enable Dark Mode")
    

const togglestyle=() =>{
    if(mystyle.color==='white')
    {
   setmystyle( {
        color:'black',
backgroundColor: 'white',
border: '1px solid white'

    })
    setbtntxt("Enable dark mode")
}
    else
    {
    setmystyle( {
        color:'white',
backgroundColor: 'pink'
    })
    setbtntxt("Enable Light mode")
}

}
  return (
      <>
     
    <div className='container' >
    
        <div className="accordion" id="accordionExample">
       
  <div className="accordion-item">
  <h1 className='my-3 mx-2'>About Us</h1>
    <h2 className="accordion-header" id="headingOne">
      <button className="accordion-button"style={mystyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        Analyze your text
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
      <div className="accordion-body"style={mystyle}>
         TextUtils gives a way to analyze your text quickly and efficiently. It Also gives word count, character count and other facilities to manipulate your text.
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingTwo">
      <button className="accordion-button collapsed "style={mystyle}  type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
       Free To use
      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
      <div className="accordion-body"style={mystyle}>
        TextUtils is a free text counter tool that provide instant character count and the word count statistics for the text. TextUtils reports the number of the words and characters. Thus it is suitable for writing text with word count limit.
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingThree">
      <button className="accordion-button collapsed" style={mystyle}type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
  Browser Compatibility
      </button>
    </h2>
    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
      <div className="accordion-body"style={mystyle}>
        This word Couter Software works in any web browsers such as Chrome, Firefox, Internet Explore, Safari, Opera suits to count characteres in facebook, blog,excel, document,pdf document,essays, etc.
      </div>
    </div>
  </div>
</div>
    </div>
    
    </>
  )
}
