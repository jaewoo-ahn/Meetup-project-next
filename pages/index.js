import React from "react";
import MeetupList from "../components/meetups/MeetupList";

const DUMMY_MEETUPS = [
  {
    id: "m1",
    title: "A firts Meetup",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/5/58/Milan.Proper.Wikipedia.Image.png",
    address: "Some Address 10, 12345 Some City",
    description: "This is First Meetup",
  },
  {
    id: "m2",
    title: "A Second Meetup",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/5/58/Milan.Proper.Wikipedia.Image.png",
    address: "Some Address 11, 13565 Some City",
    description: "This is Second Meetup",
  },
];

function HomePage() {
  return <MeetupList meetups={DUMMY_MEETUPS} />;
}

export default HomePage;
