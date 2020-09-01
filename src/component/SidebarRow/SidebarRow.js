import React, { Component } from 'react'
import "./SidebarRow.css"

export default class SidebarRow extends Component {
    render() {
        const { title, Icon, lightLight, handleChangeSelected }=this.props;
        return (
            <div className={`sidebarRow ${lightLight ? "selected":""}`} onClick={()=>handleChangeSelected(title)}>
                <Icon className="sidebarRow-icon "/>
                <h2 className="sidebarRow-title" > {title}</h2>
            </div>
        )
    }
}
