import React, { useState } from "react";
import UserData from "../Utils/UserData";
import "./Userlist.css";
import UserlistDetail from "./UserlistDetail";
const Userlist = (props) => {
  const [search, setsearch] = useState("");
  const [detail, setdetail] = useState("");
  const searchHandler = (e) => {
    e.preventDefault();
    setsearch(e.target.value);
  };

  const onClickItem = (ele) => {
    console.log(ele);
    setdetail(ele);
  };

  return (
    <div className="main">
      <div className="leftContainer">
        <form action="/">
          <button type="submit">
            <img
              src="https://e7.pngegg.com/pngimages/342/516/png-clipart-computer-icons-search-icon-zooming-user-interface-computer-icons.png"
              alt="Search Icon"
              className="searchicon"
            />
          </button>

          <input
            type="text"
            placeholder="Enter something"
            name="search-box"
            id="search-box"
            onChange={searchHandler}
          />
        </form>

        <div id="table-wrapper">
          <div id="table-headers">
            <table>
              <thead>
                <tr>
                  <th className="column1">Id</th>
                  <th className="column2">FirstName</th>
                  <th className="column3">LastName</th>
                  <th className="column4">Email</th>
                  <th className="column5">Phone</th>
                </tr>
              </thead>
            </table>
          </div>

          <div id="table-data">
            <table>
              <tbody>
                {UserData.filter((ele) => {
                  return search.toLowerCase() === ""
                    ? ele
                    : ele.firstName.toLowerCase().includes(search);
                }).map((ele) => (
                  <tr
                    className="data-row"
                    key={Math.random()}
                    onClick={() => onClickItem(ele)}
                  >
                    <td className="column1" key={ele.id + Math.random() + 1}>
                      {ele.id}
                    </td>
                    <td className="column2" key={ele.id + Math.random() + 10}>
                      {ele.firstName}
                    </td>
                    <td className="column3" key={ele.id + Math.random() + 15}>
                      {ele.lastName}
                    </td>
                    <td className="column4" key={ele.id + Math.random() + 5}>
                      {ele.email}
                    </td>
                    <td className="column5" key={ele.id + Math.random() + 20}>
                      {ele.phone}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div className="rightContainer">
        {detail && <UserlistDetail detail={detail} />}
      </div>
    </div>
  );
};

export default Userlist;
