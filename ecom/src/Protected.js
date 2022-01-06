import {useNavigate} from 'react-router-dom';
import {useEffect} from 'react';


function Protected(props)
{
    const navigate=useNavigate() 
    useEffect(()=>{
        if(!localStorage.getItem('user-info'))
        {
            navigate('/login')
        }

    },[])
    let Cmpy=props.component;

    
   
    
    return(
        <div>
            <Cmpy/>
        </div>
    );
}
export default Protected