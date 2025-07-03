import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axiosClient from "../../lib/axios";

export default function Register() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [passwordConfirmation, setPasswordConfirmation] = useState("");
    const navigate = useNavigate();

    async function handleRegister (e: React.FormEvent) {
        e.preventDefault();

        try {
            await axiosClient.post("/register", {
                name,
                email,
                password,
                password_confirmation: passwordConfirmation, // Laravel espera este nombre
            });

            // Redirigir a login si el registro fue exitoso
            navigate("/login");
        } catch (error: any) {
            console.error("Error al registrar usuario:", error.response?.data || error.message);
        }
    };

    return (
        <main className="bg-gray-custom min-h-screen font-outfit">
            <div className="flex flex-col items-center justify-center min-h-screen p-5">
                <div className="bg-white p-8 rounded-2xl shadow-md w-full max-w-sm">
                    <h2 className="text-2xl font-bold text-center mb-6">Crear Cuenta</h2>
                    <form onSubmit={handleRegister} className="flex flex-col gap-4">
                        <input
                            type="text"
                            placeholder="Nombre completo"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                            className="border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                        />
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
                        <input
                            type="password"
                            placeholder="Confirmar contraseña"
                            value={passwordConfirmation}
                            onChange={(e) => setPasswordConfirmation(e.target.value)}
                            required
                            className="border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                        />
                        <button
                            type="submit"
                            className="bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-300 cursor-pointer"
                        >
                            Registrarse
                        </button>
                    </form>

                    <div className="flex flex-col items-center mt-4 text-sm">
                        <span>
                            ¿Ya tienes cuenta?{" "}
                            <button
                                onClick={() => navigate("/login")}
                                className="text-blue-500 hover:underline cursor-pointer"
                            >
                                Inicia sesión
                            </button>
                        </span>
                    </div>
                </div>
            </div>
        </main>
    );
}
