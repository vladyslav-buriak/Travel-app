import { FC } from "react";
import Layaot from '../../../components/common/Layout';
import { IPlace } from "../../../types/place";
import BookTrip from "./BookTrip";
import Info from "./Info";
import Header from "./Header/index";
import BackGround from "./Background/index";
import Meta from "../../../utils/Meta";

interface IPlaceProps {
    place: IPlace
}

const Place: FC<IPlaceProps> = ({ place }) => {
    return (
        <>
            <Layaot isMaxWidth={false}>
                <Meta title={place.location.locationCountry} description={`Best place for trip  ${place.location.locationCity}`} image={place.imgUrl}></Meta>
                <BackGround imgUrl={place.imgUrl}>
                    <Header />
                    <Info place={place} />
                    <BookTrip />
                </BackGround>
            </Layaot>
        </>
    )
}

export default Place