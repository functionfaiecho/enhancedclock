import Image from "next/image";
import Clock from "./(components)/Clock";

export default function Home() {
  return (
    <div className="min-h-screen p-8 pb-20 bg-background">
      <Clock />
    </div>
  );
}
