import { useEffect, useState } from "react";


export function useFetch<T>(url: string) {
    const [data, setData] = useState<T | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        async function veriGetir() {
            try {
                const response = await fetch(url);
                if (!response.ok) {
                    throw new Error("İstek başarisiz");
                }
                const sonuc = await response.json()
                setData(sonuc)
            } catch (error) {
                setError("Bir hata oluştu")
            } finally {
                setLoading(false)
            }
        }
        veriGetir()
    }, [url])
    return { data, loading, error }
}