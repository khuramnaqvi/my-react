import './List.css';
import  {useState,useEffect} from 'react';
import { Link } from 'react-router-dom'

function ListProduct()
{
    
    const [data,setData]=useState([]);
    

        useEffect(()=>{
           
            
            Getdata()


        },[])
        console.log("data",data);
        async function product_delte(id)
        {
            let result=await fetch("http://localhost/react/ecom_laravel/public/api/del_product/"+id,{
                method:'POST',
            });

        
            result=await result.json();
            console.log(result);
            if (result.success==true)

            {
                alert(result.message);
                Getdata()
            }
            else 
            {
                alert(result.message);

            }

        }
        
        async function Getdata()
        {
            let result=await fetch("http://localhost/react/ecom_laravel/public/api/get_product");
            result=await result.json();
            setData(result)
        }

    return(
        <div>
            


            <h1 style={{ textAlign: 'center', color: 'black' }} className="mt-3 mb-3">LIst</h1>
            <div className="container">
                <div className="row">
                    {
                        data.map((row)=>
                        <div className="col-sm-3">
                            <div className="card">

                                <div className="imgBox">
                                    <img src={"http://localhost/react/ecom_laravel/public/"+row.file} alt="mouse corsair" className="mouse" />
                                </div>

                                <div className="contentBox">
                                    <h3>{row.name}</h3>
                                    <h2 className="price"><small>{row.price}</small>$</h2>
                                    <a onClick={()=>{product_delte(row.id)}}  className="">Delete</a>
                                    <Link to={"update/"+row.id}><a  className="buy">Edit</a></Link>
                                   
                                </div>

                            </div>
                        </div>
                        )
                    }

                </div>
            </div>
            
           


        </div>
    )
}
export default ListProduct