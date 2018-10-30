import React from "react"
import PropTypes from "prop-types"
import { Manager, Reference, Popper } from 'react-popper'
// import "components/HelloWorld.css"


class HelloWorld extends React.Component {
  state = {
    isShown: false,
  };

  onMouseOver = () => this.toggleShown(true);
  onMouseOut = () => this.toggleShown(false);

  toggleShown = (isShown) => {
    this.setState({ isShown });
  }

  render () {
    return (
      <React.Fragment>
        <h2>Greeting: {this.props.greeting}</h2>
        <ul>
          <Manager>
            <Reference style={{ width: 120, height: 120, background: 'green' }}>
              {({ ref }) => (
                <li ref={ref} onMouseOver={this.onMouseOver} onMouseOut={this.onMouseOut} className="border">I am list item
                  Reference element
                </li>
              )}
            </Reference>
            {
              this.state.isShown && <Popper placement="down">
                {({ ref, style, placement, arrowProps }) => (
                  <div ref={ref} style={style} data-placement={placement}>
                    Popper element
                    <div ref={arrowProps.ref} style={arrowProps.style} />
                  </div>
                )}
              </Popper>
            }
          </Manager>
        </ul>
      </React.Fragment>
    );
  }
}

HelloWorld.propTypes = {
  greeting: PropTypes.string
};
export default HelloWorld
