// server component

export async function Tags() {
  await new Promise((resolve) => setTimeout(resolve, 2000));

  const response = await fetch("http://localhost:3333/tags", {
    cache: "no-cache",
    next: {
      tags: ["get-tags"],
    },
  });
  const data = await response.json();

  return (
    <ul>
      {data.map((item: any) => (
        <li key={item.id}>{item.slug}</li>
      ))}
    </ul>
  );
}
