// Write your code here.
import './index.css'

const ThumbnailItem = props => {
  const {imagesDetails, setActiveThumbnailId} = props
  const {thumbnailUrl, thumbnailAltText, id} = imagesDetails

  const updateThumbnail = () => {
    setActiveThumbnailId(id)
  }

  return (
    <li className="listContainer">
      <button className="buttonStyle" type="button" onClick={updateThumbnail}>
        <img src={thumbnailUrl} alt={thumbnailAltText} className="thumbnail" />
      </button>
    </li>
  )
}
export default ThumbnailItem
