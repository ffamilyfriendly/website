import Head from "next/head"

const SEO = props => {
    const { title, description, tags } = props
    if(tags) tags.push("Jonathan Hermin")
    return (
        <Head>
            <title> { title } </title>
            <meta
                name="viewport"
                content="width=device-width, initial-scale=1"
            />
            <meta name="robots" content="index, follow" />
            <meta name="description" content={description} />
            <meta name="keywords" content={tags.join(",")} />
        </Head>
    )
}

export default SEO