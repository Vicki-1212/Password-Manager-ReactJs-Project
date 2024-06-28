import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import DataList from '../DataList'
import './index.css'

class PasswordManager extends Component {
  state = {
    userList: [],
    websiteName: '',
    userName: '',
    userPassword: '',
    searchInput: '',
    isChecked: false,
    isTrue: false,
  }

  addUsersList = event => {
    event.preventDefault()
    const {websiteName, userName, userPassword} = this.state
    const newUser = {
      id: uuidv4(),
      website: websiteName,
      name: userName,
      password: userPassword,
    }
    this.setState(prevState => ({
      userList: [...prevState.userList, newUser],
      websiteName: '',
      userName: '',
      userPassword: '',
    }))
  }

  checkboxChecked = event => {
    if (event.target.checked) {
      this.setState({isChecked: true})
    } else {
      this.setState({isChecked: false})
    }
  }

  deleteItem = id => {
    const {userList} = this.state
    const filterData = userList.filter(eachUser => eachUser.id !== id)
    this.setState({userList: filterData})
  }

  searchInputItem = event => {
    this.setState({searchInput: event.target.value})
  }

  updateWebsiteUrl = event => {
    this.setState({websiteName: event.target.value})
  }

  updateUserName = event => {
    this.setState({userName: event.target.value})
  }

  updatePasswordDetails = event => {
    this.setState({userPassword: event.target.value})
  }

  render() {
    const {
      websiteName,
      userName,
      userPassword,
      userList,
      searchInput,
      isChecked,
    } = this.state
    let {isTrue} = this.state
    const searchResult = userList.filter(eachUser =>
      eachUser.website.toLowerCase().includes(searchInput.toLowerCase()),
    )
    if (searchResult.length === 0) {
      isTrue = false
    } else {
      isTrue = true
    }

    return (
      <div className="bg-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/password-manager-logo-img.png"
          alt="app logo"
          className="app-logo"
        />
        <div className="top-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/password-manager-sm-img.png"
            alt="password manager"
            className="small-image"
          />
          <img
            src="https://assets.ccbp.in/frontend/react-js/password-manager-lg-img.png"
            alt="password manager"
            className="large-image"
          />
          <form className="form-container" onSubmit={this.addUsersList}>
            <h1 className="form-heading">Add New Password</h1>
            <div className="input-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/password-manager-website-img.png"
                alt="website"
                className="form-image"
              />
              <hr className="line-break" />
              <input
                type="text"
                placeholder="Enter Website"
                className="input-text"
                value={websiteName}
                onChange={this.updateWebsiteUrl}
              />
            </div>

            <div className="input-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/password-manager-username-img.png "
                alt="username"
                className="form-image"
              />
              <hr className="line-break" />
              <input
                type="text"
                placeholder="Enter Username"
                className="input-text"
                value={userName}
                onChange={this.updateUserName}
              />
            </div>

            <div className="input-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/password-manager-password-img.png"
                alt="password"
                className="form-image"
              />
              <hr className="line-break" />
              <input
                type="password"
                placeholder="Enter Password"
                className="input-text"
                value={userPassword}
                onChange={this.updatePasswordDetails}
              />
            </div>

            <div className="button-container">
              <button type="submit" className="button">
                Add
              </button>
            </div>
          </form>
        </div>

        <div className="bottom-container">
          <div className="bottom-top-container">
            <div className="heading-container">
              <h1 className="bottom-container-heading">Your Passwords</h1>
              <p className="length-number">{userList.length}</p>
            </div>
            <div className="search-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/password-manager-search-img.png"
                className="search-icon"
                alt="search"
              />
              <hr className="bottom-line-break" />
              <input
                type="search"
                className="search-text"
                placeholder="Search"
                onChange={this.searchInputItem}
              />
            </div>
          </div>
          <div>
            <hr className="bottom-long-line" />
            <div className="checkbox-container">
              <input
                type="checkbox"
                id="checkbox"
                className="input-checkbox"
                onClick={this.checkboxChecked}
              />
              <label htmlFor="checkbox" className="label">
                Show passwords
              </label>
            </div>
          </div>
          {!isTrue && (
            <div className="no-password-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/no-passwords-img.png"
                alt="no passwords"
                className="noUserList-image"
              />
              <p className="no-password">No Passwords</p>
            </div>
          )}

          {isTrue && (
            <ul className="list-container">
              {searchResult.map(eachUser => (
                <DataList
                  userListItem={eachUser}
                  key={eachUser.id}
                  isChecked={isChecked}
                  deleteItem={this.deleteItem}
                />
              ))}
            </ul>
          )}
        </div>
      </div>
    )
  }
}

export default PasswordManager
