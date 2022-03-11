import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSearch} from "@fortawesome/free-solid-svg-icons";

const Header = ({heading, updateSearchValue}) => {

  const onSubmitForm = e => {
    e.preventDefault();
  }

  return <header>
    <h1>{heading}</h1>
    <div className="searchbar">
      <form onSubmit={onSubmitForm}>
        <input onChange={e => updateSearchValue(e.target.value)} className="form-control" type="text" placeholder="Search"/>
        <button className="btn"><FontAwesomeIcon icon={faSearch}/></button>
      </form>
    </div>
  </header>
}

export default Header
