import { Component } from "react"
import axios from 'axios'


const ai = axios.create({
  baseURL:'http://0.0.0.0:8000/api'

})

// baseURL:'http://127.0.0.1:8000/api'

// baseURL:'https://djangobirthreminderapi.herokuapp.com/api'

class BirthAdd extends Component{

    state = {
        name: "",
        birthDate:"",
        image:"",
      } 

    addBirth = (data)=>{
        ai.post('/create/', data)
        .then((res)=>{
            this.setState({name: '', image: "", birthDate: ''})
        })
      }

      handleChangeName = e => {
        this.setState({ name: e.target.value})
      }
      handleChangeImage = e => {
        this.setState({image: e.target.value})
      }

      handleChangeDate = e => {
        this.setState({birthDate: e.target.value})
      }


      handleAdd = e => {
        e.preventDefault();
    if(!this.state.name || !this.state.image || !this.state.birthDate){
        alert("Name  or URL or Birth-date is empty")
    }
    else{
      let birthData = {name: this.state.name, image: this.state.image, date: this.state.birthDate}
      this.addBirth(birthData)
      alert("Birthday Added Successfully")
    }
       
      } 
      render(){
        return(
            <div className="container my-10">
            <div className="container text-center my-15 py-15">
                <h3>Add Birthday</h3>
            </div>
               <form onSubmit={this.handleAdd}>
                   <div className="mb-3">
                     <label htmlFor="exampleInputEmail1" className="form-label">Name</label>
                     <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name="name" value={this.state.name} 
                     onChange={this.handleChangeName}/>
                   </div>
                   <div className="mb-3">
                     <label htmlFor="exampleInputPassword1" className="form-label">Image Url</label>
                     <input type="text" className="form-control" id="exampleInputPassword1" name="image" value={this.state.image}
                    onChange={this.handleChangeImage}
                     />
                   </div>
                   <div className="mb-3">
                     <label htmlFor="exampleInputPassword1" className="form-label">Birth-Date</label>
                     <input type="date" className="form-control" id="exampleInputPassword1" name="BirthDate" value={this.state.birthDate}
                    onChange={this.handleChangeDate}
                     />
                   </div>
                   <button type="submit" className="btn btn-primary">Submit</button>
                 </form>
           </div>
        );
      }
  
}

export default BirthAdd