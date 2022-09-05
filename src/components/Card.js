import React from "react";
import locationIcon from "../assets/Fill 219.svg";

export default function Card(props) {
  return (
    <div className="card">
      <img src={props.item.imageUrl} className="card-image" />
      <div className="card-content">
        <div className="card-location">
          <div className="card--location">
            <img src={locationIcon} className="location-icon" />
            <h4 className="location">{props.item.location}</h4>
          </div>
          <a href={props.item.googleMapsUrl} className="anchor-link">
            View on Google maps
          </a>
        </div>
        <h1 className="place">{props.item.title}</h1>
        <h4>
          {props.startDate} - {props.item.endDate}
        </h4>
        <p className="text">{props.item.description}</p>
      </div>
    </div>
  );
}
