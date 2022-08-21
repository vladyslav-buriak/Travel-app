import { useRouter } from 'next/router';
import Layaot from '../../components/common/Layout';


const Place = () => {

    const { query: { slug } } = useRouter();
    return (
        <>
            <Layaot><h2>Place : {slug}</h2></Layaot>
        </>

    );
}

export default Place