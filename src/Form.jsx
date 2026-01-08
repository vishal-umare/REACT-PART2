import { useState} from "react"

export default function Form(){

    // let [fullName , setFullName] = useState("");
    // let [username,  setUsername] = useState("")
    let [formData , setFormData] = useState({
        fullName : "",
        userName : "",
        password : "",
    })


    // function handleNameChange(event){
    //     setFullName(event.target.value) ;
    // }
    // function ChangeUsername(event){
    //     setUsername(event.target.value) ;
    // }

    function handleInputChange(event){
        let fieldName = event.target.name; 
        let newValue = event.target.value; 

        setFormData((currData) => {
            currData[fieldName] = newValue ;
            return {...currData} ;
        })
    }

    function handleSubmit(event){
        event.preventDefault();
        console.log(formData);

        setFormData({
        fullName : "",
        userName : "",
        password : "",
    })
    }

    return(
        <form onSubmit={handleSubmit}>
            <label htmlFor="fullname">Enter Full Name</label>
            <br />
            <input placeholder="write here" value={formData.fullName} onChange={handleInputChange} id="fullname" name="fullName"/>
            <br /><br />
          
            <label htmlFor="username">Enter Username Name</label>
            <br />
            <input placeholder="write here" value={formData.userName} onChange={handleInputChange} id="username" name="userName"/>
            <br /><br />

            <label htmlFor="password">Enter Password</label>
            <br />
            <input placeholder="write password" value={formData.password} onChange={handleInputChange} id="password" name="password" type="password"/>
            <br /><br />
            <button>Submit</button>
        </form>
    )
}