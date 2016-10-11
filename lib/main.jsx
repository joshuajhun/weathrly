const React = require('react');
const ReactDOM = require('react-dom');
var $ = require('jquery');

class Main extends React.Component {
  constructor() {
    super();
    this.state = {location: ''};
  }

  locationAccepted(e) {
    e.preventDefault();
    this.serverRequest = $.get(this.props.source + this.state.location, function (result) {
      this.setState({
        info: result
      });
    }.bind(this));
  }

  render() {

    return (
      <div>
        <div>
          <input placeholder='Location'
            value={this.state.location}
            onChange={(e) => this.setState({location: e.target.value}) } />
          <input type='submit'
            onClick={(e) => this.locationAccepted(e)} />
        </div>
      </div>
    )
  }
}



ReactDOM.render(<Main source='https://pacific-shelf-52361.herokuapp.com/api/weather/' />, document.getElementById('application'))
