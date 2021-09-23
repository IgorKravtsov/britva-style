import { ISource } from "../../models/ISource";


export const pictureSources: ISource[] = [
    { type:'image/webp', media:'(min-width: 577px)', srcSet:process.env.PUBLIC_URL + '/img/hero_image.png'}
]