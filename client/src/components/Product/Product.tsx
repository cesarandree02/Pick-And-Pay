export default function Product() {
    return (
        <>
            <div className="p-5">
                <div className="flex justify-center items-center">
                    <h2 className="font-outfit font-bold text-2xl">Elige Un Tipo De Producto</h2>
                </div>
                <div className="flex justify-center items-center p-5 gap-10">
                    <div className="flex flex-col gap-y-0.5">
                        <div className="bg-white rounded-xl flex justify-center items-center w-25 h-25">
                            1
                        </div>
                        <div className="flex justify-center items-center">
                            <h4 className="text-sm">Producto 1</h4>
                        </div>
                    </div>
                    <div className="flex flex-col gap-y-0.5">
                        <div className="bg-white rounded-xl flex justify-center items-center w-25 h-25">
                            2
                        </div>
                        <div className="flex justify-center items-center">
                            <h4 className="text-sm">Producto 1</h4>
                        </div>
                    </div>
                    <div className="flex flex-col gap-y-0.5">
                        <div className="bg-white rounded-xl flex justify-center items-center w-25 h-25">
                            3
                        </div>
                        <div className="flex justify-center items-center">
                            <h4 className="text-sm">Producto 1</h4>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}