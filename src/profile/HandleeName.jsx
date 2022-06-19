import React from 'react'
import PropTypes from 'prop-types'

const handleeName  = (props)=>{
  const handonclickdefault=()=>{
    alert (`the name of this profile is: ${props.name}`)}
    return (    
 <div class='cont'>
 <button class='button' onClick={handonclickdefault}>
    <div class='blob'>
     </div>
     <div class='line'></div>
     <div class='text'>
      <p className='ButtonText' >C</p>
      <p className='ButtonText' >L</p>
      <p className='ButtonText' >I</p>
      <p className='ButtonText' >C</p>
      <p className='ButtonText' >K</p>
      <p className='ButtonText' >.</p>
      <p className='ButtonText' >M</p>
      <p className='ButtonText' >E</p>
      <p className='ButtonText' >!</p>
     </div>
   </button>
</div>
 










  )
}
handleeName.defaultProps ={
  name:`Not Found`,}
  handleeName.propTypes = {
    name: PropTypes.string
  }
export default handleeName 