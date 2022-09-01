import { FC, useState } from "react";
import { FaFolderPlus } from 'react-icons/fa';
import styles from "./Header.module.scss";
import Link from "../../../../node_modules/next/link";
import { IFavorite } from "../../../../types/place";


const Favorite: FC = () => {

    const favorite:IFavorite[] = [
        { name: 'Italy', slug: 'venezia' },
        { name: 'Japan', slug: 'kyoto' },
        { name: 'Norway', slug: 'oslo' },
        { name: 'Germany', slug: 'berlin' },
    ]

    const [isOpen, setIsOpen] = useState(false);
    return (

        <div className={styles.wrappBtn}>
            <button className={styles.btn} onClick={() => { setIsOpen(!isOpen) }}>
                <span><FaFolderPlus size={20} /></span>
            </button>

            {isOpen && (<ul className={styles.menu}>
                {favorite.map(f => {
                    return <li key={f.slug}><Link href={`${f.slug}`}>
                        <a>{f.name}</a>
                    </Link></li>
                })}
            </ul>)}

        </div>

    )
}

export default Favorite