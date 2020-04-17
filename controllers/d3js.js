const axios = require('axios');

module.exports = {
  index: async () => {},

  deaths: async (ctx) => {
    let data = null;

    await axios
      .get('https://coronavirus-tracker-api.herokuapp.com/v2/locations', {
        params: {
          timelines: 1,
        },
      })
      .then((r) => {
        data = r.data;
      })
      .catch((e) => console.error(e));
    return ctx.render('d3js/deaths', {
      data,
    });
  },
};