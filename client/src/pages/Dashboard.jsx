import { useContext } from "react"
import { UndergradContext } from "../context/undergradContext"
import QuestionList from "../components/QuestionList";
import QuestionForm from "../components/QuestionForm";
export default function Dashboard() {
    const {undergrad} = useContext(UndergradContext);
    
  return (
    <div>
        <center><h1>Dashboard</h1>
        <QuestionForm/>
        <QuestionList/>
        
        {!!undergrad && (<h2>Hi {undergrad.fName}!</h2>)}
        </center>
    </div>
  )
}
