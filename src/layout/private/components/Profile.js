import React, { useState } from "react";
import { Row, Button, Container, Card } from "react-bootstrap";

const profile = {
  email: "ristic.aleksandra1990@gmail.com",
  github: "https://github.com/risticaleksandra",
};
const avatar = {
  default: { src: "avatar.jpeg", buttonType: "darkRed" },
  toggled: {
    src: `https://api.adorable.io/avatars/285/${profile.email}`,
    buttonType: "dark",
  },
};

const Profile = () => {
  const [avatarImage, setAvatarImage] = useState(avatar.default.src);
  const [buttonType, setButtonType] = useState(avatar.default.buttonType);

  const setAvatarDetails = (details) => {
    setAvatarImage(details.src);
    setButtonType(details.buttonType);
  };

  const hanldeChangeAvatar = () => {
    buttonType === "darkRed"
      ? setAvatarDetails(avatar.toggled)
      : setAvatarDetails(avatar.default);
  };

  return (
    <Container fluid>
      <Row className="wrapper profileWrapper">
        <Card className="profileCard">
          <Card.Header>
            <Card.Title className="cardInfoHeading">
              Aleksandra Ristic
            </Card.Title>
          </Card.Header>
          <Card.Img variant="top cardAvatar" src={avatarImage} />
          <Card.Body>
            <Card.Text className="cardInfo">{profile.email}</Card.Text>
            <Card.Link className="cardInfoLink" href={profile.github}>
              {profile.github}
            </Card.Link>
            <Row className="cardInfo">
              <Button variant={buttonType} onClick={() => hanldeChangeAvatar()}>
                Toggle Avatar
              </Button>
            </Row>
          </Card.Body>
        </Card>
      </Row>
    </Container>
  );
};
export default Profile;
