import { useEffect, useState } from "react";

export const Size = () => {
    const [size, setSizes] = useState([])

    const API_URL = 'http://localhost:3000'
    const SIZE_ENDPOINT = 'size'

    const getSize = async () => {
        const response = await fetch(`${API_URL}/${SIZE_ENDPOINT}`)
        const data = await response.json()
        setSizes(data)
        // console.log(data)
    }
    useEffect(() => {
        getSize()
    }, [])
    return (
        <div>
            <h1>Products</h1>
            <div>
                {size.map((size: any) =>(
                    <div key={size.id}> {size.name}</div>

                ) )}
            </div>
        </div>
    )
}