const React = require('react')
const ReactDOM = require('react-dom')
const $ = require('jquery')

class Main extends React.Component {
  constructor() {
    super();
    this.state = {location: ''};
  }

  locationAccepted(e) {
    e.preventDefault();
    this.serverRequest = $.get(this.props.source + this.state.location +',us&APPID=b251fa322d501fa69f0b7ad22bd85245', function (result) {
      debugger
      var cityObject = result.city
      this.setState({
        info: cityObject
      });
    }.bind(this));
  }

  render() {

    return (
      <div>
        <input placeholder='Location'
          value={this.state.location}
          onChange={(e) => this.setState({location: e.target.value})}
          />
        <input type='submit'
          onClick={(e) => this.locationAccepted(e)} />
      </div>
    )
  }
}

// const addRemoveLocation = () => {
//   return (
//     <button>Remove Location</button>
//   )
// }


ReactDOM.render(<Main source='http://api.openweathermap.org/data/2.5/forecast?q=' />, document.getElementById('application'))
