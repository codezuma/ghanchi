import Individual from '@/components/custom/Individual'
import React from 'react'

const page = () => {
    const heading = 'Aamantran Patrikas'
    const para = `
       Are you looking to enhance your invitations? Step into the realm of Amantran Patrika printing, where elegance meets customization. Amantran Patrikas offer a timeless appeal, making them the perfect choice for special occasions. With our printing services, you can add a touch of sophistication to your invitations, whether it's for weddings, religious ceremonies, or corporate events.
    Our attention to detail and commitment to quality ensure that each Amantran Patrika carries the essence and importance of your event, leaving a lasting impression on your guests. 
    `
    const imgUrl = [
        '/amantran/one.jpg',
        '/amantran/two.jpg',
        '/amantran/three.jpg',
        '/amantran/four.jpg',
        '/amantran/five.jpg',
        '/amantran/six.jpg',
        '/amantran/seven.jpg'
    ]
    return (
        <div>
            <Individual heading={heading} para={para} img={imgUrl} />
        </div>
    )
}

export default page