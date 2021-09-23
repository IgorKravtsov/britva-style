import React from "react";
import { ISource } from "../../models/ISource";


const Source:React.FC<ISource> = (
{
    type,
    media,
    srcSet
}) => {
    return (
        <source type={type} media={media} srcSet={srcSet}/>
    )
}

export default Source;