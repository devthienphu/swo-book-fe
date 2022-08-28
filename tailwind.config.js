module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors:{
        'black-rgba': 'rgba(0, 0, 0, 0.54)',
      },
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
  ],
}
