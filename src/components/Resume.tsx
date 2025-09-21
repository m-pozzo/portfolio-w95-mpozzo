import { Fieldset, Tab, Tabs, Button } from '@react95/core';
import { useWindowsStore } from "../store/windows";
import { useTranslation } from 'react-i18next';

type ResumeProps = {
  handleOpen: (id: string) => void;
};

function Resume({ handleOpen }: ResumeProps) {
  const { t } = useTranslation();
  // const { openWindow, isWindowOpen, closeWindow } = useWindowsStore();


  return (
    <>

      <Tabs defaultActiveTab={t("sobreMi.p2")} className='resumeTab'>
        <Tab title={t("sobreMi.p2")}>
          <div className='sobremi_biografia_header' style={{ marginBottom: "20px" }}>
            {/* <Avatar src="/img/pixel-yop.jpg" alt="Foto de Martín Pozzo" size={'180px'} circle={false} /> */}
            <img src="/img/yop2.jpeg" alt="Foto de Martín Pozzo" className='sobremi_foto_perfil' loading="lazy" />
            <div>
              <h3 className='sobremi_title'>Martín Pozzo</h3>
              <h4 className='sobremi_subtitle'>📍 Argentina, CABA</h4>
            </div>
          </div>
          <div className='sobremi_biografia_container'>
            <p className='sobremi_biografia_p'>
              {t("sobreMi.p4")}
            </p>
            <p className='sobremi_biografia_p'>
              {t("sobreMi.p5")}
            </p>
            <p className='sobremi_biografia_p'>
              {t("sobreMi.p6")}
            </p>
            <p className='sobremi_biografia_p'>
              {t("sobreMi.p7")}
            </p>
          </div>
        </Tab>
        <Tab title={t("sobreMi.p8")}>
          <div style={{ overflowY: "scroll", height: "650px" }}>
            <Fieldset legend={t("sobreMi.p9")}>
              <div>
                <img src="https://valtira.ai/assets/complete_logo.svg" alt="Valtira IA Logo" className='sobremi_proyectos_imagen' loading="lazy" />
                <div>
                  <h4 className='sobremi_project_title'>{t("sobreMi.p10")}</h4>
                  <p className='sobremi_project_p'>
                    {t("sobreMi.p11")}
                  </p>
                  <Button><a href="https://valtira.ai" target='_blank' className="sobremi_button" >{t("sobreMi.p12")}</a></Button>
                </div>
              </div>
            </Fieldset>
            <Fieldset legend={t("sobreMi.p9")}>
              <h4 className='sobremi_project_title'>
                Apeace ( oct 2023 - nov 2023 )
              </h4>
              <p className='sobremi_project_p'>
                {t("sobreMi.p14")}
              </p>
              <p className='sobremi_project_p'>
                {t("sobreMi.p29")}
              </p>
              <div className='flex gap-3 sobremi_button_container'>
                <Button><a href="https://apeace-v2.netlify.app/" target='_blank' className="sobremi_button">{t("sobreMi.p12")}</a></Button>
                <Button><a href="https://github.com/m-pozzo/apeace_custom-traits" target='_blank' className="sobremi_button" >{t("sobreMi.p13")}</a></Button>
              </div>
            </Fieldset >
            <Fieldset legend={t("sobreMi.p16")}>
              <img src="./img/muyUraniana.png" alt="Logo de Muy Uraniana" className='sobremi_proyectos_imagen' height={180} loading="lazy" />
              <h4 className='sobremi_project_title'>
                {`Muy Uraniana - ${t("sobreMi.p17")}`}
              </h4>
              <p className='sobremi_project_p'>
                {t("sobreMi.p18")}
              </p>
              <Button><a href="https://muy-uraniana.netlify.app/" target='_blank' className="sobremi_button" >{t("sobreMi.p12")}</a></Button>
            </Fieldset>
            <Fieldset legend={t("sobreMi.p19")}>
              <h4 className='sobremi_project_title'>
                {t("sobreMi.p20")}
              </h4>
              <p className='sobremi_project_p'>
                {t("sobreMi.p21")}
              </p>
              <div className='flex gap-3 sobremi_button_container'>
                <Button>
                  <a href="https://64cc5e447fce353f84f0a114--lo-del-papu.netlify.app/" target='_blank' className="sobremi_button" >
                    {t("sobreMi.p12")}
                  </a>
                </Button>
                <Button>
                  <a href="https://github.com/m-pozzo/PF_JS-POZZO" target='_blank' className="sobremi_button">
                    {t("sobreMi.p13")}
                  </a>
                </Button>
              </div>
            </Fieldset>
            <Fieldset legend={t("sobreMi.p16")}>
              <img src="./img/car.png" alt="Auto" className='sobremi_proyectos_imagen' loading="lazy" />
              <h4 className='sobremi_project_title'>
                Legendary Motor's Sports
              </h4>
              <p className='sobremi_project_p'>
                {t("sobreMi.p22")}
              </p>
              <div className='flex gap-3 sobremi_button_container'>
                <Button><a href="https://legendary-motors-sports.netlify.app/" target='_blank' className="sobremi_button" >{t("sobreMi.p12")}</a></Button>
                <Button><a href="https://github.com/m-pozzo/legendary-motors-sports" target='_blank' className="sobremi_button" >{t("sobreMi.p13")}</a></Button>
              </div>
            </Fieldset>
            <Fieldset legend={t("sobreMi.p23")}>
              <h4 className='sobremi_project_title'>SMART AIR</h4>
              <img src="./img/smartair-logo.jpeg" alt="Logo de SMART AIR" className='sobremi_proyectos_imagen' loading="lazy" />
              <div>
                <p className='sobremi_project_p'>
                  {t("sobreMi.p24")}
                </p>
              </div>
              <div className='flex gap-3 sobremi_button_container'>
                <Button><a href="https://smart-air.netlify.app/" target='_blank' className="sobremi_button" >{t("sobreMi.p12")}</a></Button>
                <Button><a href="https://github.com/m-pozzo/SmartAir" target='_blank' className="sobremi_button" >{t("sobreMi.p13")}</a></Button>
              </div>
            </Fieldset>
          </div >
        </Tab >
        <Tab title={t("sobreMi.p30")}>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px' }}>
            <Fieldset legend={t("sobreMi.p25")}>
              <ul>
                <li className="resume-skills">JavaScript (ES6+)</li>
                <li className="resume-skills">React.js</li>
                <li className="resume-skills">Node.js</li>
                <li className="resume-skills">C++</li>
                <li className="resume-skills">Godot Engine</li>
              </ul>
            </Fieldset>
            <Fieldset legend={t("sobreMi.p26")}>
              <ul>
                <li className="resume-skills">HTML5 y CSS3</li>
                <li className="resume-skills">SCSS</li>
                <li className="resume-skills">Tailwind</li>
                <li className="resume-skills">Bootstrap</li>
              </ul>
            </Fieldset>
            <Fieldset legend={t("sobreMi.p27")}>
              <ul>
                <li className="resume-skills">Git & GitHub</li>
                <li className="resume-skills">Aseprite</li>
              </ul>
            </Fieldset>
            <Fieldset legend={t("sobreMi.p28")}>
              <ul>
                <li className="resume-skills">{t("sobreMi.p31")}</li>
                <li className="resume-skills">{t("sobreMi.p32")}</li>
                <li className="resume-skills">{t("sobreMi.p33")}</li>
              </ul>
            </Fieldset>
          </div>
        </Tab>
        <Tab title={t("sobreMi.p34")}>
          <Fieldset legend={t("sobreMi.p35")}>
            <div>
              <p className='sobremi_project_p'>
                {t("sobreMi.p36")}
              </p>
            </div>
            <Button style={{ fontSize: "16px" }} onClick={() => handleOpen("Certificado-WebDev")}>{t("sobreMi.p39")}</Button>
          </Fieldset>
          <Fieldset legend={t("sobreMi.p37")}>
            <div>
              <p className='sobremi_project_p'>
                {t("sobreMi.p38")}
              </p>
            </div>
            <Button style={{ fontSize: "16px" }} onClick={() => handleOpen("CertificadoJS")}>{t("sobreMi.p39")}</Button>
          </Fieldset>

        </Tab>
      </Tabs >

    </>
  );
}

export default Resume;