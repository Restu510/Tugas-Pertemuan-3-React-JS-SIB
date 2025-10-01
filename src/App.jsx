import { Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar"
import Footer from "./components/footer"
import Home from "./pages/home"
import Book from "./pages/book"
import Team from "./pages/team"
import Contact from "./pages/contact"
import booksData from "./utils/books"
import { useState } from "react"

function App() {
  const [books, setBooks] = useState(booksData)

  return (
    <>
      <Navbar />
      <main className="container my-4">
        <Routes>
          <Route path="/" element={<Home books={books} />} />
          <Route path="/book" element={<Book books={books} setBooks={setBooks} />} />
          <Route path="/team" element={<Team />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </>
  )
}

export default App
