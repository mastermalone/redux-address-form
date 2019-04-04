# Address From Component

The addressForm component is a customizeable react component that can be used once or many times within a parent component.

## Usage

The component depends on data that is provided to it via dropDownData attribute. The data provided is for the country states (i.e. Unites States or Canada).  There is a json/countriesStates.json file that contains states for the U.S. and Canada.  The data must be formated in the follow shape:
{ 
  name: "United States", 
  abbrievation: "US", 
  states:[
    { 
      name: "Alabama", 
      abbreviation: "AL"
    },
    { 
      name: "Alaska", 
      abbreviation: "AK"
    },
    ....
  ]
}

## Formatting the states data from public/json/countriesStates.json
Just add this function to your component that is consuming the addressForm:
  formatCountryData(data) {
    const formattedCountryData = {};
    for (let key of data) {
      if (!formattedCountryData[key.name]) {
        formattedCountryData[key.name] = key;
      }
    }
    return formattedCountryData;
  }

Add a countries property of your components state:
  state = {
    countries: []
  };

Set the value of of this.states.country to the respons.data value retrieved from calling the json file via axios.then(response => {this.setState(countries: response.data)}).  

In the render method of your component, call formatCountryData() and pass in this.state.countries.

## Hiding fields and/or submit button
You can hide any field or the submit button by adding an attribute the the component page element.  The attribut will be hideNameOfField={true}.  The following example hides the first name field and the submit button

Example: <AddressForm
            onSubmit={this.submit}
            dropdownData={formattedCountries}
            onChange={this.formOnChange}
            defaultCountry={this.defaultCountry}
            form="address-form"
            hideFirstName={true}
            hideSubmit={true}
          />


## OPTIONAL: Save the states data to the store. Include the GetStatesReducer Reducer to combineReducers
Make sure to import the GetStatesReducer in the store.js file.  Add this reducer to the combineReducers object in the store.

Import GetStatesActionCreator to your component.  Once you have imported this, dispatch the action to pass the states data to the addressForm component.

Example:  store.dispatch(GetStatesActionCreator(response.data));



