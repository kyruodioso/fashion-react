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
    <>
    <div className="mb-3">
      <div className="relative mb-4 flex w-full flex-wrap items-stretch">
      <input
        type="text"
        placeholder="Buscar..."
        value={query}
        onChange={handleInputChange}
        className="relative m-0 block min-w-0 flex-auto rounded border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-neutral-700 outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none dark:border-neutral-600 dark:placeholder:text-neutral-200 dark:focus:border-primary"
        aria-describedby="button-addon2"
        />
      <Button onClick={handleSearch}>Buscar</Button>
      </div>
    </div>
    </>
  )
}

export default Search
