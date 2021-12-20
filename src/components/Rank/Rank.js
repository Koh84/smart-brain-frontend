import React from 'react';
import 'tachyons'

const Rank = ({name, entries}) => {
    return (
        <div>
            <div className='green f3'>
                {`${name}, your current entry count is...`}    
            </div>
            <div className='red f1'>
                {entries}    
            </div>
        </div>
    )
}

export default Rank;