import React from 'react'

type TagProps = {
    name: string;
}

export const Tag = ({ name }: TagProps) => {
    let bgColor = "";
    let txtColor = ""

    const names = [
        { nameArr: "React JS", bgColor: "#1299C4" },
        { nameArr: "JavaScript", bgColor: "#ffd30eff" },
        { nameArr: "CSS", bgColor: "#623095" },
        { nameArr: "HTML", bgColor: "#DC4D24" }
    ];

    names.map((n) => {
        if (n.nameArr == name) {
            bgColor = n.bgColor
        }
    })

    if (name == "JavaScript") {
        txtColor = "#000";
    } else {
        txtColor = "#ebeaeaff";
    }

    return (
        <span className='tag' style={{ backgroundColor: bgColor, color: txtColor }}>
            {name}
        </span>
    )
}
