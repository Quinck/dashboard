import * as React from 'react';
import './user-history-card.css';
import { UsageSummary } from '../../../models/user'

export interface UserHistoryCardProps {
    usageSummary: UsageSummary
}

const UserHistoryCard = (props: UserHistoryCardProps) => {
    const { usageSummary } = props;

    function formatDate(date: Date): string{
        let year = date.getFullYear() + '';
        let month = date.getMonth() + 1 + '';
        let day = date.getDate() + '';
        let hour = date.getHours() + '';
        let min = date.getMinutes() + '';
        let sec = date.getSeconds() + '';
        if (month.length === 1)
            month = '0' + month;
        if (day.length === 1)
            day = '0' + day;
        if (hour.length === 1)
            hour = '0' + hour;
        if (min.length === 1)
            min = '0' + min;
        if (sec.length === 1)
            sec = '0' + sec;
        return day + '/' + month + '/' + year + ' at ' + hour + ':' + min + ':' + sec;
    }

    return (
        <div className='user-history-card-container'>
            <div className='user-history-card-content'>
                {!usageSummary.endDate && !usageSummary.endPosition &&
                    <div className='current-session-label'>CURRENT SESSION</div>
                }
                <div className='station-id'>
                    {usageSummary.stationId}
                </div>
                <div>
                    location: {usageSummary.startPosition}
                </div>
                <div>
                    start: {formatDate(usageSummary.startDate)} 
                </div>
                {usageSummary.endPosition && 
                    <div>
                    location: {usageSummary.endPosition}
                    </div>
                }
                {usageSummary.endDate && 
                    <div>
                    end:  {formatDate(usageSummary.endDate)}
                    </div>
                }
            </div>
        </div>
    );
}

export default UserHistoryCard; 