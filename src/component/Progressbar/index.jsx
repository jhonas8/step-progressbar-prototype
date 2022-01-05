import React, { Component } from 'react'
import { StepNav } from '..'
import './style.css'

export default class Progressbar extends Component {
    render() {
        const {
            steps,
        } = this.props

        return (
            <div className='progressbarWrapper'>
                <div className='block'/>
                <StepNav steps={steps}/>
                <div className='block'/>
            </div>
        )
    }
}
