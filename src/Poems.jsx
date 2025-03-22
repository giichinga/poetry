import logo from './assets/tonny.png'
import "./Poems.css"



function Poems() {
  return (
    <div>
        <img className='logoImg' src={logo} alt="logo"/>
        <h1>Pick your poison</h1>
        <ul>
            <hr/>
            <li>The poet who cannot write</li>
            <hr/>
            <li>My grandfather's stead</li>
            <hr/>
            <li>A sonnet for the beach</li>
            <hr/>
            <li>A new life</li>
            <hr/>
            <li>Choice of existence</li>
            <hr/>
            <li>See and Listen</li>
            <hr/>
            <li>A love beyond reason</li>
            <hr/>
            <li>The embrace of death</li>
            <hr/>
            <li>What does death look like</li>
            <hr/>
        </ul>
    </div>
  );
}

export default Poems;