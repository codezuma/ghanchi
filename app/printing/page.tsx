import Individual from '@/components/custom/Individual'
import React from 'react'

const page = () => {
    const heading = 'Printed Shopping Bags'
    const para = `
         Are you ready to expand your business horizons? Let me introduce you to the world of non-woven bag printing, offering an eco-friendly alternative to traditional materials. Non-woven bags are not only customizable but also serve as effective advertising tools with their versatility in design, color, and branding options.
Did you know that non-woven bag printing machines offer minimal printing costs compared to other machinery? The fabric used in these bags is exceptionally eco-friendly, making it a standout feature. Every company aims to build goodwill by supporting environmental causes, and non-woven bags made from 100% polypropylene filaments perfectly align with this goal. They are recyclable, decompose naturally, and do not produce harmful pollutants when incinerated.
Moreover, non-woven bags boast flexibility, waterproofing, stain resistance, breathability, and remarkable durability, making them a practical and sustainable choice for businesses looking to make a positive impact while promoting their Patrikas
    `
    const imgUrl = [
        '/bags/one.jpg',
        '/bags/two.jpg',
        '/bags/three.jpg',
        '/bags/four.jpg',
        '/bags/five.jpg',
        '/bags/six.jpg',
        '/bags/seven.jpg',
        '/bags/eight.jpg',
        '/bags/nine.jpg',
        '/bags/ten.jpg',
        '/bags/eleven.jpg'
    ]
    return (
        <div>
            <Individual heading={heading} para={para} img={imgUrl} />
        </div>
    )
}

export default page