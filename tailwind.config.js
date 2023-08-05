/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js}"],
    theme: {
        extend: {
            spacing: {
                wHea1:"390px",
                hHea2:"47px",
                hMus1:"260px",
                wMus1:"165px",
                hTitl:"135px",
                180:"180px",
            },
            fontSize: {
                "14/11.7": ["10px", "10.6px"],
                "14/22.4": ["7px", "10.8px"],
                "16/25.6": ["12px", "15.8px"],
                "16/13.3": ["10px", "10.8px"],
            },
            fontFamily: {
                Montserrat: ["Montserrat"],
            },
            minWidth: {
                "360": "360px",
                "424": "424px",
            },
        },
    },
    plugins: [],
};
