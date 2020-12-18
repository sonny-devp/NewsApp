import React, {useState, useEffect} from 'react'
import Nav from './Navbar'

const Api = () => {
    const [usuarios, setUsuarios] = useState([])
    useEffect(() => {
        fetchData()
    }, [])
    const fetchData = async () => {
        const data = await fetch(
			'http://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=cfb4eb681a8f4f109da17eb4f5348f79'				)
        const users = await data.json()
        setUsuarios(users.articles)
    }

    return(
        <div>
            <Nav number = {usuarios.length}/>
            <h3 className= "display-3 text-center text-light">BUSINESS NEWS</h3>
            <div className = "container-fluid">
                <div className = "row row-cols-1 row-cols-md-2 row-cols-xl-3">
                    {usuarios.map((item,index) => (
                        <div className  = "col" style = {{padding: 1 + 'em'}}>
                        <div className="card mb-3 h-80 w-100" key ={index}>
                            <img src={item.urlToImage} className="card-img-top h-40" alt="img"/>
                            <div className="card-body">
                                <h5 className="card-title">{item.title}</h5>
                                <p className="card-text">{item.author}</p>
                                <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                                <a href={item.url} className="btn btn-secondary" role="button" aria-disabled="true" style = {{width: 100 + '%'}}>Ver más</a>
                            </div>
                        </div>
                        </div>
                        ))}
                </div>
            </div>
        </div>
 )
}
export default Api;
