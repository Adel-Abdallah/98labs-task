import './styles.css';
import Modal from "react-modal";

Modal.setAppElement('#root'); // this is important for modal to work


function PaymentModal({modalIsOpen, setModalIsOpen}) {
   
  
  return (
    <div  className="modal-container">
    <Modal isOpen={modalIsOpen} onRequestClose={()=>setModalIsOpen(false)}>
        <h2>Terms and Conditions for a Website</h2>
        <p>
        A Terms and Conditions document for a website is an agreement that the website makes with its users which outlines how to use the site properly, as well as the obligations and responsibilities of each party. The parties in this document is the owner of the website and the site user.

Most websites, especially commercial websites, have a portion of the site devoted to Terms and Conditions because it lets the site user know what it expected for them. It outlines what will happen in a variety of different possible situations including what happens if a user breaks the rules and must have their account terminated.

The Terms and Conditions document also creates a legally binding set of rules for the parties. It's a place to set up the expectations for each of the parties to ensure that the website runs smoothly for the both of them. While it should be agreed upon by both parties, it is usually cannot be changed by the user so that if the the user uses the website, they agree to accept the terms and conditions of the website. However, if they don't agree to the the terms and conditions, then they should not use the website.

This document is different from a Privacy Policy.
        </p>
        <button className='modal-button' onClick={()=> setModalIsOpen(false)}>
            Close
        </button>

    </Modal>
    </div>
  );
}

export default PaymentModal;