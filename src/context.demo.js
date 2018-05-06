import React from 'react'
import PropTypes from 'prop-types'

// context
// context是全局的,组件里声明,所有子元素可以直接获取
class Sidebar extends React.Component{
    render(){
        return (
            <div>
                <p>侧边栏</p>
                <NavBar></NavBar>
            </div>
        )
    }
}

class NavBar extends React.Component{
    static contextTypes = {
        user: PropTypes.string
    }
    render(){
        console.log(this.context)
        return (
            <div>
                <p>{this.context.user}的导航栏</p>
            </div>
        )
    }
}

class Page extends React.Component{
    static childContextTypes = {
        user: PropTypes.string
    }
    constructor(){
        super()
        this.state = {user:'蜗牛'}
    }
    getChildContext(){
        return this.state
    }
    render(){
        return (
            <div>
                <p>我是{this.state.user}</p>
                <Sidebar></Sidebar>
            </div>    
        )
    }
}

export default Page