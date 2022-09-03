import { FC } from "react";
import Link from "../../../../node_modules/next/link";
import { IPlace } from "../../../../types/place";
import styles from "./PopularPlaces.module.scss";
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

interface IPopularPlaces {
    places: IPlace[];
    isLoading: boolean;
}

const PopularPlaces: FC<IPopularPlaces> = ({ places, isLoading }) => {
    return (
        <div className={styles.popularPlaces}>
            <h2 className={styles.title}>Popular Places</h2>
            <div className={styles.itemWrapp}>
                {isLoading ? <div>
                    <Skeleton count={2} height={300} borderRadius={'2rem'} baseColor="#1b1b1d" highlightColor="#444" />
                </div> : places.length ? places.map(p => {
                    return <Link href={`/place/${p.slug}`} key={p._id}><div className={styles.item} style={{ backgroundImage: `url(${p.imgUrl})` }}>
                        <span>
                            {p.location.locationCity}, {p.location.locationCountry}
                        </span>

                    </div></Link>
                }) : <h2 className={styles.notFound}>Places not found</h2>

                }

            </div>
        </div>

    )

}

export default PopularPlaces