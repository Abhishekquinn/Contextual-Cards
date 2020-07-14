import React, {Component} from 'react';
import  './Shimmer.css';

export default class Shimmer extends Component{
    render(){
        return(
            <div className='shimmerParent'>
                <div className='content' style={{'height': `${this.props.height}px`}}>
                </div>
            </div>
        )
    }
}