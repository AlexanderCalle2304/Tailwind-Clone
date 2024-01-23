/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ "./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage:{
        header: "url(http://ueas.edu.ec/wp-content/uploads/2019/05/IMG_7559.jpg)",
        ourBG: "url(http://ueas.edu.ec/wp-content/uploads/2019/02/IMG_8991.jpg)",
        academicBG: "url(http://ueas.edu.ec/wp-content/themes/vw-education-academy-pro/assets/images/records/academicrecordsimg1.jpg)",
        galleryBG: "url(http://ueas.edu.ec/wp-content/uploads/2019/02/24837521_941139769372332_495814056972477237_o.jpg)",
        event1BG: "url(https://i0.wp.com/ueas.edu.ec/wp-content/uploads/2022/10/IMG_2149-scaled.jpg?resize=1536%2C1024&ssl=1)",
        event2BG: "url(https://i0.wp.com/ueas.edu.ec/wp-content/uploads/2020/02/IMG_3490.jpg?w=1920)",
      },
      keyframes:{
        rotateY: {
          '0%': { transform: 'rotateY(0deg)' },
          '50%': { transform: 'rotateY(180deg)' },
          '100%': { transform: 'rotateY(360deg)' },
        },
      },
      animation: {
        rotateY: 'rotateY 0.5s ease-out 1',
      },
    },
  },
  variants: {
    extend: {
      animation: ['hover'],
    },
  },
  plugins: [],
}
