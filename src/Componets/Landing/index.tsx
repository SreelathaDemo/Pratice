
import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import RefreshIcon from '@material-ui/icons/Refresh';
import BookmarkIcon from '@material-ui/icons/Bookmark';
import './style.css';
import SettingsOutlinedIcon from '@material-ui/icons/SettingsOutlined';
import Table from '../Landing/table';
import map from '../../images/map.jpg';
// import image from '../Landing/Map-'
// import Map from '../Landing/map';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
// import { Map } from 'react-leaflet';
import { LatLngTuple } from 'leaflet';

const defaultLatLng: LatLngTuple = [28.7041, 77.1025];
const zoom:number = 8;



const position = [51.505, -0.09,51.505, -0.09]

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
        [theme.breakpoints.up('sm')]: {
      
      flexGrow: 1,
      marginTop:'5rem',
      marginLeft:'6rem',
      marginRight:'1rem'
        },
    
    [theme.breakpoints.down('sm')]: {
      flexGrow: 1,
      marginTop:'5rem',
      marginLeft:'1rem',
      marginRight:'1rem'
    }
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
      marginTop:'1rem',
    },
    paper2: {
        padding: theme.spacing(2),
        // textAlign: 'center',
        // color: theme.palette.text.secondary,
        backgroundColor:'#F0F0F0',
        marginTop:'1rem',
      },
    selectBlue:{
        backgroundColor: '#034694',
        color:"#fff",
        padding:'4px',
        borderRadius:'3px'

    },
    selectGrey:{
        backgroundColor: 'lightgrey',
    
    padding:'4px',
    borderRadius:'3px',
    marginLeft:'20px',
    border:'1px solid lightgrey',
    color:'#787878',

    },
    textarea:{
         width:'100%',
        // height:'10%'
        flexGrow: 2,
      
        padding: '12px',
        border: '1px solid #ccc',
        borderRadius: '6px',
        resize: 'vertical',
        margin:'5px',
        height:'5.6rem'
    },
    
  }),
);

export default function Home() {
  const classes = useStyles();
  

  return (
    <div className={classes.root} >
        <Grid container spacing={3}>
        
        <Grid item xs={12} sm={8}
                md={10}>
        <select className={ classes.selectBlue} id="exampleFormControlSelect1">
      <option>Orders</option>
      
    </select>
    <input className="form-control form-control-sm" type="text" placeholder="Enter Order number" id='search'/>
    <select   id="exampleFormControlSelect1 select-grey"className={ classes.selectGrey}>
      <option>All Customers</option>
      <option>Last </option>
      <option>First</option>
     
    </select>
    <input className="form-control form-control-sm" type="date" placeholder=".form-control-sm" id='right-date'/>
    <Paper className={classes.paper}>
    <Grid
  container
  direction="column"
  justify="flex-start"
  alignItems="flex-start"
>
    <div>
    <MapContainer center={defaultLatLng} zoom={13} scrollWheelZoom={false} id="mapId">
    <TileLayer
      attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
    <Marker position={defaultLatLng}>
      <Popup>
       Marker
      </Popup>
    </Marker>
  </MapContainer>
        {/* <img src={map} style={{width:'48%',height:'20%'}}/> */}
    </div>
    <div style={{width:'100%'}}>
        <Table />
    </div>
    
    </Grid>
    </Paper>
        </Grid>
        <Grid item  xs={12}
                sm={4}
                md={2}>
        <input className="form-control form-control-sm" type="date" placeholder=".form-control-sm" id='date'/>
        <RefreshIcon id='refresh'/>
        <BookmarkIcon id='bookmark' />
        <Paper className={classes.paper2}>
              <div>
             
              <p>Fast Facts</p>
                <span className='subtext'>Sub Text</span>
                <div style={{float:'right',textAlign: 'center',marginLeft: 'auto',marginRight: 'auto'}}>
                    <SettingsOutlinedIcon />
                </div>
              </div>
              <hr />
              
              <input type='text'className={ classes.textarea}/>
              <input type='text' className={ classes.textarea}/>
              <input type='text' className={ classes.textarea}/>
              <hr/>
              <div>
             
              <p>Saved Search</p>
                <span className='subtext'>Sub Text</span>
                </div>
                <hr />
                <p>
                <a href='#'>Link</a>
                </p>
                <p>
                <a  href='#'>Link</a>
                </p>
                <p>
                <a href='#'>Link</a>
                </p>
                
             
              
           
          </Paper>

         
        </Grid>
       
      </Grid>

      
    </div>
  );
}