import Lupa from '../../assets/icons/Lupa.png'
import Carrito from '../../assets/icons/Carrito.png'
import Home from '../../assets/icons/Home.png'
import { useNavigate } from 'react-router-dom'

export default function NavBar() {
    const navigate = useNavigate();

    function handleClickHome() {
        navigate('/home');
    }
    
    return (
        <>
            <nav>
                <div className="flex justify-center items-center p-7 gap-3">
                    <div>
                        <button onClick={handleClickHome} className='flex justify-center items-center cursor-pointer p-1 transition-transform duration-300 hover:scale-120'>
                            <img src={Home} className='w-10 h-10' alt="Icono de casa" />
                        </button>
                    </div>
                    <div className="flex bg-white rounded-2xl overflow-hidden hover:shadow-md transition-shadow duration-200">
                        <div className="px-3 py-2">
                            <img src={Lupa} className="w-5 h-5" alt="Icono de lupa" />
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
