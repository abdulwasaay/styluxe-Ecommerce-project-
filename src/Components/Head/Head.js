import Head from "next/head";

export default function Heads({ text, cont }) {
    return (
        <Head>
            <title>{text}</title>
            <meta name="description" content={cont} />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
        </Head>
    )
}