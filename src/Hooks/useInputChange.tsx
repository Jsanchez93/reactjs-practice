import React, { useState } from 'react'

export const useInputChange = (): [{ [x: string]: string }, (event: React.FormEvent<HTMLInputElement>) => void] => {
  const [input, setInput] = useState({})

  const handleInputChange = (e: React.FormEvent<HTMLInputElement>) => setInput({
    ...input,
    [e.currentTarget.name]: e.currentTarget.value
  })

  return [input, handleInputChange]
}