import React from "react";
import "./style.css";
import { Container } from "react-bootstrap";

const ColorKey = ({ colorKey }) => {
  const keySorted =
    colorKey?.groupA || colorKey?.groupB || colorKey?.groupC || colorKey?.groupD ? (
      <div className="color-key-item">
        <div className="color-key-box color-key-sorted"></div>
        <span>Sorted</span>
      </div>
    ) : (
      <div className="color-key-item">
        <div className="color-key-box color-key-unsorted"></div>
        <span>Unsorted</span>
      </div>
    );

  const keyA = colorKey?.groupA ? (
    <div className="color-key-item">
      <div className="color-key-box color-key-groupA"></div>
      <span>{colorKey?.groupA}</span>
    </div>
  ) : null;

  const keyB = colorKey?.groupB ? (
    <div className="color-key-item">
      <div className="color-key-box color-key-groupB"></div>
      <span>{colorKey?.groupB}</span>
    </div>
  ) : null;

  const keyC = colorKey?.groupC ? (
    <div className="color-key-item">
      <div className="color-key-box color-key-groupC"></div>
      <span>{colorKey?.groupC}</span>
    </div>
  ) : null;

  const keyD = colorKey?.groupD ? (
    <div className="color-key-item">
      <div className="color-key-box color-key-groupD"></div>
      <span>{colorKey?.groupD}</span>
    </div>
  ) : null;

  return (
    <Container className="text-start">
      {keySorted}
      {keyA}
      {keyB}
      {keyC}
      {keyD}
    </Container>
  );
};

export default ColorKey;
