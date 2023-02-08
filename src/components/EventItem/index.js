// Write your code here
import './index.css'

const EventItem = props => {
  const {item, onStatusSend} = props
  const {registrationStatus, imageUrl, location, name} = item

  const onStatus = () => {
    onStatusSend(registrationStatus)
  }

  return (
    <li className="item">
      <button type="button" className="button" onClick={onStatus}>
        <img src={imageUrl} alt="event" className="event-img" />
      </button>

      <p className="name">{name}</p>
      <p className="location">{location}</p>
    </li>
  )
}

export default EventItem
