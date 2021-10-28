import React from "react";
import containermenu from "./containermenu";

class menu extends React.Component{
    render(){
        return(
            <React.Fragment>
                <div>
                    <containermenu />
                    <containermenu />
                    <containermenu />
                    <containermenu />
                </div>
            </React.Fragment>
        );
    }
}
export default menu;