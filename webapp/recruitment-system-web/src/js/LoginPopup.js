import React from "react";
import '../css/LoginPopup.css';



const Modal = () => (
    <Popup
        trigger={<button className="button" > Open Modal </button>}
        modal
        closeOnDocumentClick
    >
        <span> Modal content </span>
    </Popup>
);

class LoginPopup extends React.Component {
    render() {
        return (
            <Modal/>
        );
    }
}

export default LoginPopup;