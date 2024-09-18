import React from 'react'
import LatestJobCards from './LatestJobCards';
import { useSelector } from 'react-redux';


// const randomJobs = [1,2,3,4,5,6,7,8];

const LatestJobs = () => {
  
  const {alljobs} = useSelector(store => store.job);
  return (
    <div className='max-w-7xl mx-auto my-20'>
        <h1 className='text-4xl font-bold'> <span className='text-[#ffbd03]'>Latest & Trendy</span> Job Openings</h1>
        {/* // multiple job cards display */}
        <div className='grid grid-cols-3 gap-4 my-5'>
        {
          alljobs.length <= 0 ? <span>No Jobs Available</span> : alljobs.slice(0,6).map((job)=><LatestJobCards key={job._id} job={job}/>)
        }
        </div>
        
    </div>
  )
}

export default LatestJobs