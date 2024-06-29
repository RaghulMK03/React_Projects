import { useState } from 'react';
import React from 'react';

const Form = () => {
    const [user, setUser] = useState({
        // name: "Dragon lord",
        // age: 21,
        // gender: "Male",
        // country: "India",
    });

function changehandler(e){
    const name =e.target.name;
    const value =e.target.type === "checkbox" ? e.target.checked: e.target.value;
    setUser({...user,[name]:value})
}

    
    return (
        <>
        <div className="container">
        <div className="intro">
            <h1>Dynamic Table</h1>
        </div>
            <table>
                <tbody>
                    <tr>
                        <td>Name :</td>
                        <td>{user.name}</td>
                    </tr>
                    <tr>
                        <td>Age :</td>
                        <td>{user.age}</td>
                    </tr>
                    <tr>
                        <td>Gender :</td>
                        <td>{user.gender}</td>
                    </tr>
                    <tr>
                        <td>Country :</td>
                        <td>{user.country}</td>
                    </tr>
                </tbody>

            </table>
            <form>
                <label >Name :</label>
                <input type="text" placeholder='Enter the Name' value={user.name} name='name' onChange={changehandler} />
                <label >Age :</label>
                <input type="number" placeholder='Enter the Age' value={user.age} name='age' onChange={changehandler}/>
                <div className="gender">
                    <label >Gender </label>
                    <label htmlFor='male'> <input type="radio" name='gender' id='male' onChange={changehandler} checked={user.gender=="Male"} value="Male"/>
                        Male
                    </label>
                    <label htmlFor='female' > <input type="radio" name='gender' id='female' onChange={changehandler} checked={user.gender=="Female"} value="Female"/>
                        Female
                    </label>
                </div>
                <div className='select'>
                    <label htmlFor="country"> Select Country :</label>
                    <select name="country" id="country" value={user.country} onChange={changehandler}>
                        <option value="India">INDIA</option>
                        <option value="KOREA">KOREA</option>
                        <option value="UK">UK</option>
                        <option value="PARIS">PARIS</option>
                        <option value="ARGENTINA">ARGENTINA</option>
                        
                    </select>
                </div>
            </form>

        </div>
       
        </>
    )
}

export default Form;
