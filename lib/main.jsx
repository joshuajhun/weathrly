const React = require('react');
const ReactDOM = require('react-dom');

class Main extends React.Component {
  constructor(props) {
    super(props);
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
        <Cards/>
      </div>
    )
  }
}

// b251fa322d501fa69f0b7ad22bd85245


ReactDOM.render(<Main source='https://pacific-shelf-52361.herokuapp.com/api/weather/' />, document.getElementById('application'))
