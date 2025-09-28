const API_BASE = "https://jsonplaceholder.typicode.com";

export async function fetchPosts() {
    try {
        const response = await fetch(`${API_BASE}/posts`, {
            cache: "no-store",
            next: { tags: ["posts"] },
        });

        if (!response.ok) {
            throw new Error("Failed to fetch posts");
        }

        return await response.json();
    } catch (error) {
        console.error("Error fetching posts: ", error);
        return error;
    }
}

export async function fetchPost(id) {
    try {
        const response = await fetch(`${API_BASE}/posts/${id}`, {
            cache: "no-store",
            next: { tags: ["posts", `post-${id}`] },
        });

        if (!response.ok) throw new Error("Error fetching post");

        return await response.json();
    } catch (error) {
        console.error("Error fetching post: ", error);
        throw new Error("Error fetching post!");
    }
}

export async function createPost(data) {
    try {
        const response = await fetch(`${API_BASE}/posts`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        });

        if (!response.ok) throw new Error("Failed to create post");
        return await response.json();
    } catch (error) {
        console.error("Error creating post: ", error);
        throw error;
    }
}

export async function updatePost(id, data) {
    try {
        const response = await fetch(`${API_BASE}/posts/${id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        });
        if (!response.ok) throw new Error("Failed to update post");
        return await response.json();
    } catch (error) {
        console.error("Error updating post:", error);
        throw error;
    }
}

export async function deletePost(id) {
    try {
        const response = await fetch(`${API_BASE}/${id}`, {
            method: "DELETE",
        });
        if (!response.ok) throw new Error("Failed to delete post");
        return true;
    } catch (error) {
        console.error("Error deleting post: ", error);
        throw error;
    }
}
