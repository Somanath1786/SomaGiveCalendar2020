import React from 'react'
import './Filter.css'
import { DefaultButton } from 'office-ui-fabric-react/lib/Button';
import { Label } from 'office-ui-fabric-react/lib/Label';

function Filter()
{
    return(
        <div>
            <h2> Filter Events</h2>
            <div name="filterContainer" className="filterContainer">
                <div name="eventFilter" className="filterRow">
                    {/* <label for="eventType" className="filterKey"> Event Type  </label> */}
                    <Label className="filterKey"> Event Type </Label>
                    <select name ="eventType" id= "eventType" className="filterValue">
                        <option value="All">All</option>
                        <option value="Single Day Events">Single Day Events</option>
                        <option value="Month Long Events">Month Long Events</option>
                    </select>
                </div>
                <div name="sltFilter" className="filterRow">
                    {/* <label for="sltLeader" className="filterKey"> SLT Leader  </label> */}
                    <Label className="filterKey"> SLT Leader </Label>
                    <select name ="sltLeader" id= "sltLeader" className="filterValue">
                        <option></option>
                        <option value="Amy Hood">Amy Hood</option>
                        <option value="Brad Smith">Brad Smith</option>
                        <option value="Chris Capossela">Chris Capossela</option>
                        <option value="Jean-Philippe Courtois">Jean-Philippe Courtois</option>
                        <option value="Judson Althoff">Judson Althoff</option>
                        <option value="Kathleen Hogan">Kathleen Hogan</option>
                        <option value="Kevin Scott">Kevin Scott</option>
                        <option value="Kurt DelBene">Kurt DelBene</option>
                        <option value="Non SLT Aligned">Non SLT Aligned</option>
                        <option value="Phil Spencer">Phil Spencer</option>
                        <option value="Rajesh Jha">Rajesh Jha</option>
                        <option value="Scott Guthrie">Scott Guthrie</option>
                        <option value="No SLT Specified"> No SLT Specified</option>
                    </select>
                </div>
                <div>
                    <DefaultButton text="Filter" className="filterButton"/>
                    <DefaultButton text="Clear" className="filterButton"/>
                </div>
            </div>
        </div>
    )
}

export default Filter;