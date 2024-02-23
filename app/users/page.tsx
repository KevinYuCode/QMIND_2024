import React from 'react';
import Container from "../components/Container";
import "./pages.scss";
import Image from "next/image";
import EXAMPLE from "../../assets/Users/example.png";

const images = [EXAMPLE, EXAMPLE, EXAMPLE, EXAMPLE, EXAMPLE]
function Users() {
  return (
    <Container>
        <div className="users-container">
          <div className="users-title">
            <h1>Secure Shell Communication using Quantum Key Distribution</h1>
            <p>Disruptive technologies</p>
          </div>
          <div className="users-tech">
            <div className="users-tech-item">
              PYTHON
            </div>
            <div className="users-tech-item">
              PYTHON
            </div>
            <div className="users-tech-item">
              PYTHON
            </div>
          </div>
          <div className="users-img-title">
            PHOTO & VIDEO GALLERY
          </div>
          <div className="users-img">
          {images.map((image, index) => (
            <Image
              key={index}
              className="w-[338px] h-[253.5px] rounded-[12px] border-[1.5px] border-[#4E4E4E]"
              src={image}
              alt=""
            />
          ))}
          </div>
        </div>
    </Container>
  )
}

export default Users