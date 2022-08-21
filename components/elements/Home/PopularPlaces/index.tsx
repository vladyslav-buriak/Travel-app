import Link from "../../../../node_modules/next/link";
import styles from "./PopularPlaces.module.scss";

const PopularPlaces = ({ places }) => {
    return (
        <div className={styles.popularPlaces}>
            <h2 className={styles.title}>Popular Places</h2>
            <div className={styles.itemWrapp}>
                {places.map(p => {
                    return <Link href={`/place/${p.slug}`}><div className={styles.item} style={{ backgroundImage: `url(${p.imgUrl})` }}>
                        <span>
                            {p.location.locationCity}, {p.location.locationCountry}
                        </span>

                    </div></Link>
                })}
            </div>
        </div>
    )

}

export default PopularPlaces