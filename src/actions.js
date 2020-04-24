const wordsLoaded = (words) => {
    return {
        type: 'FETCH_WORDS_SUCCESS',
        payload: words
    }
}

const wordsError = () => {
    return {
        type: 'FETCH_WORDS_FAILURE'
    }
}


const timeLeftDecreased = () => {
    return {
        type: 'TIME_LEFT_DECREASED'
    }
}

const wordInputChanged = (event) => {
    return {
        type: 'WORD_INPUT_CHANGED',
        payload: event
    }
}

const newGameStart = () => {
    return {
        type: 'NEW_GAME_STARTED',
    }
}

const difficultyChanged = (event) => {
    return {
        type: 'DIFFICULTY_CHANGED',
        payload: event
    }
}

const settingsDisplayToggled = () => {
    return {
        type: "SETTINGS_DISPLAY_TOGGLED"
    }
}

export {
    wordsLoaded,
    wordsError,
    timeLeftDecreased,
    wordInputChanged,
    newGameStart,
    difficultyChanged,
    settingsDisplayToggled
}