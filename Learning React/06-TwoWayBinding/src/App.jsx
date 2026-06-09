import React, { useState } from 'react'

const App = () => {

  const [title, settitle] = useState('')

  const submitchange= function(e){
    e.preventDefault();
    console.log('Form Submitted by', title);
    
    settitle('')
  }

  return (
    <div >

      <h1>{title}</h1>

      <form className="form" onSubmit={ (e)=>{submitchange(e)} }>
        <h2>Contact Us</h2>

        <input type="text" placeholder="Full Name" value={title} onChange={(e)=>{settitle(e.target.value)}} />

        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default App