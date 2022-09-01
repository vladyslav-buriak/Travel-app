import styles from "./Header.module.scss";
import { FaArrowLeft } from 'react-icons/fa';
import { FC } from "react";
import { useRouter } from 'next/router'


const BackButton: FC = () => {

    const router = useRouter();

    const goBack = () => {
        router.push("/")
    }

    return (

        <button onClick={goBack} className={styles.btn}>
            <span><FaArrowLeft size={18} /></span>
        </button>

    )
}

export default BackButton