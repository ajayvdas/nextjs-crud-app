import PostForm from "@/components/PostForm";
import { fetchPost } from "@/lib/api";
import Link from "next/link";


export async function generateMetadata({ params }) {
    const post = await fetchPost(params.id)

    return {
        title: post ? `Edit: ${post.title}` : 'Edit Post',
        description: 'Edit an existing blog post'
    }
}

export default async function EditPostPage({ params }) {
    const post = await fetchPost(params.id)

  if (!post) {
    return (
      <div className="text-center py-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Post Not Found</h2>
        <p className="text-gray-600 mb-6">The post you&#39;re trying to edit doesn&#39;t exist.</p>
        <Link 
          href="/"
          className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition-colors"
        >
          Back to Home
        </Link>
      </div>
    );
  }

  const handleSubmit = async (formData) => {
    'use server'
    await updatePostAction(params.id, formData)
  }

  return (
    <div>
        <div className="mb-6">
            <Link
                href='/'
                className="text-blue-500 hover:text-blue-600 transition-colors"
            >
                ← Back to Post
            </Link>
        </div>

        <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Edit Post</h2>
            <p className="text-gray-600">
                Update the post details below
            </p>
        </div>

        <PostForm 
            post={post}
            onSubmit={handleSubmit}
            submitText="Update Post"
        />
    </div>
  )
}