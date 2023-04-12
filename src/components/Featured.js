import React from 'react'
import "./css/featured.css";

const Featured = () => {
  return (
    <>
    <div className='featured'>
    <div className="scroll">
  <h2> Featured in</h2>
  <ul>
 
    <li>
      {" "}
      <img src="/photos/1.jpeg" alt="first" />{" "}
    </li>
    <li>
      {" "}
      <img src="/photos/2.jpeg" alt="second" />{" "}
    </li>
    <li>
      {" "}
      <img src="/photos/3.jpg" alt="third" />{" "}
    </li>
    <li>
      {" "}
      <img src="/photos/4.jpg" alt="fourth" />{" "}
    </li>
    <li>
      {" "}
      <img src="/photos/5.png" alt="fifth" />{" "}
    </li>
    <li>
      {" "}
      <img src="/photos/6.jpg" alt="sixth" />{" "}
    </li>

    <li></li>
  </ul>
</div>
</div>

    </>
  )
}

export default Featured;
