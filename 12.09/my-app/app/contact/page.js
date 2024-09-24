import Image from "next/image";
import ImageWithText from "../components/ImageWithText";
import SimpleForm from "../components/SimpleForm";

export default function Contact() {
  return (
    <main>
      <ImageWithText imageUrl={"https://adria-management.com/wp-content/uploads/2016/07/Contact-Us.png"} alt={"kontakt"} text={"Kontakt"}/>
      <SimpleForm label={"Skontaktuj się z nami"} placeholder={"Tu wpisz email"}></SimpleForm>
    </main>
  );
}