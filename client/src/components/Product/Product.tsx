import { useEffect, useState } from "react"
import type { Product } from "../../types/Product";
import { useNavigate, useParams } from "react-router-dom";
import axiosClient from "../../lib/axios";

export default function Product() {
    const [product, setProduct] = useState<Product | null>(null);
    const navigate = useNavigate();
    const { categoryId, productId } = useParams();

    useEffect(() => {
        async function fetchProduct() {
            try {
                const response = await axiosClient.get(`categories/${categoryId}/products/${productId}`);
                setProduct(response.data);
            } catch (error) {
                console.error("Error al cargar el product: ", error);
            }
        }

        fetchProduct();
    },[]);

    function handleClick(id: number) {

    }
    
    return (
        <>
            <div className="p-5">
                {product ? (
                    <>
                        <div className="flex justify-center items-center">
                            <h2 className="font-bold text-2xl">{product?.name}</h2>
                        </div>
                        <div className="flex justify-center items-center p-5 gap-10">
                            <div className="flex flex-row gap-x-10">
                                <div className="bg-white rounded-xl flex justify-center items-center w-35 h-35">
                                    <img src={product.image_url} className="w-30 h-30 transition duration-300 transform hover:scale-110" />
                                </div>
                                <div className="flex flex-col gap-y-12 py-1">
                                    <div>
                                        <p className="underline">{'$' + product.price}</p>
                                        <p>{product.description}</p>
                                    </div>
                                    <div>
                                        <button className="bg-black text-white w-40 h-10 rounded-xl cursor-pointer transition-transform duration-300 hover:scale-105">Agregar 1 al carrito</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </>
                ) : (
                    <div className="flex justify-center items-center">
                        <h2 className="font-bold text-2xl">...</h2>
                    </div>
                )}
            </div>
        </>
    )
}