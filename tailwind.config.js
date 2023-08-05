/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js}"],
    theme: {
        extend: {
            spacing: {
                WHea1:"240px",
                390:"390",
                360:"360px",
                120:"120px",
                180:"180px",
            },
            fontSize: {
                "10/25.6": ["10px", "10.6px"],
                "8/10.8": ["7px", "10.8px"],
                "12/15.8": ["12px", "15.8px"],
                "9/10.8": ["10px", "10.8px"],
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
