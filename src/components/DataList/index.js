import './index.css'

const DataList = props => {
  const {userListItem, isChecked, deleteItem} = props
  const {id, website, name, password} = userListItem
  const firstChar = website.slice(0, 1).toUpperCase()

  const onClickDeleteIcon = () => {
    deleteItem(id)
  }
  return (
    <li className="list-items" id={id} key={id}>
      <p className="logo">{firstChar}</p>
      <div className="user-details">
        <p className="website name">{website}</p>
        <p className="user name">{name}</p>
        {!isChecked && (
          <img
            src="https://assets.ccbp.in/frontend/react-js/password-manager-stars-img.png"
            alt="stars"
            className="stars"
          />
        )}
        {isChecked && <p className="password name">{password}</p>}
      </div>
      <button
        type="button"
        className="delete-button"
        onClick={onClickDeleteIcon}
        data-testid="delete"
      >
        <img
          src="https://assets.ccbp.in/frontend/react-js/password-manager-delete-img.png"
          alt="delete"
          className="delete-image"
        />
      </button>
    </li>
  )
}

export default DataList
