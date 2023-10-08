// server side rendering
import { BACKEND_URL } from '../lib/api';

export default function ServerSideRendered({ data }: { data: any }) {
  return (
    <>
      {data.map((e: any) => (
        <h2 key={e.id}>{e.name}</h2>
      ))}
    </>
  );
}

export async function getServerSideProps() {
  const res = await fetch(BACKEND_URL);
  const data = await res.json();

  return {
    props: {
      data, // will be passed to the page component as props
    },
  };
}