import React from 'react';

// import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Main from './components/main';
import Header from './components/headr';
import Footer from './components/footer';
import SelectedBeates from './components/SelectedBeast';
import array from './assets/data.json';

class App extends React.Component {


  constructor(props){
super(props)
this.state={
  show:false,
  dataHorn:array,
  selectedHorn:{},

  

}  }

 handleClose=()=>{

  this.setState({
    show:!this.state.show
  })
}





filterFunction=(title)=>{
this.state.dataHorn.filter(value=>{
 if(value.title===title){
  this.setState({selectedHorn:value,show:true}) 

 }
  
})
}

  
update=()=>{
  this.setState({show:true})

}
  render() {

    return (
      <div>
        <Header />
        
        {/* <HorneForm
       typechoosing={this.typechoosing} /> */}

        <Main 

// handleClose={this.handleClose}
update={this.update}
filterFunction={this.filterFunction}
   dataHorn= {this.state.dataHorn}

        />
<SelectedBeates 
show={this.state.show}
handleClose={this.handleClose}
selectedHorn={this.state.selectedHorn}
/>

        <Footer />




      </div>
    )
  }



}





export default App;
