import { GetServerSideProps, GetStaticProps, NextPage } from 'next';
import styles from '../assets/styles/Home.module.css';
import Layaot from '../components/common/Layout';
import SearchSection from '../components/elements/Home/SearchSection/index';

import { IPlace } from '../types/place';

interface IHome {
  places: IPlace[]
}
const Home: NextPage<IHome> = ({ places }) => {

  return (
    <Layaot>
      <SearchSection />
    </Layaot>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const res = await fetch('http://localhost:3000/api/place');
  const places = await res.json();
  return {
    props: {
      places
    }
  }
};

export default Home;