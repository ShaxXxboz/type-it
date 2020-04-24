import React from 'react';
import {connect} from 'react-redux';

const Spinner = ({loading}) => {
    if (!loading) {
        return null;
    }

    return (
        <div className="spinner">
            <div className="loadingio-spinner-pulse-4vgofbxhcbv">
                <div className="ldio-dkkw3kqomke">
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = ({loading}) => {
    return {loading}
}

export default connect(mapStateToProps)(Spinner);