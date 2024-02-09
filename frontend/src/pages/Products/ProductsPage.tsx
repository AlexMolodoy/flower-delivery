import ColorDivider from '../../components/ColorDivider/ColorDIvider.tsx'
import { ProductsData } from '../../Mock/MockProductsPreview/MockProductsPreview.ts'
import ProductCardPreview from '../../components/ProductCardPreview/ProductCardPreview.tsx'
const ProductsPage = () => {
    const productsPreview = ProductsData.map(({ title, price, id }) => (
        <ProductCardPreview title={title} price={price} id={id} />
    ))
    return (
        <>
            <ColorDivider />
            {productsPreview}
            <ColorDivider />
        </>
    )
}

export default ProductsPage
