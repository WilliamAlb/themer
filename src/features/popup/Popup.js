import ReactModal from "react-modal";
import './popup.css';

ReactModal.setAppElement('#root');

export function Popup(props){

    return(<ReactModal
    isOpen={props.isOpen}
    overlayClassName='modal-overlay'
    className='modal'
    closeTimeoutMS={props.closeTimeoutMS}
    >
        <p>{props.message}</p>
    </ReactModal>)
}