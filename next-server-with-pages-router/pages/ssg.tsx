// static site generation
import { BACKEND_URL } from '../lib/api';

export default function StaticSiteGeneration({ data }: { data: any }) {
  return (
    <>
      {data.map((e: any) => (
        <h2 key={e.id}>{e.name}</h2>
      ))}
    </>
  );
}

// This function gets called at build time on server-side.
// It won't be called on client-side, so you can even do
// direct database queries.
export async function getStaticProps() {
  const res = await fetch(BACKEND_URL);
  console.log("calling getStaticProps");
  const data = await res.json();

  return {
    props: {
      data, // will be passed to the page component as props
    },
  };
}