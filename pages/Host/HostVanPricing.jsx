import React from "react"
import { useOutletContext } from "react-router-dom";

export default function HostVanPricing() {
    const [currentVanDetail, setCurrentVanDetail] = useOutletContext();
    const van = currentVanDetail
    return (
		<div className="host-van-detail">
			{van.price}
		</div>
    )
}
