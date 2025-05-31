import { useEffect, useState } from "react";
import axiosClient from "../../lib/axios";
import type { Category } from "../../types/Category";

export default function Product() {
    const [categories, setCategories] = useState<Category[]>([]);

    useEffect(() => {
        async function fetchCategories() {
            try {
                const response = await axiosClient.get("/categories");
                setCategories(response.data);
            } catch (error) {
                console.error("Error al cargar las categorias: ", error);
            }
        };

        fetchCategories();
    }, []);
    
    return (
        <>
            <div className="p-5">
                <div className="flex justify-center items-center">
                    <h2 className="font-outfit font-bold text-2xl">Elige Un Tipo De Producto</h2>
                </div>
                <div className="flex justify-center items-center p-5 gap-10">
                    {categories.map((category) => (
                        <div key={category.id} className="flex flex-col gap-y-0.5">
                            <div className="bg-white rounded-xl flex justify-center items-center w-25 h-25">
                                <img className="w-20 h-20" src={category.image_url} alt={`Logo ${category.name}`} />
                            </div>
                            <div className="flex justify-center items-center">
                                <h4 className="text-sm">{category.name}</h4>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}