import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCalendar, faEnvelope, faLocationDot, faPhone} from "@fortawesome/free-solid-svg-icons";
import moment from "moment";
import PopupModal from "../PopupModal";
import {useState} from "react";
import 'photoswipe/dist/photoswipe.css'
import 'photoswipe/dist/default-skin/default-skin.css'
import {Gallery, Item} from 'react-photoswipe-gallery'


const SingleCard = (props) => {
  const {name, login, email, dob, cell, picture, location, gender} = props.data;
  const [isOpen, setIsOpen] = useState(false);
  const togglePopup = () => {
    setIsOpen(!isOpen);
  }

  return <div className="card">
    <div className="user-header">
      <div className="user-avatar">
        <Gallery>
          <Item
            original={picture?.large}
            thumbnail={picture?.thumbnail}
            width="500"
            height="500"
          >
            {({ref, open}) => (
              <img ref={ref} onClick={open} src={picture?.medium}/>
            )}
          </Item>
        </Gallery>
      </div>
      <div className="user-basic-info">
        <div className="user-username" onClick={togglePopup}>{login?.username}</div>
        <div className="user-fullname">{name?.title + ' ' + name?.first + ' ' + name?.last}</div>
      </div>
    </div>
    <div className="user-info">
      <span className="user-title"><FontAwesomeIcon className="icon" icon={faEnvelope}/> email</span>
      <span className="user-data">{email}</span>
    </div>
    <div className="user-info">
      <span className="user-title"><FontAwesomeIcon className="icon" icon={faCalendar}/> date of birth</span>
      <span className="user-data">{moment(dob?.date).format('DD/MM/YYYY')}</span>
    </div>
    <div className="user-info">
      <span className="user-title"><FontAwesomeIcon className="icon" icon={faLocationDot}/> address</span>
      <span className="user-data">{location?.street?.number + ' ' + location?.city + ' ' + location?.country + ' ' + location?.postcode}</span>
    </div>
    <div className="user-info">
      <span className="user-title"><FontAwesomeIcon className="icon" icon={faPhone}/> phone number</span>
      <span className="user-data">{cell.replace(/[^a-zA-Z0-9]/g, ' ')}</span>
    </div>
    <PopupModal age={dob?.age} gender={gender} onClose={togglePopup} isOpen={isOpen}/>
  </div>
}

export default SingleCard
