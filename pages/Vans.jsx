import React, { useEffect, useState } from "react"
import { Link, useSearchParams } from "react-router-dom"

export default function Vans() {
    const [vans, setVans] = useState([]);
    const [searchParams, setSearchParams] = useSearchParams()

	const typeFilter = searchParams.get("type")

    useEffect(() => {
        fetch("/api/vans")
            .then(response => response.json())
            .then(data => setVans(data.vans))
            .catch(error => console.error("Error fetching vans data:", error));
    }, []);

	const selectedVans = typeFilter ? vans.filter(van => van.type.toLowerCase() === typeFilter) : vans

    const vanElements = selectedVans.map(van => (
        <div key={van.id} className="van-tile">
			<Link to={`/vans/${van.id}`}>
				<img src={van.imageUrl} />
				<div className="van-info">
					<h3>{van.name}</h3>
					<p>${van.price}<span>/day</span></p>
				</div>
				<i className={`van-type ${van.type} selected`}>{van.type}</i>
			</Link>
        </div>
    ))

    function handleFilterChange(key, value) {
        setSearchParams(prevParams => {
            if (value === null) {
                prevParams.delete(key)
            } else {
                prevParams.set(key, value)
            }
            return prevParams
        })
    }

    return (
        <div className="van-list-container">
            <h1>Explore our van options</h1>
			<div className="van-list-filter-buttons">
                <button onClick={() => {handleFilterChange("type", "simple")}} className={`van-type simple ${typeFilter === 'simple' ? 'selected' : ''}`}>Simple</button>
                <button onClick={() => {handleFilterChange("type", "luxury")}} className={`van-type luxury ${typeFilter === 'luxury' ? 'selected' : ''}`}>Luxury</button>
                <button onClick={() => {handleFilterChange("type", "rugged")}} className={`van-type rugged ${typeFilter === 'rugged' ? 'selected' : ''}`}>Rugged</button>
				{typeFilter && <button onClick={() => {handleFilterChange("type", null)}} className="van-type clear-filters" >Clear filter</button>}
            </div>
            <div className="van-list">
                {vanElements}
            </div>
        </div>
    )
}
