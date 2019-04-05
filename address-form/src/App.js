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
  state = {
    countries: [],
    fieldLabels: {},
    countryLabels: [],
    country: 'United States',
    selectOption: '',
    selectPlaceHolder: 'Select a State'
  };
  
  submit = values => {
    return values;
  };

  radioChange = values => {
    // console.log('THE VALUES FORM RADIOS', values.country)
    this.setState({
      country: values.country
    });
    this.setState({
      selectOption: ''
    });
    // return values.country;
  };

  selectOnChange = values => {
    this.setState({
      selectOption: values
    });
    // return this.getStatesData(this.selectOption)
  }

  formatCountryData(data) {
    const formattedCountryData = {};
    for (let key of data) {
      if (!formattedCountryData[key.label]) {
        formattedCountryData[key.label] = key;
      }
    }
    return formattedCountryData;
  }

  getLabels = async () => {
    await axios({
      method: 'get',
      url:  "./json/homePageAddressFields.json"
    })
    .then((response) => {
      console.log('THE FIELDS', response.data);
      this.setState({
        fieldLabels: response.data
      });
    })
    .then(() =>{
      this.getStatesData();
    })
    .catch((err) => {
      console.warn('There was an error fetching the data', err);
    })
  }

  getStatesData = async () => {
    await axios({
      method: "get",
      url: "./json/countriesStates.json"
    })
      .then(response => {
        store.dispatch(GetStatesActionCreator(response.data));
        console.log('the DATA', response.data);
        this.setState({
          countryLabels: [response.data[0].label, response.data[1].label]
        });
        this.setState({
          countries: response.data
        });
      })
      .catch(err => {
        console.warn("There was an error fetching the states", err);
      });
  };
  
  componentDidMount() {
    this.getLabels();
  }

  render() {
    const countries = this.state.countries;
    const fields = this.state.fieldLabels.fields;
    const countryLabels = this.state.countryLabels;
    const formattedCountries = this.formatCountryData(countries);
    const selectOption = this.state.selectOption;
    const defaultCountry = this.state.country;
    const selectPlaceHolder = this.state.selectPlaceHolder;
    return (
      <div className="App">
        <div>
          {this.state.countries.length > 0 && (
            <AddressForm
              onSubmit={this.submit}
              dropdownData={formattedCountries}
              onChange={this.radioChange}
              selectOnChange={this.selectOnChange}
              selectOption={selectOption}
              selectPlaceHolder={selectPlaceHolder}
              defaultCountry={defaultCountry}
              countryLabels={countryLabels}
              form="address-form"
              fieldLabels={fields}
            />
          )}
        </div>
        <br/>
        <br/>

        {/* <div>
          {this.state.countries.length > 0 && (
            <AddressForm
              onSubmit={this.submit}
              dropdownData={formattedCountries}
              onChange={this.formOnChange}
              defaultCountry={this.defaultCountry}
              form="my-address-form"
              fieldLabels={fields}
            />
          )}
        </div> */}
      </div>
    );
  }
}

export default App;
