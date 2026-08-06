import {
  createAsyncThunk,
  createSlice,
  type PayloadAction,
} from "@reduxjs/toolkit"

import type { Game } from "../types/game"

type ApiGame = {
  id: number
  title: string
  thumbnail: string
  genre: string
  platform: string
}

type GamesState = {
  games: Game[]
  loading: boolean
  error: string
}

const initialState: GamesState = {
  games: [],
  loading: false,
  error: "",
}

export const getGames = createAsyncThunk<Game[]>(
  "games/getGames",
  async () => {
    const response = await fetch(
      "https://www.freetogame.com/api/games"
    )

    if (!response.ok) {
      throw new Error("Oyunlar alınamadı")
    }

    const data: ApiGame[] = await response.json()

    const games: Game[] = data.slice(0, 20).map((item, index) => {
      return {
        id: item.id,
        name: item.title,
        image: item.thumbnail,
        category: item.genre,
        platform: item.platform,
        price: (index + 1) * 150,
      }
    })

    return games
  }
)

const gamesSlice = createSlice({
  name: "games",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getGames.pending, (state) => {
        state.loading = true
        state.error = ""
      })

      .addCase(
        getGames.fulfilled,
        (state, action: PayloadAction<Game[]>) => {
          state.loading = false
          state.games = action.payload
        }
      )

      .addCase(getGames.rejected, (state, action) => {
        state.loading = false
        state.error =
          action.error.message ?? "Bir hata oluştu"
      })
  },
})

export default gamesSlice.reducer