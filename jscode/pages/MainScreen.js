/**
 * Created by Administrator on 2018/3/12 0012
 */

import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Button,
    Text
} from 'react-native';

import {bindActionCreators} from 'redux'
import { connect } from 'react-redux'
import counterAction from '../actions/counterAction'

class MainScreen extends Component {
    static  navigationOptions = ({ navigation, screenProps }) => ({
        headerTitle : 'MainScreen',
    });

    render() {
        const { count, counterAction } = this.props;
        return (
            <View style={styles.container}>
                <Button title={'-'} onPress={counterAction.reduce}/>
                <Text style={{ width : 50, textAlign : 'center' }}>{count}</Text>
                <Button title={'+'} onPress={counterAction.add}/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container : {
        flex : 1,
        alignItems : 'center',
        justifyContent : 'center',
        flexDirection : 'row'
    },
});

export default connect(
    (state) => {
        console.log('state',state)
        return {
            count : state.counter.count
        }
    },
    (dispatch) => ({
        counterAction : bindActionCreators(counterAction,dispatch),
        // addFn : () => dispatch(counterAction.add()),
        // reduceFn : () => dispatch(counterAction.reduce()),
    })
)(MainScreen)
 