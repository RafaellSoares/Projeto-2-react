import { useState } from 'react'
import Cracha from './components/Cracha'
import './App.css'


function App() {
  const [UserPicture, setUserPicture] = useState("")
  const [UserName, setUserName] = useState("")
  const [UserOffice, setUserOffice] = useState("")
  const [UserCode, setUserCode] = useState("")

  const handleChangePicture = (e) => {
    setUserPicture(e.target.value)
  }
  const handleChangeName = (e) => {
    setUserName(e.target.value)
  }
  const handleChangeOffice = (e) => {
    setUserOffice(e.target.value)
  }
  const handleChangeCode = (e) => {
    setUserCode(e.target.value)
  }

  return (
    <div className="container text-center"> 
    <div className='row align-items-center'>
    <div className='col-6 left'>

      <form> 
        <div className='form-group'>
        <label> Foto </label>
        <input className='form-control' type="text" onChange={handleChangePicture}/>
        <label> Nome Completo</label>
        <input className='form-control' type="text" onChange={handleChangeName}/>
        <label> Cargo </label>
        <input className='form-control' type="text" onChange={handleChangeOffice}/>
        <label> Matricula </label>
        <input className='form-control' type="text" onChange={handleChangeCode}/> <br/>
        <input className='btn btn-primary' type="submit" value="Gerar crachá" />
        </div>
      </form>
    </div>

    <div className='col-6 right'>
      <Cracha funcionario={{UserPicture, UserName, UserOffice, UserCode}}/>
    </div>

    </div>
    </div>
  )
}

export default App
