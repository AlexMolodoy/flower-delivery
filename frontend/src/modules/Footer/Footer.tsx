import { Typography } from 'antd'
import styles from './Footer.module.scss'
import Mastercard from '../../assets/Mastercard_icon.png'
import Visa from '../../assets/Visa_icon.png'
import Mir from '../../assets/Mir_icon.png'
import Instagram from '../../assets/Instagram_icon.png'
import Phone from '../../assets/Phone_icon.png'
import { TShopData } from '../../types.ts'

const Footer = ({ phone, instagram, address }: TShopData) => {
    return (
        <div className={styles.footerContainer}>
            <div className={styles.footer}>
                <div className={styles.servicesContainer}>
                    <Typography.Title level={5} className={styles.footerLinks}>
                        SERVICES
                    </Typography.Title>
                    <a href="/" className={styles.footerLinks} target="_blank">
                        Privacy Policy
                    </a>
                    <a href="/" className={styles.footerLinks} target="_blank">
                        Cancellation & Refund
                    </a>
                    <a href="/" className={styles.footerLinks} target="_blank">
                        Terms & Services
                    </a>
                </div>
                <div className={styles.contactsContainer}>
                    <Typography.Title level={5} className={styles.footerLinks}>
                        CONTACTS
                    </Typography.Title>
                    <a href="/" target="_blank" className={styles.footerLinksContainer}>
                        <img src={Instagram} alt="Instagram icon" className={styles.instagramIcon} />
                        <Typography.Text>{instagram}</Typography.Text>
                    </a>
                    <a href="/" target="_blank" className={styles.footerLinksContainer}>
                        <img src={Phone} alt="Phone icon" className={styles.phoneIcon} />
                        <Typography.Text>{phone}</Typography.Text>
                    </a>
                    <Typography.Text className={styles.footerLinks}>Pick Up Address:</Typography.Text>
                    <Typography.Text className={styles.footerLinks}>{address}</Typography.Text>
                </div>
                <div className={styles.paymentsContainer}>
                    <img src={Mastercard} className={styles.footerIconSize} alt="Mastercard icon" />
                    <img src={Mir} className={styles.mir} alt="Mir icon" />
                    <img src={Visa} className={styles.footerIconSize} alt="Visa icon" />
                </div>
            </div>
            <Typography.Text className={styles.rights}>©2022 StrawBarbie</Typography.Text>
        </div>
    )
}

export default Footer
