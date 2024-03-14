import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="text-5xl font-bold">Next Level Data Fetching</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <Link href="./pages/blog">
              <button className="btn btn-active m-5">Blog</button>
            </Link>
            <Link href="./pages/blog/posts">
              <button className="btn btn-active btn-neutral m-5">Posts</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
