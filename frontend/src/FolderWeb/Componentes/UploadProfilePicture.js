import React from "react";
import ReactDOM from "react-dom";
import "./../Estilos/Upload.css"

import imageP from "./../../Imagenes/user.svg"

function Upload() {
    
  return (
   
   <div className="Upload">
   
      <ol className="mw400 center" style={{ textAlign: "left" }}>
    
        <div id="Image">
       
        </div>
       
        <li>
          <UploadPreview />
        </li>
       
       

      </ol>

  

    </div>
  );
}

class UploadPreview extends React.Component {
  constructor(props) {
    super(props);
    this.state = { file:imageP };
    this.onChange = this.onChange.bind(this);
    this.resetFile = this.resetFile.bind(this);
  }
  onChange(event) {
    this.setState({
      file: URL.createObjectURL(event.target.files[0])
    });
  }

  resetFile(event) {
    event.preventDefault();
    this.setState({ file: null });
  }
  render() {
    return (
       
      <div class="container">
          <div class="row">
          <div class="col-sm">
          <div class="col-sm">
            <img class="rounded-circle mt-5" alt=""  src={this.state.file} width="50hv" height="50hv"/>
            </div>
            <input type="file" onChange={this.onChange} />         
            </div>
           
            </div>
      </div>     
      
    );
  }
  
}
const someElement = document.getElementById("Image")
if(someElement){
ReactDOM.render(<UploadPreview />, document.getElementById("Image"));}
export default Upload;