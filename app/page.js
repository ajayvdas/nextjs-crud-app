import PostCard from "@/components/PostCard";
import { fetchPosts } from "@/lib/api";

export default async function Home() {
    // const posts = [
    //     {
    //         userId: 1,
    //         id: 1,
    //         title: "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
    //         body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
    //     },
    //     {
    //         userId: 1,
    //         id: 2,
    //         title: "qui est esse",
    //         body: "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla",
    //     },
    // ];
    const posts = await fetchPosts()

    if (!posts || posts.length === 0) {
      return <p className="text-black">No posts found</p>
    }
    return (
        <div>
            <div className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-2">All Posts</h2>
                <p className="text-gray-600">Browse all posts from the JSONPlaceholder API</p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {posts.map((post) => (
                    <PostCard key={post.id} post={post} />
                ))}
            </div>
        </div>
    );
}
