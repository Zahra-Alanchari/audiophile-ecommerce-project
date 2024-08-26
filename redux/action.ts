import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchgetAllProduct = createAsyncThunk("jobs/allJobs",async ()=> {
    const respons = await fetch(`http://localhost:8000/data`)
    const data = await respons.json()
    return data
})