"use client"
import { fetchgetAllJobs } from '@/redux/action';
import { RootState } from '@reduxjs/toolkit/query';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const page = () => {
    return (
        <div>
            speakers
        </div>
    );
};

export default page;