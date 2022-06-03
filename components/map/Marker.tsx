import { LatLngExpression, LatLngTuple, marker } from "leaflet"
import { useCallback, useMemo, useRef, useState } from "react"

import { Marker, MapContainer, Popup, Tooltip } from "react-leaflet"

import styles from "./Map.module.scss"

type MarkerProps = {
    initLatLng: LatLngExpression
}

export function DraggableMarker(props: MarkerProps) {
    const center = {lat: props.initLatLng[0], lng: props.initLatLng[1]}
    const [position, setPosition] = useState(center)
    const markerRef = useRef<any>(null)

    const eventHandlers = useMemo(
        () => ({
            dragend() {
                const marker = markerRef.current
                if (marker != null) {
                    setPosition(marker.getLatLng())
                }
            }, 
        }), 
    [])

    return (
        <Marker
        position={position}
        ref={markerRef}
        zIndexOffset={0}
        draggable={true}
        eventHandlers={eventHandlers}
        >
            <Tooltip permanent direction={"top"} offset={[-18,-40]}>
                <div className={styles.tooltipContent}>
                    <h2>Clique para emitir seu NFT</h2>
                    <div className={styles.coordinates}>
                        <h3>latitude: {position.lat}</h3>
                        <h3>longitude: {position.lng}</h3>
                    </div>
                </div>
            </Tooltip>
        </Marker>
    )
}