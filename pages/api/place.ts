import type { NextApiRequest, NextApiResponse } from 'next';
import { IPlace } from '../../types/place'

const places: IPlace[] = [
    {
        location: "Japan",
        description: "Good Country"
    },
]

export default function handler(_req: NextApiRequest, res: NextApiResponse) {
    res.status(200).json(places)
}