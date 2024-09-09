import React from 'react'
import "./MyWork.css"
import them_pattren from "../../assets/theme_pattern.svg"
import arrow_icon from "../../assets/arrow_icon.svg"
import mywork_data from "../../assets/mywork_data"
function MyWork() {
  return (
    <div id='work' className='mywork'> 
      <div className="mywork-title">
        <h1>My Latest Work</h1>
        <img src={them_pattren} alt="" />
      </div>
      <div className="mywork-container">
        {mywork_data.map((work ,index)=>{
            return <div key={index} className='mywork_detail'>
               <img  src={work.w_img} alt=''/>
               <h2>{work.w_title}</h2>
              <p>{work.w_desc}</p>
              <div className='mywork-button'>
                <div className='mywork-btn-repo'><a href={work.w_repo} target='blank'>Repository</a></div>
                <div className='mywork-btn-view'><a href={work.w_view} target='blank'>View</a></div>
              </div>

            </div>
           
            

        })}
      </div>

      <div className="mywork-showmore">
        <a href="https://github.com/areebahmed47" target='blank'><p>Show More</p>
        <img src={arrow_icon} alt="" /></a>
      </div>
    </div>
  )
}

export default MyWork
