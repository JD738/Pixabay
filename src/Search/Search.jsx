import React, { useEffect, useState } from 'react'
import './Search.css'
function Search() {
    const[data,setData]=useState([])
    const[search,setSearch]=useState('')
    useEffect(()=>{
        fetch(`https://pixabay.com/api/?key=30898495-373649ec077a4764f753eac1a&q=${search}&image_type=photo`)
        .then((res)=>res.json())
        .then((d)=>setData(d.hits))
    })
    const open=(e)=> {
        window.open(e.pageURL)
    }

    return (
        <>
        <div className='wrap'>
            <div className="search">
                <h1>Stunning royalty-free images & royalty-free stock</h1>
                <p>Over 4.1 million+ high quality stock images, videos and music shared by our talented community.</p>
            </div>
            <div className="input">
            <i class="fa-solid fa-magnifying-glass"></i>
                <input type="text" placeholder='Search for all on pixabay' onChange={(e)=>setSearch(e.target.value)}/>
                <p>All Images</p>
            </div>
        </div>
        <div className="items">
            {
                data.map((e)=>{
                    return(
                        <div className="imgs" key={e.id} onClick={()=>open(data.filter((d)=>d.id===e.id)[0])}>
                            <img src={e.webformatURL}  alt="" />

                        </div>
                )})
            }
        </div>
        </>
    )
}

export default Search