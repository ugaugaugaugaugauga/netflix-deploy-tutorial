import getCurrentUser from "../actions/getCurrentUser";
import userFetcher from "../actions/getCurrentUser";
import ClientOnly from "../components/ClientOnly";
import ProfileClient from "./profileClient";

const ProFiles = async () => {
  const currentUser = await getCurrentUser()

  return (
    <ClientOnly>
      <ProfileClient currentUser={currentUser} />
    </ClientOnly>
  );
}

export default ProFiles;