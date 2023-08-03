import { useState, useEffect } from "react";

export default function Form(props) {
  //state to hold the data of our from
  const [formData, setFormData] = useState({
    searchterm: "",
  });

  //handle change: updates formData when we type into form

  const handleChange = (e) => {
    //use the event object to detect the key and value to update
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    //prevent page from refreshing on form submission
    e.preventDefault();
    //pass the search term to moviesearch prop, which is apps getMovie function
    props.moviesearch(formData.searchterm);

    // same as props.moviesearch(formData.searchterm)
    // getMovie(formData.searchterm)
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="searchterm"
          onChange={handleChange}
          value={formData.searchterm}
        />
        <input type="submit" value="submit" />
      </form>
    </div>
  );
}
