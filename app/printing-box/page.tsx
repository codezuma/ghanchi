import Individual from '@/components/custom/Individual'
import React from 'react'

const page = () => {
    const heading = 'Packing Box Printed'
    const para = `
    Certainly! We specialize in printing packaging boxes for renowned brands, including sweatboxes, chocolate boxes, and more. Our custom packaging solutions are tailored to meet the unique requirements of each product, ensuring that your brand's identity shines through with every package. Whether it's a luxurious sweatbox or an elegant chocolate box, we combine high-quality printing with durable materials to create packaging that not only protects your products but also enhances their appeal on the shelf. Trust us to bring your brand vision to life through our premium packaging box printing services.
    `
    const imgUrl = [
        '/bags/one.jpg',
        '/bags/two.jpg',
        '/bags/three.jpg',
        // '/bags/four.jpg',
        // '/bags/five.jpg',
        // '/bags/six.jpg',
        // // '/bags/seven.jpg',
        // '/bags/eight.jpg',
        // '/bags/nine.jpg',
        // '/bags/ten.jpg',
        // '/bags/eleven.jpg'
    ]
    return (
        <div>
            <Individual heading={heading} para={para} img={imgUrl} />
        </div>
    )
}

export default page