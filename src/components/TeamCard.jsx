export default function TeamCard({ name, role, image }) {
    return (
      <div className="col-md-4 mb-4 d-flex justify-content-center">
        <div className="card shadow" style={{ maxWidth: "250px" }}>
          <img src={image} className="card-img-top" alt={name} />
          <div className="card-body text-center">
            <h5 className="card-title">{name}</h5>
            <p className="card-text">{role}</p>
          </div>
        </div>
      </div>
    )
  }
  