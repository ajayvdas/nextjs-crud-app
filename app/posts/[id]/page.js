import { fetchPost } from "@/lib/api";
import Link from "next/link";

export async function generateMetadata({ params }) {
    const post = await fetchPost(params.id)

    if (!post) {
        return {
            title: 'Post not found'
        }
    }

    return {
        title: post.title,
        description: post.body.substring(0, 160)
    }
}

export default async function PostDetailPage({ params }) {
    const post = await fetchPost(params.id)

    if (!post) {
        return (
            <div className="text-center py-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Post Not Found</h2>
                <p className="text-gray-600 mb-6">The post you&#39;re looking for doesn&#39;t exist.</p>
                <Link href="/" className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition-colors">
                    Back to Home
                </Link>
            </div>
        );
    }

    return (
        <div className="max-w-4xl mx-auto">
            <div className="mb-6">
                <Link href="/" className="text-blue-500 hover:text-blue-600 hover:underline transition-colors">
                    ← Back to Posts
                </Link>
            </div>

            <article className="bg-white rounded-lg shadow-sm p-8">
                <header className="mb-8">
                    <div className="flex justify-between items-start mb-4">
                        <h1 className="text-3xl font-bold text-gray-900">{post.title}</h1>
                        <span className="text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded">
                            ID: {post.id} | User: {post.userId}
                        </span>
                    </div>
                </header>

                <div className="prose prose-lg max-w-none mb-8">
                    <p className="text-gray-700 leading-relaxed whitespace-pre-wrap">{post.body}</p>
                </div>

                <footer className="flex gap-3 pt-6 border-t">
                    <Link
                        href={`/posts/${post.id}/edit`}
                        className="bg-green-500 text-white px-6 py-2 rounded-lg hover:bg-green-600 transition-colors"
                    >
                        Edit Post
                    </Link>

                    {/* Delete Button */}
                    <Link href=''>
                        Delete
                    </Link>
                </footer>
            </article>
        </div>
    );
}
