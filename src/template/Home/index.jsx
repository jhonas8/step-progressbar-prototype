import { Component } from 'react'
import { Progressbar } from '../../component'
import './style.css'

class Home extends Component {
    render(){
        return(
            <div className='Home'>
                <main className='Header'>
                    <Progressbar steps={['step 1', 'step 2', 'step 3']}/>
                </main>
            </div>
        )
    }
}

export default Home;
  