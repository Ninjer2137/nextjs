import Image from "next/image";
import ItemList from "../components/ItemList";

export default function About(){
    return (
            <ItemList items={["Games", "Music", "Lego"]}/>
    )
}