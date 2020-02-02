import React from 'react';
import GenerationPattern from './generationPattern';

export const Generation = ({data}) => {
    const {generationmix, from, to} = data;
    return(
        <div>
            <GenerationPattern generationmix={generationmix} title='Generation details' />
            <hr/>
            <GenerationPattern 
                generationmix={generationmix} 
                title='Generation with rainbow colors' 
                style='hasRainbow' 
            />
        </div>
    )

}

