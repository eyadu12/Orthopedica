import React from 'react'
import './Blog.css'
import { assets } from '../../assets/assets'
const Blog = () => {
  return (
    <div className='blog-container'>
        <div className="blog-content">
            <img src={assets.i1} alt="" />
            <div className="blog-text">
            <h1>When is a total Ankle Replacement Recommended?</h1>
            <p>Arthritis and other issues can cause ankle pain and reduced mobility, interfering with your ability to perform your daily activities. If conservative treatments such as medication and bracing have failed, you may have reached the point where you want to pursue other...</p>
        </div>
        <br />
            <br />
            <br />
            <p className='span'>read more...</p>
        </div>

        <div className="blog-content">
            <img src={assets.i2} alt="" />
            <div className="blog-text">
            <h1>When is a total Ankle Replacement Recommended?</h1>
            <p>Arthritis and other issues can cause ankle pain and reduced mobility, interfering with your ability to perform your daily activities. If conservative treatments such as medication and bracing have failed, you may have reached the point where you want to pursue other...</p>
            </div>
            <br />
            <br />
            <br />
            <p className='span'>read more...</p>
            
        </div>
        <div className="blog-content">
            <img src={assets.i3} alt="" />
            <div className="blog-text">
            <h1>When is a total Ankle Replacement Recommended?</h1>
            <p>Arthritis and other issues can cause ankle pain and reduced mobility, interfering with your ability to perform your daily activities. If conservative treatments such as medication and bracing have failed, you may have reached the point where you want to pursue other...</p>
            </div>
            <br />
            <br />
            <br />
            <p className='span'>read more...</p>
        </div>
      
    </div>
  )
}

export default Blog
