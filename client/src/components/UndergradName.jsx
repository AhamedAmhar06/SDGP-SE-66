// Desc: Display the name of the undergrad student
import axios from 'axios'
import { useState, useEffect,useContext } from 'react'
import { UndergradContext } from '../context/undergradContext';

function UndergradName({undergrad_ID}) {

    const [undergrad, setUndergrad] = useState({});
    const [undergradLoaded, setUndergradLoaded] = useState(false);
    const { undergradId } = useContext(UndergradContext);

    //To get the undergrad details
    useEffect(() => {
        const fetchUndergrad = async () => {
            try {
                console.log(undergrad_ID); 
                const response = await axios.post('/undergradDetails', { id: undergrad_ID });
                setUndergrad(response.data);
                if(response.data) {
                    setUndergradLoaded(true);
                    console.log(undergrad);
                }
            } catch (error) {
                console.error(error);
            }
        };
        fetchUndergrad();
    }, [undergrad_ID]);

  return (
    <div>
        {!!undergrad && <div> Name: {undergrad.fName} {undergrad.lName}</div>}
    </div>
  )
}

export default UndergradName