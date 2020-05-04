import * as React from 'react';
import './loading-modal.css';
import loadingImage from '../../assets/loading-gears.gif';

export interface LoadingModal {
    loadingMessage: string;
}

const LoadingModal = (props: LoadingModal) => {
    const { loadingMessage } = props;
    return (
        <div className='loading-modal'>
            <div className='loading-modal-content'>
                <div className='loading-image'>
                    <img src={loadingImage}/>
                </div>
                <div className='loading-message'>
                    {loadingMessage}
                </div>
            </div>
        </div>
    );
}


export default LoadingModal; 