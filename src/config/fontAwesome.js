import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { config, library } from "@fortawesome/fontawesome-svg-core";
// ADD BRANDS HERE:
import {
  faGithub,
  faGitlab,
  faTwitter,
  faMastodon
} from "@fortawesome/free-brands-svg-icons";
// ADD ICONS HERE:
import { 
  faSpinner, 
  faChessQueen 
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
  faChessQueen
);

export default FontAwesomeIcon;
