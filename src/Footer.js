import React from 'react'
import "./Footer.css"
import PlayCircleFilledWhiteOutlinedIcon from '@mui/icons-material/PlayCircleFilledWhiteOutlined';
import SkipNextOutlinedIcon from '@mui/icons-material/SkipNextOutlined';
import SkipPreviousOutlinedIcon from '@mui/icons-material/SkipPreviousOutlined';
import ShuffleRoundedIcon from '@mui/icons-material/ShuffleRounded';
import RepeatRoundedIcon from '@mui/icons-material/RepeatRounded';
import { PlaylistPlay, VolumeDown } from '@mui/icons-material';
import { Slider } from '@mui/material';
import { Grid } from '@mui/material';
function Footer() {
  return (
    <div className='footer'>
         <div className='footer_left'>
         <img className='footer_albumLogo' 
         src= "https://upload.wikimedia.org/wikipedia/en/3/3b/Usher_think_of_you.JPG" alt="" />
         <div className='footer_songInfo'>
           <h4>Yeah!</h4>
           <p>Usher</p>
         </div>
         </div>

         <div className='footer_center'>
           <ShuffleRoundedIcon className='footer_green' />
          <SkipPreviousOutlinedIcon className='footer_icon' />
          <PlayCircleFilledWhiteOutlinedIcon className='footer_icon' />
          <SkipNextOutlinedIcon className='footer_icon'/>
          <RepeatRoundedIcon className='footer_green'/>
         
         </div>
         <div className='footer_right'>
          <Grid container spacing={2} >
            <Grid item>
              <PlaylistPlay />
            </Grid>
            <Grid item>
              <VolumeDown />
            </Grid>
            <Grid item xs >
              <Slider />
            </Grid>
          </Grid>
         </div>
    </div>
  )
}

export default Footer