import {useState} from "react";
import {YMaps, Map, Placemark} from "react-yandex-maps";
import {cities} from "../../consts";
import point from "../../img/point.svg";
import ScrollableAnchor from 'react-scrollable-anchor';
import {connect} from "react-redux";
import {useEffect} from "react";

const MapSection = ({width}) => {

  const [mapWidth, setMapWidth] = useState();
  const [mapHeight, setMapHeight] = useState();

  useEffect(() => {
    if (width > 1023) {
      setMapWidth(`1170px`), setMapHeight(`462px`);
    }
    if (width < 1024 && width > 767) {
      setMapWidth(`678px`), setMapHeight(`462px`);
    }
    if (width < 767) {
      setMapWidth(`320px`), setMapHeight(`381px`);
    }
  });

  return (
    <ScrollableAnchor id={`section3`}>
      <section className="map">
        <div className="map__inner">
          <h3 className="map__title">Отделения Лига Банка</h3>
          <YMaps>
            <Map
              defaultState={{center: [53.870727, 54.903465], zoom: 5}} width={mapWidth} height={mapHeight} >
              {cities.map((coordinate, i) => {
                return <Placemark key={i} geometry={coordinate}

                  options={{
                    iconLayout: `default#image`,
                    iconImageHref: point,
                    iconImageSize: [30, 30],
                    hideIconOnBalloonOpen: false,
                    balloonOffset: [3, -40]
                  }}
                />;
              })}
            </Map>
          </YMaps>
        </div>
      </section>
    </ScrollableAnchor >
  );
};


const mapStateToProps = (state) => ({
  width: state.width,
});

export default connect(mapStateToProps)(MapSection);
