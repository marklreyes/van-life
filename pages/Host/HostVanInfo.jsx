import React from "react"
import { useOutletContext } from "react-router-dom";

export default function HostVanInfo() {
    const [currentVanDetail, setCurrentVanDetail] = useOutletContext();
    const van = currentVanDetail
	console.log('van', van)
    return (
        <div className="host-van-detail">
			{van.description}
		</div>
    )
}
