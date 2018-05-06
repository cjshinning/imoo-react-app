import React from 'react'

class Demo extends React.Component{
    constructor(){
        super()
        this.state = {
            num: 1,
            name: 'imooc'
        }
        this.handlClick = this.handlClick.bind(this)
    }
    handlClick(){
        this.setState({
            num: this.state.num+1
        })
    }
    shouldComponentUpdate(nextProps, nextState){
        // console.log(nextProps, nextState)
        // console.log(this.props, this.state)
        if(nextState.num % 5 == 0){
            return true
        }
        return false
        // console.log(this.state)
        // return false
    }
    render(){
        return (
            <div>
                <p>{this.state.num}</p>
                <button onClick={this.handlClick}>Click</button>
            </div>
        )
    }
}

export default Demo