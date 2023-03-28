import React from 'react'
import '../styles/Card.css'
import {TiLocation} from 'react-icons/ti'
import {MdCall} from 'react-icons/md'
import {VscLocation} from 'react-icons/vsc'


const Card = ({data, loading}) => {
  if(loading) {
    return <h2>Loading...</h2>
  }
  return (
      <div className='card-wrap'>
      <img className='card-image' src ={data.coverImage} alt= 'Orphelinat '/>
      <button className='btn_option' ><span className='location icon'><TiLocation /></span>{data.address}</button>
      <span className='name'>{data.firstname}</span>
      <div className='address'>
        <div className='add-left'>
          <div className='add-location'>
            <span className='icon'><VscLocation /></span>{data.address}
          </div> 
          <div className='add-call'>
            <span className='call icon'><MdCall /></span>{data.phone}
          </div>
        </div>
          <div className='add-right'>
            <img className='profile-image' src ={data.profileImage} alt= 'Orphelinat '/>
          </div> 
      </div> 
    </div>
   
  )
}

export default Card