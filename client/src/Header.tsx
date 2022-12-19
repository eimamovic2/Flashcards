import './Header.css';
import { Link } from "react-router-dom";
export function Header(){
    return <div className="Header">
        <div className="container">
            <div>
                <a href="/">ToDo Cards</a> 
            </div>
            <div>
                <a href="/">Decks</a> 
            </div>
            <div>
                <a href="/login">login</a> 
            </div>
        </div>
    </div>
}