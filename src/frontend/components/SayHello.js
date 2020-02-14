import React, { useState } from 'react'
import { useQuery } from 'urql'

const SAY_HELLO = `
query SAY_HELLO($name: String!){
  hello(name: $name)
}
`

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

export default ({ name = 'World' }) => {
  const [value, setValue] = useState(name)
  return (
    <>
      <label htmlFor='name'>Your Name:</label>
      <input name='name' type='text' onChange={e => setValue(e.target.value)} value={value} />
      <SayHello name={value} />
    </>
  )
}
