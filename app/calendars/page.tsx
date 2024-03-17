import Individual from '@/components/custom/Individual'
import React from 'react'

const page = () => {
    const heading = 'Printing Calendars'
    const para = `
       
Utilize our expert teams to craft personalized calendars, available in various sizes and shapes. Select your favorite photos to adorn desk calendars, promotional calendars, or personalized ones. Highlight special dates or maintain a routine with our top-quality calendars. Transform your desk into a memorable space adorned with personalized calendars that also promote your brand year-round. Experience each month uniquely with calendars that offer a fresh perspective every month. Alternatively, incorporate names into images using elements like flowers or clouds for a playful touch.
 
    `
    const imgUrl = ['/cal/one.jpg', '/cal/two.jpg', '/cal/three.jpg', '/cal/four.jpg', '/cal/five.jpg', '/cal/six.jpg']
    return (
        <div>
            <Individual heading={heading} para={para} img={imgUrl} />
        </div>
    )
}

export default page