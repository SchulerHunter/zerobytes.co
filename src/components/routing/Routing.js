import React, { memo } from "react";
import { Switch } from "react-router-dom";
import PropTypes from "prop-types";
import PropsRoute from "./PropsRoute";
import Blog from "../blog/Blog";
import BlogPost from "../blog/BlogPost";
import Home from "../home/Home";

function Routing(props) {
  const { blogPosts, selectBlog, selectHome } = props;
  return (
    <Switch>
      {blogPosts.map((post) => (
        <PropsRoute
          path={post.url}
          component={BlogPost}
          title={post.title}
          key={post.title}
          src={post.src}
          date={post.date}
          content={post.content}
          otherArticles={blogPosts.filter(
            (blogPost) => blogPost.id !== post.id
          )}
        />
      ))}
      <PropsRoute
        exact
        path="/billing"
        component={() => {window.location.replace("https://billing.zerobytes.co/client")}}
      />
      <PropsRoute
        exact
        path="/blog"
        component={Blog}
        selectBlog={selectBlog}
        blogPosts={blogPosts}
      />
      <PropsRoute
        path="/"
        component={Home}
        selectHome={selectHome}
      />
    </Switch>
  );
}

Routing.propTypes = {
  blogposts: PropTypes.arrayOf(PropTypes.object),
  selectHome: PropTypes.func.isRequired,
  selectBlog: PropTypes.func.isRequired,
};

export default memo(Routing);
