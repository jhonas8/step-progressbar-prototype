import React, { Component } from 'react'
import './style.css'

export default class SetepItem extends Component {
    render() {
        const {
            actualStep,
            stepIndex,
            onClickStep,
            stepLabel,
        } = this.props

        return (
            <div className='stepItem'>
                <div 
                    className="stepCircle" 
                    onClick={()=>onClickStep(stepIndex)}>
                        {stepIndex}
                    </div>
                <div className="stepLabel">{stepLabel}</div>
            </div>
        )
    }
}
