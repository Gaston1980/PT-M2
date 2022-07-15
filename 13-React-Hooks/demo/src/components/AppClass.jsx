import React from 'react';
import { connect } from 'react-redux';
import { saveName } from '../actions';

class AppClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'Class',
      width: window.innerWidth
    }
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleResize = this.handleResize.bind(this);
  }
// se ejecuta despues del 1° renderizado del componente y nunca mas
  componentDidMount() {
    document.title = this.state.name;
    window.addEventListener('resize', this.handleResize)
  }
// se ejecuta despues de cada re-renderizado (porque hubo cambio de props o estado)
  componentDidUpdate() {
    document.title = this.state.name;
  }
// se ejeucta antes del desmonte del componente
  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize)
  }

  handleResize() { // si declaro los metodos con arrow function no es necesario luego bindearlos
    this.setState({
      width: window.innerWidth
    })
  }

  handleNameChange(e) { // // si declaro los metodos con arrow function no es necesario luego bindearlos
    this.setState({
      name: e.target.value
    })
  }

  render() {
    return (
      <div className="App">
      <input 
        value={this.state.name}
        onChange={this.handleNameChange}
      />
      <div>
        {this.state.width}
      </div>
      <button onClick={() => this.props.saveName(this.state.name)}>
        Save Name
      </button>
      <div>
        {this.props.nameRedux}
      </div>
    </div>
    )
  }
}

// const mapDispatchToProps = (dispatch) => {
//   return {
//     saveName: (name) => dispatch(saveName(name))
//   }
// }

const mapStateToProps = (state) => {
  return {
    nameRedux: state.name
  }
}

export default connect(mapStateToProps, { saveName })(AppClass);