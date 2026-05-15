import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './Product.scss'
import { useNavigate, useParams } from 'react-router-dom'

const Product = () => {

    const Navigate = useNavigate()

    const { product } = useParams()

    const [info, setInfo] = useState([])
//   const Navigate = useNavigate()

    const handleInfo = async () => {

        const response = await axios.get(
            'https://vhx.vercel.app/api'
        )

        setInfo(response.data.data)
    }

    useEffect(() => {
        handleInfo()
    }, [])

    return (

        <div>

            {
                info.filter((item) => item.product_category_route === product)
                    .map((item) => (

                        <div>
                            <h2>{item.product_category}</h2>

                            <div className='products'>

                                {
                                    item.product_container.map((inner) => (

                                        <div className='card' onClick={()=>Navigate(`/info/${item.product_category_route}/${inner.product_route}`)}>

                                            <img src={inner.product_img} />

                                            <p>{inner.product_name}</p>



                                          
                                        </div>




                                    ))
                                }

                            </div>

                        </div>

                    ))
            }

        </div>

    )

}

export default Product