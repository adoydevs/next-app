import Link from "next/link";
const Posts = async () => {
  const res = await fetch('http://localhost:5000/posts');
  const posts = await res.json();
  
  return (
    <div className="w-full">
      {
        posts.map((post: any)=> 
        <div key={post} className="card w-[70%] bg-primary text-primary-content mx-auto my-5">
        <div className="card-body">
          <h2>Post Number: {post.id}</h2>
          <h2 className="card-title">{post.title}</h2>
          <p>{post.body}</p>
          <div className="card-actions">
            <Link href="/"><button className="btn">See More</button> 
            </Link>
          </div>
        </div>
      </div>
          )
      }
      
    </div>
  );
};

export default Posts;
