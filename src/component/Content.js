import React from "react";
import Container from "@material-ui/core/Container";
import { SettingPage } from "./SettingPage";
import { RecordPage } from "./RecordPage";
import "../scss/base.scss";

export class Content extends React.Component {
  constructor(props) {
    super(props);
  }

  genPostCards(posts) {
    let postComponents = posts.map((post, index) => {
      return <PostCard key={index} post={post} />;
    });
    postComponents.push(<LoadCard key={posts.length} lastCard={true} />);
    return postComponents;
  }

  genLoadCards() {
    return [...Array(5).keys()].map((i) => {
      return <LoadCard key={i} />;
    });
  }


  render() {
    return (
      <Container className="margin-top-60" maxWidth="md">
        <SettingPage />
        <RecordPage />
        {/* {this.genContent()} */}
      </Container>
    );
  }
}
