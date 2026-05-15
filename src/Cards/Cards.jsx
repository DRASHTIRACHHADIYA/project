import { FaMobileScreen } from 'react-icons/fa6'
import './Cards.scss'
import { useEffect, useState } from 'react'
import { Accordion, AccordionHeader, AccordionDescription } from "@asphalt-react/accordion"
import Typewriter from "typewriter-effect";


const Cards = ({title,desc}) => {

    const[a,setA]=useState(0)
    const[ans,setAns]=useState(false)

    useEffect(()=>{
        setTimeout(() => {
            setA(a+1)
        }, 300);
    })

    const handleq =() =>{
        setAns(true)
    }

    const newtitle =title?title:'web application'
    return (

        <div className='box'>
            <div className='content'>
                <div className='img'>
                    <FaMobileScreen className='inner_img' />
                </div>
                <h3>{newtitle}</h3>
                <p>Craft high-performing Android and iOS applications with seamless UX and responsive design.
                </p>
                
<h1>{a}</h1>

<h2 onClick={handleq}>q1</h2>
{ans &&<p>ans</p>}

 <Accordion>
    <AccordionHeader>Title</AccordionHeader>
    <AccordionDescription>Description</AccordionDescription>
 </Accordion>


 <Typewriter
options={{
strings: ['Hello world'],
autoStart: true,
loop: true,
}}
/>
            </div>
        </div>

    )
}

export default Cards
