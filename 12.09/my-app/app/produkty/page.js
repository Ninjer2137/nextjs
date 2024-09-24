import Image from "next/image";
import ListWithObjects from "../components/ListWithObjects";

export default function produkty(){
    return (
        <main>
            <ListWithObjects items={[{name: "produkt1", value: "cena1"}, {name: "produkt2", value: "cena2"}, {name: "produkt3", value: "cena3"}]}></ListWithObjects>
        </main>
    )
}