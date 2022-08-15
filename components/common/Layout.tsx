import Footer from "./footer/Footer";
import { FC } from "react";

interface IChildren {
    children: React.ReactNode;
};

const Layaot: FC<IChildren> = ({ children }) => {
    return (
        <>
            {children}

            <Footer />
        </>
    )
}

export default Layaot