import * as React from 'react'
import './page-not-found.css';
import logo from '../../assets/logo.png'

class PageNotFound extends React.Component<{}, {}>{

    public render() {
        return (
            <div className='page-not-found-container'>
                <img className='not-found-logo' src={logo} alt="Logo" />
                <div className='not-found-message'>ERROR 404: PAGE NOT FOUND</div>
            </div>
        )
    }

}

export default PageNotFound;