import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import { useParams } from "react-router-dom";
import { firestore } from "../config/firebaseConfig";
import { doc, getDoc } from "firebase/firestore";

export default function Detail() {
  //tangkap url params
  const { id } = useParams();

  //state
  const [blog, setBlog] = useState({
    title: "",
    description: "",
    banner: "",
    body: "",
    author: "",
    createdAt: "",
  });

  //get single document frm firestore
  const getSingleBlog = () => {
    let docRef = doc(firestore, "blogs/" + id);
    getDoc(docRef)
      .then((res) => {
        console.info(res.data());
        setBlog(res.data());
      })
      .catch((err) => {
        console.error(err);
      });
  };

  //clc
  useEffect(() => {
    getSingleBlog();
  }, []);

  return (
    <div className="App">
      <Helmet>
        <title>{blog.title}</title>
        <meta name="title" content="{blog.title}" />
        <meta name="description" content="{blog.description}" />
      </Helmet>
      <small>{blog.author}</small>
      <hr />
      <img src={blog.banner} alt={blog.title} />

      <hr />
      <p>{blog.body}</p>
      <hr />

      <small>{Date(blog.createdAt).toString()}</small>
    </div>
  );
}
