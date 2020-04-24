import React from 'react';
import {bindActionCreators} from "redux";
import {newGameStart} from "../actions";
import {connect} from 'react-redux';


const GameOver = ({score, gameOver, newGameInit, newGameStart}) => {
    if (!gameOver) {
        return null;
    }

    return (
        <div className="end-game-container">
            <h1>Time ran out</h1>
            <p>Your final score is {score}</p>
            <button onClick={() => { newGameInit(); newGameStart();}}>New Game</button>
        </div>
    )
}

const mapStateToProps = ({score, gameOver}) => {
    return {score, gameOver}
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({newGameStart}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(GameOver);