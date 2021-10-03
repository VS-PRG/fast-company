import React from "react";

function SearchStatus(props) {
	const classes = ['badge']
	props.userCount === 0 ? classes.push('bg-danger') : classes.push('bg-primary')
  return (
    <h2>
      <span className={classes.join(' ')}>
        {props.userCount === 0 ? 'Никто с тобой не тусанет' : `${props.userCount} человек${props.userCount > 1 && props.userCount < 5 ? 'а' : ''} тусанут с тобой сегодня!`}
      </span>
    </h2>
  );
}

export default SearchStatus;
