import Image from "next/image";
import ItemList from "./components/ItemList";
import TextBlock from "./components/TextBlock";
import ImageWithText from "./components/ImageWithText";

export default function Home() {
  return (
    <main>
      <ItemList items={["Lego Batman", "Morbius", "Spiderman Far From Home"]}/>
      <TextBlock heading={"Witam"} content={"Witam to strona testowa do uczenia nexta"}/><br></br>
      <ImageWithText imageUrl={"https://preview.redd.it/i-am-steve-v0-aefctsoej2nd1.jpeg?width=2488&format=pjpg&auto=webp&s=9ad492dfce13e9e77c554bab121e45037c68f6e4"} alt={"obraz"} text={"Strona główna"}/><br></br>
    </main>
  );
}