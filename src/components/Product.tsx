import { useEffect, useState } from "react";

export const Products = () => {
    const [products, setProducts] = useState([])

    interface Items {
        id: string
        title: string,
        description: string,
        price: number,
        image: string,
        gender: string,
        slug: number,
        stok: number,
        filename: string
    }

    const API_URL = 'http://localhost:3000'
    const PRODUCT_ENDPOINT = 'product'

    const getProduct = async () => {
        const response = await fetch(`${API_URL}/${PRODUCT_ENDPOINT}`)
        const data = await response.json()
        setProducts(data)
        console.log(data)
    }
    useEffect(() => {
        getProduct()
    }, [])
    return (
        <div>
            <h1>Products</h1>
            <div>
                {products.map((product: Items) =>(
                    <div key={product.id}>
                        <h3>{product.title}</h3>
                        <p>Description: {product.description}</p>
                        <p>Price: {product.price}</p>
                        <p>Image: {product.image}</p>
                        <p>Gender: {product.gender}</p>
                        <p>Slug: {product.slug}</p>
                        <p>Stok: {product.stok}</p>
                        <p>Filename: {product.filename}</p>
                    </div>

                ) )}
            </div>
        </div>
    )
}