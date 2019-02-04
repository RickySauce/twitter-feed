import React from 'react';

const Tweet = (props) => {

    return (
      <div className="the-tweet">
        {props.user ?
          props.user :null
        }
        {props.body}
      </div>
    )

}

export default Tweet
