export default function Contact() {
    return (
      <div className="container my-5">
        <h2 className="text-center mb-4">Contact Us</h2>
        <form className="col-md-6 mx-auto">
          <div className="mb-3">
            <label className="form-label">Nama</label>
            <input type="text" className="form-control" placeholder="Masukkan nama" />
          </div>
          <div className="mb-3">
            <label className="form-label">Email</label>
            <input type="email" className="form-control" placeholder="Masukkan email" />
          </div>
          <div className="mb-3">
            <label className="form-label">Pesan</label>
            <textarea className="form-control" rows="4" placeholder="Tulis pesan..."></textarea>
          </div>
          <button type="submit" className="btn btn-primary w-100">Kirim</button>
        </form>
      </div>
    )
  }
  