import React from "react"
import { useParams } from "react-router-dom"

export default function HostVanDetail() {
	const { id } = useParams()
	const [currentVan, setCurrentVan] = React.useState(null)

	React.useEffect(() => {
		fetch(`/api/host/vans/${id}`)
			.then(res => res.json())
			.then(data => setCurrentVan(data.vans))
	}, [])

	if (!currentVan) {
		return <h2>Loading...</h2>
	}

	return (
	  <div>
		<img src={currentVan.imageUrl} width={150} />
		<h2>{currentVan.name}</h2>
		<p>{currentVan.type}</p>
	  </div>
	)
}
