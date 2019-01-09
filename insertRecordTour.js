var axios = require("axios");

axios
  .post("http://localhost:3000/tour", {
    tour_name: "xyz",
    app_id: "90cf4642-2f52-41b3-aebd-f46eacc2bfc5",
    steps: {
      id: "secondTour",
      steps: [
        {
          target: "header",
          placement: "bottom",
          title: "Heading",
          content: "Heading of our application"
        },
        {
          target: "aurora",
          placement: "right",
          title: "Aurora Northen Lights Image",
          content: "Can be seen in the high-latitude regions."
        },
        {
          target: "good_morning",
          placement: "bottom",
          title: "Good Morning",
          content:
            "Expressing good wishes on meeting or parting during the morning."
        }
      ]
    }
  })
  .then(function() {
    console.log("successfully published");
  })
  .catch(function(err) {
    console.log("error", err);
  });
