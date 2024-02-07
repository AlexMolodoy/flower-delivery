import styles from './Header.module.scss'
import MainLogo from '../../assets/Logo_icon.png'
import PersonIcon from '../../assets/Person_icon.png'
import DeliveryIcon from '../../assets/Delivery_icon.png'
import CartIcon from '../../assets/Cart_icon.png'
import { Button, Divider, Input } from 'antd'
import { MenuOutlined } from '@ant-design/icons'

const { Search } = Input

const headerNavigationLinks = [
    {
        title: 'SHOP ALL',
        path: '/',
    },
    {
        title: 'BY PRICE',
        path: '/',
    },
    {
        title: 'CONTACTS',
        path: '',
    },
]

const Header = () => {
    const headerNavigationButtons = headerNavigationLinks.map(({ title, path }) => (
        <a className={styles.headerNavigationItems} href={path}>
            {title}
        </a>
    ))

    return (
        <div className={styles.headerContainer}>
            <div className={styles.headerMenu}>
                <img src={MainLogo} className={styles.headerMenuLogo} alt="Main logo" />
                {/*<Search className={styles.headerMenuSearch} />*/}
                <div className={styles.headerMenuNavigation}>
                    <a href="/delivery">
                        <img src={DeliveryIcon} alt="Delivery icon" />
                    </a>
                    <a href="/person">
                        <img src={PersonIcon} alt="Person icon" />
                    </a>
                    <a href="/cart">
                        <img src={CartIcon} alt="Cart icon" />
                    </a>
                    <Button type="text" icon={<MenuOutlined />} />
                </div>
            </div>
            <Divider className={styles.headerDivider} />
            <div className={styles.headerNavigation}>{headerNavigationButtons}</div>
        </div>
    )
}

export default Header
