import React, { useState } from "react";
import api from "../API";
import User from "./user";
import SearchStatus from "./searchSatus";

const Users = () => {
  const [users, setUsers] = useState(api.users.fetchAll() || []);
  const handleDelete = (userId) => {
	  const newUsers = users.filter(v => v._id !== userId)
	  setUsers(newUsers)
  };
  const renderPhrase = (number) => {};
  return <><SearchStatus userCount={users.length}/><table class="table">
  <thead>
	  <tr>
	  <th scope="col">#</th>
	  <th scope="col">First</th>
	  <th scope="col">Last</th>
	  <th scope="col">Handle</th>
	  </tr>
  </thead>
  <tbody>
	  {users.map((v) => <User {...v} handleDelete={handleDelete}/>)}
  </tbody>
</table></>;
};

export default Users;
