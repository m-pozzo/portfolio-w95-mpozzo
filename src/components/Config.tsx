import { Button, Fieldset, RadioButton } from "@react95/core";
import { useTranslation } from "react-i18next";
import React from "react";

type ConfigProps = {
    cambiarFondo: () => void; // función sin parámetros que no devuelve nada
    activarCrt: () => void;
    crt: boolean;
};


function Config({ cambiarFondo, activarCrt, crt }: ConfigProps) {
    const { i18n, t } = useTranslation();

    const languages = [
        { code: 'es', lang: t("conf.p4") },
        { code: 'en', lang: t("conf.p5") }
    ]

    const [selectedOption, setSelectedOption] = React.useState(i18n.language);

    const changeLanguage = (lng: string) => {
        i18n.changeLanguage(lng);
        setSelectedOption(lng);
    };

    return (
        <>
            <Fieldset legend={t("conf.p1")}>
                <Button onClick={cambiarFondo} className="config_button">{t("conf.p2")}</Button>
            </Fieldset>
            <br />
            <Fieldset legend={t("conf.p3")}>
                {languages.map((lng) => (
                    <RadioButton
                        key={lng.code}
                        name="language"
                        value={lng.code}
                        checked={selectedOption === lng.code}
                        onChange={() => changeLanguage(lng.code)}
                    >
                        {lng.lang}
                    </RadioButton>
                ))}
            </Fieldset >
            <br />
            <Fieldset legend="CRT">
                <RadioButton
                    checked={crt}
                    onChange={() => activarCrt()}
                >

                    {t("conf.p7")}
                </RadioButton>
                <RadioButton
                    checked={!crt}
                    onChange={() => activarCrt()}
                >
                    {t("conf.p8")}
                </RadioButton>
            </Fieldset>
        </>
    );
}

export default Config;