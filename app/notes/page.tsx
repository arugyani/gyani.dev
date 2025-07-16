import { promises as fs } from "fs";
import Link from "next/link";
import path from "path";

export const metadata = {
  title: "Notes",
};

// In the future we can have a pagination here e.g. /1/*.mdx
const contentDirectory = path.join(process.cwd(), "app", "notes", "_content");

export default async function Page() {
  const content = await fs.readdir(contentDirectory);

  const items = [];
  for (const piece of content) {
    if (!piece.endsWith(".mdx")) continue;
    const note = await import("./_content/" + piece);

    if (!note.metadata) throw new Error("Missing `metadata` in " + piece);

    items.push({
      slug: piece.replace(/\.mdx$/, ""),
      title: note.metadata.title,
      date: note.metadata.date || "-",
      sort: Number(note.metadata.date?.replaceAll(".", "") || 0),
    });
  }
  items.sort((a, b) => b.sort - a.sort);

  return (
    <div>
      <ul>
        {items.map((item) => (
          <li key={item.slug} className="font-medium">
            <Link
              href={`/notes/${item.slug}`}
              className="group flex gap-1 justify-between items-center"
              draggable={false}
            >
              <span className="block text-lapis-600 dark:text-lapis-100 group-hover:text-lapis-700 dark:group-hover:text-light">
                {item.title}
              </span>
              <span className="text-sm dot-leaders flex-1 text-lapis-100 dark:text-lapis-400 font-normal group-hover:text-lapis-500 dark:group-hover:text-light transition-colors group-hover:transition-none leading-none" />
              <time className="block text-lapis-200 dark:text-lapis-200 tabular-nums font-normal tracking-tighter group-hover:text-lapis-500 dark:group-hover:text-light transition-colors group-hover:transition-none self-start">
                {item.date}
              </time>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
