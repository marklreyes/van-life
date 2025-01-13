import React, { useEffect, useState } from "react"
import { Link, useSearchParams } from "react-router-dom"

export default function Vans() {
    const [vans, setVans] = useState([]);
    const [searchParams, setSearchParams] = useSearchParams()

	const typeFilter = searchParams.get("type")
    console.log(typeFilter)

    useEffect(() => {
        fetch("/api/vans")
            .then(response => response.json())
            .then(data => setVans(data.vans))
            .catch(error => console.error("Error fetching vans data:", error));
    }, []);

    const vanElements = vans.map(van => (
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

    return (
        <div className="van-list-container">
            <h1>Explore our van options</h1>
            <div className="van-list">
                {vanElements}
            </div>
        </div>
    )
}
