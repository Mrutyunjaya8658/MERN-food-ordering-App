import { createSlice } from "@reduxjs/toolkit";

const jobSlice = createSlice({
    name:"job",
    initialState:{
        alljobs:[],
        singleJob:null,
        allAdminJobs:[],
        searchJobByText:"",
        allAppliedJobs:[],
        searchQuery:"",
    },
    reducers:{
        setAllJobs:(state,action) => {
            state.alljobs = action.payload;
        },
        setSingleJob:(state,action) => {
            state.singleJob = action.payload;
        },
        setAllAdminJobs:(state,action) => {
            state.allAdminJobs = action.payload;
        },
        setSearchJobByText:(state,action) => {
            state.searchJobByText = action.payload;
        },
        setAllAppliedJobs:(state,action) => {
            state.allAppliedJobs = action.payload;
        },
        setSearchQuery:(state,action) => {
            state.searchQuery = action.payload;
        }
    }
})

export const {setAllJobs,setSingleJob,setAllAdminJobs,setSearchJobByText,setAllAppliedJobs,setSearchQuery} = jobSlice.actions;
export default jobSlice.reducer;