import React, { useState } from "react";
import styled from "styled-components";

function RatingSlider(props){
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const rateColors = ["red", "orange", "yellow", "olive", "green"];

  return (
      <Wrapper className="star-rating">
        {[...Array(5)].map((block, index) => {
          index += 1;
          return (
            <button
              type="button"
              key={index}
              className={index <= (hover || rating) ? "on"+index : "off"+index}
              onClick={() => {
                setRating(index)
              }}
              onMouseEnter={() => setHover(index)}
              onMouseLeave={() => setHover(rating)}
            />
          );
        })}
      </Wrapper>
  );
};

const Wrapper = styled.div`
button {
  width: 60px;
  height: 40px;
  margin-top: 30px;
  margin-right: 2px;
  background-color: #F2F2F2;
  border: none;
  outline: none;
  cursor: pointer;
}
.on1 {
opacity: 0.5;
background-color: red;
}
.off1 {
color: none;
}
.on2 {
opacity: 0.5;
background-color: orange;
}
.off2 {
  color: none;
}
.on3 {
  opacity: 0.5;
  background-color: yellow;
}
.off3 {

}
.on4 {
  opacity: 0.5;
  background-color: LimeGreen;
}
.off4 {

}
.on5 {
  opacity: 0.5;
  background-color: DarkGreen;
}
.off5 {

}
`;


export default RatingSlider;