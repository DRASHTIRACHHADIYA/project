import React from 'react'
import Cards from '../Cards/Cards'
import '../Cards/Cards.scss'

const MainCard = () => {

    const a='djvndfjvnjfnvjfnvvfv'
  return (
     <div className='box_container' desc={a}>
      <Cards  title='Mobile App Development'/>
      <Cards title='web Development'/>
      <Cards />
      <Cards />
      <Cards />
    </div>
  )
}

export default MainCard