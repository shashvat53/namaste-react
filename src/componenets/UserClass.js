import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    // console.log(props);
    this.state = {
      userInfo: {
        name: "Dummy",
        location: "Default",
      },
    };
    // console.log("Constructor");
  }
  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/shashvat53");
    const json = await data.json();
    console.log(json);
    this.setState({
      userInfo: json,
    });
  }
  componentDidUpdate() {
    console.log("componentDidUpdate");
  }
  componentWillUnmount() {
    console.log("componentWillUnmount");
  }
  render() {
    // console.log("Render");
    const { name, location, avatar_url } = this.state.userInfo;

    return (
      <div className="user">
        <img src={avatar_url} />
        <h1>Name: {name}</h1>
        <h3>Location: {location}</h3>
      </div>
    );
  }
}

export default UserClass;
