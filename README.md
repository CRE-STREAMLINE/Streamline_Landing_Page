# CRE Streamline Inc. Website

This is the official website for CRE Streamline Inc., a company revolutionizing off-market commercial real estate transactions. The website includes information about the company, the problem it solves, its innovative solution, team members, advisors, fundraising details, blog, and contact information.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Deployment](#deployment)
- [Unpublishing from GitHub Pages](#unpublishing-from-github-pages)
- [File Structure](#file-structure)
- [Contributing](#contributing)
- [License](#license)

## Installation

To set up this project locally, follow the steps below:

### Prerequisites

- Node.js (v14.x or later)
- npm (v6.x or later) or yarn (v1.x or later)

### Steps

1. Clone the repository to your local machine:

   ```bash
   git clone https://github.com/your-username/cre-streamline-website.git
   cd cre-streamline-website


2. Install the necessary dependencies:
npm install
# or
yarn install


3. Running the Project Locally
npm run build
# or
yarn build


4. Deployment
npm install gh-pages --save-dev

5. Add the following to your `package.json`:
{
  "name": "streamline-website",
  "version": "0.1.0",
  "private": true,
  "dependencies": {
    "@testing-library/jest-dom": "^5.17.0",
    "@testing-library/react": "^13.4.0",
    "@testing-library/user-event": "^13.5.0",
    "react": "^18.3.1",
    "react-dom": "^18.3.1",
    "react-scripts": "5.0.1",
    "web-vitals": "^2.1.4"
  },
  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject",
    "predeploy": "npm run build",
    "deploy": "gh-pages -d build",
    "unpublish": "gh-pages clean"
  },
  "eslintConfig": {
    "extends": [
      "react-app",
      "react-app/jest"
    ]
  },
  "browserslist": {
    "production": [
      ">0.2%",
      "not dead",
      "not op_mini all"
    ],
    "development": [
      "last 1 chrome version",
      "last 1 firefox version",
      "last 1 safari version"
    ]
  },
  "devDependencies": {
    "gh-pages": "^6.1.1"
  },
  "homepage": "https://your-username.github.io/cre-streamline-website"
}


6. Deploy the project: 
npm run deploy
# /
unpublish with:
npm run unpublish

7. Configure your custom domain in the GitHub Pages settings of your repository:
* Go to your repository on GitHub.
* Navigate to the "Settings" tab.
* Scroll down to the "Pages" section.
* Select the gh-pages branch as the source for GitHub Pages.
* In the "Custom domain" section, enter kmgmt.co/landing.
* Add a CNAME file to the public folder of your project:

8. After deploying, visit https://kmgmt.co/landing to verify your website is live.


File Structure
cre-streamline-website/
├── public/
│   ├── index.html
│   └── ...
├── src/
│   ├── App.js
│   ├── App.css
│   ├── index.js
│   └── ...
├── package.json
└── README.md



