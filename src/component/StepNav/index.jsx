import React, { Component } from 'react'
import { StepItem } from '..'

export default class SetpNav extends Component {
    constructor(props){
        super(props)
        this.state = {
            actualStep: 1,
            numberOfSteps: this.props.steps.length
        }
    }

    handleChangeStepOnClick = step =>{
        this.setState(prevState=>({
            ...prevState,
            actualStep: step
        }))
    }

    render() {
        console.log(this.state)
        const {
            actualStep,
            numberOfSteps,
        } = this.state

        const {
            steps,
        } = this.props

        return (
            <div className='stepWrapper'>
                {steps.map(
                    (stepLabel, index) =><StepItem 
                            onClickStep={this.handleChangeStepOnClick} 
                            actualStep={actualStep}
                            stepLabel={stepLabel}
                            stepIndex={index+1}
                            key={index}
                        />
                    ) 
                }
            </div>
        )
    }
}
