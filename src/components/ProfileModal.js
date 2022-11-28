import React, {useState, useEffect} from 'react'
import { Form, Button, Container, Modal } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import { signOut } from '../api/auth'
import SignInModal from './SignInModal'
import SignUpModal from './SignUpModal'
import '../components/modals.css'


const ProfileModal = (props) => {

const navigate = useNavigate()

const [modalShowSignIn, setModalShowSignIn] = useState(false)
const [modalShowSignUp, setModalShowSignUp] = useState(false)

    // here are the props we're going to bring into our form
    const { user, handleChangeE,handleChangeP,handleChangePConfirm,handleUpdateSignIn,handleUpdateSignUp,closeModal,
    show,email,password,passwordConfirmation} = props

    
    
    return (
        <Container  className="justify-content-center">
            <Modal id='profile-modal-container' show={show} onHide={closeModal}>
            <Modal.Header id='modal-header' closeButton/>
            <h3> Profile</h3>
           
            {modalShowSignIn &&<SignInModal closeModal={setModalShowSignIn}
                        show = {modalShowSignIn}
                        handleChangeE={handleChangeE}
                        handleChangeP={handleChangeP}
                        handleUpdateSignIn={handleUpdateSignIn}
                        email={email}
                        password={password}
                    />}
            {modalShowSignUp &&<SignUpModal closeModal={setModalShowSignUp}
                        show = {modalShowSignUp}
                        handleChangeE={handleChangeE}
                        handleChangeP={handleChangeP}
                        handleChangePConfirm={handleChangePConfirm}
                        handleUpdateSignUp={handleUpdateSignUp}
                        email={email}
                        password={password}
                        passwordConfirmation={passwordConfirmation}
                    />}
            <Modal.Body>
                <Form >
                <Button onClick={() => {setModalShowSignUp(true)}} >Sign-Up</Button>
                <Button onClick={() => {setModalShowSignIn(true)}} >Sign-In</Button>
                <Button onClick={() => navigate('sign-out')} variant="danger" >Sign-Out</Button>
                </Form>
            </Modal.Body>
            </Modal>
        </Container>
        
    )
}

export default ProfileModal
