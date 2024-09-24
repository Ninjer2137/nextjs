import Image from "next/image";
import ListWithObjects from "../components/ListWithObjects";

export default function produkty(){
    return (
        <main>
            <ListWithObjects items={[{name: "produtk1", value: "cena1"}, {name: "produtk2", value: "cena2"}, {name: "produtk3", value: "cena3"}]}></ListWithObjects>
        </main>
    )
}