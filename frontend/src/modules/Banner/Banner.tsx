import { Button, Typography } from 'antd'
import styles from './Banner.module.scss'
import ColorDivider from '../../components/ColorDivider/ColorDIvider.tsx'

const Banner = () => {
    return (
        <>
            <div className={styles.bannerContainer}>
                <Typography.Title level={5} className={styles.bannerTitle}>
                    GIFTS
                </Typography.Title>
                <Typography.Text className={styles.bannerText}>for any occasion</Typography.Text>
                <Typography.Link href="/products" className={styles.bannerLink}>
                    GO TO SHOP
                </Typography.Link>
            </div>
            <ColorDivider />
        </>
    )
}

export default Banner
