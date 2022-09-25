import React, { useState } from "react";

// const Tabs = styled.div`
// //     width: 595px;
// //     height: 51px;
// // `;

// const Box = styled.div`
//     width: 1190px;
//     height: 116px;
//     background: rgba(255, 255, 255, 0.5);
// `;

// const FlexRow = styled.div`
//     display: flex;
//     flex-direction: row;
// `;

const Bar = () =>{
    return(
        <div style = {{display: 'flex', width: 1000, margin: '0 auto',flexDirection: 'row', background:"#FFFFFF", fontFamily: 'Inter'}}>
            <div style = {{width: 505, height: 51, border:2, borderColor: "black",textAlign: 'center', color: '#5DB075', fontSize:20}}>Reports</div>
            <div style = {{width: 505, height: 51, textAlign: 'center', fontSize:20}}>Events</div>
        </div>
    );
}

// const Data = {category: "test"};

const Feed = () =>{
    return (
        <>
        <div style = {{width: 1130, height: 116, background: 'rgba(255, 255, 255, 0.5)', margin: 30, paddingLeft: 66, paddingTop: 20, fontFamily: 'Inter'}}>
             <div style = {{fontWeight: 'bold'}}>Chemical Waste</div>
             <div>Smelled chemical waste from the factory on north street</div>
        </div>

        <div style = {{width: 1130, height: 116, background: 'rgba(255, 255, 255, 0.5)', margin: 30, paddingLeft: 66, paddingTop: 20, fontFamily: 'Inter'}}>
             <div style = {{fontWeight: 'bold'}}>Chemical Waste</div>
             <div>Smelled chemical waste from the factory on north street</div>
        </div>
        </>
    );
} 

export default function UserFeed(){
    return(
        <div style = {{width: '100%', height: '100vh'}}>
            <div><p style = {{fontSize: 32, textAlign:'center'}}>Tiffany Zhong</p></div>
            <Bar></Bar>
            <Feed></Feed>
        </div>
    );
}