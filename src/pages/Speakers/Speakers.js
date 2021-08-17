import React from 'react';
import {SpeakerSection} from '../../Components';
import {speaker} from './Data';


const Speakers = () => {
    return (
        <>
            <SpeakerSection {...speaker} /> 
        </>
    )
}

export default Speakers
