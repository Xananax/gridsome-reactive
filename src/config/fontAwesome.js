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
  faLinkedin,
  faGooglePlay,
  faLinux,
  faWindows,
  faApple,
  faAppStoreIos,
  faAndroid
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
  faEnvelope,
  faBriefcase,
  faUser,
  faUsers,
  faUserSecret
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
  faGooglePlay,
  faLinux,
  faWindows,
  faApple,
  faAppStoreIos,
  faAndroid,
  //
  faSpinner,
  faHome,
  faNewspaper,
  faRss,
  faAtom,
  faCommentDots,
  faCode,
  faEnvelope,
  faBriefcase,
  faUser,
  faUsers,
  faUserSecret,
);

export default FontAwesomeIcon;

const getIconFor = (dictionary) => (name) => {
  if(!(name in dictionary)){ return {} }
  const [ label, ...icon ] = dictionary[name]
  return { label, icon }
}

export const getPlatformIcon = getIconFor({
  linux: ['Linux','fab','linux'],
  mac: ['MacOSX','fab','apple'],
  windows: ['Windows','fab','windows'],
  google: ['Play Store','fab','google-play'],
  'f-droid': ['F-Droid','fab','android'],
  ios: [ 'IOS', 'fab', 'app-store-ios' ]
})

export const getAudiencePlatformIcon = getIconFor({
  office: ['Business','fas','briefcase'],
  family: ['Family','fas','users'],
  personal: ['Personal','fas','user'],
  activist: ['Journalist','fas','user-secret'],
})

