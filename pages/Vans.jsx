import React, { useEffect, useState } from "react"

export default function Vans() {
    const [vans, setVans] = useState([]);

    useEffect(() => {
        fetch("/api/vans")
            .then(response => response.json())
            .then(data => setVans(data.vans))
            .catch(error => console.error("Error fetching vans data:", error));
    }, []);

    return (
        <div>
            <ul>
                {vans.map(van => (
                    <li key={van.id}>{van.name}</li>
                ))}
            </ul>
        </div>
    )
}
