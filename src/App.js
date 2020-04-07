import React from 'react'
import BookContextProvider from './context/BookContext'
import BookList from './components/BookList'
import NewBookForm from './components/BookForm'
import Navbar from './components/Navbar'

function App() {
  return (
    <div className='App'>
      <BookContextProvider>
        <Navbar />
        <BookList />
        <NewBookForm />
      </BookContextProvider>
    </div>
  )
}

export default App
