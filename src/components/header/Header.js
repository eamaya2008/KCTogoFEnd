import React from 'react';
// Methods
import { connect } from 'react-redux';
import { Avatar } from '@material-ui/core';
//Components
import HorizontalNavBar from '../navbars/HorizontalNavBar';
// Images
import logo from '../../assets/img/logo.png';

const Header = (props) => {

    return(

        <div className="main-header">          
            

            <div id="bgLogo">
                {/* <NavLink to="/#/" replace> */}
                    <img id="logo" src={logo} alt="Logo" />
                {/* </NavLink> */}
            </div>
            <HorizontalNavBar/>
            <div className="main-header-user">
                <div className="user-pic">
                    <Avatar>E</Avatar>
                </div>
            </div>                
        </div>

    );

}

const mapDispatchToProps = (dispatch) => {
    return {
    }
}

export default connect(null,mapDispatchToProps)(Header);