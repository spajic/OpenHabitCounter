import React from "react"
import PropTypes from "prop-types"
class HelloWorld extends React.Component {
  render () {
    return (
      <React.Fragment>
        <h2>
          Greeting: {this.props.greeting}
        </h2>
      </React.Fragment>
    );
  }
}

HelloWorld.propTypes = {
  greeting: PropTypes.string
};
export default HelloWorld
