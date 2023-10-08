// client side rendered
import { useEffect, useState } from "react";
import { BACKEND_URL } from "../lib/api";

export default function ClientSideRendered() {
  const [state, setState] = useState([]);

  async function getData() {
    console.log("BACKEND_URL = " + BACKEND_URL);
    const res = await fetch(BACKEND_URL);
    const data = await res.json();
    setState(data);
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      {state.map((e: any) => (
        <h2 key={e.id}>{e.name}</h2>
      ))}
    </>
  );
}
