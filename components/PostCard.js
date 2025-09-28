import Link from "next/link";

export default function PostCard({ post }) {
    return (
        <div className="border border-gray-300 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex justify-between items-start mb-3">
                <h2 className="text-xl font-semibold text-gray-800 line-clamp-2">{post.title}</h2>
                <span className="text-sm text-gray-500 bg-gray-100 px-2 py-1 rounded">ID: {post.id}</span>
            </div>

            <p className="text-gray-800 mb-4 line-clamp-3">{post.body}</p>

            <div className="flex gap-2">
                <Link
                    href=""
                    className="bg-blue-500 text-white px-4 py-2 rounded hover:b-blue-600 transition-colors text-sm"
                >
                    View Details
                </Link>
                <Link
                    href=""
                    className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition-colors text-sm"
                >
                    Edit
                </Link>
                <Link
                    href=""
                    className="bg-red-500 text-white px-4 py-2 rounded hover:bg-green-600 transition-colors text-sm"
                >
                    Delete
                </Link>
            </div>
        </div>
    );
}
