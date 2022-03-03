import React from "react";
import "./style.css";
import axios from "axios";
import { useEffect, useState } from "react";
import Moment from 'react-moment';
import "./savedCodeTable.css";
import { useCookies } from "react-cookie";
let userCode = [];

let globalUrl =
  process.env.NODE_ENV === "development"
    ? "http://localhost:5000/"
    : window.location.href;


export default function UserCode() {
  const [codeInfo, setCodeInfo] = useState([]);
  const [cookies] = useCookies(["cookie-name"]);
  useEffect(() => {
    (() => {

      axios(
        `${globalUrl}usercode/${cookies.sessId}`
      ).then((response) => {
        if (response.data.status === 200) {
          response.data.code.forEach((code, index) => {
            userCode.push({
              code: code.code,
              no: index + 1,
              id: code._id,
              name: code.name,
              language: code.language,
              createdAt: code.createdAt,
            });
          });
          //userCode.reverse();
          setCodeInfo(userCode);
          userCode = []
        } else if (response.data.status === 401) {
          alert(response.data.message);
        }
      });
    })();
  }, []);

  return (
    <>
      <div className="codetable">
      <table>
        <tbody>
          <tr className="table-header">
            <th>No.</th>
            <th>Name</th>
            <th>Language</th>
            <th>Created At</th>
          </tr>
          {codeInfo.map((lecture, key) => {

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
                  <a href={`usercode/${lecture.id}`}>
                    <Moment>
                    {lecture.createdAt}
                    </Moment>
                    </a>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
    </>
  );
}
