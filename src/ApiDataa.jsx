import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'
// import './ApiDaataa.Scss'


const ApiDataa = () => {

  const [info, setInfo] = useState([])

  const Navigate = useNavigate()

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
        info.map((item) => (

          <div>

            <h2>
              {item.product_category}
            </h2>

           
              <img
                src={item.category_img}
                height={200}
                width={200}
                onClick={()=>Navigate(`/info/${item.product_category_route}`)}
              />
          </div>

        ))
      }

    </div>

  )

}

export default ApiDataa