import styles from "./Footer.module.scss";
import { useRouter } from 'next/router';


interface INavItem {
    name:string,
    link:String,
}
const Footer = () => {

    const { push, pathname } = useRouter();


    const navItems:INavItem[] = [
        {
            name: 'home',
            link: '/'
        },
        {
            name: "explore",
            link: "/explore"
        },
        {
            name: "place",
            link: "/place/kyoto"
        },
        {
            name: "person",
            link: "/profile"
        }
    ]
    return (
        <div className={styles.footer}>
            <nav>
                {navItems.map(item => {
                    return <button className={pathname === item.link ? styles.active : ""} key={item.name} onClick={() => { push(item.link) }}>
                        <span className="material-icons">{item.name}</span>
                    </button>
                })}
            </nav>
        </div>
    )
}

export default Footer;