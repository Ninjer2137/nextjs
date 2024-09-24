import Image from "next/image";
import ItemList from "./components/ItemList";
import TextBlock from "./components/TextBlock";
import ImageWithText from "./components/ImageWithText";
import SimpleForm from "./components/SimpleForm";
import ConditionalDisplay from "./components/ConditionalDisplay";
import ListWithObjects from "./components/ListWithObjects";

export default function Home() {
  return (
    <main>
      <ItemList items={["Lego Batman", "Morbius", "Spiderman Far From Home"]}></ItemList>
      <TextBlock heading={"Witam"} content={"Witam to strona testowa do uczenia nexta"}></TextBlock>
      <ImageWithText imageUrl={"https://preview.redd.it/i-am-steve-v0-aefctsoej2nd1.jpeg?width=2488&format=pjpg&auto=webp&s=9ad492dfce13e9e77c554bab121e45037c68f6e4"} alt={"obraz"} text={"Strona główna"}></ImageWithText>
      <SimpleForm label={"label"} placeholder={"placeholder"}></SimpleForm>
      <ConditionalDisplay isVisible={true}></ConditionalDisplay>
      <ListWithObjects items={[{name: "test1", value: "1"}, {name: "test2", value: "2"}, {name: "test3", value: "3"}]}></ListWithObjects>
    </main>
  );
}