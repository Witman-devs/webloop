import { Link, Typography } from "@mui/material";
import ProfileCard from "../../components/ProfilePage";
import directorImg from "../../assets/characters/victim-1.png";

export default function Victim1({ setPageName }) {
  return (
    <div style={{ width: "60vw", left: "20vw", position: "relative" }}>
      <ProfileCard
        person={{
          name: "Ivan Lofer",
          fullName: "Ivan Lofer",
          birthDate: "September 29, 1957",
          occupation: "Accountant",
          affiliation: (
            <Link component="span" onClick={() => setPageName("chemicals")}>
              Redmarsh Chemicals
            </Link>
          ),
          address:
            "414 Hyatt Harbors Suite 533, \nRedmarsh, Nocturna, \nZorik",
          image: directorImg,
          bio: `Ivan Lofer is a dedicated accountant at Redmarsh Chemicals, recognized for his meticulous attention to detail and reliability in managing complex financial operations.
He graduated from the Zorik Institute of Finance and has built a reputation for integrity and accuracy in his work.
Ivan is committed to supporting his colleagues and ensuring compliance with industry standards, making him a valued member of the Redmarsh team. His professionalism and steady approach to problem-solving have earned him the trust of both clients and coworkers.`,
        }}
        setPageName={setPageName}
      />
    </div>
  );
}
