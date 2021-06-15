// import React from 'react';
// import MenuIcon from '@material-ui/icons/Menu';
// import BubbleChartIcon from '@material-ui/icons/BubbleChart';
// import HomeIcon from '@material-ui/icons/Home';
// import SettingsIcon from '@material-ui/icons/Settings';
// import WbIncandescentIcon from '@material-ui/icons/WbIncandescent';
// import  './Style.css'

// const Sidebar = () => {
//     return (
//         <nav id="sidebar">
//             <ul className="list-unstyled components">
//                 <li>
//                     <a>
//                     <MenuIcon />
//                     </a>
//                 </li>
//                 <li>
//                     <a>
//                         <HomeIcon />
//                     </a>
//                 </li>
//                 <li>
//                     <a>
//                         <BubbleChartIcon />

//                     </a>
//                 </li>
//                 <li>
//                     <a>
//                         <WbIncandescentIcon />
//                     </a>
//                 </li>
//             </ul>
//         {/* <div className="sidebar-header">
//             <h3>Bootstrap Sidebar</h3>
//         </div>

//         <ul className="list-unstyled components">
//             <p>Dummy Heading</p>
//             <li className="active">
//                 <a href="#homeSubmenu" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle">Home</a>
//                 <ul className="collapse list-unstyled" id="homeSubmenu">
//                     <li>
//                         <a href="#">Home 1</a>
//                     </li>
//                     <li>
//                         <a href="#">Home 2</a>
//                     </li>
//                     <li>
//                         <a href="#">Home 3</a>
//                     </li>
//                 </ul>
//             </li>
//             <li>
//                 <a href="#">About</a>
//             </li>
//             <li>
//                 <a href="#pageSubmenu" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle">Pages</a>
//                 <ul className="collapse list-unstyled" id="pageSubmenu">
//                     <li>
//                         <a href="#">Page 1</a>
//                     </li>
//                     <li>
//                         <a href="#">Page 2</a>
//                     </li>
//                     <li>
//                         <a href="#">Page 3</a>
//                     </li>
//                 </ul>
//             </li>
//             <li>
//                 <a href="#">Portfolio</a>
//             </li>
//             <li>
//                 <a href="#">Contact</a>
//             </li>
//         </ul>*/}

//     </nav> 
//     );
// };

// export default Sidebar;



import React, { useEffect } from 'react';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import BubbleChartIcon from '@material-ui/icons/BubbleChart';
import HomeIcon from '@material-ui/icons/Home';
import SettingsIcon from '@material-ui/icons/Settings';
import WbIncandescentIcon from '@material-ui/icons/WbIncandescent';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import NotificationsNoneOutlinedIcon from '@material-ui/icons/NotificationsNoneOutlined';

import MenuIcon from '@material-ui/icons/Menu';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import {Avatar, Badge, Menu, MenuItem} from '@material-ui/core';

import { makeStyles, useTheme, Theme, createStyles, withStyles } from '@material-ui/core/styles';
import {  useLocation } from "react-router-dom";
import MailIcon from '@material-ui/icons/Mail';
import NotificationsIcon from '@material-ui/icons/Notifications';
import AccountCircle from '@material-ui/icons/AccountCircle';
import HelpOutlineOutlinedIcon from '@material-ui/icons/HelpOutlineOutlined';
import MoreIcon from '@material-ui/icons/MoreVert';

const menuId = 'primary-search-account-menu';


const drawerWidth = 75;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
    },
    drawer: {
      [theme.breakpoints.up('sm')]: {
        width: drawerWidth,
        flexShrink: 0,
      
      },
    },
    appBar: {
      [theme.breakpoints.up('sm')]: {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: drawerWidth,
        backgroundColor:'#fff',
        boderBottom: " 1px soild grey",color:'black'
        
      },
      [theme.breakpoints.down('sm')]: {
       
       
        backgroundColor:'#fff',
        boderBottom: " 1px soild grey",
        color:"black"
        
      },
    },
    menuButton: {
      marginRight: theme.spacing(2),
      [theme.breakpoints.up('sm')]: {
        display: 'none',
      },
    },
    // necessary for content to be below app bar
    toolbar: theme.mixins.toolbar,
    drawerPaper: {
      width: drawerWidth,
      backgroundColor:'#1560bd'
    },
    content: {
      flexGrow: 1,
      padding: theme.spacing(3),
    },
    iconsColor:{
      color:'#002D62',
  
      '&:hover': {
        color:'#fff',
     
     },
     
    },
    remove:{
      
      listStyleType: "none",
      textAlign:'center',
      margin:'0 0 10 0',
     padding:'0 0 0 0'
   
    },
    activeColor:{
     
        color:'white',
        borderLeft:'4px solid white',
        backgroundColor:'#034694'
 
      

    },
    grow: {
      flexGrow: 1,
    },
    sectionMobile: {
      display: 'flex',
      [theme.breakpoints.up('md')]: {
        display: 'none',
        color:'black'
      },
    },
    sectionDesktop: {
      display: 'none',
      [theme.breakpoints.up('md')]: {
        display: 'flex',
      },
     
     
    },
  }),
);


export default function ResponsiveDrawer(props: any) {
  const { window } = props;
  let location = useLocation();
  console.log(location)
  // const { history } = props;
  console.log(props); 
  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const isMenuOpen = Boolean(anchorEl);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState<null | HTMLElement>(null);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  const handleProfileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };
  
  const drawer = (
    <div>
      <div className={classes.toolbar} />
      <ul className={classes.remove}>
                <li  className={location.pathname === "/home" ?classes.activeColor: classes.iconsColor} >
                  
                    <a href="/home" >
                    <HomeIcon className={classes.iconsColor} />
                    </a>
                    
                </li>
                <li className={classes.iconsColor}>
                    
                    <a href="/home" >
                    <BubbleChartIcon className={classes.iconsColor}/>
                    </a>
                    
                </li>
                <li className={classes.iconsColor}>
                    
                    <a href="/home" >
                    <SettingsIcon className={classes.iconsColor}/>
                    </a>
                    
                </li>
                <li className={classes.iconsColor}>
                    
                    <a href="/home" >
                    <WbIncandescentIcon className={classes.iconsColor}/>
                    </a>
                    
                </li>
                
      
   
               
            </ul>
     
      
      
    </div>
  );
  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
    </Menu>
  );

  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <IconButton aria-label="show 4 new mails" color="inherit">
          <Badge badgeContent={4} color="secondary">
            <MailIcon />
          </Badge>
        </IconButton>
        <p>Messages</p>
      </MenuItem>
      <MenuItem>
        <IconButton aria-label="show 11 new notifications" color="inherit">
          <Badge badgeContent={11} color="secondary">
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <p>Notifications</p>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
    </Menu>
  );

  const container = window !== undefined ? () => window().document.body : undefined;
  const StyledBadge = withStyles((theme: Theme) =>
  createStyles({
    badge: {
      // right: -3,
      // top: 13,
      border: `2px solid ${theme.palette.background.paper}`,
      padding: '0 4px',
      backgroundColor:'limegreen'
    },
  }),
)(Badge);

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            className={classes.menuButton}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            Logo
          </Typography>
          <div className={classes.grow} />
          <div className={classes.sectionDesktop}>
            
            <IconButton aria-label="show 4 new notifications" color="inherit">
            <StyledBadge badgeContent={4} color="secondary">
            <NotificationsNoneOutlinedIcon />
            </StyledBadge>
            
            </IconButton>
            <IconButton aria-label="show 4 new notifications" color="inherit">
            
              
               <HelpOutlineOutlinedIcon />
            
            </IconButton>
            <div
                style={{
                  fontSize: "12px",
                  
                   paddingRight: "16px",
                }}
              >
                <p style={{
                  
                  color: "blue",
                 
                }}>UserName</p>
                <span  style={{
                  fontSize: "10px",
                  
                }}>Role</span>
               
              </div>
            
            <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
            
            

          </div>
          <div className={classes.sectionMobile}>
            <IconButton
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </div>
         
          
        </Toolbar> 
      </AppBar>
   
      <nav className={classes.drawer} aria-label="mailbox folders">
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Hidden smUp implementation="css">
          <Drawer
            container={container}
            variant="temporary"
            anchor={theme.direction === 'rtl' ? 'right' : 'left'}
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
          >
            {drawer}
          </Drawer>
        </Hidden>
        <Hidden xsDown implementation="css">
          <Drawer
            classes={{
              paper: classes.drawerPaper,
            }}
            variant="permanent"
            open
          >
            {drawer}
            
          </Drawer>
        </Hidden>
      </nav>
      {renderMobileMenu}
      {renderMenu}
   </div>
  );
}


