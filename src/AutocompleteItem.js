import React from 'react';

class AutocompleteItem extends React.Component {
  render() {
    const { title, query } = this.props;
    const hasQuery = query && query !== '';
    const parts = title.split(new RegExp(`(${query})`, 'gi'));

    if (!hasQuery) { return title; }

    return (
      <span>
        {parts.map((part, idx) => part.toLowerCase() === query.toLowerCase() ? (
          <span className="highlight" key={`${title}-${part}-${idx}`}>
            {part}
          </span>
        ) : part)}
      </span>
    )
  }
}

export default AutocompleteItem;
