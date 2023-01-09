import React, { useContext } from "react";
import { UserContext } from "../../../context/AuthContext";

const UpdateLogo = () => {
    const {setLogo} = useContext(UserContext)

    const handleSubmit = (event) => {

        event.preventDefault()
        const image = event.target.image.files[0]
        console.log(event.target.image.files[0])
        // console.log(image)
        const formData = new FormData()
        formData.append('image', image)
        // setImageFormData(formData)
        // console.log(formData)
        // console.log('working')


          // Image upload URL
         const URL = `https://api.imgbb.com/1/upload?key=f1d30ea7c8fecc2dd9602fc06cb43f8e`
         fetch(URL, {
             method: "POST",
             body: formData
         })
         .then(res => res.json())
         .then(data => {
             console.log(data.data.display_url)
             setLogo(data.data.display_url)
         })
         .catch(error => console.log(error))
    }
  return (
    <div className="w-full container mx-auto px-24 mt-16">
      <h1 className="text-4xl mb-16 font-bold text-center ">
        Upload your logo for Update
      </h1>
      <form onSubmit={handleSubmit}>
        <input name="image" type="file" className="file-input file-input-bordered w-full" />
        <div className="text-end">
          <button className="btn mt-4">Save</button>
        </div>
      </form>
    </div>
  );
};

export default UpdateLogo;
