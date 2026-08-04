import type { User } from "../types/user"

export const getUsers = async (): Promise<User[]> => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users")
    if (!response.ok) {
        throw new Error("Kullanicilar alinamadi")
    }
    const data = await response.json()
    return data
}

export const getUserById = async (id: number): Promise<User> => {
    const response = await fetch(
        `https://jsonplaceholder.typicode.com/users/${id}`
    );

    if (!response.ok) {
        throw new Error("Kullanıcı alınamadı");
    }

    const data = await response.json();

    return data;
};