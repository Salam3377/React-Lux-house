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

    const logged = (
        <>
            <Button id="button" onClick={() => navigate('sign-out')} variant="btn btn-outline-danger btn-sm" >Sign-Out</Button>
        </>
    )
    const loggedOut = (
        <>
            <Button id="button" onClick={() => {setModalShowSignUp(true)}}  variant="btn btn-outline-info btn-sm" >Sign-Up</Button>
            <Button id="button" onClick={() => {setModalShowSignIn(true)}}  variant="btn btn-outline-info btn-sm" >Sign-In</Button>
        </>
    )
    
    return (
        <Container  className="justify-content-center">
            <Modal id='profile-modal-container' show={show} onHide={closeModal}>
            <Modal.Header id='modal-header' closeButton />
            <h3 class="modal-header"> Profile</h3>
           
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
                <div id='modal-div'>
                    <h3 class='modal-welcome'>Welcome</h3>
                    <p class='modal-text'>Sign in to get discounts and more...</p>
                    <p class='modal-text'>Don't have an account?</p>
                    <p class='modal-text'>Create in seconds using just email</p>
                </div>
                <Form >
                    {/* {user? logged : loggedOut} */}
                <Button id="button" onClick={() => {setModalShowSignUp(true)}}  variant="btn btn-outline-info btn-sm" >Sign-Up</Button>
                <Button id="button" onClick={() => {setModalShowSignIn(true)}}  variant="btn btn-outline-info btn-sm" >Sign-In</Button>
                <Button id="button" onClick={() => navigate('sign-out')} variant="btn btn-outline-danger btn-sm" >Sign-Out</Button>
                </Form>
            </Modal.Body>
            </Modal>
        </Container>
        
    )
}

export default ProfileModal
