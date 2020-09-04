import React from 'react';
import '../App.css';

export function SearchBar(props){
    

    return(

        <div className="pic">
            <h1 style={{backgroundColor: "white"}}
            className=" text-center  alert-warning">MUSIC GALLERY</h1>
            
            <div className="form-group row">
            <div className="col-12 col-md-11">
                <input type="text" onChange={props.takeInput} className="form-control" placeholder="Type to search songs"/>
            </div>
            <div className="col-12 col-md-1">
                <button onClick={props.btClick} className="btn btn-primary">Search</button>
            </div>

        </div>
        </div>

    );
}