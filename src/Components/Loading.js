import React from 'react';
import loadingGYF from '../images/gif/loading-arrow.gif';
const Loading = () => {
    return (
        <div className='loading'>
            <h1>Loading data....</h1>
            <img src={loadingGYF} alt=""/>
        </div>
    );
};

export default Loading;