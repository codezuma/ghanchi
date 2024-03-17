import Individual from '@/components/custom/Individual'
import React from 'react'

const page = () => {
    const heading = 'Hospital Files'
    const para = `
        We specialize in crafting a variety of Patient Report Files, including textured, embossed, and U.V Box Files.
    Our selection extends to include spring and punching files, providing options to suit different preferences. Additionally, our laminated patient files offer durability, ideal for regular use as they are less prone to damage. For those seeking a touch of style, we offer designer medical files and folders to elevate your documentation experience.  
    `
    const imgUrl = [
        '/hospitals/one.jpg',
        '/hospitals/two.jpg',
        '/hospitals/three.jpg',
        '/hospitals/four.jpg',
        '/hospitals/five.jpg',
        '/hospitals/six.jpg',
        '/hospitals/seven.jpg',
        '/hospitals/eight.jpg',
        '/hospitals/nine.jpg'
    ]

    return (
        <div>
            <Individual heading={heading} para={para} img={imgUrl} />
        </div>
    )
}

export default page