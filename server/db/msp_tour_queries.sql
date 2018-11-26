INSERT INTO tour VALUES (uuid_generate_v4(),'About Tabs on homepage','
    {
        "id": "tabTour",
        "steps": [
            {
                "target": "#msp-poster-tab > div > div > span",
                "placement": "bottom",
                "title": "Posters",
                "content": "Posters are designed to be both eye-catching and informative. Posters may be used for many purposes"
            },
            {
                "target": "#msp-shelf-tab > div > div > span",
                "placement": "bottom",
                "title": "Shelf Labels",
                "content": "Creating labels to be put on shelf that shows product information. Generally price and quantity"
            },
            {
                "target": "#msp-article-tab > div > div > span",
                "placement": "bottom",
                "title": "Article Labels",
                "content": "To greet hospitably and with courtesy or cordiality."
            },
            {
                "target": "#msp-inventory-tab > div > div > span",
                "placement": "bottom",
                "title": "Inventory Labels",
                "content": "contains labels designed for inventory purpose"
            },
            {
                "target": "#msp-sscc-tab > div > div > span",
                "placement": "bottom",
                "title": "SSCC Labels",
                "content": "contains labels designed for shipping containers"
            },
            {
                "target": "#msp-esl-tab > div > div > span",
                "placement": "bottom",
                "title": "ESL Labels",
                "content": "An electronic shelf label specific templates"
            }
        ]
    }'
);

INSERT INTO tour VALUES (uuid_generate_v4(),'Know general components on UI','
    {
        "id": "GenCompTour",
        "steps": [
            {
                "target": "#msp-create-new-template-btn > div > div",
                "placement": "bottom",
                "title": "New Button",
                "content": "Click this button to create new templates"
            },
            {
                "target": "#app > div > div.msp-editor-header > div > div > div:nth-child(1) > div.msp-sidebar-sidney-logo",
                "placement": "right",
                "title": "Brand Logo",
                "content": "Clicking on it navigates to the homepage"
            },
            {
                "target": "#Ebene_1",
                "placement": "right",
                "title": "Profile Settings",
                "content": "Check profile settings here"
            },
            {
                "target": "#app > div > div.msp-editor-header > div > div > div:nth-child(1) > div.msp-sidebar-sidney-bottom-elements > button > div > div > img",
                "placement": "right",
                "title": "Expand",
                "content": "Click to open side menu"
            },
            {
                "target": "#app > div > div.msp-editor-header > div > div > div:nth-child(1) > div.msp-sidebar-sidney-bottom-elements > div.msp-app-version",
                "placement": "right",
                "title": "App version",
                "content": "Check for app version here"
            },
            {
                "target": "#msp-template-panel > div:nth-child(1) > div.msp-header-grid-list > div:nth-child(2) > div",
                "placement": "bottom",
                "title": "Tab Navigator",
                "content": "It is used to browse various categories of templates/labels"
            }
        ]
    }'
);

INSERT INTO tour VALUES (uuid_generate_v4(),'Template Display Area Walkthrough','
    {
        "id": "tempDispTour",
        "steps": [
            {
                "target": "#msp-template-panel > div:nth-child(1) > div.msp-panel-header > div:nth-child(1)",
                "placement": "bottom",
                "title": "Released Templates",
                "content": "Templates under this section are used finalized for printing."
            },
            {
                "target": "#msp-release-panel > div.msp-panel-header",
                "placement": "bottom",
                "title": "Draft Template",
                "content": "Template which currently being worked on."
            },
            {
                "target": "#msp-template-panel > div:nth-child(2) > div.msp-template-tabs-body > div > div:nth-child(1) > div > center > div.msp-template-name",
                "placement": "right",
                "title": "Template Name",
                "content": "Name given when template created"
            },
            {
                "target": "#msp-template-panel > div:nth-child(2) > div.msp-template-tabs-body > div > div:nth-child(1) > div > center > div:nth-child(2)",
                "placement": "right",
                "title": "Dimensions",
                "content": "length and height of template"
            },
            {
                "target": "#msp-template-panel > div:nth-child(2) > div.msp-template-tabs-body > div > div:nth-child(1) > div > center > div:nth-child(3)",
                "placement": "right",
                "title": "Orientation",
                "content": "Page size and orientation of template"
            },
            {
                "target": "#msp-template-panel > div:nth-child(2) > div.msp-template-tabs-body > div > div:nth-child(1) > div > center > div.msp-template-date",
                "placement": "right",
                "title": "Modified Date",
                "content": "Late modified date of the template"
            },
			{
                "target": "#msp-template-view-all > button > div > span",
                "placement": "bottom",
                "title": "Show More",
                "content": "Click to view more template in released section"
            }
        ]
    }'
);