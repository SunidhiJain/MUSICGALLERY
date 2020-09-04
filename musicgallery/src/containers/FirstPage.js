import React from 'react';
import {SearchBar} from '../components/SearchBar';
import { SearchList } from '../components/SearchList';




export  class FirstPage extends React.Component{

        constructor(props){
            super(props);
            this.searchValue='';
            this.state={songdata:[]};
        }

        takeInput(event){
            let data=event.target.value;
            this.searchValue=data;
            console.log('calling by child',this.searchTxtValue);
        }

        giveMeData(searchValue){

            const url=`https://itunes.apple.com/search?term=${searchValue}&limit=25`;
            const promise=fetch(url);
    
            promise.then(response=>{
                var p=response.json();
                p.then(result=>{
                    console.log('data is',result);
                    this.setState({songdata:result.results});   
                }).catch(err=>{
                    console.log("Error in Json",err);
                })
                console.log("response is",response);
            }).catch(err=>{
                console.log("Error comming from server",err);
            })
        }
        searchNow()
        {
        console.log('search button is clicked');
        this.giveMeData(this.searchValue);
        }

        render()
        {
            return(

                <div >
                    <SearchBar takeInput={this.takeInput.bind(this)} btClick={this.searchNow.bind(this)}/>
                    <SearchList  songdata={this.state.songdata}/>
                </div>
                    

            );
        }

}

// export function FirstPage()
// {
//     return (
//         <div >
//             </>
//         </div>
//     );
// }
