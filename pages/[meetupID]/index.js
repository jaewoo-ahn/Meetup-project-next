import MeetupDetail from "../../components/meetups/MeetupDetail";

function MeetupDetails() {
  return (
    <MeetupDetail
      image="https://upload.wikimedia.org/wikipedia/commons/5/58/Milan.Proper.Wikipedia.Image.png"
      title="A First Meetup"
      address="Some Street 5, Some City"
      description="This is a First meetup"
    />
  );
}

// export async function getStaticPaths() {
//   return {
//     fallback: false,
//     path: [
//       {
//         params: {
//           meetupId: "m1",
//         },
//       },
//       {
//         params: {
//           meetupId: "m2",
//         },
//       },
//     ],
//   };
// }

export async function getStaticPaths() {
  return {
    fallback: true,
    paths: [
      {
        params: {
          meetupId: "m1",
        },
      },
      {
        params: {
          meetupId: "m2",
        },
      },
    ],
  };
}

export async function getStaticProps(context) {
  const meetupId = context.params.meetupId;
  console.log(meetupId);
  return {
    props: {
      meetupData: {
        image:
          "https://upload.wikimedia.org/wikipedia/commons/5/58/Milan.Proper.Wikipedia.Image.png",
        id: meetupId,
        title: "A First Meetup",
        address: "Some Street 5, Some City",
        description: "This is a First meetup",
      },
    },
  };
}

export default MeetupDetails;
