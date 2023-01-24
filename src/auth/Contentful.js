import { createClient } from "contentful"

const Contentful = (props) => {

    const key = {
        id: import.meta.env.VITE_VERCEL_SPACE_ID,
        token: import.meta.env.VITE_VERCEL_ACCESS_TOKEN,
        host: import.meta.env.VITE_VERCEL_HOST,
    }

    const client = createClient({
        space: key.id,
        accessToken: key.token,
        host: key.host,
    })

    const getAuthor = async () => {
        try {
            const entries = await client.getEntries({
                content_type: props,
                select: "fields"
            })
            return entries
        } catch (error) {
            console.log(error)
        }
    }

    return { getAuthor }
}

export default Contentful