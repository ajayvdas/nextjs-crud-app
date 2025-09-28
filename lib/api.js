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

export async function createPost(data) {
    try {
        const response = await fetch(`${API_BASE}/posts`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        });

        if(!response.ok) throw new Error('Failed to create post')
        return await response.json()
    } catch (error) {
        console.error("Error creating post: ", error);
        throw error;
    }
}
