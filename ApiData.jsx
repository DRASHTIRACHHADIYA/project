import React, { useEffect } from 'react'
import axios from 'axios';

const ApiData = () => {
  const [info, setInfo] = useState([])

  const handleInfo = async() => {
    const response = await axios.get('https://vhx.vercel.app/api')
    setInfo(response.info)
  }

  useEffect(() => {
    handleInfo()
  }, [])

  return (
    <>{
      info.map((item) => {
        return (
          <h2>{item.data}</h2>
        )
      })
    }
    </>
  )
}

export default ApiData
