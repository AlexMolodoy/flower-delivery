import { Alert, Button, Typography } from 'antd'
import { ProductsData } from '../../Mock/MockProductsPreview/MockProductsPreview.ts'
import { useNavigate, useLocation } from 'react-router-dom'
import styles from './Product.module.scss'

const ProductCard = () => {
    const navigate = useNavigate()
    const location = useLocation().pathname.split('/')[useLocation().pathname.split('/').length - 1]

    const product = ProductsData.find(({ id }) => location === id)

    if (ProductsData.length === 0 || !product) {
        return (
            <Alert
                message="No such product"
                description="No such product"
                type="error"
                closable
                onClose={() => {
                    navigate('/')
                }}
            />
        )
    }
    const photosBlock =
        product.imagePath
            .slice(1)
            .map((photo: string | undefined) => <img src={photo} className={styles.photo_s} alt="" />) ?? []
    return (
        <div className={styles.productContainer}>
            <div className={styles.photoContainer}>
                <div className={styles.photoBlock}>{photosBlock}</div>
                <img src={product.imagePath[0]} className={styles.photo} alt="" />
            </div>
            <div className={styles.textContainer}>
                <Typography.Title className={styles.title}>{product.title}</Typography.Title>
                <Typography.Text className={styles.price}>{product.price}</Typography.Text>
                <Typography.Text className={styles.text}>{product.description}</Typography.Text>
                <Button className={styles.cartButton}>Go to cart: {product.price}</Button>
            </div>
        </div>
    )
}

export default ProductCard
