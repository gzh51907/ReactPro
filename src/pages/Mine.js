import React, { Component } from 'react';
import { Redirect, Switch } from  'react-router-dom'
import Notelogin from './mine/Notelogin.js'
import Accountlogin from './mine/Accountlogin.js'

import {
    Route,
} from 'react-router-dom';

import { Icon } from 'antd';

import './css/Mine.scss'

class Mine extends Component {

    state = {
        selected: ['/notelogin'],
        menu: [
            {
                name: 'notelogin',
                path: '/notelogin',
                text: '短信验证码登录',
                selected: true,
                component: {

                }
            },
            {
                name: 'accountlogin',
                path: '/accountlogin',
                text: '账号登录',
                selected: false
            }
        ]
    }

    goBack = () => {
        console.log(window.location)
        window.location.href = "http://127.0.0.1:8080/#/vacation"
    }

    handleClick = (index) => {
        let menu = this.state.menu
        menu.map(item => item.selected = !item.selected)
        this.setState({
            menu
        })
        console.log(this.props.match.path + menu[index].path)
        this.props.history.push(this.props.match.path + menu[index].path)
    }

    handleReg = () => {
        this.props.history.push('/reg')
    }

    render() {
        return (
            <div>
                <div id="header">
                    <Icon onClick={this.goBack} className="arrowleft" type="left" />
                    <h2>登录</h2>
                    <span onClick={this.handleReg}>注册</span>
                </div>
                <div id="content">
                    <div className="nav">
                        <ul className="menu">
                            {
                                this.state.menu.map( (item, index) => {
                                    return (<li key={index} onClick={this.handleClick.bind(this, index)} style={item.selected ? { background: '#fff', color: '#18a9b9'} : {}}>{item.text}</li>)
                                })
                            }
                        </ul>
                    </div>
                    <div className="form">    
                        <Switch>
                            <Route path="/mine/notelogin" component={Notelogin} />
                            <Route path="/mine/accountlogin" component={Accountlogin} />
                            <Redirect form="/mine" to="/mine/notelogin" exact />
                        </Switch>
                    </div>

                </div>
                <div id="footer">
                    <span>Qunar 京ICP备05021087</span>
                </div>
            </div>
        )
    }
}

export default Mine