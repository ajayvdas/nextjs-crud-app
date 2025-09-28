'use server'

import { revalidatePath, revalidateTag } from "next/cache"
import { redirect } from "next/navigation"

export async function createPostAction(formData) {
    try {
        const postData = {
            title: formData.title,
            body: formData.body,
            userId: formData.userId
        }

        const newPost = await createPost(postData)

        revalidateTag('posts')
        revalidatePath('/')

        redirect('/')
    } catch (error) {
        console.error("Failed to create post. Error is: ", error)
        throw new Error('Failed to create post')
    }
}