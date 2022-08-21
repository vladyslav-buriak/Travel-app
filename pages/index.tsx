import { GetServerSideProps, GetStaticProps, NextPage } from 'next';
import styles from '../assets/styles/Home.module.css';
import Layaot from '../components/common/Layout';
import HeaderSection from '../components/elements/Home/HeaderSection/index';
import Search from '../components/elements/Search/index';
import Filters from '../components/elements/Filters/index';
import PopularPlaces from '../components/elements/Home/PopularPlaces/index';
import { BASE_URL } from '../constants/index';

import { IPlace } from '../types/place';

interface IHome {
  places: IPlace[]
}
const Home: NextPage<IHome> = ({ places }) => {

  return (
    <Layaot>
      <HeaderSection places={places} />
      <div className="sm-container">
        <Filters />
        <PopularPlaces places={places} />
      </div>

    </Layaot>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const res = await fetch(`${BASE_URL}/place`);
  const places = await res.json();
  return {
    props: {
      places
    }
  }
};

export default Home;