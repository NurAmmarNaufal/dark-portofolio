import { createClient } from "contentful"

const Contentful = (props) => {

    const client = createClient({
        space: import.meta.env.VITE_REACT_SPACE_ID,
        accessToken: import.meta.env.VITE_REACT_ACCESS_TOKEN,
        host: import.meta.env.VITE_REACT_HOST,
    })

    const getAuthor = async () => {
        console.log(props)
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