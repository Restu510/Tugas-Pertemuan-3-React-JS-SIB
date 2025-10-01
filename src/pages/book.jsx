import { useState } from "react"
import booksData from "../utils/books"

export default function Book({ books, setBooks }) {
  const [form, setForm] = useState({ title: "", author: "", year: "", description: "", image: "" })

  const handleSubmit = (e) => {
    e.preventDefault()
    const newBook = { ...form, id: books.length + 1 }
    setBooks([...books, newBook]) 
    setForm({ title: "", author: "", year: "", description: "", image: "" }) 
  }

  return (
    <div>
      <h2 className="mb-4 text-center">Book List</h2>
      <div className="row">
        {books.map(book => (
          <div key={book.id} className="col-md-4 mb-3">
            <div className="card h-100">
              <img src={book.image} className="card-img-top" alt={book.title} style={{ height: "550px", objectFit: "cover" }} />
              <div className="card-body">
                <h5 className="card-title">{book.title}</h5>
                <p className="card-text"><strong>{book.author}</strong> ({book.year})</p>
                <p className="card-text">{book.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <h3 className="mt-5">Tambah Buku</h3>
      <form onSubmit={handleSubmit}>
        <input className="form-control mb-2" placeholder="Title" value={form.title} onChange={e => setForm({ ...form, title: e.target.value })} />
        <input className="form-control mb-2" placeholder="Author" value={form.author} onChange={e => setForm({ ...form, author: e.target.value })} />
        <input className="form-control mb-2" placeholder="Year" value={form.year} onChange={e => setForm({ ...form, year: e.target.value })} />
        <textarea className="form-control mb-2" placeholder="Description" value={form.description} onChange={e => setForm({ ...form, description: e.target.value })}></textarea>
        <input className="form-control mb-2" placeholder="Image URL" value={form.image} onChange={e => setForm({ ...form, image: e.target.value })} />
        <button className="btn btn-primary">Tambah</button>
      </form>
    </div>
  )
}
