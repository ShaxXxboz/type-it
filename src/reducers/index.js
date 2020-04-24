const initialState = {
    difficulty: 'medium',
    words: [],
    currentWord: 'hello',
    timeLeft: 10,
    loading: true,
    error: false,
    score: 0,
    timeInterval: null,
    gameOver: false,
    inputValue: '',
    settingsShow: true
};

const getRandomWord = (words) => {
    return words[Math.floor(Math.random() * words.length)];
}

const updateTimeLeft = (state) => {
    return {
        ...state,
        gameOver: state.timeLeft === 1,
        timeLeft: state.timeLeft - 1,
        timeInterval: state.timeLeft === 1 ? clearInterval(state.timeInterval) : state.timeInterval
    }
}

const reducer = (state = initialState, action) => {
        switch (action.type) {
            case 'FETCH_WORDS_SUCCESS': {
                return {
                    ...state,
                    words: action.payload,
                    currentWord: getRandomWord(action.payload),
                    loading: false
                }
            }
            case 'FETCH_WORDS_FAILURE': {
                return {
                    ...state,
                    error: true,
                    loading: false
                }
            }
            case 'TIME_LEFT_DECREASED': {
                return {
                    ...state,
                    gameOver: state.timeLeft === 1,
                    timeLeft: state.timeLeft - 1,
                }
            }
            case 'WORD_INPUT_CHANGED': {
                const event = action.payload;
                let {score, words, difficulty, timeLeft, currentWord} = state

                if (event.target.value === currentWord) {
                    let timeAdded;
                    switch (difficulty) {
                        case 'easy':
                            timeAdded = 4;
                            break;

                        case 'hard':
                            timeAdded = 2;
                            break;

                        default:
                            timeAdded = 3;
                    }

                    return {
                        ...state,
                        inputValue: '',
                        currentWord: getRandomWord(words),
                        timeLeft: timeLeft + timeAdded,
                        score: score + 1
                    };
                }

                return {
                    ...state,
                    inputValue: event.target.value
                }
            }
            case 'DIFFICULTY_CHANGED': {
                return {
                    ...state,
                    difficulty: action.payload.target.value
                }
            }
            case 'NEW_GAME_STARTED': {
                return {
                    ...state,
                    timeLeft: 10,
                    gameOver: false,
                    score: 0,
                    currentWord: getRandomWord(state.words),
                    inputValue: ''
                }
            }
            case 'SETTINGS_DISPLAY_TOGGLED': {
                return {
                    ...state,
                    settingsShow: !state.settingsShow
                }
            }
            default:
                return state;
        }
    }
;

export default reducer;