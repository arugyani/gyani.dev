import { promises as fs } from "fs";
import path from "path";

export default async function Page(props: {
  params: Promise<{
    slug: string;
  }>;
}) {
  const params = await props.params;
  const { default: MDXContent } = await import(
    "../_content/" + `${params.slug}.mdx`
  );

  return (
    <div className="text-justify font-zh">
      <MDXContent />
    </div>
  );
}

export async function generateStaticParams() {
  const articles = await fs.readdir(
    path.join(process.cwd(), "app", "projects", "_content")
  );

  return articles
    .filter((name) => name.endsWith(".mdx"))
    .map((name) => ({
      params: {
        slug: name.replace(/\.mdx$/, ""),
      },
    }));
}

export async function generateMetadata(props: {
  params: Promise<{
    slug: string;
  }>;
}) {
  const params = await props.params;
  const metadata = (await import("../_content/" + `${params.slug}.mdx`))
    .metadata;
  return {
    title: metadata.title,
    description: metadata.description,
  };
}
