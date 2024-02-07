import { ProductsData } from '../../Mock/MockProductsPreview/MockProductsPreview.ts'
import ProductCardPreview from '../../components/ProductCardPreview/ProductCardPreview.tsx'
import { Typography } from 'antd'
import styles from './BestSellers.module.scss'

const BestSellers = () => {
    const productsPreview = ProductsData.slice(0, 4).map(({ title, price }) => (
        <ProductCardPreview title={title} price={price} />
    ))
    return (
        <div className={styles.BestSellersContainer}>
            <Typography.Title level={4} style={{ textAlign: 'center' }}>
                OUR BEST SELLERS
            </Typography.Title>
            <Typography.Text style={{ textAlign: 'center', margin: '10px 0' }}>
                Select a category or go to the section with a convinient filter by product
            </Typography.Text>
            <div className={styles.BestSellersCardsContainer}>{productsPreview}</div>
        </div>
    )
}

export default BestSellers
