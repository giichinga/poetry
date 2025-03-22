import img from './assets/bg.jpg'
import logo from './assets/tonny.png'
import './App.css'
import { Link } from 'react-router-dom'

function Index() {

  return (
    <>
      <img className='baseImg' src={img} alt="bg" />
      <div className='container'>
        <img className='logo' src={logo} alt="logo" />
        <div className='heroContent'>
        <p className='text'>" Creativity is Contagious, Pass it on"</p>
        <p className='author'>~Albert Einstein</p>
        <button className='btn'><Link to="/poems" className="btn">Get Infected</Link></button>
        </div>
       </div>
    </>
  )
}

export default Index;
