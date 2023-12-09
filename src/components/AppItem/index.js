import {AiOutlineDelete} from 'react-icons/ai'
import './index.css'

const AppItem = props => {
  const {appDetails, deleted} = props
  const {id, name, imageUrl, genre, duration} = appDetails

  const onClickDelete = () => {
    deleted(id)
  }

  return (
    <li className="list-container">
      <div className="app-container">
        <div className="genre-details-section">
          <img src={imageUrl} alt="track" className="image" />
          <div>
            <p className="heading-name">{name}</p>
            <p className="heading-genre">{genre}</p>
          </div>
        </div>
        <div className="genre-details-section">
          <p className="time-duration">{duration}</p>
          <button
            type="button"
            label="button"
            className="delete-button"
            data-testId="delete"
            onClick={onClickDelete}
          >
            <AiOutlineDelete className="delete-icon" />
          </button>
        </div>
      </div>
    </li>
  )
}

export default AppItem
