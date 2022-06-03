import "./topbar.scss"
import {Person, Mail} from "@material-ui/icons"

export default function Topbar() {
    return (
        <div className="topbar">
            <div className="wrapper">
                <div className="left">
                    <a href="#intro" className="logo">genius.</a> {/* Topbar logo */}
                    <div className="itemContainer">
                        <Person className="icon"/>
                        <span>+1 333 333 3333</span>
                    </div>
                
                    <div className="itemContainer">
                        <Mail className="icon"/>
                        <span>test@gmail.com</span>
                    </div>
                </div>

                <div className="right">

                </div>
            </div>
        </div>
    )
}

// Topbar logo