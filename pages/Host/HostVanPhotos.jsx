import React from "react"
import { useOutletContext } from "react-router-dom";

export default function HostVanPhotos() {
    const [currentVanDetail, setCurrentVanDetail] = useOutletContext();
    const van = currentVanDetail
    return (
    <div className="host-van-detail">
        <img src={van.imageUrl}/>
    </div>
    )
}
