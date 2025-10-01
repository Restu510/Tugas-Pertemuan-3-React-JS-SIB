import TeamCard from "../components/TeamCard"
import RestuImg from "../assets/Restu.jpg"
import KurumiImg from "../assets/Kurumi.jpg"
import AlyaImg from "../assets/Alya.jpeg"

export default function Team() {
  const members = [
    { name: "Restu", role: "Frontend Developer", image: RestuImg },
    { name: "Kurumi", role: "UI Designer", image: KurumiImg },
    { name: "Alya", role: "Backend Developer", image: AlyaImg }
  ]  

  return (
    <div className="container my-5">
      <h2 className="text-center mb-4">Meet Our Team</h2>
      <div className="row">
        {members.map((m, i) => (
          <TeamCard key={i} {...m} />
        ))}
      </div>
    </div>
  )
}
