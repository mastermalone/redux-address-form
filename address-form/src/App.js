import React, { Component } from "react";
import AddressForm from "./components/addressForm/AddressFormContainer";
import axios from "axios";
import GetStatesActionCreator from "./components/addressForm/GetStatesActionCreator";
import "./App.css";
import "jquery";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import store from "./store/store";

class App extends Component {
  submit = values => {
    return values;
  };

  defaultCountry = "United States";

  formOnChange = values => {
    return values.country || "United States";
  };

  formatCountryData(data) {
    const formattedCountryData = {};
    for (let key of data) {
      if (!formattedCountryData[key.name]) {
        formattedCountryData[key.name] = key;
      }
    }
    return formattedCountryData;
  }

  state = {
    countries: []
  };

  componentDidMount() {
    const getData = async () => {
      await axios({
        method: "get",
        url: "./json/countriesStates.json"
      })
        .then(response => {
          store.dispatch(GetStatesActionCreator(response.data));
          this.setState({
            countries: store.getState().GetStatesReducer.statesData
          });
        })
        .catch(err => {
          console.warn("There was an error fetching the states", err);
        });
    };
    getData();
  }

  render() {
    const countries = this.state.countries;
    const formattedCountries = this.formatCountryData(countries);
    return (
      <div className="App">
        <div>
          {this.state.countries.length > 0 && (
            <AddressForm
              onSubmit={this.submit}
              dropdownData={formattedCountries}
              onChange={this.formOnChange}
              defaultCountry={this.defaultCountry}
              form="address-form"
            />
          )}
        </div>
        {/* <br/>
        <br/>

        <div>
          {this.state.countries.length > 0 && (
            <AddressForm
              onSubmit={this.submit}
              dropdownData={formattedCountries}
              onChange={this.formOnChange}
              defaultCountry={this.defaultCountry}
              form="my-address-form"
              hideStates={true}
            />
          )}
        </div> */}
      </div>
    );
  }
}

export default App;
