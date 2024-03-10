import { useContext } from "react"
import { UndergradContext } from "../context/undergradContext"
import QuestionBank from "./QuestionBank";
export default function Dashboard() {
    const {undergrad} = useContext(UndergradContext);
    
  return (
    <div>
        <center><h1>Dashboard</h1>
        
        <QuestionBank/>
        
        
        {!!undergrad && (<h2>Hi {undergrad.fName}!</h2>)}
        </center>
    </div>
  )
}
