import React from 'react'

export default function searchInput() {
    const [searchInput, setSearchInput] = React.useState('');

    React.useEffect(() => {
        console.log(searchInput);
    }, [searchInput]);


  return (
    <div>
        <label>Search:</label>
        <input capture="user" type="text" value={searchInput} onChange={(e) => setSearchInput(e.target.value)} />
    </div>
  )
}
