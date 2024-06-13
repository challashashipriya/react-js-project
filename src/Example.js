import React, { useState } from 'react'
 import './Example.css'
import DisplayEx from './DisplayEx'

export default function List() {
    const [cardetails, setCardetails] = useState([{
        Name: "Suzuki",
        price: '500000',
        Description: "Maruti Suzuki is expected to launch Maruti Suzuki New Dzire in the next 2 months while Maruti Suzuki eVX and Maruti Suzuki Wagon R are lined up for later",
        picture: "https://imgd.aeplcdn.com/227x128/n/cw/ec/115601/2022-xl6-exterior-right-front-three-quarter-3.jpeg?isig=0&q=80"
    },
    {
        Name: "Thar",
        price: '20000000',
        Description: "The Thar is a two-door, serious off-roader that drives reasonably well on the road. It stands out with its rugged stance, modern design, and durable construction.",
        picture: "https://tse1.mm.bing.net/th?id=OIP.SgxTKNFFf_PdAafbVsUlBQHaE5&pid=Api&P=0&h=180"
    },
    {
        Name: "RangeRover",
        price: '5000000',
        Description: "The Land Rover Range Rover, generally shortened to Range Rover, is a 4x4 luxury SUV produced by Land Rover, a marque and sub-brand of Jaguar Land Rover.",
        picture: "https://tse2.mm.bing.net/th?id=OIP.dqStmUY4saJTdTmJwoqLXgHaEK&pid=Api&P=0&h=180"
    }])
    
    return (
        <div className='car-container'>
            {cardetails.map((car, index) => (
                <div className='car' key={index}>
                    <p>Name : {car.Name}</p>
                    <p>Price : {car.price}</p>
                    <p>Description : {car.Description}</p>
                    <p>Picture: <img src={car.picture} alt={car.Name} /></p>
                </div>
            ))}
        </div>
    );
}
