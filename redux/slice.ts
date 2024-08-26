import { createSlice } from "@reduxjs/toolkit";

import { fetchgetAllProduct } from "./action";
import { RootState } from "@/Type/type";

const initialState: RootState["job"] = {
  job: [],
  id: null,
  headphone: 0,
  earphone: 0,
  speaker: 0,
  cart: 0,
  shoppingItem: [],
  identify: [],
  
};

const jobSlice = createSlice({
  name: "jobs",
  initialState,
  reducers: {
    updateSelectedId(state, action) {
      state.id = action.payload;
    },
    headphoneCount(state, action) {
      state.headphone = action.payload;
    },
    earphoneCount(state, action) {
      state.earphone = action.payload;
    },
    speakerCount(state, action) {
      state.speaker = action.payload;
    },
    sumCard(state, action) {
      state.cart += action.payload;
    },
    addToShoppingCart(state, action) {
      const { selectedItem, count } = action.payload;
      const existingItem = state.shoppingItem.find(
        (item) => item.id === selectedItem.id
      );
      // console.log(selectedItem, "sele");
      // console.log(count, "coun");
      // state.shoppingItem = [...state.shoppingItem, action.payload];

      if (existingItem) {
        existingItem.count += count;
      } else {
        const newSelectedItem = {
          ...selectedItem,
          count: (selectedItem.count || 0) + count,
        };
        console.log(newSelectedItem, "new select");
        state.shoppingItem.push(newSelectedItem);

      }
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchgetAllProduct.fulfilled, (state, action) => {
      state.job = action.payload;
    });
  },
});

export const {
  updateSelectedId,
  headphoneCount,
  earphoneCount,
  speakerCount,
  sumCard,
  addToShoppingCart,
} = jobSlice.actions;
export default jobSlice.reducer;
