import React from'react';
import './SeasonDisplay.css';

const getSeason = (lat,month) =>{     //helper funtion not a component
    if(month > 2 && month < 9){
       return lat > 0 ? 'summer' : 'winter';
    }else{
       return lat > 0 ? 'winter' : 'summer';
    }
};


const seasonConfig= { // creating objects and var in jsx
    summer :{
        text: 'Let\'s hit the beach!',
        iconName: 'sun'
    },
    winter : {
        text:'Brr it\'s cold!',
        iconName: 'snowflake'
    }
};


const SeasonDisplay =(props)=>{    //component and 
    //console.log(props.lat);
const season = getSeason(props.lat, new Date().getMonth());
    //console.log(season);
const {text,iconName} =seasonConfig[season]; //calling  objects text and iconName
    return(
        <div className={`season-display ${season}`}>

        <i className={`icon-left massive ${iconName} icon`}></i>
                    <h1 className="text">{text}</h1>
        <i className={`icon-right massive ${iconName} icon`}></i>
         </div>
    );
};



export default SeasonDisplay;
