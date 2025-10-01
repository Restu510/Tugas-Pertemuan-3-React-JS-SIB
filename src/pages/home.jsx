import books from "../utils/books"

export default function Home({ books }) {
  return (
    <div className="container">
      <h2 className="mb-4 text-center">Welcome!! To Bookstore Mibook</h2>
      <div className="row">
        {books.map((book) => (
          <div key={book.id} className="col-md-4 mb-3">
            <div className="card h-100">
              <img
                src={book.image}
                className="card-img-top"
                alt={book.title}
                style={{ height: "550px", objectFit: "cover" }}
              />
              <div className="card-body">
                <h5 className="card-title">{book.title}</h5>
                <p className="card-text">
                  <strong>{book.author}</strong> ({book.year})
                </p>
                <p className="card-text">{book.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
