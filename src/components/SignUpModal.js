import React, {useState, useEffect} from 'react'
import { Form, Button, Container, Modal } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'


const SignUpModal = (props) => {
    const { handleChangeE,handleChangeP,handleChangePConfirm,closeModal,handleUpdateSignUp,
        email,password,passwordConfirmation,show} = props
    const navigate = useNavigate()

    return (
        <Container className="justify-content-center">
            <Modal show={show} onHide={closeModal}>
            <Modal.Header id='modal-header' closeButton/>
            <h3> Sign-Up</h3>
            <Modal.Body>
                <Form onSubmit={handleUpdateSignUp}>
                    <Form.Group controlId='email'>
                        <Form.Label>Email address</Form.Label>
                        <Form.Control
                            required
                            type='email'
                            name='email'
                            value={email}
                            placeholder='Enter email'
                            onChange={handleChangeE}
                        />
                    </Form.Group>
                    <Form.Group controlId='password'>
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                            required
                            name='password'
                            value={password}
                            type='password'
                            placeholder='Password'
                            onChange={handleChangeP}
                        />
                    </Form.Group>
                    <Form.Group controlId='passwordConfirmation'>
                        <Form.Label>Password Confirmation</Form.Label>
                        <Form.Control
                            required
                            name='passwordConfirmation'
                            value={passwordConfirmation}
                            type='password'
                            placeholder='Confirm Password'
                            onChange={handleChangePConfirm}
                        />
                    </Form.Group>
                    <Button variant='primary' type='submit'>
                        Submit
                    </Button>
                </Form>
            </Modal.Body>
            </Modal>
        </Container>
        
    )
}

export default SignUpModal
