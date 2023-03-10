import React from 'react'
import cover from '../assets/kid.jpg'
import profile from '../assets/card.jpg'
import '../styles/ProfileCard.css'


const ProfileCard = () => {
  return (
    <div className='profileCard'>
      <div className='profileImages'>
        <img src={cover} alt='' />
        <img src={profile} alt='' />
      </div>
      <div className='profileName'>
        <span>Orphelinat Main dans la main</span>
        <span>Description de l'orphelinat</span>
      </div>
      <div className='followStatus'>
        <hr/>
        <div>
          <div className='follow'>
            <span>203</span>
            <span>Following</span>
          </div>
          <div className='vl'></div>
          <div className='follow'>
            <span>5</span>
            <span>Followers</span>
          </div>
        </div>
        <hr />
      </div>

    </div>
  )
}

export default ProfileCard