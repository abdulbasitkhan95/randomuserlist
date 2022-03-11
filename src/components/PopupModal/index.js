import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faClose, faListNumeric, faVenusMars} from "@fortawesome/free-solid-svg-icons";

const PopupModal = (props) => {
  const {isOpen = false, gender, age, onClose} = props;
  if (!isOpen) {
    return null;
  }

  return <div className="popup">
    <div className="popup-container">
      <span className="close-icon" onClick={onClose}><FontAwesomeIcon icon={faClose}/></span>
      <div className="popup-header">
        <h3>More Details</h3>
      </div>
      <div className="popup-info">
        <div className="user-info">
          <span className="user-title"><FontAwesomeIcon className="icon" icon={faVenusMars}/> Gender</span>
          <span className="user-data">{gender}</span>
        </div>
        <div className="user-info">
          <span className="user-title"><FontAwesomeIcon className="icon" icon={faListNumeric}/> Age</span>
          <span className="user-data">{age}</span>
        </div>
      </div>
    </div>
  </div>
}

export default PopupModal
