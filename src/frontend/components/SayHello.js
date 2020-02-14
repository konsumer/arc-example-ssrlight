import React, { useState } from 'react'
import { useQuery } from 'urql'
import { DebounceInput } from 'react-debounce-input'

const SAY_HELLO = `
query SAY_HELLO($name: String!){
  hello(name: $name)
}
`

// this does the actual query and returns content for loading/error/success
const SayHello = ({ name }) => {
  const [{ data, fetching, error }] = useQuery({
    query: SAY_HELLO,
    variables: { name }
  })

  if (fetching) {
    return <div>Loading...</div>
  }

  if (error) {
    return <div>Error: {error.message}</div>
  }

  return <pre>{JSON.stringify(data, null, 2)}</pre>
}

// this is just a wrapper that tracks an input
export default ({ name = 'World' }) => {
  const [value, setValue] = useState(name)
  return (
    <>
      <label htmlFor='name'>Your Name: </label>
      <DebounceInput
        id='name'
        minLength={1}
        debounceTimeout={300}
        onChange={e => setValue(e.target.value)}
        value={value}
      />
      <SayHello name={value} />
    </>
  )
}
