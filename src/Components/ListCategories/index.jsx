import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getDataFromAPI, urlAPI } from "../../api/api";
import "../../assets/css/blog.css";

const ListCategories = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const urlAPIBuild = urlAPI + "/categorias";
    getDataFromAPI(urlAPIBuild, setCategories).catch((error) =>
      console.log(error)
    );
  }, []);

  return (
    <ul className="category-list container flex">
      {categories.map((category) => (
        <Link to={`/categoria/${category.id}`} key={category.id}>
          <li
            className={`category-list__category category-list__category--${category.id}`}
          >
            {category.nombre}
          </li>
        </Link>
      ))}
    </ul>
  );
};

export default ListCategories;
