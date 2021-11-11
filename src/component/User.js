import React,{useState,useEffect} from 'react';
import { useParams } from "react-router";
import axios from 'axios';

function User() {
    const [user, setUser] = useState({});
    

    const { id } = useParams();
        const getUser  = async()=>{
        const { data } = await axios.get(`https://dummyapi.io/data/v1/user/${id}`,
            {
                headers:{
                    "app-id" : "61421a5a6a9b4d3ad64b8cb1",
                },
            });
            console.log(data);
            setUser(data);
        };
        useEffect(() => {
            getUser();
        },[ ]);
    return (
        <div>
            <h1>User details</h1>
            <div className="container">
                <div className="row">
                    <div className=" card col-md-4">
                    <p> ID:{user.id}</p>
                        <img  className="img-fluid " src={user.picture} alt={ user.firstName}></img>
                    </div>
                    <div class="card col-md-4 pt-5">
                        <section>
                            <div>
                                <p>{""}{user.tittle}Name: {user.firstName }{""}</p>
                                <p>Gender:{user.gender}</p>
                                <p>Date of Birth {user.dateOfBirth}</p>
                                <p>Register date:{user.registerDate}</p>
                                <p>Email:{user.email} </p>
                                <p>Phone:{user.phone} </p>
                            </div>
                        </section>

                    </div>
                    <div class="card pt-5 col-md-4">
                        <section>
                                <div>
                                    <h1>Address</h1>
                                    <p>State:{user?.location?.state}</p>
                                    <p>Street {user?.location?.street}</p>
                                    <p>City:{user?.location?.city}</p>
                                    <p>Country:{user?.location?.country} </p>
                                    <p>TimeZone:{user?.location?.timezone} </p>
                                </div>
                         </section>

                    </div>
                    
                </div>
            </div>
            
        </div>
    )
}

export default User;

