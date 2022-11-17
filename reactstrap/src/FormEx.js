import { Component } from "react";
import {Form, Label, Input, Row, Col, FormGroup} from 'reactstrap';

class FormEx extends Component {
    
    
    render(){
        return(
            <>
                <Form>
                    <Label for=""> gender </Label>
                    <Input type="select" bsSize="sm">
                        <option> no select </option>
                        <option> woman </option>
                        <option> man </option>
                    </Input>
                    <Row>
                        {/* md = 전체 비율 6:4:2 */}
                        <Col md={6}>    
                            <FormGroup>
                                {/* for : focus가 tag로 가는 효과 */}
                                <Label for="address"> address </Label>
                                <Input type="text" name="address" id="address"/>
                            </FormGroup>
                        </Col>
                        <Col md={4}>
                            <FormGroup>
                                <Label for="mobile"> mobile </Label>
                                <Input type="text" name="mobile" id="mobile"/>
                            </FormGroup>
                        </Col>
                        <Col md={2}>
                            <FormGroup>
                                <Label for="age"> age </Label>
                                <Input type="text" name="age" id="age"/>
                            </FormGroup>
                        </Col>
                    </Row>
                </Form>
            </>
        );
    }
}

export default FormEx;