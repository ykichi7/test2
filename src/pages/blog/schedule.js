import { getPostBySlug } from "../../../lib/api";
import Container from "../../components/container";

export default function Schedule({ title, content, eyecatch, publish }) {
  return (
    <Container>
      <h1>{title}</h1>
      <p>{publish}</p>
      <p>{content}</p>
    </Container>
  );
}

export async function getStaticProps() {
  const slug = "schedule";

  const post = await getPostBySlug(slug);

  return {
    props: {
      title: post.title, //タイトル
      publish: post.publishDate ?? null, //日付
      content: post.content, //本文
      eyecatch: post.eyecatch ?? null, //アイキャッチ画像
    },
  };
}
