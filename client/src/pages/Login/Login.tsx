import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axiosClient from "../../lib/axios";
import { checkUserAndRedirect } from "../../utils/authHelper";

export default function Login() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    async function handleLogin(e: React.FormEvent) {
        e.preventDefault();
        
        try {
            const response = await axiosClient.post("/login", {
                email,
                password
            });

            const token = response.data.token;
            localStorage.setItem("token", token);

            await checkUserAndRedirect(navigate);
        } catch (error: any) {
            if (error.response) {
                alert(error.response.data.message || "Error al iniciar sesion");
            } else {
                alert("Error de conexion con el servidor");
            }
        }
    };

    return (
        <main className="bg-gray-custom min-h-screen font-outfit">
            <div className="flex flex-col items-center justify-center min-h-screen p-5">
                <div className="bg-white p-8 rounded-2xl shadow-md w-full max-w-sm">
                    <h2 className="text-2xl font-bold text-center mb-6">Iniciar Sesión</h2>
                    <form onSubmit={handleLogin} className="flex flex-col gap-4">
                        <input
                            type="email"
                            placeholder="Correo electrónico"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            className="border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                        />
                        <input
                            type="password"
                            placeholder="Contraseña"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            className="border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                        />
                        <button
                            type="submit"
                            className="bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-300 cursor-pointer"
                        >
                            Iniciar Sesión
                        </button>
                    </form>

                    <div className="flex flex-col items-center mt-4 text-sm">
                        <button
                            onClick={() => navigate("/forgot-password")}
                            className="text-blue-500 hover:underline mb-2 cursor-pointer"
                        >
                            ¿Olvidaste tu contraseña?
                        </button>
                        <span>
                            ¿No tienes cuenta?{" "}
                            <button
                                onClick={() => navigate("/register")}
                                className="text-blue-500 hover:underline cursor-pointer"
                            >
                                Crear cuenta
                            </button>
                        </span>
                    </div>
                </div>
            </div>
        </main>
    );
}
