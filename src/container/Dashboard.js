import React from 'react'
import { DBLeftSection,DBRightSection } from '../component'



const Dashboard = () => {
 
  return (
    <div className='w-screen h-screen flex items-center bg-primary'>
      <DBLeftSection/>  
      <DBRightSection/>
    </div>
  )
}

export default Dashboard