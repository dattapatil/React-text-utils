import React, {useState} from 'react'

//  here used setstate in the component

export default function TextForm(props) {

    const upperCasetext = () => {
        let newText = text.toUpperCase();
        setText(newText);
    }
    const loverCasetext = () =>{
      let newText = text.toLowerCase();
          setText(newText);
    }
    const clearText = () =>{
      let newText = text;
          newText = " ";
          setText(newText);
    }

    const copyText = ()=>{
      navigator.clipboard.writeText(text);      
    }

    const capitalizeText = () =>{
        let newText = text.split(" ");
        const updtext = newText.map((txxt) => {                
         return txxt.charAt(0).toUpperCase() + txxt.slice(1);        
        });
        
        const capText = updtext.join(' ').toString();        
       setText(capText);
    }

    const handelOnChange = (event) =>{
        setText(event.target.value);
    }
    

    const [text, setText] = useState("");
  return (
    <>
    <div className='row'> 
      <div className='col-md-12'>       
        <h1>{props.heading}</h1>
        <div className="mb-3">
        <textarea className="form-control" value={text} onChange={handelOnChange} id="mybox" rows="5"></textarea><br></br>
        <button disabled={text.length === 0} className='btn btn-primary mx-2' onClick={upperCasetext} >Convert to Uppercse</button>  
        <button disabled={text.length === 0} className='btn btn-primary mx-2' onClick={loverCasetext} >Convert to Lovercase</button> 
        <button disabled={text.length === 0} className='btn btn-primary mx-2' onClick={capitalizeText} >Capitalize Words</button>
        <button disabled={text.length === 0} className='btn btn-primary mx-2' onClick={copyText} >Copy Text</button>
        <button disabled={text.length === 0} className='btn btn-secondary mx-2' onClick={clearText} >Clear Text</button>
        </div>
        </div>
    </div>
    <div className='row'>
    <div className='col-md-12'>
        <h1>Your text Summary</h1>
        <p>{text.split(/\s+/).filter((texttl)=> {return texttl.length !== 0}).length} Word and {text.length}</p>
        <p>{0.008 * text.split(" ").filter((texttl)=> {return texttl.length !== 0}).length} Minutes resd</p>
        <h4>Preview</h4>
        <p>{text.length>0?text:"Nothing to preview"}</p>
      </div>
    </div>

    </>
  )
}
