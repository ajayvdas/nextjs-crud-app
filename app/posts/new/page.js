import PostForm from "@/components/PostForm"

export const metadata = {
    title: 'Create New Post',
    description: 'Create a new blog post'
}

export default function NewPostPage () {
    const handleSubmit = async (formData) => {
        'use server'
        await createPostAction(formData)
    }
    return (
        <div>
            <div className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-2">Create New Post</h2>
                <p className="text-gray-600">
                    Fill out the form below to create a new post.
                </p>
            </div>

            <PostForm onSubmit={handleSubmit} submitText="Create Post" />
        </div>
    )
}