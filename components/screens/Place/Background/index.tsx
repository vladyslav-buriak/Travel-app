import { FC } from "react";
import styles from "./Background.module.scss";


interface IBackProps {
    children: React.ReactNode;
    imgUrl: string;
};

const BackGround: FC<IBackProps> = ({ children, imgUrl }) => {
    return (
        <div className={styles.background} style={{backgroundImage:`url(${imgUrl})`}}>
            <div>
            {children}
            </div>
        </div>
    )
}

export default BackGround