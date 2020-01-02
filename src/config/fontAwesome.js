import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { config, library } from "@fortawesome/fontawesome-svg-core";
// To know what icons are available, look into 
// https://fontawesome.com/icons?d=gallery&s=brands&m=free
// ADD BRANDS HERE:
import {
  faGithub,
  faGitlab,
  faTwitter,
  faMastodon
} from "@fortawesome/free-brands-svg-icons";
// To know what icons are available, look into 
// https://fontawesome.com/icons?d=gallery&s=solid&m=free
// ADD ICONS HERE:
import { 
  faSpinner, 
  faChessQueen,
  faHome,
  faNewspaper,
  faRss,
  faAtom
} from "@fortawesome/free-solid-svg-icons";
import "@fortawesome/fontawesome-svg-core/styles.css";

config.autoAddCss = false;

// UPDATE THIS LIST TO SYNC WITH THE ICONS
// YOU'VE SELECTED ABOVE
library.add(
  faGithub,
  faGitlab,
  faTwitter,
  faMastodon,
  faSpinner,
  faChessQueen,
  faHome,
  faNewspaper,
  faRss,
  faAtom
);

export default FontAwesomeIcon;
