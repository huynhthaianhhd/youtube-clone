import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link,withRouter } from "react-router-dom";
import "./Header.css";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import VideoCallIcon from "@material-ui/icons/VideoCall";
import AppsIcon from "@material-ui/icons/Apps";
import NotificationsIcon from "@material-ui/icons/Notifications";
import Avatar from "@material-ui/core/Avatar";
class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputSearch: "",
      temp:"",
    };
  }
  handleChangeInput = (e) => {
    this.setState({
      inputSearch: e.target.value,
    });
  };
  handleSubmit = (e) => {
    // window.location.href=`/search/?searchTerm=${this.state.inputSearch}`;
    // alert('it works!');
    // e.preventDefault();
  };
  handleOnclickLink =(e)=>{
    // window.location.href=`/search/?searchTerm=${this.state.inputSearch}`;
    // console.log('11111',this.state.inputSearch)
    // e.preventDefault();
    
  }
  render() {
    const { inputSearch } = this.state;
    return (
      <div className="header">
        <div className="header-left">
          <MenuIcon onClick={this.props.handleClickMenu}></MenuIcon>
          <Link to="/">
            <img
              className="header-logo"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Logo_of_YouTube_%282015-2017%29.svg/1200px-Logo_of_YouTube_%282015-2017%29.svg.png"
              alt=""
            ></img>
          </Link>
        </div>
        <div className="header-input">
          <form  onSubmit={this.handleSubmit}>
            <div className="form-input">
            <input
              className="search-input"
              onChange={this.handleChangeInput}
              value={inputSearch}
              type="text"
            ></input>
            <Link
              to={`/search/?searchTerm=${inputSearch}`}
            >
              <button onClick={this.handleSubmit}>
                <SearchIcon className="header-inputIcon"></SearchIcon>
              </button>
            </Link>
            </div>
          </form>
        </div>

        <div className="header-icons">
          <VideoCallIcon className="header-icons"></VideoCallIcon>
          <AppsIcon className="header-icons"></AppsIcon>
          <NotificationsIcon className="header-icons"></NotificationsIcon>
          <Avatar
            src="https://scontent-xsp1-1.xx.fbcdn.net/v/t1.0-9/100679414_2204239683055221_4874761625824919552_o.jpg?_nc_cat=103&_nc_sid=8024bb&_nc_ohc=dnk5RZjqx9UAX9dp9Ul&_nc_ht=scontent-xsp1-1.xx&oh=7ac713bac281078c926625eb9b4fb8dd&oe=5F66573C"
            alt="HTA"
          ></Avatar>
        </div>
      </div>
    );
  }
}
export default withRouter(Header);