import * as React from 'react';
import './separator-filtered-group.css';

export interface SeparatorFilteredGroupProps {
    leftFilter?: string;
    rightFilter?: string;
}

const SeparatorFilteredGroup = (props: SeparatorFilteredGroupProps) => {
    const { leftFilter, rightFilter } = props;
    return (
        <div className='separator-filter-group-container'>
            <div className= 'separator-filter-group-label-left'>
                {leftFilter}
            </div>
            <div className='separator-filter-group' />
            <div className='separator-filter-group-label-right'>
                {rightFilter}
            </div>
        </div>
    );
}


export default SeparatorFilteredGroup; 