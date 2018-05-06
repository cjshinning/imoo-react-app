import React from 'react'
import {connect} from './woniu-react-redux'
import {addGun,removeGun,addGunAsync} from './index.redux'

// const mapStatetoProps = (state) => {
//     return {num: state}
// }
// const actionCreators = {addGun,removeGun,addGunAsync}

// App = connect(mapStatetoProps,actionCreators)(App)
@connect(
    state=>({num:state}),
    {addGun,removeGun,addGunAsync}
)

class App extends React.Component{
    render(){
        // console.log(this.props)
        return (
            <div>
                <h1>现在有技巧{this.props.num}把</h1>
                <button onClick={this.props.addGun}>申请武器</button>
                <button onClick={this.props.removeGun}>上交武器</button>
                <button onClick={this.props.addGunAsync}>拖两天再给</button>
            </div>
        )
    }
}

// App = connect(
//     state=>({num:state}),
//     {addGun,removeGun,addGunAsync}
// )(App)

export default App