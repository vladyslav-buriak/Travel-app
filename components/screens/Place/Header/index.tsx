import { FC } from "react";
import BackButton from "./BackButton";
import Favorite from "./Favorite";
import styles from "./Header.module.scss";

const Header: FC = () => {
    return (
        <div className={styles.wrapp}>
            <BackButton />
            <Favorite />
        </div>
    )
}

export default Header;