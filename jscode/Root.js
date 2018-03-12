import React, { Component } from 'react';

import {Provider} from 'react-redux'
import configureStore from './store/ConfigureStore'
import {StackNavigator,} from 'react-navigation'
import CardStackStyleInterpolator from 'react-navigation/src/views/CardStack/CardStackStyleInterpolator';
import LoginScreen from './pages/LoginScreen'
import MainScreen from './pages/MainScreen'

const store = configureStore()
const Navigation = ()=>{
    return (
        <Provider store = {store}>
            <Navigator/>
        </Provider>
    )
}

const Navigator = StackNavigator(
    {
        LoginScreen:{screen:LoginScreen},
        MainScreen:{screen:MainScreen}
    },
    {
        navigationOptions : {
            // 开启动画
            animationEnabled : true,
            // 开启边缘触摸返回
            gesturesEnabled : true
        },
        mode : 'card',
        transitionConfig : () => ({
            // 统一安卓和苹果页面跳转的动画
            screenInterpolator : CardStackStyleInterpolator.forHorizontal,
        })
    }
)

export default Navigation;

