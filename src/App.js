import { useState } from 'react'
import './App.css';
import { chars } from './chars'
import { generatePassword } from './utils'
import "./basicStyling.css"

function App() {

  const [password, setPassword] = useState('')
  const [size, setSize] = useState(12)

  const makePassword = () => {
    setPassword(generatePassword(12, chars));
  }

  const renderCopyButton = () => {
    return password === '' ? null : <button onClick={() => copy()} className="copy"><i className="fas fa-copy"></i></button>;
  }

  const copy = () => {
    navigator.clipboard.writeText(password);
    alert("Password copied to clipboard")
  }

  return (
    <div className="App">
      <div className="title">Password Generator</div>
      <button onClick={() => makePassword()} className="submit">
        Generate a password
      </button>
      <div className='passwordWrapper'>
        <span className={password === '' ? '' : 'password'}>{password}</span>
        {renderCopyButton()}
      </div>
    </div>
  );
}

export default App;
