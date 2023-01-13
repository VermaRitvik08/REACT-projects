import React from 'react'
import './Introbar.css'
import {NotificationsNone, Settings, Apps, PersonOutline} from "@material-ui/icons"

export default function Introbar() {
  return (
    <div className="introbar">
        <div className="introbar_container">
            <div className="left">
                <span className="icon">Dashboard</span>
            </div>
            <div className="right">
                <div className="side"><NotificationsNone/></div>
                <div className="side"><Apps/></div>
                <div className="side"><Settings/></div>
                <div className="side"><PersonOutline/></div>
            </div>
        </div>
    </div>
  )
}
