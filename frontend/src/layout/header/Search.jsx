import { useState } from 'react'
import { Button } from '../../components/common/Button'

const Search = () => {
  const [query, setQuery] = useState('')

  const handleInputChange = (event) => {
    setQuery(event.target.value)
  }

  const handleSearch = () => {
    console.log(query)
  }

  return (
    <div>
      <input
        type="text"
        placeholder="Buscar..."
        value={query}
        onChange={handleInputChange}
        />
      <Button onClick={handleSearch}>Buscar</Button>
    </div>
  )
}

export default Search
