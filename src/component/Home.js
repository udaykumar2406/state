import {useState,useEffect} from 'react';
import { Link } from 'react-router-dom';
import * as ReactBootStrap from 'react-bootstrap';
function Home() {
   
    const [users,setUsers] = useState([])
    const [pageNumber,setPageNumber] = useState(1);
    // const [loading,setLoading] = useState(false);
    const [ post , setPost] = useState(null)

    const getUserData = async()=>{
        // setLoading(true);
        const response = await fetch(`https://dummyapi.io/data/v1/user?page=${pageNumber}&limit=10`,{
            method: 'GET',
            headers: {
                'app-id': '61421a5a6a9b4d3ad64b8cb1',
            }
        })
        const {data} = await response.json();
        
        // console.log(data);
        setUsers(data);
        // setLoading(false);
        setPost(users)
        
    }
    // componentDidMount
    useEffect(()=>{
         getUserData()
         
         console.log('Component Did Mount')
    },[pageNumber])
   const handleClick = (num)=>{
    setPageNumber(num) 
   }
  return(
    <div>
        {post?post: 'Loading...'}
         <div className="container shadow bg-secondary">
         <div className="row ">
         {/* {post?post: 'Loading...'} */}
             {
                 users.map((user)=>(
                         <div className="col-md-5 ms-5 my-5">
                             {/* {loading ? (user): (
                                 <ReactBootStrap.Spinner animation ="border"/>
                             )} */}
                             {/* {post ? post: 'Loading...'} */}
                             <Link to={`/user/${user.id}`}>
                                 <div className="card bg-outline-info shadow p-3">
                                 <div className="row">
                                     <div className="col-md-4">
                                         <img className="img-fluid" src={user.picture} alt={user.firstName}/>
                                         </div>
                                         <div className="col-md-8">
                                                <p>{user.id}</p>
                                                <p>{user.title}: {user.firstName}</p>
                                         </div>
                                    </div> 
                                 </div>
                                 </Link>
                             </div>
                               
                 ))
                 
             }
              </div>
              <div className="paginationButtons">
              <button className="btn btn-info m-3" onClick={()=>{handleClick(pageNumber-1)}}>Previous</button>
                    {
                        [1,2,3,4,5,6,7,8,9].map((num)=>(
                            
                            <button className="btn btn-info m-1" onClick={()=>{handleClick(num)}} >{num}</button>
                           
                        ))
                        
                    }
                    <button className="btn btn-info m-5" onClick={()=>{handleClick(pageNumber+1)}}>Next</button>
                    
                   {/* {<reactBootStrap.Spinner animation="border"/>}  */}
                </div>
         </div>
    </div>
  )
   
}

export default Home
