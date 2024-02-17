import { useContext } from "react"
import { UndergradContext } from "../context/undergradContext"

export default function Dashboard() {
    const {undergrad} = useContext(UndergradContext);
  return (
    <div>
        <div class="h-screen flex items-center justify-center">
            Text
</div>
        {!!undergrad && (<h2>Hi {undergrad.fName}!</h2>)}
    </div>
  )
}
