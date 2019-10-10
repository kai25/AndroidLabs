import React from 'react';

import { View, TextInput, StyleSheet } from 'react-native';
import { Text, Button } from 'react-native-elements';
import {WinnerPage} from "./winnerPage";

const GREATER_TEXT = 'Nope, it is greater';
const LESS_TEXT = 'No, it is less';
const START_TEXT = 'I have a number! Guess it!';
const INVALID_INPUT_TEXT = 'Looks like not a number :/';
const MIN_NUMBER = 0;
const MAX_NUMBER = 100;

const styles = StyleSheet.create({
    appView: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-around',
    },
    numberInput: {
        borderBottomWidth: 2,
        fontSize: 26,
        backgroundColor: 'lightblue',
        flex: 1,
    },
    guessButton: {
        margin: 10,
        flex: 1,
    },
    guessText: {
        textAlign: 'center',
        textAlignVertical: 'center',
        flex: 5,
    }
});

function getRandomNumber(maxNumber) {
    return Math.round(Math.random() * maxNumber);
}

export function ActivitiesApp() {
    const [numberToGuess, setNumberToGuess] = React.useState(getRandomNumber(MAX_NUMBER));
    const [userNumberStr, setUserNumberStr] = React.useState(MIN_NUMBER.toString());
    const [displayText, setDisplayText] = React.useState(START_TEXT);
    const [isWinner, setWinner] = React.useState(false);

    const onChange = (numberText) => {
        setUserNumberStr(numberText);
    };

    const onSubmit = () => {
        const parsed = Number.parseInt(userNumberStr);

        if (isNaN(parsed)) {
            setDisplayText(INVALID_INPUT_TEXT);
        }

        if (parsed === numberToGuess) {
            setWinner(true);
        } else if (parsed > numberToGuess) {
            setDisplayText(LESS_TEXT);
        } else {
            setDisplayText(GREATER_TEXT);
        }
    };

    if (isWinner) {
        return <WinnerPage
            number={numberToGuess}
            onRetryClick={() => {
                setWinner(false);
                setNumberToGuess(getRandomNumber(MAX_NUMBER));
                setDisplayText(START_TEXT);
                setUserNumberStr('');
            }}
        />
    }

    return <View style={styles.appView}>
        <Text h2 style={styles.guessText}>
            {displayText}
        </Text>
        <TextInput
            multiline={false}
            value={userNumberStr.toString()}
            keyboardType={'decimal-pad'}
            onChangeText={onChange}
            placeholder={'Enter your number'}
            style={styles.numberInput}
        />
        <Button
            title={'I am sure!'}
            onPress={onSubmit}
            style={ styles.guessButton }
        />
    </View>
}
