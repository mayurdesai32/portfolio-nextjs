import React from "react";
import Image from "next/image";

const SingleBlog = () => {
  return (
    <div className="SingleBlog">
      <div className="blog_image">
        <Image
          src={"/mdtv.png"}
          alt="hero"
          width={300}
          height={250}
          priority={false}
          placeholder="empty"
        />
      </div>
    </div>
  );
};

export default SingleBlog;
