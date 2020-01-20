const parseItem = provider => {
  if (!provider) {
    return false;
  }
  const raw =
    typeof provider === "string"
      ? provider
      : provider.url
      ? provider.url
      : null;
  if (!raw) {
    return false;
  }
  const [, raw_protocol, address] = raw.match(
    /(mailto|tel|bitcoin|(?:(?:ht|f)tps?|\/\/)):?(?:\/\/)?\s*?(.*)/i
  );
  if (!address) {
    return false;
  }
  const protocol =
    raw_protocol === "//" || raw_protocol === "/" || raw_protocol === ""
      ? "https"
      : raw_protocol;
  const is_web = /(ht|f)tps?/.test(protocol);
  const name = provider.name
    ? provider.name
    : is_web
    ? address
        .replace(/\/.*?$/, "")
        .trim()
        .split(".")
        .reverse()[1]
    : protocol === "mailto"
    ? "mail"
    : protocol === "tel"
    ? "number"
    : protocol;
  const icon = provider.icon
    ? provider.icon.trim()
    : name.toLowerCase();
  const url = protocol + (is_web ? "://" : ":") + address;
  return { name, protocol, address, icon, url };
};

const parseSocialArray = socialArray =>
  socialArray.map(parseItem).filter(Boolean);
parseSocialArray.parseItem = parseItem;

module.exports = parseSocialArray;
