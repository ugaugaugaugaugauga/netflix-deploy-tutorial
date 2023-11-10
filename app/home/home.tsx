import Auth from "../auth/page";
import LoggedIn from "../loggedIn/page";
import getCurrentUser from "@/app/actions/getCurrentUser";

const HomePage = async () => {
  const currentUser = await getCurrentUser()

  if (!currentUser) {
    return (
      <Auth />
    )
  }
  return (
    <LoggedIn currentUser={currentUser} />
  );
}

export default HomePage;