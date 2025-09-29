import { Frame, List } from "@react95/core";
import { Mail } from "@react95/icons";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { useTranslation } from "react-i18next";

const contactLinks = [
  {
    icon: <FaGithub size={24} />, label: "GitHub", url: "https://github.com/m-pozzo"
  },
  {
    icon: <FaLinkedin size={24} />, label: "LinkedIn", url: "https://www.linkedin.com/in/martin-p-563544276/"
  },
  {
    icon: <Mail variant="32x32_4" />, label: "Gmail", url: "mailto:martinpozzo.tin@gmail.com"
  },
];


const Contact = () => {
  const { t } = useTranslation();

  return (
    <Frame boxShadow="in" style={{ padding: 24 }}>
      <h2 style={{ marginTop: 0, marginBottom: 16, fontSize: 22, color: '#222' }}>{t("contact.p2")}</h2>
      <List style={{ width: "100%" }}>
        {contactLinks.map(({ icon, label, url }) => (
          <a href={url} target="_blank" style={{ textDecoration: 'none', color: '#222' }}>
            <List.Item key={label} icon={icon} style={{ width: "100%" }}>
              {label}
            </List.Item>
          </a>
        ))}
      </List>
    </Frame>
  );
}

export default Contact;