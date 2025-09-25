import { useNavigate } from "react-router-dom";

function IntroPost({post}) {
  const navigate = useNavigate();
  return ( 
    <div className="grid grid-cols-1 md:grid-cols-2 mt-10 cursor-pointer
    px-10 md:px-15 lg:px-32 gap-8" onClick={() => post?.slug && navigate(`/blog-detail/${post.slug}`)}>
      <img src={post.coverImage} 
      className="rounded-2xl object-cover w-full h-full "/>
      <div> 
        <h2 className="text-[23px] font-bold mt-5"> {post.title}</h2>
        <h4 className="brown">{post.tag}</h4>
        <h4 className="line-clamp-6 text-gray-400 mt-5">{post.desc}</h4>
        </div>
      
    </div>
  )
}

export default IntroPost;
