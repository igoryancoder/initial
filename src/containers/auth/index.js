/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { Text, StyleSheet } from "react-native";
import { compose } from 'recompose';
import { connect } from 'react-redux';
import { actionLogin } from '../../store/actions';
import { Input, KeyboardStaticAvoid, Button } from '../../components'

const mapDispatchToProps = {
    loginAction: actionLogin
};

export const Auth = compose(connect(null, mapDispatchToProps))(({ navigation, loginAction }: Props) => {
    const [login, setLogin] = React.useState('');
    const [password, setPassword] = React.useState('');

    function submit() {
        loginAction({ isLogin: false })
    };

    return (
        <KeyboardStaticAvoid fullheight contentContainerStyle={styles.container}>
            <Text>Auth</Text>
            <Input
                value={login}
                onChange={setLogin}
            />
            <Input
                value={password}
                onChange={setPassword}
            />
            <Button text={'Submit'} onPress={submit} />
        </KeyboardStaticAvoid>
    )
});

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 20
    }
})
