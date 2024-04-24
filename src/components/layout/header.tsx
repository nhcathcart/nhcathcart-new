export interface Props {
  title: string;
  description: string;
}

export default function Header({ title, description }: Props) {
  return (
    <>
      <h2 className="text-4xl font-bold tracking-tight text-text sm:text-5xl">{title}</h2>
      <p className="mt-6 text-lg leading-8 text-text">{description}</p>
    </>
  );
}
