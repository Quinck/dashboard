import * as React from 'react';
import './user-history-card.css';

export interface UserHistoryCardProps {
   startDate: Date,
   endDate?: Date,
   startPosition: string,
   endPosition?: string,
   stationId: string
}

const UserHistoryCard = (props: UserHistoryCardProps) => {
    const { startDate, endDate, startPosition, endPosition, stationId } = props;

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
                {!endDate && !endPosition &&
                    <div className='current-session-label'>CURRENT SESSION</div>
                }
                <div className='station-id'>
                    {stationId}
                </div>
                <div>
                    location: {startPosition}
                </div>
                <div>
                    start: {formatDate(startDate)} 
                </div>
                {endPosition && 
                    <div>
                        location: {endPosition}
                    </div>
                }
                {endDate && 
                    <div>
                        end:  {formatDate(endDate)}
                    </div>
                }
            </div>
        </div>
    );
}

export default UserHistoryCard; 