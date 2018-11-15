const myConst = {
    tourListdata : [
        {
            "name": "Tour 1",
            "info" : "abcd"
        },
        {
            "name": "Tour 2",
            "info" : "efgh"
        },
        {
            "name": "Tour 3",
            "info" : "ijkl"
        }
    ],
    hopscotchData : {
        // key stepDefURI
        // value hopscotch input
        "abcd" : {
            id: "firstTour",
            steps: [
              {
                target: "header",
                placement: "bottom",
                title: "This is the navigation menu",
                content: "Use the links here to get around on our site!"
              },
              {
                target: "hello",
                placement: "right",
                title: "Your profile picture",
                content: "Upload a profile picture here."
              },
              {
                target: "welcome",
                placement: "bottom",
                title: "Your inbox",
                content: "Messages from other users will appear here."
              }
            ]
        },
        "efgh" : {
            id: "secondTour",
            steps: [
              {
                target: "header",
                placement: "bottom",
                title: "This is the navigation menu",
                content: "Use the links here to get around on our site!"
              },
              {
                target: "aurora",
                placement: "right",
                title: "Your profile picture",
                content: "Upload a profile picture here."
              },
              {
                target: "good_morning",
                placement: "bottom",
                title: "Your inbox",
                content: "Messages from other users will appear here."
              }
            ]
        },
        "ijkl" : {
            id: "thirdTour",
            steps: [
              {
                target: "header",
                placement: "bottom",
                title: "This is the navigation menu",
                content: "Use the links here to get around on our site!"
              },
              {
                target: "error",
                placement: "right",
                title: "Your profile picture",
                content: "Upload a profile picture here."
              },
              {
                target: "aurora",
                placement: "bottom",
                title: "Your inbox",
                content: "Messages from other users will appear here."
              }
            ]
        }
    },
    applicationSpecificConfiguration : {
        'GreetingApp' : {
            FETCH_TOURS_LIST_URL: 'http://localhost:3000/toursList',
            FECH_TOUR_STEP_DEFINATION: 'http://localhost:3000/stepsData'
        }
    }
}

module.exports = myConst