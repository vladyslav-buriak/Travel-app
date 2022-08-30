import { GetServerSideProps, GetStaticProps, NextPage } from 'next';
import Layaot from '../components/common/Layout';
import HeaderSection from '../components/elements/Home/HeaderSection/index';
import Filters from '../components/elements/Filters/index';
import PopularPlaces from '../components/elements/Home/PopularPlaces/index';
import { BASE_URL } from '../constants/index';
import { IPlace } from '../types/place';
import { useState } from 'react';

interface IHome {
  initialState: IPlace[];
}
const Home: NextPage<IHome> = ({ initialState }) => {
  const [places ,setPlaces] = useState(initialState);
  const [isLoading,setIsLoading] = useState(false);
  

  return (
    <Layaot>
      <HeaderSection initialState={initialState} setPlaces={setPlaces} isLoading={setIsLoading} />
      <div className="sm-container">
        <Filters setPlaces={setPlaces} initialState={initialState}  />
        <PopularPlaces places={places} isLoading={isLoading} />
      </div>
    </Layaot>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const res = await fetch(`${BASE_URL}/places`);
  const initialState = await res.json();
  return {
    props: {
      initialState
    }
  }
};

export default Home;