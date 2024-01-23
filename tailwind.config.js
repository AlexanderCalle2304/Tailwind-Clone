/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ "./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage:{
        header: "url(http://ueas.edu.ec/wp-content/uploads/2019/05/IMG_7559.jpg)",
        twitter: "url(https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Logo_of_Twitter.svg/512px-Logo_of_Twitter.svg.png)",
        instagram: "url(https://icons8.com/icon/32320/instagram)",
        facebook: "url(https://icons8.com/icon/87298/facebook-f)",
        search: "url(src/assets/search.svg)",
      }
    },
  },
  plugins: [],
}

