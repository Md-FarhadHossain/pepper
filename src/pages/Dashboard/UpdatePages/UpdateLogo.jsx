import { async } from "@firebase/util";
import React, { useContext, useState } from "react";
import { toast } from "react-hot-toast";
import { UserContext } from "../../../context/AuthContext";

const UpdateLogo = () => {
  const { logoImage, setLogoImage, logoUpload, setLogoUpload } =
    useContext(UserContext);
  // const [logo, setLogo] = useState('')
  const [upload, setUpload] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const image = event.target.image.files[0];

    const formData = new FormData();
    formData.append("image", image);

    setUpload(true);

    // Image upload URL
    const URL = `https://api.imgbb.com/1/upload?key=f1d30ea7c8fecc2dd9602fc06cb43f8e`;
    await fetch(URL, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.success) {
          setUpload(false);
        }
        setLogoImage(data.data.display_url);
      })
      .catch((error) => console.log(error));
  };

  const handleImageSave = async (event) => {
    event.preventDefault();
    const result = {
      logo: logoImage,
    };

    await fetch("https://server-md-farhadhossain.vercel.app/logo/63bca165461922059da74ccf", {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(result),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.acknowledged) {
          setLogoUpload(!logoUpload);
          toast.success('Logo Updated!')
        }
      });
  };
  return (
    <div className="w-full container mx-auto lg:px-24 md:px-14 px-4 mt-16">
      <h1 className="text-4xl mb-16 font-bold text-center ">
        Upload your logo for Update
      </h1>
      <form onSubmit={handleSubmit}>
        <input
          name="image"
          type="file"
          className="file-input file-input-bordered w-full"
        />
        <div className="text-end">
          {upload ? (
            <button className="btn loading mt-4">loading</button>
          ) : (
            <button type="submit" className="btn mt-4">
              Upload
            </button>
          )}
          <button onClick={handleImageSave} className="btn mt-4 ml-4">
            Save
          </button>
        </div>
      </form>

      {/* Preview */}
      <div className="border-2 border-collapse mt-8 border-red-600 flex justify-center flex-col items-center gap-8 py-8  border-dashed">
        <h1 className="text-4xl font-semibold text-center">Preview</h1>
        <img src={logoImage} alt="logo" />
      </div>
    </div>
  );
};

export default UpdateLogo;
