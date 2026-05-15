import React, { useState } from 'react'
import './Search.scss'

const Search = () => {

    const [input, setInput] = useState('')
    const state = [
        {
            'id': 1,
            'name': 'Gujarat',
            'img': '/guj.png'
        },
        {
            'id': 2,
            'name': 'Rajasthan',
            'img': '/rajas.png'
        },
        {
            'id': 3,
            'name': 'Bihar',
            'img': '/bihar.png'
        },
        {
            'id': 4,
            'name': 'Odisha',
            'img': '/odi.png'
        },
        {
            'id': 5,
            'name': 'Maharastra',
            'img': '/maha.png'
        },
        {
            'id': 6,
            'name': 'Haryana',
            'img': '/har.png'
        },
        {
            'id': 7,
            'name': 'Kerala',
            'img': '/ker.png'
        },
        {
            'id': 8,
            'name': 'Punjab',
            'img': '/punjab.png'
        },
        {
            'id': 9,
            'name': 'Uttarakhand',
            'img': '/uttar.png'
        },
        {
            'id': 10,
            'name': 'Assam',
            'img': '/assam.png'
        }
    ]

    return (
        <div>
            <h3>
                SEARCH CITY : <input type="text" placeholder='Search for city' onChange={(e) => setInput(e.target.value)} />
            </h3>



            <div className='container'>

                {
                    state
                        .filter((Item) => {
                            const searchTerm = input.toLowerCase();
                            const name = Item.name.toLowerCase();
                            return (
                                input &&
                                name.includes(searchTerm)


                            )
                        })
                        .map((item) => (
                            <div className='boxx'>
                                <img src={item.img} alt="" height={250} width={250} />
                                <h4>{item.name}</h4>
                            </div>
                        ))
                }

            </div>
        </div>
    )
}

export default Search

