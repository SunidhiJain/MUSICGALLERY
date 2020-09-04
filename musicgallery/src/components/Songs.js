import React from 'react';
import '../App.css';

export function Songs(props){

    return(
        <div className="col-12 item">
         <img src={props.url} alt="thumbnail" className="pos"/>
         <audio controls name="media" className="col-6"><source src={props.src} type="audio/MP4"/></audio>
        
        </div> 
        
    );
}