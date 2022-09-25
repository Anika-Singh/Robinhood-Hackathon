import React, { useState } from "react";
import Card from '@mui/material/Card';
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
        <div style = {{display: 'flex', width: 1000, margin: '0 auto',flexDirection: 'row', background:"#FFFFFF", fontFamily: 'Inter', borderRadius:'5px'}}>
            <div style = {{width: 505, height: 51, border:5, borderColor: "black",textAlign: 'center', color: '#5DB075', fontSize:30}}>Reports</div>
            <div style = {{width: 505, height: 51, border:5, background:'#F0F0F0', fontFamily: 'Inter', borderRadius:'5px', textAlign: 'center', fontSize:30}}>Events</div>
        </div>
    );
}

// const Data = {category: "test"};

const Feed = () =>{
    return (
        <>
        <Card style = {{width: 1130, height: 116, background: 'rgba(255, 255, 255, 0.5)', margin: 30, paddingLeft: 66, paddingTop: 20, fontFamily: 'Inter'}}>
             <div style = {{fontWeight: 'bold'}}>Chemical Waste</div>
             <div>Smelled chemical waste from the factory on north street. Avoid area</div>
        </Card>

        <Card style = {{width: 1130, height: 116, background: 'rgba(255, 255, 255, 0.5)', margin: 30, paddingLeft: 66, paddingTop: 20, fontFamily: 'Inter'}}>
             <div style = {{fontWeight: 'bold'}}>Trash Mountain</div>
             <div>Found a huge pile of trash on east side</div>
        </Card>
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