// Write your code here
import './index.css'

const SuggestionItem = props => {
  const {suggestionObject, selectItem} = props
  const {suggestion} = suggestionObject

  const selectedContent = () => {
    selectItem(suggestion)
  }

  return (
    <li className="list-item" onClick={selectedContent}>
      <p className="heading">{suggestion}</p>
      <img
        src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
        alt="arrow"
        className="arrow-image"
        onClick={selectedContent}
      />
    </li>
  )
}
export default SuggestionItem
