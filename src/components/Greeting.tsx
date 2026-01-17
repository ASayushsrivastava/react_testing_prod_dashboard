interface GreetingProps {
  name?: string;
}

export default function Greeting({ name }: GreetingProps) {
  return (
    <h2 data-testid="greeting">{name ? `Hello, ${name}!` : "Hello, Guest!"}</h2>
  );
}
