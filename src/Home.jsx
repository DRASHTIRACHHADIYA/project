import React, { useEffect, useState } from 'react'

import Drawer from 'react-modern-drawer'

import 'react-modern-drawer/dist/index.css'

const Home = () => {

    const [ab,setAb]=useState('blue')
    const [bd,setBd]=useState('black')
    const[visible,setVisible]=useState(false)
    const[num,setNum]=useState(0)
    const[cd,setCd]=useState('')

    const show = () =>{
    setAb('red')
    setBd('red')
    setVisible(true)
    }

    const hadnleincre=()=>{
setNum(num+1)
    }

    useEffect(()=>{
        setNum(num+1)

        setTimeout(() => {
            setVisible(true)
        }, 3000);
    })
  return (
    <>
    <div style={{color:bd}}>change color to {ab}</div>
    
    <button onClick={show}>change</button>
    <p>{num}</p>
    <button onClick={hadnleincre}>plus</button>

     <input type="text" value={cd} onChange={(e) =>setCd(e.target.value)}/>
     <p>{cd}</p>

     <Drawer
                open={visible}
                onClose={()=>setVisible(false)}
                direction='right'
                className='bla bla bla'
            >
                <div>Hello World</div>
            </Drawer>
    </>
  )
}

export default Home