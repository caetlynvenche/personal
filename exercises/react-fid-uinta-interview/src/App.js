import React, { useState } from 'react';
import './App.css';

export default function App() {
  const formInit = {
    toInfo: '',
    ccInfo: '',
    subjectInfo: '',
    bodyInfo: '',
    validTo: false,
    validCC: true
    }

  const [formInfo, setFormInfo] = useState(formInit)

  const handleChange = (e) => {
    const {name, value} = e.target

    setFormInfo((prevInfo) => ({
      ...prevInfo,
      [name]: value
    }))
    
    if (formInfo.ccInfo !== '') {
      checkValidEmail(formInfo.ccInfo, 'validCC')
    }

    if (formInfo.toInfo !== '') {
      checkValidEmail(formInfo.toInfo, 'validTo')
    }

    if (formInfo.toInfo !== '' && formInfo.validTo === false) {
      let toBox = document.getElementById('toInput')
      toBox.classList.add('invalid')
    }

  }
 
  const checkValidEmail = (checking, checkingValid) => {
    const split = checking.split(', ')
    let validEmails = []
    console.log(split)
    for (let i = 0; i< split.length; i++) {
      const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      validEmails.push(re.test(String(split[i]).toLowerCase()))
    }

    if (checkingValid === 'validCC') {
      if(validEmails.includes(false)) {
        console.log('fail emails')
        setFormInfo(prev => ({
          ...prev,
          validCC: false
        }))
      } else {
        setFormInfo(prev => ({
          ...prev, 
          validCC: true
        }))
      }
    }

    if (checkingValid === 'validTo') {
      if(validEmails.includes(false)) {
        console.log('fail emails')
        setFormInfo(prev => ({
          ...prev,
          validTo: false
        }))
      } else {
        setFormInfo(prev => ({
          ...prev,
          validTo: true
        }))
      }
    }

  }

  const handleSubmit = (e) => {
    e.preventDefault()

    setFormInfo(formInit)
    alert('Email to caetlynfake@gmail.com has been sent!')

    console.log(`${formInfo.toInfo}, ${formInfo.ccInfo}, ${formInfo.subjectInfo}, ${formInfo.bodyInfo}`)
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className='grid'>
        <label>to: </label>
        <input
          id='toInput'
          type='text'
          name='toInfo'
          placeholder=''
          value={formInfo.toInfo}
          onChange={handleChange} />

        <label>cc: </label>
        <input 
          id='ccInput'
          type='text'
          name='ccInfo'
          placeholder=''
          value={formInfo.ccInfo}
          onChange={handleChange} />

        <label>subject: </label>
        <input 
          type='text'
          name='subjectInfo'
          placeholder=''
          value={formInfo.subjectInfo}
          onChange={handleChange} />
        </div>

        <textarea 
          value={formInfo.bodyInfo} 
          onChange={handleChange} 
          name='bodyInfo'
          required />

        <button>submit</button>
      </form>
    </div>
  );
}
