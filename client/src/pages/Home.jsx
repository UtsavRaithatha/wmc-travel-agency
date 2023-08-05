import React from "react";
import Jumbotron from "../components/Jumbotron";
import Hero from "../components/Hero";
import "../assets/css/styles.css";

function Home() {
    return (
        <div className="Home">

            <Jumbotron />

            <Hero imgsrc="https://i.insider.com/60957a3d34af8d001859c0ff?width=750&format=jpeg&auto=webp" altText="hogwarts" heading="Hogwarts Adventure Package" content="Experience the magic of a lifetime with our Hogwarts Adventure Package. Delve into the enchanting world of witches and wizards as you journey to Hogwarts School of Witchcraft and Wizardry. Attend magical classes, explore the Forbidden Forest, and witness the Sorting Hat ceremony. Indulge in a sumptuous welcome feast at the Great Hall and create unforgettable memories in the wizarding realm." id="/api/explore/1" />

            <Hero imgsrc="https://i.pinimg.com/originals/ca/e5/5a/cae55a87045ef2b7c2b303ffaad1ca1a.jpg" altText="hogsmeade" heading="Wonders of Wizarding World Tour" content="Embark on an extraordinary journey through the Wonders of the Wizarding World Tour. Begin your adventure in London, where you'll explore Diagon Alley and visit famous magical shops. Sail on a magical river cruise and immerse yourself in the beauty of Hogsmeade Village amidst the Scottish Highlands. Conclude your tour with a magical farewell banquet and a visit to the Warner Bros. Studio, where the magic of Harry Potter comes to life." id="/api/explore/2" />

            <Hero imgsrc="https://lovelace-media.imgix.net/getty/450815270.jpg" altText="diagon alley" heading="Wizarding World Grand Adventure" content="For the ultimate magical experience, join our Wizarding World Grand Adventure. Unveil the secrets of Hogwarts during an exclusive private tour of the castle and immerse yourself in the wonders of Diagon Alley with a personal shopping assistant. Experience the thrill of a live Quidditch match and encounter mythical creatures in their natural sanctuary. End your journey with a magical gala dinner and a farewell feast at the iconic Great Hall." id="/api/explore/3" />

        </div>
    );
}

export default Home;