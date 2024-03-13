import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';
import { Marker, Popup } from 'react-leaflet';

import './pin.scss';

function Pin({ item }) {
  return (
    <Marker position={[item.latitude, item.longitude]}>
      <Popup>
        <div className="popupContainer">
          <img src={item.img} alt="Item image" />
          <div className="textContainer">
            <Link to={`/${item.id}`}>{item.title}</Link>
            <span>{item.bedroom} bedroom</span>
            <b>$ {item.price}</b>
          </div>
        </div>
      </Popup>
    </Marker>
  );
}

Pin.propTypes = {
  item: PropTypes.object,
};

export default Pin;
