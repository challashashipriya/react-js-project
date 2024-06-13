import React from 'react'

export default function DisplayEx(props) {
    console.log(props)
    return (
        <div>
            {
                props.cardetails.map((car) => (
                    <div>
                        <h1>cardetails</h1>
                        <p>Name: {car.Name}</p>
                        <p>Price :{car.price}</p>
                        <p>Description :{car.description}</p>
                        <img src={car.picture} alt={car.Name} />
                    </div>
                ))
            }
        </div>  
    )       
    
}

