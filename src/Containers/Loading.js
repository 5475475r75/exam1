import React, { Component } from 'react';

function Loading(Component) {
    return function loader({isloading,data}){
        
            if(isloading){
                return(
                    <p>Loading...</p>
                )
            }else{
                return(
                    <Component data={data}/>
                )
            }
        
    }
}

export default Loading;