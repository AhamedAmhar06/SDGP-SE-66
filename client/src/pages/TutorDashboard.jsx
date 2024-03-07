import { useContext } from "react"
import { UndergradContext } from "../context/undergradContext"

export default function TutorDashboard() {

    const {undergrad} = useContext(UndergradContext);

  return (
    <div>
        <center><h1>Tutor Dashboard</h1>
        {!!undergrad && (<h2>Hi {undergrad.fName}!</h2>)}
        </center>
    </div>
  )
}
