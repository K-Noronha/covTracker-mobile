import React, { Component } from "react";

export const UserContext = React.createContext();

export class UserProvider extends Component {
  state = {
    name: "John Doe",
    email: "john.doe@email.com",
    phone: "123-456-7890",
    address: "Toronto, ON",
    symptoms: ["Headache", "Body Aches"],
    treatment: null,
    travelStatus: "N/A",
  };
  render() {
    return (
      <UserContext.Provider
        value={{
          ...this.state,
        }}
      >
        {this.props.children}
      </UserContext.Provider>
    );
  }
}

export const UserConsumer = UserContext.Consumer;

export function withUserConsumer(Component) {
  return function ConsumerWrapper(props) {
    return (
      <UserConsumer>
        {(value) => <Component {...props} context={value} />}
      </UserConsumer>
    );
  };
}
