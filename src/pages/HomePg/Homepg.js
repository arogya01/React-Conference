import React from 'react'
import { HeroSection,FeatureSection ,SpeakerSection} from '../../Components';
import {hero,featureSection,speaker} from './Data';

const Homepg = () => {
    return (
        <>
        <HeroSection {...hero} />
        <FeatureSection {...featureSection} />
        <SpeakerSection {...speaker} />
        </>
    )
}

export default Homepg;
