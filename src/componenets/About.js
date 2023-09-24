import User from "./User";
import UserClass from "./UserClass";
import { Component } from "react";
import UserContext from "../utils/UserContext";
class About extends Component {
  constructor(props) {
    super(props);
    // console.log("P Constructor");
  }
  componentDidMount() {
    // console.log("P ComponenetDidMount");
  }
  render() {
    // console.log("P Render");
    return (
      <div>
        <h1>About us</h1>
        <div>
          logedIn User:
          <UserContext.Consumer>
            {({ logedInUser }) => (
              <h1 className="text-xl font-bold">{logedInUser}</h1>
            )}
          </UserContext.Consumer>
        </div>
        <p>This is Namaste React course</p>
        {/* <User name={"Shashvat sen (Function)"} location={"Madhya Pradesh"} /> */}
        <UserClass name={"Shashvat (Class)"} location={"Bhopal class"} />
      </div>
    );
  }
}

export default About;
