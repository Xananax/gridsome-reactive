import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { config, library } from "@fortawesome/fontawesome-svg-core";
// To know what icons are available, look into
// https://fontawesome.com/icons?d=gallery&s=brands&m=free
// ADD BRANDS HERE:
import {
  faMastodon,
  faGitlab,
  faReddit,
  faTwitter,
  faGithub,
  faTelegram,
  faSkype,
  faCodepen,
  faKeybase,
  faLinkedin
} from "@fortawesome/free-brands-svg-icons";
// To know what icons are available, look into
// https://fontawesome.com/icons?d=gallery&s=solid&m=free
// ADD ICONS HERE:
import {
  faSpinner,
  faHome,
  faNewspaper,
  faRss,
  faAtom,
  faCommentDots,
  faCode,
  faEnvelope
} from "@fortawesome/free-solid-svg-icons";
import "@fortawesome/fontawesome-svg-core/styles.css";

config.autoAddCss = false;

// UPDATE THIS LIST TO SYNC WITH THE ICONS
// YOU'VE SELECTED ABOVE
library.add(
  faMastodon,
  faGitlab,
  faReddit,
  faTwitter,
  faGithub,
  faTelegram,
  faSkype,
  faCodepen,
  faKeybase,
  faLinkedin,
  //
  faSpinner,
  faHome,
  faNewspaper,
  faRss,
  faAtom,
  faCommentDots,
  faCode,
  faEnvelope
);

export default FontAwesomeIcon;
