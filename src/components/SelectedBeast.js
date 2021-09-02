import React from 'react';
import Modal from 'react-bootstrap/Modal'  
import Button from 'react-bootstrap/Button'
import Image from 'react-bootstrap/Image'

class SelectedBeates extends React.Component{


    render(){
        return (
            <>
              
              <Modal
                show={this.props.show}
                onHide={this.props.handleClose}
                backdrop="static"
                keyboard={false}
              >
                <Modal.Header closeButton>
                  <Modal.Title>{this.props.selectedHorn.title}</Modal.Title>
                </Modal.Header>
                <Modal.Body >
                <Image   src={this.props.selectedHorn.image_url} roundedCircle  />
                  
                {this.props.selectedHorn.description}
                </Modal.Body>
                <Modal.Footer>
                  <Button variant="secondary"     onClick={this.props.handleClose}
>
                    Close
                  </Button>
              
                </Modal.Footer>
              </Modal>
            </>
          );
        }
    }








export default SelectedBeates