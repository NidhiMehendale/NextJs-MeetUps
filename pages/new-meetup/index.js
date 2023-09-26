import NewMeetupForm from "../../components/meetups/NewMeetUpForm";

function NewMeetupPage() {
  
  function addMeetupHandler(enteredMeetupData) {
    console.log(enteredMeetupData);
  }

  return <NewMeetupForm onAddMeetup={addMeetupHandler} />
}

export default NewMeetupPage;