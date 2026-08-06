import type { Game } from "../types/game";
import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

export type CartItem = Game & {
    quantity:number
}

type CartState = {
    items:CartItem[]
}

const initialState: CartState = {
    items:[],
}

const cartSlice = createSlice({
    name:"cart",
    initialState,
    reducers:{
        sepeteEkle(state,action:PayloadAction<Game>){
          const sepettekiUrun = state.items.find((item)=>item.id === action.payload.id)
            if(sepettekiUrun){
                sepettekiUrun.quantity += 1;
            }else{
                state.items.push({
                    ...action.payload,
                    quantity:1
                })
            }
        },
        arttir(state,action:PayloadAction<number>){
             const sepettekiUrun = state.items.find((item)=>item.id === action.payload)
             if(!sepettekiUrun) return 
             sepettekiUrun.quantity+=1
        },
         azalt(state,action:PayloadAction<number>){
             const sepettekiUrun = state.items.find((item)=>item.id === action.payload)
             if(sepettekiUrun && sepettekiUrun.quantity>0){
                sepettekiUrun.quantity-=1
             }
        },
        sepettenSil(state,action:PayloadAction<number>){
            state.items = state.items.filter((item)=>item.id !== action.payload)      
        }
    }
})

export default cartSlice.reducer;
export const { sepeteEkle ,arttir ,azalt ,sepettenSil } = cartSlice.actions;