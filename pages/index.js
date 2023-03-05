import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";

export default function Home() {
  const posts = [
    {
      title: "Lorem ipsum dolor sit amet",
      excerpt:
        "consectetur adipisicing elit. Explicabo, odio pariatur accusantium eius minima ",
    },
    {
      title: "omnis esse vitae maiores saepe neque",
      excerpt:
        "ipsum dolor sit amet consectetur adipisicing elit. Explicabo, odio pariatur accusantium eius minima officia delectus similique",
    },
  ];
  return (
    <div className="container mx-auto px-10 mb-8">
      <Head>
        <title>CMS Blog</title>
        <meta name="description" content="CMB Blog created by codeLab265" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="col-span-1 lg:col-span-8">
            {posts.map((post, index) => (
              <div key={index}>
                {post.title}
                <p>{post.excerpt}</p>
              </div>
            ))}
          </div>
          <div className="col-span-1 lg:col-span-4">
              <div className="lg:sticky relative top-8"></div>
          </div>
        </div>
      </main>
    </div>
  );
}
