import Lupa from '../../assets/icons/Lupa.png'
import Carrito from '../../assets/icons/Carrito.png'

export default function NavBar() {
    return (
        <>
            <nav>
                <div className="flex justify-center items-center p-7 gap-3">
                    <div className="flex bg-white rounded-2xl overflow-hidden hover:shadow-md transition-shadow duration-200">
                        <div className="px-3 py-2">
                            <img src={Lupa} alt="Icono de lupa" className="w-5 h-5" />
                        </div>
                        <input 
                            type="text" 
                            placeholder="Buscar Producto..."
                            className="font-outfit px-4 py-2 w-96 outline-none"
                        />
                    </div>
                    <div>
                        <button className='cursor-pointer p-2 transition-transform duration-300 hover:scale-120'>
                            <img src={Carrito} alt="Icono de carrito" className="w-6 h-6" />
                        </button>
                    </div>
                </div>
            </nav>
        </>
    )
}
