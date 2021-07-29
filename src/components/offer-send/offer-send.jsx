import {connect} from "react-redux";
import {handlePopup} from "../../store/action";
import PropTypes from "prop-types";

const OfferSend = ({close}) => {

  const handleCloseBtn = () => {
    close();
  };

  return (
    <div className="offer-send">
      <div className="offer-send__inner">
        <h4 className="offer-send__title">Спасибо за обращение в наш банк.</h4>
        <div className="offer-send__close" onClick={handleCloseBtn}></div>
        <p className="offer-send__text">Наш менеджер скоро свяжется с вами
                    по указанному номеру телефона.</p>
      </div>
    </div>
  );
};



OfferSend.propTypes = {
  close: PropTypes.any,
};


const mapStateToProps = (state) => ({
  isPopup: state.isPopup
});

export default connect(mapStateToProps, {handlePopup})(OfferSend);
