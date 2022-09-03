import type { NextApiRequest, NextApiResponse } from 'next';
import { IPlace } from '../../../types/place';


export const places: IPlace[] = [
    {   _id:"yuggh4545621rr",  
        location: { locationCity: "Kyoto", locationCountry: "Japan" },
        description: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the",
        imgUrl: "/images/japan.jpg",
        slug: 'kyoto',
        rating: 9,
        duration: 10,

    },
    {   _id:"w77367623hj",
        location: { locationCity: "Venezia", locationCountry: "Italy" },
        description: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the",
        imgUrl: "/images/italy.jpg",
        slug: 'venezia',
        rating: 6,
        duration: 5,
    },

]




export default function handler(_req: NextApiRequest, res: NextApiResponse) {
    res.status(200).json(places)
}