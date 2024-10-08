// import { createAsyncThunk } from "@reduxjs/toolkit";

// export const fetchgetAllProduct = createAsyncThunk("products/allProducts",async ()=> {
//     const respons = await fetch(`http://localhost:8000/data`)
//     const data = await respons.json()
//     return data
// })


import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchgetAllProduct = createAsyncThunk(
  'products/allProducts',
  async () => {
    const response = await fetch('/data.json');
    if (!response.ok) {
      throw new Error(`Error: ${response.status} ${response.statusText}`);
    }
    const data = await response.json();
    return data.data; // Adjust according to your JSON structure
  }
);
