import React, { Component } from 'react';

class SearchBar extends Component {

  constructor(props) {
    super(props);
    this.state = { term: '' };
  }

  onInputChange = (e) => {
    this.setState({
      term: e.target.value
    });
  }

  onFormSubmit = (e) => {
    e.preventDefault();
  }

  render() {
    return (
      <div>
        <form 
          className='input-group'
          onSubmit={this.onFormSubmit}>
          <input 
            type='text'
            placeholder='Get a five-day forcast in your city'
            className='form-control'
            value={this.state.term}
            onChange={this.onInputChange} />
          <span className='input-group-btn'>
            <button type='submit' className='btn btn-secondary'>Submit</button>
          </span>
        </form>
      </div>
    );
  }
}

export default SearchBar;