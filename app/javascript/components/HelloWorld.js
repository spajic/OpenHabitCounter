import React from "react"
import PropTypes from "prop-types"
// import "components/HelloWorld.css"

class HelloWorld extends React.Component {
  render () {
    return (
      <React.Fragment>
        <h2>Greeting: {this.props.greeting}</h2>
        <ul>
          <li className="border">I am list item</li>
        </ul>
      </React.Fragment>
    );
  }
}

HelloWorld.propTypes = {
  greeting: PropTypes.string
};
export default HelloWorld
