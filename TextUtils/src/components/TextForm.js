import React, {useState} from 'react'

export default function TextForm() {


    function Onchange(event){
        // console.log('Changes');
        setText(event.target.value)
    }

    function ConvertUp(){
        // console.log('Converted to uppercase');
        const newText = text.toUpperCase()
        setText(newText)
    }

    function resetText(){
        setText('')
    }

    function copyText(){
        navigator.clipboard.writeText(text)
    }

    const [text,setText] = useState('Enter Text Here')
    
    return (
        <>
        <div className="my-4 container">
            <label htmlFor="exampleFormControlTextarea1" className="form-label h2">Enter Text Below</label>
            <textarea className="form-control textarea1" rows="3" value={text} onChange={Onchange} id='textarea'></textarea>
            <button className='btn-primary btn mt-3 mx-1' onClick={ConvertUp}>Click For UpperCase</button>
            <button className='btn-primary btn mt-3 mx-1' onClick={resetText}>Reset</button>
            <button className='btn-primary btn mt-3 mx-1' onClick={copyText}>Copy to Clipboard</button>
        </div>
        <div className="container">
            <h2>Your Text Summary</h2>
            <p>The text contains {text.length} characters and {text.split(' ').length} words.</p>
        </div>
        </>
    )
}
