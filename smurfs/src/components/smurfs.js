import React from 'react';
import { connect } from 'react-redux';
import { getSmurf } from '../actions';
import styled from 'styled-components';

const JID = styled.p `
background: blue;
color: white;
`;

const JT = styled.p `
color: Green;
`;
const JS = styled.p `
color: white;
background: blue;
`;

const PUNCH = styled.p `
color:red;
font-weight: bold;
`;

const SMURF = styled.div `
background-color: white;
border: 2px dotted blue;
width: 200px;
margin: 0 auto;
`;


const Smurfs = props => {
    // const fetchSmurf = e => {
    //     e.preventDefault();
    //     props.getSmurf();
    //   };
      
    return(
        <div>
            
            <h1>Press the SMURF to SMURF the SMURF Village!!</h1>
           

            <button onClick={() => props.getSmurf()}>SMURF!</button>


            <div >
            {props.smurfs.map(smurf => {
                return (
                <SMURF>
                <JID key={smurf.id}>{`Name: ${smurf.name}`}</JID>
                <JT key={smurf.id}>{`Age: ${smurf.age}`}</JT>
                <JS key={smurf.id}>{`Height: ${smurf.height}`}</JS>
                <PUNCH key={smurf.id}>{`Villager number:  ${smurf.id}`}</PUNCH>
                </SMURF>
                )
                })}
            </div>

            </div>
    )
};

const mapStateToProps = state => {
  return {
    smurfs: state.smurfs,
    isFetching: state.isFetching
  }
}

export default connect(mapStateToProps, {getSmurf} )(Smurfs)