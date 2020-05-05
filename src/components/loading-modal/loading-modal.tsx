import * as React from 'react';
import './loading-modal.css';
import loadingImage from '../../assets/loading-modal-icon.gif';
import logo from '../../assets/logo.png';

export interface LoadingModal {
    loadingMessage: string;
}

const LoadingModal = (props: LoadingModal) => {
    const { loadingMessage } = props;
    return (
        <div className='loading-modal'>
            <div className='loading-modal-content'>
                <div className='loading-logo-container'>
                    <img className='loading-logo' src={logo} alt="logo" />
                </div>
                <div className='loading-text'>
                    <div>L </div> <img className='loading-image' src={loadingImage} alt="loadingImage" /> <div>A D I N G</div>
                </div>
                <div className='loading-message'>
                    {loadingMessage}
                </div>
            </div>
        </div>
    );
}


export default LoadingModal; 