import * as React from 'react';
import './home-card.css';

export interface HomeCardProps {
    icon: any;
    topic: string;
    action: () => void;
}

const HomeCard = (props: HomeCardProps) => {
    const { icon, topic, action } = props;
    return (
        <div className='home-card-container' onClick={action}>
            <div className='home-card-content'>
                <div className='home-card-icon'>
                    <img src={icon} alt={'homeCardIcon'}/>
                 </div>
                <div className='home-card-topic'>
                    {topic}
                </div>
            </div>
        </div>
    );
}


export default HomeCard; 