import Head from "next/head";
import Image from "next/image";
import Container from "../components/container";
import Hero from "../components/hero";

import Meta from "../components/meta";

export default function Home() {
  return (
    <Container>
      <Meta />
      <Hero title="Cube" subtitle="アウトプットしていくサイト " imageOn />
    </Container>
  );
}
