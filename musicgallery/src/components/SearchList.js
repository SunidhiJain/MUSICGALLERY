import React from 'react';
import {Songs} from '../components/Songs'
import '../App.css';

export function SearchList(props){
    const noRecordFoundJSX =<p>No record found</p>;
    const successJSX= (
      <>
     
       { props.songdata.map(ele=><Songs  key ={ele.trackId} url={ele.artworkUrl100} src={ele.previewUrl} />)}
       
         </>
    );
    return(
      <div className="col-lg-12 ">
        <div className="av text-center">
             {props.songdata.length==0?noRecordFoundJSX:successJSX} 

        </div>
        </div>
    );

    

}