import React from 'react';
import Form from 'react-bootstrap/Form'

import HornedBeasts from './HornedBeasts';
// import SelectedBeates from './SelectedBeast';
// import Form from 'react-bootstrap/Form'

// import array from './../assets/data.json';

// import HorneForm from './HorneForm'


class Main extends React.Component {



    constructor(props) {
        super(props)
        this.state = {
            horne: 'all',
            dataHorn: this.props.dataHorn
        }
    }
    horenType = ((e) => {
        let allhourens = this.state.dataHorn
        let submitingHorens = parseInt(e.target.value)
        let typechoosing = allhourens.filter((value) => {
            return value.horns === submitingHorens
        })

        if (typechoosing.length > 0) {
            this.setState(
                {
                    dataHorn: typechoosing
                }
            )
        }
        else {
            this.setState(
                {
                    dataHorn: this.props.dataHorn
                }
            )

        }


    })




    render() {
        return (


            <main>

                <Form.Select aria-label="Default select example" onChange={this.horenType}>
                    <option>All</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                    <option value="100">Hundred</option>
                </Form.Select>
                {/* 
                <HorneForm
                    typechoosing={this.typechoosing} 
                
                    /> */}


                {this.state.dataHorn.map((value, index) => {
                    return (




                        <HornedBeasts

                            title={value.title}
                            detales={value.description}
                            imgUrl={value.image_url}
                            horneNum={value.horns}
                            update={this.props.update}
                            filterFunction={this.props.filterFunction}
                            typechoosing={this.typechoosing}
                        />



                    )
                })
                }









            </main>

        )

    }
}


export default Main