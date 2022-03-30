import React, { useState } from 'react';
import './FormActivity.css'

const FormActivity = (props) => {
    const [activityName, setActivityName] = useState("");
    const [activityDate, setActivityDate] = useState("");
    const [activityDuration, setActivityDuration] = useState("");
    const [activityDescription, setActivityDescription] = useState("");
    const handleChange = (event) => {
        props.setActivityType(event.target.value);
      };

    console.log(activityDate)

  return (
    <div className="activity-container">
            <div className="activity">
                <div className="activity-name">
                    <h3>Activity Name</h3>
                    <input id="fullname" 
                            name="fullname" 
                            type="text" 
                            placeholder="FirstName LastName" 
                            value={activityName} 
                            onChange={(event) => setActivityName(event.target.value)}/>
                </div>
                <div className="date">
                    <h3>Date</h3>
                    <input id="datename" 
                            type="datetime-local" 
                            placeholder="dd/mm/yyyy" 
                            value={activityDate} 
                            onChange={(event) => setActivityDate(event.target.value)}/>
                </div>
                <div className="activity-type">
                    <h3>Activity Type</h3>
                    <select value={props.activityType}
                            onChange={handleChange}>
                        <option>running</option>
                        <option>swimming</option>
                        <option>basketball</option>
                        <option>bike</option>
                        <option>dumbbell</option>
                        <option>ping-pong</option>
                        <option>boxing</option>
                        <option>tennis</option>
                        <option>yoga</option>
                        <option>soccer</option>
                        <option>golf</option>
                        <option>other</option>

                    </select>
                </div>
                <div className="activity-duration">
                    <h3>Activity-Duration</h3>
                    <input type="text" 
                    value={activityDuration} 
                    onChange={(event) => setActivityDuration(event.target.value)}/>
                </div>
                <div className="describe">
                    <h3>Describe this journal</h3>
                    <input type="text" 
                    value={activityDescription} 
                    onChange={(event) => setActivityDescription(event.target.value)}/>
                </div>
                <div className="add-button">
                    <a href="">
                        ADD ACTIVITY
                    </a>
                </div>

            </div>
            <div className="activity-img">
                <img src="./icon-sport/running (1).png" alt="" />
                
            </div>
        </div>
    
  );
}

export default FormActivity;
