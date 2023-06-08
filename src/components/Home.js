import React from "react";
import {Button, Table} from 'react-bootstrap';
 import Employees from "./Employees";
import {Link,useNavigate} from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";


function Home()
{

let history = useNavigate();
 const handleEdit = (id,name,age,salary) =>
 {
    localStorage.setItem('name',name);
    localStorage.setItem('age',age);
    localStorage.setItem('salary',salary);
    localStorage.setItem('id',id);
    history('/edit');
 }


    const handleDelete = (id) =>
    {
var index= Employees.map(function(e)
{
    return e.id;
}).indexOf(id);
Employees.splice(index,1);
history('/');
    }

return (
<>
<div style={{margin:"10rem"}}> 
<h1> CRUD APP</h1>
<br></br>
<Table striped bordered hover size="sm">
    <thead>
        <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Salary</th>
            <th>Actions</th>
        </tr>
    </thead>
    <tbody>
        {
        Employees && Employees.length > 0
        ?
        Employees.map((item) =>  {
            return (
                <tr>
                   <td>{item.name}</td>
                   <td> {item.age} </td> 
                   <td> {item.salary} </td>
                   <td>  
                    <Link to={'/edit'}>
                    <Button onClick={() => handleEdit(item.id, item.name, item.age, item.salary)}>EDIT</Button>
                    </Link>
                    &nbsp;
                    <Button onClick={() => handleDelete(item.id)}>DELETE</Button>
                   </td>
                    </tr>
            )
        })
        :
        "No data available"
    }
    </tbody>
</Table>
<br/>
<Link className='d-grid gap-2'  to="/create">
<Button size="lg"> Create</Button>
</Link>
</div>
</>
)
}
export default Home;