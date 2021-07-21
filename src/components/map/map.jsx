import { useState } from "react";
import { YMaps, Map, Placemark } from "react-yandex-maps";
import { cities } from "../../consts"
import point from "../../img/point.svg"
import ScrollableAnchor from 'react-scrollable-anchor'

const MapSection = () => {

    return (
        <ScrollableAnchor id={'section3'}>
            <section className="map">
                <div className="map__inner">
                    <h3 className="map__title">Отделения Лига Банка</h3>
                    <YMaps>
                        <Map
                            defaultState={{ center: [53.870727, 54.903465], zoom: 5 }} width={"100%"} height={"462px"}>
                            {cities.map((coordinate, i) => {
                                return <Placemark key={i} geometry={coordinate}

                                    options={{
                                        iconLayout: 'default#image',
                                        iconImageHref: point,
                                        iconImageSize: [30, 30],
                                        hideIconOnBalloonOpen: false,
                                        balloonOffset: [3, -40]
                                    }}
                                />
                            })}
                        </Map>
                    </YMaps>
                </div>
            </section>
        </ScrollableAnchor >
    )
}

export default MapSection