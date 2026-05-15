import React from 'react'
import Json from './Json'

const Example = () => {
  return (
    <div>

        {
            Json.map((item)=>{
                return(
                    <>
                    <h1>{item.category_name}</h1>

                    {
                        item.product?.map((inner)=>{
                            return(
                                <h3>{inner.product_name}</h3>

                            )

                        })
                    }

                    </>
                )
            })
        }
    </div>
  )
}

export default Example