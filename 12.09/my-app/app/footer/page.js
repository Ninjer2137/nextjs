import Image from "next/image";
import TextBlock from "../components/TextBlock";
import ConditionalDisplay from "../components/ConditionalDisplay";

export default function Footer() {
  return (
    <main>
      <TextBlock heading={"Witam"} content={"Witam to strona testowa do uczenia nexta"}/>
      <ConditionalDisplay isVisible={false}></ConditionalDisplay>
    </main>
  );
}