export default {
  mounted() {
    if (window.location.hostname !== process.env.DOMAIN) {
      alert('Указано неверное окружение ' + process.env.ENV);
    }
  },
};
