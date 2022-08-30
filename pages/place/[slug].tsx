import { useRouter } from 'next/router';
import Layaot from '../../components/common/Layout';
import { BASE_URL } from '../../constants/index';
import { GetServerSideProps, GetStaticProps, NextPage, GetStaticPaths } from 'next';
import { IPlace } from '../../types/place';


export const getStaticPaths: GetStaticPaths = async () => {
    const res = await fetch(`${BASE_URL}/places`)
    const place = await res.json()

    const paths = place.map(post => ({
        params: { slug: post.slug },
    }))

    return { paths, fallback: true }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
    const res = await fetch(`${BASE_URL}/places/${params.slug}`)
    const place = await res.json()

    return { props: { place } }
}

interface IPlaceChoice {
    place: IPlace[]
}

const Place: NextPage<IPlaceChoice> = ({ place }) => {

    return (
        <>
            <Layaot><h2>Place : {place.slug}</h2></Layaot>
        </>

    );
}

export default Place