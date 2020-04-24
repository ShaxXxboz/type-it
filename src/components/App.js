import React, {Component} from 'react';

import ApiService from "../services/ApiService";
import SettingsForm from "./SettingsForm";
import GameOver from "./GameOver";
import Spinner from "./Spinner";
import Error from "./Error";
import {connect} from 'react-redux';
import * as actions from "../actions";


class App extends Component {
    apiService = new ApiService();
    wordInput = React.createRef();
    timeInterval;

    componentDidMount() {
        const {wordsLoaded, wordsError} = this.props;

        this.apiService
            .getWords(1000)
            .then((words) => {
                wordsLoaded(words);
                this.timeInterval = setInterval(this.updateTimeLeft, 1000);
            })
            .catch(() => wordsError())
    }

    componentWillUnmount() {
        clearInterval(this.timeInterval)
    }

    updateTimeLeft = () => {
        this.props.timeLeftDecreased();

        if (this.props.gameOver) {
            clearInterval(this.timeInterval)
        }
    }

    newGameInit = () => {
        this.timeInterval = setInterval(this.updateTimeLeft, 1000);
        this.wordInput.current.focus();
    }

    render() {
        const {currentWord, timeLeft, score, inputValue, wordInputChanged} = this.props;
        return (
            <>
                <SettingsForm/>

                <div className="container">
                    <h2><span role="img">👩‍💻</span> Speed Typer <span role="img">👨‍💻</span></h2>
                    <small>Type the following:</small>

                    <h1>{currentWord}</h1>

                    <input
                        type="text"
                        autoComplete="off"
                        autoFocus
                        placeholder="Type the word here..."
                        onChange={wordInputChanged}
                        value={inputValue}
                        ref={this.wordInput}
                    />

                    <p className="time-container">Time left: <span>{timeLeft}s</span></p>

                    <p className="score-container">Score: <span>{score}</span></p>

                    <GameOver newGameInit={this.newGameInit}/>
                    <Spinner/>
                    <Error/>
                </div>
            </>
        );
    }
}

const
    mapStateToProps = ({currentWord, timeLeft, score, inputValue, gameOver}) => {
        return {
            currentWord, timeLeft, score, inputValue, gameOver
        };
    };

export default connect(mapStateToProps, actions)(App);
