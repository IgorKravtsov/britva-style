import React from 'react';
import Source from './source';
import { ISource } from '../../models/ISource';

export interface PictureProps {
    sources: ISource[];
}

const Picture:React.FC<PictureProps> = (
{
    sources
}) => {

    const pictures = sources.map(source => { 
        return (<Source {...source}/>)
    })

    return (
        <picture>
            {pictures}
        </picture>
    )
}

export default Picture;