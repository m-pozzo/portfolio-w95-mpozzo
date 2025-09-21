import { Frame, List } from "@react95/core";
import { Mail } from "@react95/icons";
import { FaGithub, FaLinkedin} from "react-icons/fa";

const contactLinks = [
  {
    icon: <FaGithub size={24} />, label: "GitHub", url: "https://github.com/m-pozzo" },
  {
    icon: <FaLinkedin size={24} />, label: "LinkedIn", url: "https://www.linkedin.com/in/martin-p-563544276/" },
  {
    icon: <Mail variant="32x32_4" />, label: "Gmail", url: "mailto:martinpozzo.tin@gmail.com" },
];

const Contact = () => (
  <Frame bg="white" boxShadow="in" style={{ padding: 24, minWidth: 320 }}>
    <h2 style={{ marginTop: 0, marginBottom: 16, fontSize: 22, color: '#222' }}>Contact Me</h2>
    <List>
      {contactLinks.map(({ icon, label, url }) => (
        <List.Item key={label} icon={icon}>
          <a href={url} target="_blank" style={{ textDecoration: 'none', color: '#222'}}>
            {label}
          </a>
        </List.Item>
      ))}
    </List>
  </Frame>
);

export default Contact;