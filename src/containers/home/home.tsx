import * as React from 'react'
import './home.css';

interface HomeProps {
    content: string;
}

class Home extends React.Component<HomeProps>{

    public render() {
        const { content } = this.props;
        return (
            <div className='home-container'>
                <div className='home-content'> 
                    {content}
                </div>
            </div>
        )
    }

}

export default Home;