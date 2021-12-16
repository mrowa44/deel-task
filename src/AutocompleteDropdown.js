import React from 'react';

import AutocompleteItem from './AutocompleteItem';
import { getData } from './mock-data';

class AutocompleteDropdown extends React.Component {
  state = {
    allItems: [],
    filteredItems: [],
  }

  componentDidMount() {
    getData()
      .then((data) => {
        this.setState({ allItems: data });
      });
  }

  getFilteredItems = (query) => {
    const { allItems } = this.state;
    return Promise.resolve(allItems.filter(({ title }) => title?.toLowerCase().includes(query)));
  }

  handleSearch = ({ target }) => {
    const query = target.value;
    this.getFilteredItems(query)
      .then((filteredItems) => {
        this.setState({
          filteredItems,
          query,
        });
      });
  }

  render() {
    const {
      allItems,
      filteredItems,
      query,
    } = this.state;
    const hasQuery = query && query !== '';
    const dropdownItems = hasQuery ? filteredItems : allItems;
    return (
      <div>
        <input
          type="text"
          onChange={this.handleSearch}
          placeholder="Search"
          className="input"
        />
        <ul className="dropdown">
          {dropdownItems.map(({ title }) => (
            <li key={title}>
              <AutocompleteItem title={title} query={query} />
            </li>
          ))}
          {hasQuery && dropdownItems.length === 0 ? (
            <li>
              No results
            </li>
          ) : null}
        </ul>
      </div>
    );
  }
}

export default AutocompleteDropdown;
