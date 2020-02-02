import React from 'react';
import { GenerationPipeStyled, GenerationPipeItemStyled, GenerationStyled } from './GenerationPipeStyled';

const GenerationPattern = ({generationmix, title, style}) => {
    return(
        <GenerationStyled>
            <h1>{title}</h1>
            <GenerationPipeStyled>
                {generationmix && generationmix.map(generation => {
                    const { fuel, perc} = generation;
                    return(
                        <li key={fuel}>
                            <span className='generation-fuel'>{fuel}</span> 
                            <GenerationPipeItemStyled perc={perc} fuel={fuel} className={style}> 
                            </GenerationPipeItemStyled>
                            <span>{perc}%</span>
                        </li>
                    )
                })}
            </GenerationPipeStyled>
        </GenerationStyled>
    )

}

export default GenerationPattern