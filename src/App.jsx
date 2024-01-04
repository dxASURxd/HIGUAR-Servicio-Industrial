import React, { useEffect, useState } from "react";
import { ApiGraph, buildGraphApiUrl } from "./services/api_graph";

const App = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await ApiGraph.get(buildGraphApiUrl());

        if (response.data && response.data.data) {
          setPosts(response.data.data);
        } else {
          console.log("La respuesta no contiene datos de posts:", response.data);
        }
      } catch (error) {
        console.log("Error al obtener los posts:", error);
      }
    };

    fetchPosts();
  }, []);

  return (
    <div className="">
      App
    </div>
  );
};

export default App;
