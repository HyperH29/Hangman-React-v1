import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";

function HelperPopup({ name, ...props }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="info" onClick={handleShow} className="me-2">
        {name}
      </Button>
      <Offcanvas show={show} onHide={handleClose} {...props}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>How to play</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <p>
            Using you mouse (using on screen keyboard) or keyboard input the
            letters you think are the correct.
          </p>
          <p>
            {" "}
            You have 10 chances to get the right answer otherwise you will lose
            your chance to win.
          </p>
          <br />
          <br />
          <h3>Rules</h3>
          <p>1. You can only guess one letter at a time.</p>
          <p>2. You can only guess a letter once.</p>
          <p>3. You can only guess a letter that is in the word.</p>
          <p>
            4. You can only guess a letter that is in the alphabet no symbols or
            numbers.
          </p>
          <p>Have Fun!</p>
          <br />
          {/*This element will change it value on restart or next lvl */}
          <p>Hint: The word is a fruit.</p>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

function HelperBtn() {
  return (
    <>
      {["end"].map((placement, idx) => (
        <HelperPopup key={idx} placement={placement} name={"Help"} />
      ))}
    </>
  );
}

export default HelperBtn;
