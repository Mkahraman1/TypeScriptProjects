import { createAsyncThunk, createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { User } from "../types/user";

type userState = {
    users: User[]
    selectedUser: User | null
    loading: boolean
    error: string
}

const initialState: userState = {
    users: [],
    selectedUser: null,
    loading: false,
    error: "",
}

export const getUsers = createAsyncThunk<User[]>(
    "users/getUsers",
    async () => {
        const response = await fetch("https://dummyjson.com/users")
        if (!response.ok) {
            throw new Error("Bir hata olustu")
        }
        const data = await response.json()
        return data.users
    }
)

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        kullaniciSec(state, action: PayloadAction<number>) {
            const secilenKullanici = state.users.find((user) => user.id === action.payload)
            if (!secilenKullanici) {
                return
            }
            state.selectedUser = secilenKullanici
        },
        seciliKullaniciyiTemizle(state) {
            state.selectedUser = null
        },
        soyadGuncelle(state, action: PayloadAction<string>) {
            if (state.selectedUser) {
                state.selectedUser.lastName = action.payload
            }
        },
        yasArttir(state) {
            if (state.selectedUser) {
                state.selectedUser.age += 1
            }
        },
        kullaniciSil(state, action: PayloadAction<number>) {
            state.users = state.users.filter((user) => user.id !== action.payload)
            if (state.selectedUser?.id === action.payload) {
                state.selectedUser = null
            }
        }
    },
    extraReducers: (builder) => {
        builder.addCase(getUsers.pending, (state) => {
            state.loading = true
            state.error = ""
        }),
            builder.addCase(getUsers.fulfilled, (state, action) => {
                state.loading = false
                state.users = action.payload
            }),
            builder.addCase(getUsers.rejected, (state, action) => {
                state.loading = false
                state.error = action.error.message ?? "Bir hata olustu"
            })
    }
})

export const {
    kullaniciSec,
    seciliKullaniciyiTemizle,
    soyadGuncelle,
    yasArttir,
    kullaniciSil,
} = userSlice.actions
export default userSlice.reducer
