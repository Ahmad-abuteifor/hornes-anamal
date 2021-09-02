import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';





class HornedBeasts extends React.Component {

  constructor(props) {

    super(props)
    this.state = {
      votes: 0,
    }
  }

  addvotes = () => {

    this.setState({
      votes: this.state.votes + 1
    });


  }
  
  filterFunction=()=>{
   this.props.filterFunction(this.props.title)



  }


  









  render() {
    return (
      <div >

        <Card style={{ width: '18rem'  } } onClick={this.filterFunction}  >
          <Card.Img variant="top" src={this.props.imgUrl} onClick={this.props.update}  />
          <Card.Body>
            <Card.Title> {this.props.title}</Card.Title>
            <Card.Text>
              {this.props.detales} ,<br></br>

               &#10084;=    {this.state.votes}
            </Card.Text>
            <Button onClick={this.props.update}  onClick={this.addvotes}  > vote to  {this.props.title} </Button>
          </Card.Body>
        </Card>
      </div>
    )

  }
}


export default HornedBeasts