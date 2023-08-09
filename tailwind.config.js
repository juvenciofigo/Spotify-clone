/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./html", "./**/*.{html,js}", "./src/**/*.{html,js}"],
    theme: {
        extend: {
            spacing: {
                wHea1: "420px",
                hHea2: "60px",
                hMus1: "286px",
                wMus1: "195px",
                hTitl: "135px",
                181: "181px",
                66: "66px",
            },
            fontSize: {
                "14/11.7": ["14px", "11.7px"],
                "14/22.4": ["14px", "22.4px"],
                "16/25.6": ["16px", "25.6px"],
                "16/13.3": ["16px", "13.3px"],
                "24/13.3": ["24px", "13.3px"],
                "24/20": ["24px", "20px"],
                "18/15": ["18px", "15px"],
            },
            fontFamily: {
                Montserrat: ["Montserrat"],
            },
            minWidth: {
                360: "360px",
                424: "424px",
            },
            colors: {
                playcolor: "#1ed760",
            },
            transitionProperty: {
                scale: "scale",
            },
        },
    },
    plugins: [],
};
