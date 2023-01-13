import React from 'react'
import './sidebar.css'
import {HomeOutlined, AssessmentOutlined, ContactMailOutlined, LibraryBooksOutlined, ChatOutlined, AssignmentOutlined, TimelineOutlined, TrendingUpOutlined, SettingsOutlined, AttachMoney} from "@material-ui/icons"

export default function Sidebar() {
  return (
    <div className="sidebar">
        <div className="sidebarcontainer">
            <div className="sidebarmenu">
                <h3 className="title">Menu</h3>
                <ul className="sidebarlist">
                    <li className="sidebaritem"><HomeOutlined className='sideicon'/>Home</li>
                    <li className="sidebaritem"><AssignmentOutlined className='sideicon'/>Documents</li>
                    <li className="sidebaritem"><AttachMoney className='sideicon'/>Transactions</li>
                    <li className="sidebaritem"><AssessmentOutlined className='sideicon'/>Analytics</li>
                </ul>
            </div>
            <div className="sidebarmenu">
                <h3 className="title">Communication</h3>
                <ul className="sidebarlist">
                    <li className="sidebaritem"><ContactMailOutlined className='sideicon'/>Contacts</li>
                    <li className="sidebaritem"><LibraryBooksOutlined className='sideicon'/>Logs</li>
                    <li className="sidebaritem"><ChatOutlined className='sideicon'/>Archives</li>
                </ul>
            </div>
            <div className="sidebarmenu">
                <h3 className="title">Projections</h3>
                <ul className="sidebarlist">
                    <li className="sidebaritem"><TimelineOutlined className='sideicon'/>Timeline</li>
                    <li className="sidebaritem"><TrendingUpOutlined className='sideicon'/>Trends</li>
                    <li className="sidebaritem"><SettingsOutlined className='sideicon'/>Settings</li>
                </ul>
            </div>
        </div>
    </div>
  )
}
