import React from 'react'

import { LineWave } from  'react-loader-spinner'
function Loader() {
  return (
    
    <div  className='d-flex justify-content-center align-items-center' style={{marginTop:'200px', marginBottom:'200px'}}>
      <LineWave
      
  height="100"
  width="100"
  color="#4fa94d"
  ariaLabel="line-wave"
  wrapperStyle={{}}
  wrapperClass=""
  visible={true}
  firstLineColor=""
  middleLineColor=""
  lastLineColor=""
/>
    </div>
    
  )
}

export default Loader
