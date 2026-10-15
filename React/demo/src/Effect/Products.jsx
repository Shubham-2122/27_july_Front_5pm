import axios from 'axios'
import React, { useEffect, useState } from 'react'

function Products() {

    const [data, setdata] = useState([])

    useEffect(() => {
        fetchproducts()
    }, [])

    const fetchproducts = async () => {
        try {
            const res = await axios.get("https://fakestoreapi.com/products")
            console.log(res.data)
            setdata(res.data)
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div>
            <div className="container">
                <div className="row row-cols-1 row-cols-md-3 g-4">
                   {
                    data && data.map((pro)=>{
                        return(
                             <div className="col" key={pro.id}>
                        <div className="card">
                            <img src={pro.image} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">{pro.title}</h5>
                                <h5 className="card-title">{pro.category}</h5>
                                 <h5 className="card-title">{pro.price}$</h5>
                                <p className="card-text">{pro.description.slice(0,100)}...</p>
                            </div>
                        </div>
                    </div>
                        )
                    })
                   }
                </div>

            </div>
        </div>
    )
}

export default Products
