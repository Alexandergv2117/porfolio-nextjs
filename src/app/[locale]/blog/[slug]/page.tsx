interface Props {
    params: Promise<{ locale: string, slug: string }>;
}

export default async function Page({ params }: Props) {
    const { locale, slug } = await params;

    return (
        <div className="w-full mt-28 sm:mt-36">
            <div className="">
                <h1>{slug}</h1>
                <p>Blog post content goes here.</p>
                <p>Published in {locale}</p>
            </div>
        </div>
    );
}
