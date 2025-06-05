import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axiosClient from "../../lib/axios";
import type { Product } from "../../types/Product";

export default function Products() {
    const [products, setProducts] = useState<Product[]>([]);
    const navigate = useNavigate();
    const { categoryId } = useParams();

    useEffect(() => {
        async function fetchProducts() {
            try {
                const response = await axiosClient.get(`/categories/${categoryId}/products`);
                setProducts(response.data);
            } catch (error) {
                console.error("Error al cargar las categorias: ", error);
            }
        };

        fetchProducts();
    }, []);

    function handleClick(id: number) {
        navigate(`/categories/${categoryId}/products/${id}`);
    }
    
    return (
        <>
            <div className="p-5">
                <div className="flex justify-center items-center">
                    <h2 className="font-outfit font-bold text-2xl">Elige Un Producto</h2>
                </div>
                <div className="flex justify-center items-center p-5 gap-10 font-outfit">
                    {products.map((product) => (
                        <div key={product.id} className="flex flex-col gap-y-0.5">
                            <div onClick={() => handleClick(product.id)} className="bg-white rounded-xl flex justify-center items-center w-25 h-25 hover:cursor-pointer">
                                <img className="w-20 h-20 transition duration-300 transform hover:scale-110" src={product.image_url} alt={`Logo ${product.name}`} />
                            </div>
                            <div className="flex justify-center items-center">
                                <h4 className="text-sm text-center">{product.name}</h4>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}