import React from "react";

import BlogPost from "./components/BlogPost/BlogPost";

import styles from "./Blog.module.css";

import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import { createTheme, ThemeProvider } from "@mui/material/styles";

//button theme
const theme = createTheme({
  palette: {
    primary: {
      main: "#a19f9c",
    },
  },
});

//TODO: integrate with CMS and replace lorem ipsum
//dummy content
const fakeText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sint modo partes vitae beatae. Ait enim se, si uratur, Quam hoc suave! dicturum. Nos commodius agimus. Itaque primos congressus copulationesque et consuetudinum instituendarum voluntates fieri propter voluptatem; Quantum Aristoxeni ingenium consumptum videmus in musicis? Duo Reges: constructio interrete. De malis autem et bonis ab iis animalibus, quae nondum depravata sint, ait optime iudicari.

Aliter enim explicari, quod quaeritur, non potest. Is es profecto tu. In eo enim positum est id, quod dicimus esse expetendum. Universa enim illorum ratione cum tota vestra confligendum puto. Ea, quae dialectici nunc tradunt et docent, nonne ab illis instituta sunt aut inventa sunt? Ita ne hoc quidem modo paria peccata sunt. Sed ego in hoc resisto; `;

function Blog() {
  return (
    <div id={styles.Blog}>
      <ThemeProvider theme={theme}>
        <Button id={styles.returnButton} component={Link} to="/help_center">
          Return
        </Button>
      </ThemeProvider>

      <BlogPost title="First title" image="1img" content={fakeText} />
      <BlogPost title="Second title" image="2img" content="2content" />
      <BlogPost title="Third title" image="3img" content="3content" />
    </div>
  );
}

export default Blog;
