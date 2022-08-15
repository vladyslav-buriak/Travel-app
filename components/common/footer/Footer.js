import styles from "./Footer.module.scss"
import { useRouter } from 'next/router'

const Footer = () => {

    const { push, pathname } = useRouter()
    const s = useRouter();
    console.log(s.pathname)

    const navItems = [
        {
            name: 'home',
            link: '/'
        },
        {
            name: "explore",
            link: "/explore"
        },
        {
            name: "location_on",
            link: "/location"
        },
        {
            name: "person",
            link: "/person"
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