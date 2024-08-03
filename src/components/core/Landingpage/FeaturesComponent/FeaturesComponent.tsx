import FeatureCard from '@/components/common/FeatureCard'
import { features } from '@/data/Features'
import Image from 'next/image'
import React from 'react'

interface Feature {
    id: number,
    title: string,
    icon: string,
    description: string,
}

const FeaturesComponent = () => {
    return (
        <section className='flex text-black justify-between gap-10 pb-10'>
            {
                features.map((feature: Feature, i: number) => (
                    <FeatureCard key={i}
                        feature={feature}
                        color={i === 2 ? 'lightBlue' : 'white'}
                        titleColor={i === 2 ? 'white' : undefined}
                        descriptionColor={i === 2 ? 'white' : undefined}
                    />
                ))
            }
        </section>
    )
}

export default FeaturesComponent