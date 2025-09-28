"use server";

import { revalidatePath, revalidateTag } from "next/cache";
import { redirect } from "next/navigation";

export async function createPostAction(formData) {
    try {
        const postData = {
            title: formData.title,
            body: formData.body,
            userId: formData.userId,
        };

        const newPost = await createPost(postData);

        revalidateTag("posts");
        revalidatePath("/");

        redirect("/");
    } catch (error) {
        console.error("Failed to create post. Error is: ", error);
        throw new Error("Failed to create post");
    }
}

export async function updatePostAction(id, formData) {
    try {
        const postData = {
            title: formData.title,
            body: formData.body,
            userId: formData.userId,
        };

        await updatePost(id, postData);

        revalidateTag("posts");
        revalidateTag(`post-${id}`);
        revalidatePath(`/posts/${id}`);
        revalidatePath("/");

        redirect(`/posts/${id}`);
    } catch (error) {
        throw new Error("Failed to update post");
    }
}

export async function deletePostAction(id) {
    try {
        await deletePost(id);

        // Revalidate posts list and remove cached post
        revalidateTag("posts");
        revalidateTag(`post-${id}`);
        revalidatePath("/");

        // Redirect to home page
        redirect("/");
    } catch (error) {
        throw new Error("Failed to delete post");
    }
}
