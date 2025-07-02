import axios from "axios";
import { type NavigateFunction } from "react-router-dom";

export interface User {
    id: number;
    name: string;
    email: string;
    role: string;
}

export async function checkUserAndRedirect(navigate: NavigateFunction): Promise<void> {
    const token = localStorage.getItem('token');

    if (!token) {
        navigate('/login');
        return;
    }

    try {
        const response = await axios.get<User>('http://localhost:8000/api/user', {
            headers: {
                Authorization: `Bearer ${token}`,
                Accept: 'application/json',
            },
        });

        const user = response.data;

        if (user.role === 'admin') {
            navigate('/admin');
        } else {
            navigate('/profile');
        }
    } catch (error) {
        console.error('Error al autenticar al usuario:', error);
        navigate('/login');
    }
}