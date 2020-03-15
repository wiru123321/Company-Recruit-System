import React from 'react';
import '../css/MainPage.css';
import '../css/LoginPopup.css';
import Popup from "reactjs-popup";
import axios from 'axios';

const API = 'https://localhost:8080/recruiter/all';


class MainPage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            user: []
        }
        this.handleLoginClick = this.handleLoginClick.bind(this);
    }

    componentDidMount() {
        console.log('Component did mount.');
        console.log(this.state.user)
    }

    handleLoginClick() {

    }


    render() {
        return <div>
            <div>
                <ul className="navBar">
                    <li className="navBar navBarToRight">
                        <Popup
                            trigger={<button className="loginButton"> Zaloguj się </button>}
                            onOpen={(event) => {
                                console.log(document.getElementsByClassName('slide').length)
                            }}
                            modal
                            closeOnDocumentClick>
                            <span className="loginForm">
                                     <form className="loginForm">

                                         <h1 className="loginForm"> Podaj dane logowania.</h1>
                                         <p className="loginForm"></p>
                                     <input className="loginForm" type="login" placeholder="login"/><br/>
                                     <input className="loginForm" type="password" placeholder="hasło"/><br/>
                                     <p className="loginForm"></p>
                                     <button className="loginForm">Zaloguj</button><br/>
                                     </form>
                            </span>
                        </Popup>
                    </li>
                </ul>
            </div>
            <div className="pageContent">
                /* TODO: Wstawic slider wyswietlajacy jakas zawartosc.*/

                <div className="slide">
                    <button className="prev">prev</button>
                    <button className="next">next</button>
                </div>
                <a className="dot"/>
                <a className="dot"/>
                <a className="dot"/>
                <div>
                    <p className="footerSection"></p>
                    <footer className="footerSection"></footer>
                </div>
            </div>
        </div>;
    }
}

export default MainPage;