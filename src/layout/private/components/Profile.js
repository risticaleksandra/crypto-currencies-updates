import React, { useState } from "react";
import { Row, Col, Button } from "react-bootstrap";
import Avatar from "react-avatar";

const profile = {
  email: "ristic.aleksandra1990@gmail.com",
  github: "https://github.com/risticaleksandra",
};
const avatar = {
  default: { src: "avatar.jpeg", buttonType: "primary" },
  toggled: {
    src: `https://api.adorable.io/avatars/285/${profile.email}`,
    buttonType: "info",
  },
};

const Profile = () => {
  const [avatarImage, setAvatarImage] = useState(avatar.default.src);
  const [buttonType, setButtonType] = useState(
    avatar.default.buttonType
  );

  const setAvatarDetails = (details) => {
    setAvatarImage(details.src);
    setButtonType(details.buttonType);
  };

  const hanldeChangeAvatar = () => {
    buttonType === "primary"
      ? setAvatarDetails(avatar.toggled)
      : setAvatarDetails(avatar.default);
  };

  return (
    <>
      <Row>
        <Col xs={6} md={4}>
          <Avatar src={avatarImage} size="200" />
        </Col>
      </Row>
      <Row>
        <Col xs={6} md={4}>
          <label>{profile.email}</label>
        </Col>
      </Row>
      <Row>
        <Col xs={6} md={4}>
          <a href={profile.github}>{profile.github}</a>
        </Col>
      </Row>
      <Row>
        <Col xs={6} md={4}>
          <Button variant={buttonType} onClick={() => hanldeChangeAvatar()}>
            Toggle Avatar
          </Button>
        </Col>
      </Row>
    </>
  );
};
export default Profile;
