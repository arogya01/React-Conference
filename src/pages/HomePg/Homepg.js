import React from 'react'
import { HeroSection } from '../../Components';
import {hero} from './Data';

const Homepg = () => {
    return (
        <>
        <HeroSection {...hero} />
        </>
    )
}

export default Homepg;
