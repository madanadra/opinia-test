import Head from "next/head";
import Topbar from "./topbar";

export default function Layout({children, title}) {
    const pageTitle = title + ' - Opinia'

    return (
        <div>
            <Head>
                <title>{pageTitle}</title>
            </Head>
            <main className="flex flex-col font-main bg-one text-two min-h-screen">
                <Topbar />
                {children}
            </main>
        </div>
    );
};