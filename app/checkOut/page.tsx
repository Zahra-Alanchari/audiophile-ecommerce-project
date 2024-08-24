"use client"
import { fetchgetAllJobs } from '@/redux/action';
import { AppDispatch } from '@/redux/store';
import { RootState } from '@/Type/type';
import React, { useEffect } from 'react';
import { Provider, useDispatch, useSelector } from 'react-redux';

const page = () => {
    const data = useSelector((state:RootState) => state.job.job);
    const dispatch = useDispatch<AppDispatch>();
  
    useEffect(() => {
      dispatch(fetchgetAllJobs());
    }, [dispatch]);
    console.log(data, "data7")
    return (
        <div>
            checkout
        </div>
    );
};

export default page;