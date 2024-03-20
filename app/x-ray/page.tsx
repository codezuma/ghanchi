import Individual from '@/components/custom/Individual'
import React from 'react'

const page = () => {
    const heading = 'X-RAY/ MRI Covers'
    const para = `
        Introducing our collection of CT & MRI Bags, meticulously crafted to meet the diverse needs of our clients. Available in a variety of designs and dimensions, these bags are tailored to fit your specific requirements.
        Our bags boast several notable features:
            - Tight tolerance for precise fit
            - Smooth surface for ease of handling
            - High durability to withstand rigorous use
            - Crafted from high-quality materials for superior performance
            - Scratch-resistant for long-lasting usage
            - Elegant designs that combine style with functionality

        Experience the excellence of our CT & MRI Bags, where quality meets innovation to ensure your utmost satisfaction. 
    `
    const imgUrl = ['/x-ray/one.jpg', '/x-ray/two.jpg', '/x-ray/three.jpg']
    return (
        <div>
            <Individual heading={heading} para={para} img={imgUrl} />
        </div>
    )
}

export default page