import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render () {
    return (
      <div>
        <label for="site-search">Search Movies: </label>
          <input type="search" id="movie-search" name="q" aria-label="Search through movie list"></input>
          <button>Search</button>
        <ul>
        {movies.map(movie => <li> {movie.title} </li>)}
        </ul>
      </div>
    )
  }
}

var movies = [
  {title: 'Mean Girls'},
  {title: 'Hackers'},
  {title: 'The Grey'},
  {title: 'Sunshine'},
  {title: 'Ex Machina'},
];

export default App;