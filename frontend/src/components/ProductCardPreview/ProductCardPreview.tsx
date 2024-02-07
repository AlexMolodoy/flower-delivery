import styles from './ProductCardPreview.module.scss'
import { Typography } from 'antd'
import Product_1 from '../../assets/Product_1_image.png'
import Bag from '../../assets/Bag_icon.png'
import NoBag from '../../assets/No_Bag_icon.png'

type ProductCardPreviewProps = {
    title: string
    price: string
    inBag?: boolean
}

const ProductCardPreview = ({ title, price, inBag = true }: ProductCardPreviewProps) => {
    return (
        <div className={styles.ProductCardPreviewContainer}>
            <img src={Product_1} alt="Product image" />
            <div className={styles.ProductCardPreviewTextTemplate}>
                <div className={styles.ProductCardPreviewTextContainer}>
                    <Typography.Title level={5} className={styles.ProductCardPreviewTextTitle}>
                        {title}
                    </Typography.Title>
                    <Typography.Text className={styles.ProductCardPreviewText}>{price}</Typography.Text>
                </div>
                <div style={{ cursor: 'pointer' }} onClick={() => {}}>
                    <img src={inBag ? Bag : NoBag} alt="Bag icon" />
                </div>
            </div>
        </div>
    )
}

export default ProductCardPreview
