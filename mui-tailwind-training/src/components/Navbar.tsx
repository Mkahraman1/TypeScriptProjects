import { useUser } from "../hooks/user";

function Navbar() {
    const {username} = useUser()
  return (
    <div>
      Hosgeldin,{username}
    </div>
  )
}

export default Navbar
