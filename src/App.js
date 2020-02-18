import React, {Component} from 'react';
import './App.css';
import API from "./utils/API";
import Employee from "./components/Employee";

class App extends Component {
  state = {
    limit: 10,
    employees: []
  }

  componentDidMount = () => {
    API.getEmployees(this.state.limit).then(res => {
      const employees = res.data.results;
      
      this.setState({ employees: employees })
      // console.log(this.state.employees)
    })
  }

  render() {

  
  return (
    <div className="App">
     <Employee employees ={this.state.employees}/>
    </div>
  );
  }
}

export default App;
