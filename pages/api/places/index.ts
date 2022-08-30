import type { NextApiRequest, NextApiResponse } from 'next';
import { IPlace } from '../../../types/place'

export const places: IPlace[] = [
    {
        location: { locationCity: "Kyoto", locationCountry: "Japan" },
        description: "Good Country",
        imgUrl: "/images/japan.jpg",
        slug: 'kyoto',

    },
    {
        location: { locationCity: "Venezia", locationCountry: "Italy" },
        description: "Good Country",
        imgUrl: "/images/italy.jpg",
        slug: 'venezia',
    },
]




export default function handler(_req: NextApiRequest, res: NextApiResponse) {
    res.status(200).json(places)
}