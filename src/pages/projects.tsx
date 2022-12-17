import Layout from "../components/layout";
import CardButton from "../components/card-project";

export default function Projects() {
    return (
        <Layout>
            <div className="w-full h-auto flex flex-wrap justify-center lg:justify-start gap-1 sm:gap-1.5">
                <CardButton />
                <CardButton />
                <CardButton />
            </div>
        </Layout>
    )
}