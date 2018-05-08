import React from 'react'
import {connect} from './woniu-react-redux'
import {addGun,removeGun,addGunAsync,addTwice} from './index.redux'
import {createSelector} from 'reselect'

const numSelector = createSelector(
    state=>state,
    // 第二个参数是第一个的返回值
    state=>({num:state*2})
)
// const mapStatetoProps = (state) => {
//     return {num: state}
// }
// const actionCreators = {addGun,removeGun,addGunAsync}

// App = connect(mapStatetoProps,actionCreators)(App)
@connect(
    // state=>({num:state*2}),
    state=>numSelector(state),
    {addGun,removeGun,addGunAsync,addTwice}
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
                <button onClick={this.props.addTwice}>申请两把</button>
            </div>
        )
    }
}

// App = connect(
//     state=>({num:state}),
//     {addGun,removeGun,addGunAsync}
// )(App)

export default App