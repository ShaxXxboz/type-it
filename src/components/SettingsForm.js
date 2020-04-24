import React, {Component} from 'react';
import {bindActionCreators} from "redux";
import {difficultyChanged, settingsDisplayToggled} from "../actions";
import {connect} from "react-redux";

class SettingsForm extends Component {

    options = [{
        'value': 'easy',
        'label': 'Easy'
    }, {
        'value': 'medium',
        'label': 'Medium'
    }, {
        'value': 'hard',
        'label': 'Hard'
    }];

    renderOptions() {
        return this.options.map(({value, label}) => {
            return <option key={value} value={value}>{label}</option>
        })
    }

    render() {


        const {difficultyChanged, difficulty, settingsShow, settingsDisplayToggled} = this.props;
        const options = this.renderOptions();

        return (
            <>
                <button className="settings-btn" onClick={settingsDisplayToggled}>
                    <i className="fas fa-cog"/>
                </button>

                <div className={settingsShow ? "settings" : "settings hide"}>
                    <form>
                        <div>
                            <label htmlFor="difficulty">Difficulty:&nbsp;</label>
                            <select onChange={difficultyChanged} value={difficulty}>
                                {options}
                            </select>
                        </div>
                    </form>
                </div>
            </>
        );
    }
}

const mapStateToProps = ({difficulty, settingsShow}) => {
    return {
        difficulty,
        settingsShow
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({difficultyChanged, settingsDisplayToggled}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(SettingsForm);
