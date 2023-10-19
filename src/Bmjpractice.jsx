import React, { useState } from 'react'

const Bmjpractice = () => {

    const[data,setData]=useState(['items1','items2',"items3"]);
   
  return (
   <>


   <section className='container'>
    <div className='top-text'>
      <div> <h2>Works<br></br><span>everywhere</span></h2></div>

       <dv><h2>Works<br></br><span>everytime</span></h2></dv>
    </div>
    <div className='cards'>
      <div className="card meduil">
        <h3>Buy<br></br>gaming<br></br>vouchers</h3>
      </div>

      <div className="card meduim-card">
        <h3>Buy<br></br>gaming<br></br>vouchers</h3>
      </div>

      <div className="card ">
        <h3>Save for<br></br>a new<br></br>car</h3>
        <p >With</p>

          <img src='https://uploads-ssl.webflow.com/64f689b1d557cac55d997d2a/64f94864c6d1f66ac66def1c_hugo-smile.svg' alt='hugologo' style={{width:'50%',margin:'0 auto'}}/>
       
      </div>

      <div className="card meduim-card">
        <h3>Buy<br></br>gaming<br></br>vouchers</h3>
      </div>
      
      <div className="card meduil">
        <h3>Buy<br></br>gaming<br></br>vouchers</h3>
      </div>
    </div>

   </section>


   <h2>Hello Today Test</h2>

  {
    data.map((item,index)=>{
      return(
        <h3 key={index}>{item}</h3>
      )
    })
  }
   </>
  )
}

export default Bmjpractice
