import Individual from '@/components/custom/Individual'
import React from 'react'

const page = () => {
    const heading = 'Printed Shopping Bags'
    const para = `
        Lorem Ipsum is simply dummy text of 
        theprinting and typesetting industry.
        LoremIpsum has been the industry's
        standard dummy text ever since the
        1500s, when an unknown printer took 
        a galley of type and scrambled it to make
        a type specimen book. It has survived
        not only five centuries, but also the leap
        into electronic typesetting, remaining
        essentially unchanged.  
    `
    const imgUrl = ['/bags/one.png', '/bags/two.png', '/bags/three.png']
    return (
        <div>
            <Individual heading={heading} para={para} img={imgUrl} />
        </div>
    )
}

export default page