import { useState } from 'react'
import './App.css'
import axios from 'axios'

function App() {
  const [query, setQuery] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [selected, setSelected] = useState(null);
  const [typingTimeout, setTypingTimeout] = useState(0);

  const handleChange = e => {
    const value = e.target.value;
    setQuery(value);
    setSelected(null);

    if (value.length >= 3) {
      if (typingTimeout) clearTimeout(typingTimeout);
      setTypingTimeout(setTimeout(() => {
        axios.get(`https://student-search-backend.vercel.app/students?q=${value}`)
          .then(res => {
            setSuggestions(res.data);
          });
      }, 300));
    } else {
      setSuggestions([]);
    }
  };

  const handleSelect = student => {
    setSelected(student);
    setSuggestions([]);
    setQuery(student.name);
  };
 const clearInput = () => {
    setQuery('');
    setSuggestions([]);
    setSelected(null);
  };
  return (
    <div className="app-container">
      <div className="search-box">
        <h2 className="heading">🎓 Student Search</h2>
        <div className="input-wrapper">
          <input
            type="text"
            value={query}
            onChange={handleChange}
            placeholder="Search student..."
            className="search-input"
          />
          {query && (
            <span className="clear-cross" onClick={clearInput}>
              &times;
            </span>
          )}
        </div>
        {suggestions.length > 0 && (
          <ul className="suggestions-list">
            {suggestions.map(student => {
  const regex = new RegExp(`(${query})`, 'i');
  const highlightedName = student.name.replace(regex, `<mark>$1</mark>`);

  return (
    <li
      key={student.rollNumber}
      onClick={() => handleSelect(student)}
      className="suggestion-item"
      dangerouslySetInnerHTML={{ __html: highlightedName }}
    />
  );
})}

          </ul>
        )}
        {selected && (
          <div className="student-details">
            <h3>Name: {selected.name}</h3>
            <p><strong>Class:</strong> {selected.class}</p>
            <p><strong>Roll Number:</strong> {selected.rollNumber}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
