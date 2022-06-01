import React, { useRef, useState, useEffect } from "react";

import { Collection, Feature } from "ol";
import Map from "ol/Map";
import View from "ol/View";
import TileLayer from "ol/layer/Tile";
import { Geometry, SimpleGeometry } from "ol/geom";
import VectorLayer from 'ol/layer/Vector'
import VectorSource from 'ol/source/Vector'
import XYZ from 'ol/source/XYZ'


import styles from './Map.module.scss'

export function MapWrapper(props: Collection<Feature>) {
    const [map, setMap] = useState<Map>()
    const [featuresLayer, setFeaturesLayer] = useState<VectorLayer<VectorSource<Geometry>>>()
    const [selectedCoord, setSelectedCoord] = useState()

    const mapElement = useRef() as React.MutableRefObject<HTMLDivElement>
    

    const mapRef = useRef<Map>()
    mapRef.current = map


    useEffect( () => {
        const initialFeaturesLayer = new VectorLayer({
            source: new VectorSource()
        })


        const initialMap = new Map({
            target: mapElement.current!,
            layers: [
                new TileLayer({
                    source: new XYZ({
                      url: 'https://basemap.nationalmap.gov/arcgis/rest/services/USGSTopo/MapServer/tile/{z}/{y}/{x}',
                    })
                  }),
                initialFeaturesLayer
            ],
            view: new View({
                projection: 'EPSG:3857',
                center: [0, 0],
                zoom: 2
            }),
            controls: []
        })

        initialMap.on('click', () => {})

        setMap(initialMap)
        setFeaturesLayer(initialFeaturesLayer)
    }, [])

    useEffect( () => {
        
        if (props.getLength()) {
            featuresLayer?.setSource(
                new VectorSource({
                    features: props.getArray()
                })
            )
            map?.getView().fit?(
                featuresLayer?.getSource()?.getExtent(), {
                    padding: [100, 100, 100, 100]
            }) : (null)
        }
    }, [props.getArray()])

    return(
        <div>

            <div ref={mapElement} className={styles.mapContainer}></div>
        </div>
    )
}