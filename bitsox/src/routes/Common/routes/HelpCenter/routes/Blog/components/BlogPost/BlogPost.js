import React from "react";
import styles from "./BlogPost.module.css";

import Icon from "@mui/material/Icon";
import Button from "@mui/material/Button";
import { createTheme, ThemeProvider } from "@mui/material/styles";

/**



dummy image div


*/

//get title from store based on unique blogpost hash id
const Title = (props) => {
  return <h3>{props.title}</h3>;
};

//get image from store
const Image = (props) => {
  return <div className={styles.fakeImg}>{props.image}</div>;
};

//get content from store
const Content = (props) => {
  const [showLess, setShowLess] = React.useState(true);

  return (
    <div>
      <p>{showLess ? `${props.content.slice(0, 20)}...` : props.content}</p>
      <a
        href="#post"
        style={{ color: "blue", cursor: "pointer" }}
        onClick={() => setShowLess(!showLess)}
      >
        &nbsp;View {showLess ? "More" : "Less"}
      </a>
    </div>
  );
};

//theme for buttons
const theme = createTheme({
  palette: {
    primary: {
      main: "#a022b5",
    },
  },
});

//render blog post buttons
const BlogButtons = () => {
  return (
    <span>
      <ThemeProvider theme={theme}>
        <Button>
          <Icon>favorite</Icon>
        </Button>
        <Button>
          <Icon>comment</Icon>
        </Button>
        <Button>
          <Icon>link</Icon>
        </Button>
      </ThemeProvider>
    </span>
  );
};

//retrieve comments from store
const Comments = () => {
  return <div>Comments</div>;
};

function BlogPost(props) {
  return (
    <div className={styles.blogPost}>
      <Title title={props.title} />
      <Image image={props.image} />
      <Content content={props.content} />
      <BlogButtons />
      <Comments />
    </div>
  );
}

export default BlogPost;
