import { Typography } from 'antd'
import styles from './AboutUs.module.scss'
import AboutUsImage from '../../assets/AboutUs_image.png'
import ColorDivider from '../../components/ColorDivider/ColorDIvider.tsx'

const AboutUs = () => {
    return (
        <>
            <ColorDivider />
            <div className={styles.aboutUsContainer}>
                <img src={AboutUsImage} className={styles.aboutUsPhoto} alt="Photo" />
                <div className={styles.aboutUsTextContainer}>
                    <Typography.Title level={5} className={styles.aboutUsTitle}>
                        ABOUT US
                    </Typography.Title>
                    <Typography.Text className={styles.aboutUsText}>
                        ABOUT US We are not the only sellers of chocolate dipped strawberries and flowers in Sydney, but
                        we are probably the only ones who combine the Finest Belgian Chocolate, Strawberries with Fresh
                        Cut Flowers to bring happiness to you and your loved ones. We will never be below your
                        expectations and will do our best to stay a part of your memories.
                    </Typography.Text>
                    <br />
                    <br />
                    <Typography.Link href="/" className={styles.aboutUsLink}>
                        GO TO INSTAGRAM
                    </Typography.Link>
                </div>
            </div>
            <ColorDivider />
        </>
    )
}

export default AboutUs
