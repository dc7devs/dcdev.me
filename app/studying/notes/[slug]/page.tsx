export default function NotePage({ params }: { params: { slug: string } }) {
  return <h3>{params.slug}</h3>;
}
