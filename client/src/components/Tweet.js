import React from 'react';

const Tweet = (props) => {

    return (
      <div className="the-tweet">
        {props.username ?
          props.username :null
        }
        <br/>
        {props.body}
      </div>
    )

}

export default Tweet
