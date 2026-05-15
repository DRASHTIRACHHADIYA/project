import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import './Overview.scss'


const Overview = () => {

    const { product, overview } = useParams()

    const [info, setInfo] = useState([])

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

        <div className='overview-page'>

            {
                info
                    .filter(
                        (item) =>
                            item.product_category_route === product
                    )

                    .map((item) => (

                        item.product_container

                            .filter(
                                (inner) =>
                                    inner.product_route === overview
                            )

                            .map((inner) => (

                                <div className='overview-container'>

                                    <div className='left'>

                                        <img src={inner.product_img}
                                        />

                                    </div>

                                    <div className='right'>

                                        <h1>
                                            {inner.product_name}
                                        </h1>

                                        <h2>
                                            ₹ {inner.product_price}
                                        </h2>

                                        <p>
                                            {inner.product_description}
                                        </p>

                                        <h4>
                                            item in stock :{inner.stock}
                                        </h4>

                                        <h5>
                                            Rating : {inner.rating}
                                        </h5>
                                    </div>

                                </div>

                            ))

                    ))
            }

        </div>

    )

}

export default Overview