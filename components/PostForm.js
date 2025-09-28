'use client'

import { useState } from "react";

export default function PostForm({ post, onSubmit, submitText = 'Submit' }) {
    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')
    const [userId, setUserId] = useState('')
    const [isSubmitting, setIsSubmitting] = useState(false)

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true)
        try {
            await onSubmit({title, body, userId: Number(userId)})
        } catch (error) {
            alert('Failed to save post')
        }finally {
            setIsSubmitting(false)
        }
    };

    return (
        <form onSubmit={handleSubmit} className="max-2xl mx-auto space-y-6">
            <div>
                <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-2">
                    Title
                </label>
                <input
                    type="text"
                    id="title"
                    required
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Enter post title"
                />
            </div>

            <div>
                <label htmlFor="body" className="block text-sm font-medium text-gray-700 mb-2">
                    Content
                </label>
                <textarea
                    id="body"
                    required
                    rows="6"
                    value={body}
                    onChange={(e) => setBody(e.target.value)}
                    className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Enter post content"
                />
            </div>

            <div>
                <label htmlFor="userId" className="block text-sm font-medium text-gray-700 mb-2">
                    User ID
                </label>
                <input
                    type="number"
                    id="userId"
                    required
                    min="1"
                    value={userId}
                    onChange={(e) => setUserId(e.target.value)}
                    className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Enter user ID"
                />
            </div>

            <div className="flex gap-4">
                <button
                    type="submit"
                    className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition-colors disabled:opacity-50"
                    disabled={isSubmitting}
                >
                    {isSubmitting ? 'saving' : submitText}
                </button>
            </div>
        </form>
    );
}
