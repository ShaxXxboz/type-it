import React from 'react';
import {connect} from "react-redux";

const Error = ({error}) => {
    if (!error)
        return null;

    return (
        <div className="error">
            <p>Something went wrong :( Try again later...</p>
        </div>
    )
}

const mapStateToProps = ({error}) => {
    return {error}
}

export default connect(mapStateToProps)(Error);