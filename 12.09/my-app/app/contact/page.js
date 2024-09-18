import Image from "next/image";
import ImageWithText from "../components/ImageWithText";

export default function Contact() {
  return (
    <main>
      <ImageWithText imageUrl={"https://adria-management.com/wp-content/uploads/2016/07/Contact-Us.png"} alt={"kontakt"} text={"Kontakt"}/>
    </main>
  );
}