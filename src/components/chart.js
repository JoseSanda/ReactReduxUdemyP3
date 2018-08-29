import React,{Component} from 'react';
import {Sparklines, SparklinesLine, SparklinesReferenceLine} from 'react-sparklines';

export default (props) =>{
  return (
    <div>
      <Sparklines data={props.data} height={120} width={180}>
        <SparklinesLine color={props.color}/>
        <SparklinesReferenceLine type="avg"/>
      </Sparklines>
      <div>{getAvg(props.data)} {props.units}</div>
    </div>
  );
}

function getAvg(data){
  let sum = 0;
  if(data){
    data.map((elto) =>{sum+=elto;});
  }
  return Math.round(sum/data.length);
}
