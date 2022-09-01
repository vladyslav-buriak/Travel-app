import { FC } from "react";
import Layaot from "../../common/Layout";
import IPlace from "../../../types";
import BookTrip from "../../screens/Place/BookTrip";
import Info from "../../screens/Place/Info";
import Header from "./Header/index";
import BackGround from "./Background/index";

interface IPlaceProps {
    place: IPlace
}

const Place: FC<IPlaceProps> = ({ place }) => {
    return (
        <>
            <Layaot isMaxWidth={false}>
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