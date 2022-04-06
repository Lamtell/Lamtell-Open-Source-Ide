import React from "react";
import { Link } from "react-router-dom";
import "./savedCodeTable.css";


export default function Table(props) {
  return (
    <div className="codetable">
      <Link to="/" className="snippet-close-button">
        <i className="fas fa-times-circle"></i>
      </Link>
      <table>
        <tbody>
          <tr className="table-header">
            <th>No.</th>
            <th>Name</th>
            <th>Language</th>
            <th>Created At</th>
          </tr>
          {props.savedCode.map((lecture, key) => {
            return (
              <tr key={key} id={lecture.id} className="table-row">
                <td>
                  <a href={`usercode/${lecture.id}`}>{lecture.no}</a>
                </td>
                <td>
                  <a href={`usercode/${lecture.id}`}>{lecture.name}</a>
                </td>
                <td>
                  <a href={`usercode/${lecture.id}`}>{lecture.language}</a>
                </td>
                <td>
                  <a href={`usercode/${lecture.id}`}>{lecture.createdAt}</a>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
