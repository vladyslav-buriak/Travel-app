import Footer from "./footer/Footer";
import { FC } from "react";

interface IChildren {
    children: React.ReactNode;
};

const Layaot: FC<IChildren> = ({ children }) => {
    return (
        <>
            <div style={{maxWidth:'670px',margin:'0 auto'}}>
                {children}
            </div>

            <Footer />
        </>
    )
}

export default Layaot