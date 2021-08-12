import React from 'react'
import { HeroSection,Section } from '../../Components';
import {hero,featureSection,speakerSection} from './Data';

const Homepg = () => {
    return (
        <>
        <HeroSection {...hero} />
        <Section {...featureSection} />
        <Section {...speakerSection} />
        </>
    )
}

export default Homepg;
