import * as React from 'react';
import './home-card.css';
import { ElementType } from '../../models/element';

export interface HomeCardProps {
    element: ElementType;
    goToPage: () => void;
}

const HomeCard = (props: HomeCardProps) => {
    const { element, goToPage } = props;
    return (
        <div className='home-card-container' onClick={goToPage}>
            <div className='home-card-content'>
                <div className='name'>
                    {element.name}: 
                 </div>
                <div className='quantity'>
                    {element.quantity}
                </div>
            </div>
        </div>
    );
}


export default HomeCard; 