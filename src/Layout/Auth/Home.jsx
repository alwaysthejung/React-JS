import React, { Children, useEffect, useState } from 'react';
import { getProducts } from '../../services/product.service';

// https://fakestoreapi.com/products
export default function Home(){

    const [movies, setmovies] = useState([])
    useEffect(() => {
        getProducts((data)=> {
            setmovie(data)
            console.log(data)
        }) 
    },[])


    return (
        <>
            <div className="flex">
                {/* {
                    movies.map(items =>(
                        <div key={items.id} className="">
                            <h1>{items.name}</h1>
                        </div>
                        ))
                } */}
                <Videocard name="testing", published_at= "testing" type="testi" ></Videocard>
            </div>
        </>
      );
}

// buatkan t huruf besar T
// makasi
const Videocard = (props) => {
    const {name, key, type, published_at  } = props
    return(
        <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <a href="#">
                <img class="rounded-t-lg" src="/docs/images/blog/image-1.jpg" alt="" />
            </a>
            <div class="p-5">
                <a href="#">
                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{name}</h5>
                </a>
                <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">{type}</p>
                <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">{published_at}</p>

            </div>
        </div>
    )
}


// ntar inibakalan lama, ntar lagi ngoba"

// minta tolong lagi, buatkan v huruf besar


// coba paste ke wa ku yang mana teken aja ctrl+v
// kaa ngaruh ga sih ini