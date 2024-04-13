import './index.css'

const CardItem = props => {
  const {cardDetails} = props
  const {title, description, imgUrl, className} = cardDetails

  return (
    <li className={`card ${className}`}>
      <div>
        <h1>{title}</h1>
        <p>{description}</p>
        <img className="avatar" src={imgUrl} alt={title} />
      </div>
    </li>
  )
}

export default CardItem
