import React,{useEffect , useState} from 'react';
import {users} from './Data'

export default function User() {
  const [data, setData] = useState([]);


 
  const GetData =() =>  {
    return fetch("https://api.github.com/users")
        .then((res) => res.json())
        .then((json) =>{
        console.log("data in function is ",json);
         
        setData(json);
        });
  }
  useEffect(() => {   
    console.log("Hercules"); 
    console.log(GetData());
   })
 
  return (
    <div>
      <div className="row">

      
      {data.map(
        user=>(
          <div className="col-md-4 mt-4 mb-2">
            <div className="card">
              <img className="card-img-top" src={user.avatar_url} alt=""/>
              <div className="card-body">
                <h4 className="card-title">{user.login}</h4>
                  <p className="card-text">
                    <a href={user.html_url} className="btn btn-success">Show More</a>
                    <a href={user.repos_url} className="btn btn-warning">Repositories</a>
                  </p>
              </div>
            </div>
          </div>
        )
      )}
      </div>
    </div>
  )
}
