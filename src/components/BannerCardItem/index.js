// Write your code here.
import './index.css'

const BannerCardItems = props => {
  const {cardDetails} = props
  const {key, headerText, description, className} = cardDetails
  console.log(key)

  return (
    <li className={`card ${className}`}>
      <div>
        <h1 className="heading">{headerText}</h1>
        <p className="desc">{description}</p>
        <button className="button">Show More</button>
      </div>
    </li>
  )
}

export default BannerCardItems
