
import { createClient } from "next-sanity";
import imageUrlBuilder from '@sanity/image-url'

export const client = createClient ({
    projectId: "tc7nguom",
    dataset: "production",
    apiVersion: "2024-02-25",
    useCdn: false,
})  

const imageBuilder = imageUrlBuilder(client)

export function urlFor (source) {
    return imageBuilder.image(source)
}