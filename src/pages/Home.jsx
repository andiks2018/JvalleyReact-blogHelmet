import React from 'react'
import { Helmet } from 'react-helmet'

export default function Home() {
  return (
    <div className='App'>
        <Helmet>
            <title>Home Page</title>
            <meta name='title' content='halaman home page' />
            <meta name='description' content='ini adalah halaman home page' />
        </Helmet>
        <h1>Home page</h1>
    </div>
  )
}
