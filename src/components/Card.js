import React from 'react'
import '../styles/Card.css'
import {TiLocation} from 'react-icons/ti'
import {MdCall} from 'react-icons/md'
import {VscLocation} from 'react-icons/vsc'


const Card = ({data}) => {
  // if(l) {
  //   return <h2>Loading...</h2>
  // }
  return (
    // {cardsAxios.map(data => (
    //    ))}
      <div className='card-wrap'>
      <img className='card-image' src ={data.cover} alt= 'Orphelinat '/>
      <button className='btn_option' ><span className='location icon'><TiLocation /></span>{data.place}</button>
      <span className='name'>{data.name}</span>
      <div className='address'>
        <div className='add-left'>
          <div className='add-location'>
            <span className='icon'><VscLocation /></span>{data.address}
          </div> 
          <div className='add-call'>
            <span className='call icon'><MdCall /></span>{data.contact}
          </div>
        </div>
          <div className='add-right'>
            <img className='profile-image' src ={data.profiles} alt= 'Orphelinat '/>
          </div> 
      </div> 
    </div>
   
  )
}

export default Card