import {Componont} from 'react'
import React, { Component } from 'react';
import {Link} from 'react-router-dom'

import SidebarButton from '../../components/SidebarButton/SidebarButton'

import {
    OverviewIcon,
    TicketsIcon,
    IdeasIcon,
    ContactsIcon,
    AgentsIcon,
    ArticlesIcon,
    SettingsIcon,
    SubscriptionIcon

} from '../../assets/icons/icons'
import SidebarLogoIcon from '../../assets/images/icons/logo.svg'
import './Sidebar.scss'

class Sidebar extends React.Component {

    render() {

        const { setActivPage, activPage} = this.props;
        
        return (
            <div className="sidebar">
            <h2  className="sidebar-logo">
                <img src={SidebarLogoIcon} alt=""/>
                <h2>Dashboard Kit</h2>
            </h2>

            <Link
                to="/overview"
                className="link"
                onClick={() => setActivPage("overview")}
            >
                <SidebarButton
                title="Overview"
                icon={<OverviewIcon />}
                active={activPage == "overview"}
                />
            </Link>
            <Link
                to="/tickets"
                className="link"
                onClick={() => setActivPage("tickets")}
            >
                <SidebarButton className="sidebar-logo" title="Tickets" icon={<TicketsIcon/>}/>
            </Link>
            <Link
                to="/ideas"
                className="link"
                onClick={() => setActivPage("ideas")}
            >
                <SidebarButton className="sidebar-logo" title="ideas" icon={<IdeasIcon/>}/>
            </Link>
            
            {/* <SidebarButton className="sidebar-logo" title="Overview" icon={<OverviewIcon/>}/> */}

            
            
            <SidebarButton className="sidebar-logo" title="ContactsAgents" icon={<ContactsIcon/>}/>
            <SidebarButton className="sidebar-logo" title="Agents" icon={<AgentsIcon/>}/>
            <SidebarButton className= "sidebar-logo" title="Articles" icon={<ArticlesIcon/>}/>
            <SidebarButton className="sidebar-logo" title="Settings" icon={<SettingsIcon/>}/>
            <SidebarButton className="sidebar-logo" title="Subscription" icon={<SubscriptionIcon/>}/>
        </div>
        )
    }
}


export default Sidebar;