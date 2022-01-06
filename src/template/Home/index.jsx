import { Component } from 'react'
import { Progressbar } from '../../component'
import { next, previous } from '../../component/Progressbar'
import './style.css'

class Home extends Component {
    state = {
        activeStep: 1,
        steps: ['step 1', 'step 2', 'step 3'],
    }

    next = () => this.setState(prev => ({
        ...prev,
        activeStep: prev.activeStep < prev.steps.length
                    ? prev.activeStep + 1
                    : prev.activeStep
    }))

    previous = () => this.setState(prev => ({
        ...prev,
        activeStep: prev.activeStep > 1
                    ? prev.activeStep - 1
                    : prev.activeStep
    }))

    handleChangeStepOnClick = step =>{
        this.setState(prevState=>({
            ...prevState,
            activeStep: step
        }))
    }

    render(){
        console.log(this.state.activeStep)
        return(
            <div className='Home'>
                <main className='Header'>
                    <Progressbar 
                        steps={this.state.steps}
                        activeStep={this.state.activeStep}
                        handleChangeStepOnClick={this.handleChangeStepOnClick}
                    />
                </main>
                <button onClick={()=>this.previous()}>Previous</button>
                <button onClick={()=>this.next()}>Next</button>
            </div>
        )
    }
}

export default Home;
  