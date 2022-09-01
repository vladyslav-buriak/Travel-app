import Footer from "./footer/Footer";
import { FC } from "react";

interface IChildren {
    children: React.ReactNode;
    isMaxWidth:boolean;
};

const Layaot: FC<IChildren> = ({ children,isMaxWidth = true }) => {
    return (
        <>
            <div style={{maxWidth:isMaxWidth && '670px',margin:'0 auto'}}>
                {children}
            </div>

            <Footer />
        </>
    )
}

export default Layaot