import PropTypes from 'prop-types'
import React, { useState } from 'react'
import './styles.css';



export default function TextForm(props) {
  const [text,setText] = useState("You'll see your upadted text here");
  const [originalText, setOriginalText] = useState('Enter your text here');
    
  const handleOnChange = (event) => {
    setOriginalText(event.target.value);
      };

  const clearText = () => {
      setOriginalText('');
      setText('');
  };

  const handleOnClickUpper = () => {
      // Convert original text to uppercase and update uppercaseText state
      
      setText(originalText.toUpperCase());
  };
  const handleOnClickLower = () => {
    // Convert original text to uppercase and update uppercaseText state
    
    setText(originalText.toLowerCase());
  };
  const handleCopy = ()=>{
    var text=document.getElementById('updatedText');
    text.select();
    navigator.clipboard.writeText(text.value);
  }

  return (
    <>
      <header>
        <h2>Lets modify your text!</h2>
      </header>        
      
      <div>
          <div className='container' style={{backgroundColor:'white'}}>
              <div className="mb-3">
                  <h2 style={{color:'black'}}>{props.heading}</h2>
                  <textarea className="form-control" value={originalText} onChange={handleOnChange} id="myTextBox" rows="12"></textarea>
              </div>
              <button className='btn btn-primary' onClick={handleOnClickUpper}>Convert to Upper Case</button>
              <button className='btn btn-primary ml-2' onClick={handleOnClickLower}>Convert to Lower Case</button>
              
              <button className='btn btn-danger ml-2' data-toggle="modal" data-target="#exampleModalCenter">Clear Text</button>
              <div className="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered" role="document">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h5 className="modal-title" id="exampleModalLongTitle">Are you sure?</h5>
                      <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                      </button>
                    </div>
                    <div className="modal-body">
                      Do you want to clear this text?
                    </div>
                    <div className="modal-footer">
                      <button type="button" className="btn btn-secondary" data-dismiss="modal">No</button>
                      <button type="button" className="btn btn-primary" onClick={clearText} data-dismiss="modal">Yes</button>
                    </div>
                  </div>
                </div>
              </div>
          </div>
            
          <div className='container my-3'>
              <div>
                <h5> Your Text Summary</h5>
                <p>{originalText.split(/\s+/).filter((word) => word !== "").length} words and {originalText.length} characters</p>
              </div>
          </div>
            
          <div className='container'>
              <div className="mb-3">
                  <h2>Updated Text</h2>
                  <textarea className="form-control" value={text} readOnly rows="12" id='updatedText'></textarea>
              </div>
              <button className='btn btn-primary ml-2' onClick={handleCopy}>Copy Text</button>
          </div>
        </div>

    </>
  )
  
}

TextForm.propTypes = {
    heading: PropTypes.string.isRequired
}
TextForm.defaultProps = {
    heading:'Text Area'
}