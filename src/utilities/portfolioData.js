import { StaticCV, WineStock, RecipesWeb } from "../assets/projects";

const portfolioData = [
  {
    id: 1,
    caption: "Recipes website",
    url: RecipesWeb,
    page: "http://recipes.uzprogramuosiu-viska.lt/",
    git: "https://github.com/kaleginiene/recipes-website.git",
    backend: "https://github.com/kaleginiene/recipes-website-backend.git",
  },
  {
    id: 2,
    caption: "Static-CV",
    url: StaticCV,
    page: "http://resume.uzprogramuosiu-viska.lt/",
    git: "https://github.com/kaleginiene/CV",
  },
  {
    id: 3,
    caption: "WineStock system",
    url: WineStock,
    page: "http://wine-system.uzprogramuosiu-viska.lt/",
    git: "https://github.com/kaleginiene/wine-system-frontend",
    backend: "https://github.com/kaleginiene/wine-system-backend",
  },
];

export default portfolioData;
