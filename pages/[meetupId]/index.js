import React from "react";
import MeetupDetail from "../../components/meetups/Meetupdetail";
function MeetupDetails() {
  return (
    <div>
      <MeetupDetail
        image="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/1280px-Stadtbild_M%C3%BCnchen.jpg"
        title="First Meetup"
        address="Some Street 5,some city"
        description="This is a First meetup"
      />
    </div>
  );
}

export default MeetupDetails;