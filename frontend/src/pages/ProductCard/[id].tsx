import { Alert, Typography } from 'antd'
import { ProductsData } from '../../Mock/MockProductsPreview/MockProductsPreview.ts'
import { useNavigate, useLocation } from 'react-router-dom'

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
            .split(',')
            .slice(1)
            .map((photo: string | undefined) => <img src={photo} alt="" />) ?? []
    return (
        <div>
            <div>
                <div>{photosBlock}</div>
                <img src={product.imagePath.slice(0, 1)} alt="" />
            </div>
            <div>
                <Typography.Title>{product.title}</Typography.Title>
                <Typography.Text>{product.price}</Typography.Text>
                <Typography.Text>{product.description}</Typography.Text>
            </div>
        </div>
    )
}

export default ProductCard
