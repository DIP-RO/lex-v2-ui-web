"use client";

import { FacebookProvider, CustomChat } from 'react-facebook';

const FacebookMsg = () => {
    return (
        <div className='sm:hidden lg:hidden'>
            <FacebookProvider appId="1026539548498333" chatSupport>
                <CustomChat pageId="163874773465514" minimized={true} />
            </FacebookProvider>
        </div>
    );
};

export default FacebookMsg;