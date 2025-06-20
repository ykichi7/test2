import Head from "next/head";
import { useRouter } from "next/router";
import Link from "next/link";

// サイトに関する情報
import { siteMeta } from "lib/constants";
const { siteTitle, siteDesc, siteUrl, siteLocale, siteType, siteIcon } =
  siteMeta;

// 汎用OGP画像
import siteImg from "../../images/ogp.jpg";

export default function Meta({
  pageTitle,
  pageDesc,
  pageImg,
  pageImgW,
  pageImgH,
}) {
  /*ページのタイトル*/
  const title = pageTitle ? `${pageTitle} | ${siteTitle}` : siteTitle;
  /*ページの説明*/
  const desc = pageDesc ?? siteDesc;
  /*ページのURL*/
  const router = useRouter();
  const url = `${siteUrl}${router.asPath}`;
  /*OGPの画像*/
  const img = pageImg || siteImg.src;
  const imgW = pageImgW || siteImg.width;
  const imgH = pageImgH || siteImg.height;
  const imgUrl = img.startsWith("http") ? img : `${siteUrl}${img}`;

  return (
    <Head>
      <title>{title}</title>
      <meta property="og:title" content={title} />

      <meta name="description" content={desc} />
      <meta property="og:description" content={desc} />

      <Link rel="canonical" href={url} />
      <meta property="og:url" content={url} />

      <meta property="og:site_name" content={siteTitle} />
      <meta property="og:type" content={siteType} />
      <meta property="og:locale" content={siteLocale} />

      <Link rel="icon" href={siteIcon} />
      <link rel="apple-touch-icon" href={siteIcon} />
    </Head>
  );
}
