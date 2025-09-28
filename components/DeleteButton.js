"use client";

import { useState } from "react";

export default function DeleteButton({ postId }) {
    const [isDeleting, setIsDeleting] = useState(false);

    const handleDelete = async (e) => {
        if (!confirm('Are you sure you want to delete this post?')) return;

        setIsDeleting(true)
        try {
            await deletePostAction(postId);
        } catch (error) {
            alert('Failed to delete post');
        } finally {
            setIsDeleting(false)
        }
    };

    return (
        <button
            onClick={handleDelete}
            disabled={isDeleting}
            className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition-colors text-sm disabled:opacity-50"
        >
            {isDeleting ? "Deleting..." : "Delete"}
        </button>
    );
}
