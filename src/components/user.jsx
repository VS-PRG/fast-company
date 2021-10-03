import React from "react";

function User(props) {
	return (
	  <tr>
		 <td>{props.name}</td>
		 <td>
			{props.qualities.map((v, k) => {
			return (
				<span className={"badge m-2 bg-" + v.color || "default"} key={k}>
					{v.name || "Default"}
				</span>
			);
			})}
    	</td>

		 <td>{props.profession.name}</td>
		 <td>{props.completedMeetings}</td>
		 <td>{props.rate}</td>
		 <td>
			<button
			  className="btn btn-danger btn-sm"
			  onClick={() => props.handleDelete(props._id)}
			>
			  Delete
			</button>
		 </td>
	  </tr>
	);
 }
 
 export default User;