import styles from "./BookTrip.module.scss";
import { FaArrowRight } from 'react-icons/fa';

const BookTrip =()=>{
    return(
        <button className={styles.btn}>
            <span>Book a trip</span>
            <span>
                <FaArrowRight size={16}/>
            </span>

        </button>
    )
}

export default BookTrip