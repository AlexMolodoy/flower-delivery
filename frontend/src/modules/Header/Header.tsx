import styles from './Header.module.scss'
import MainLogo from '../../assets/Logo_icon.png'
import PersonIcon from '../../assets/Person_icon.png'
import DeliveryIcon from '../../assets/Delivery_icon.png'
import CartIcon from '../../assets/Cart_icon.png'
import { Button, Divider, Input, Typography } from 'antd'
import { MenuOutlined } from '@ant-design/icons'
import { useState } from 'react'

const { Search } = Input

const headerNavigationLinks = [
    {
        title: 'SHOP ALL',
        path: '/products',
    },
    {
        title: 'BY PRICE',
        path: '/products?sort=by_price',
    },
    {
        title: 'CONTACTS',
        path: '',
    },
]

const Header = () => {
    const [openMenuNav, setOpenMenuNav] = useState(false)
    const headerNavigationButtons = headerNavigationLinks.map(({ title, path }) => (
        <a className={styles.headerNavigationItems} href={path}>
            {title}
        </a>
    ))

    return (
        <div className={styles.headerContainer}>
            <div className={styles.headerMenu}>
                <Typography.Link href={'/'}>
                    <img src={MainLogo} className={styles.headerMenuLogo} alt="Main logo" />
                </Typography.Link>
                {/*<Search className={styles.headerMenuSearch} />*/}
                <div className={styles.headerMenuNavigation}>
                    <Button type="text">
                        <img src={DeliveryIcon} alt="Delivery icon" />
                    </Button>
                    {/*<a href="/person">*/}
                    {/*    <img src={PersonIcon} alt="Person icon" />*/}
                    {/*</a>*/}
                    <Button type="text">
                        <img src={CartIcon} alt="Cart icon" />
                    </Button>
                    <Button
                        type="text"
                        className={styles.headerMenuNavButton}
                        icon={<MenuOutlined />}
                        onClick={() => {
                            setOpenMenuNav(!openMenuNav)
                        }}
                    />
                </div>
            </div>
            <Divider className={styles.headerDivider} />
            <div className={openMenuNav ? styles.headerNavigation : styles.invis}>{headerNavigationButtons}</div>
        </div>
    )
}

export default Header
