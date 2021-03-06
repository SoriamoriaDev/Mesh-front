/*global google*/
import React from 'react';
import CenterFocusWeakIcon from '@material-ui/icons/CenterFocusWeak';
import { Button } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';

function MapTarget({data, onChildClick, onChooseLocationClick}) {
	
	return (
	
            <>
                <div id="square" style={{
                    position: 'absolute',
                    display: 'flex',
                    alignItems: 'center',
                    flexWrap: 'wrap',
                    zIndex: 1,
                    top: "50%",
                    left: "50%",
                    width: 300,
                    height: 400,
                    //marginLeft: "30%",
                    //marginRight: "30%",
                    borderColor: "#55e7b5",
                    borderWidth: 1,
                    msTransform: "translate(-50%, -50%)",
                    transform: "translate(-50%, -50%)",
                }}>     
                </div>

                <div style={{
                    position: 'absolute',
                    display: 'flex',
                    alignItems: 'center',
                    flexWrap: 'wrap',
                    zIndex: 1,
                    top: "50%",
                    left: "50%",
                    color: "#55e7b5",
                    msTransform: "translate(-50%, -50%)",
                    transform: "translate(-50%, -50%)",
                }}>     
                        <CenterFocusWeakIcon style={{fontSize: 50}}/>
                </div>

                <div style={{
                    position: 'absolute',
                    display: 'flex',
                    alignItems: 'center',
                    flexWrap: 'wrap',
                    zIndex: 1,
                    top: "60%",
                    left: "50%",
                    cursor: 'pointer',
                    color: "#55e7b5",
                    msTransform: "translate(-50%, -50%)",
                    transform: "translate(-50%, -50%)",
                }}>     
                        <div className="px-16">
							<Button variant="contained" color="secondary" onClick={onChooseLocationClick} >
								Choose location
							</Button>
						</div>

                </div>

                <div style={{
                    position: 'absolute',
                    display: 'flex',
                    alignItems: 'center',
                    flexWrap: 'wrap',
                    zIndex: 1,
                    top: "36%",
                    left: "58%",
                    cursor: 'pointer',
                    color: "#55e7b5",
                    msTransform: "translate(-50%, -50%)",
                    transform: "translate(-50%, -50%)",
                }}>     
                        <CloseIcon style={{fontSize: 50}} onClick={onChildClick}/>

                </div>

            </>

	);
}

export default MapTarget;