import { Typography } from 'antd'
import styles from './ColorDIvider.module.scss'
import Mastercard from '../../assets/Mastercard_icon.png'
import Visa from '../../assets/Visa_icon.png'
import Mir from '../../assets/Mir_icon.png'
import Instagram from '../../assets/Instagram_icon.png'
import Phone from '../../assets/Phone_icon.png'
import { TShopData } from '../../types.ts'
import ColorDivider from '../../components/ColorDivider/ColorDIvider.tsx'
import Banner from '../../modules/Banner/Banner.tsx'
import AboutUs from '../../modules/AboutUs/AboutUs.tsx'
import BestSellers from '../../modules/BestSellers/BestSellers.tsx'

const MainPage = () => {
    return (
        <>
            <Banner />
            <BestSellers />
            <AboutUs />
        </>
    )
}

export default MainPage
