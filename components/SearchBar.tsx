"use client"

import { hostname } from 'os'
import React, { FormEvent, useState } from 'react'

const SearchBar = () => {
    const [searchPrompt, setSetSearchPrompt] = useState('')

    const isValidAmazonProductURL = (url: string) => {
      try {
        const parsedURL = new URL(url)
        const hostname = parsedURL.hostname 

        if (
          hostname.includes('amazon.com') ||
          hostname.includes('amazon.') ||
          hostname.endsWith('amazon')
        ) {
          return true
        }        

      } catch (error) {
        console.log(error)
        return false
      }
      return false
    }

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
      event.preventDefault()

      const isValidLink = isValidAmazonProductURL(searchPrompt)

    }

  return (
    <form className='flex flex-wrap gap-4 mt-12' onSubmit={handleSubmit}>
        <input 
            type='text'
            placeholder='Enter product link'
            className='searchbar-input'
            value={searchPrompt}
            onChange={(e) => setSetSearchPrompt(e.target.value)}
        />
        <button className='searchbar-btn' type='submit'>
            Search
        </button>
    </form>
  )
}

export default SearchBar