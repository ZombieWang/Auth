import React, { Component } from 'react'
import { View } from 'react-native'
import firebase from 'firebase'
import { Header } from './components/common'
import LoginForm from './components/LoginForm'

class App extends Component {
    componentWillMount() {
        firebase.initializeApp({
            apiKey: 'AIzaSyCB5uvW48Wn_pgBF3i8CR-eo_vYR4HzHFo',
            authDomain: 'auth-fbe73.firebaseapp.com',
            databaseURL: 'https://auth-fbe73.firebaseio.com',
            projectId: 'auth-fbe73',
            storageBucket: 'auth-fbe73.appspot.com',
            messagingSenderId: '818366531692'
        })
    }

    render() {
        return (
            <View>
                <Header headerText="Authentication" />
                <LoginForm/>
            </View>
        )
    }
}

export default App