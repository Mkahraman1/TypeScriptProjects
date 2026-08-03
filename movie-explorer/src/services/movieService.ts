import type { Movie } from "../types/movie"

type TvMazeSearchResult = {
    show: {
        id: number
        name: string
        summary: string | null
        image: {
            medium: string
            original: string
        } | null
    }
}

export async function getMovies(): Promise<Movie[]> {
    const response = await fetch(
        "https://api.tvmaze.com/search/shows?q=batman"
    )

    if (!response.ok) {
        throw new Error("Filmler alınamadı")
    }

    const data: TvMazeSearchResult[] = await response.json()

    return data.map((result) => ({
        id: result.show.id,
        name: result.show.name,
        summary:
            result.show.summary
                ?.replace(/<[^>]*>/g, "")
                .slice(0, 140) + "..." || "Açıklama bulunamadı",
        image: result.show.image?.medium ?? null,
    }))
}

export async function getMovieById(id: number): Promise<Movie> {
    const response = await fetch(
        `https://api.tvmaze.com/shows/${id}`
    )

    if (!response.ok) {
        throw new Error("Film bulunamadı")
    }

    const data = await response.json()

    const movie: Movie = {
        id: data.id,
        name: data.name,
        summary:
            data.summary?.replace(/<[^>]*>/g, "") ??
            "Açıklama bulunamadı",
        image: data.image?.original ?? null,
    }

    return movie
}