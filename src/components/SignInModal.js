import React, {useState, useEffect} from 'react'
import { Form, Button, Container, Modal } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import '../components/modals.css'



const SignInModal = (props) => {
    const { handleChangeE,handleChangeP,closeModal,handleUpdateSignIn,email,password,
    show} = props
    const navigate = useNavigate()
    
    return (
        <Container className="justify-content-center">
            <Modal id='sign-in-modal' show={show} onHide={closeModal}>
            <Modal.Header id='modal-header' closeButton/>
            <h3 class="modal-header"> Sign-In</h3>
            <Modal.Body>
                <Form onSubmit={handleUpdateSignIn}>
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
                    <Button id='sign-in-button' variant='primary' type='submit'>
                        Submit
                    </Button>
                </Form>
            </Modal.Body>
            </Modal>
        </Container>
        
    )
}

export default SignInModal
