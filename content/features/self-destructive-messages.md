---

title: Self Destructing Messages
audiences: activist
status: stable
upstream:
  name: PrivateBin
  url: https://privatebin.net/
cover:
  alt: An empty bin
  url: features/privatebin.png
description: Write secure messages that will only be accessible once
tags: Markdown
applications:
  - platform: web
    url: https://github.com/YunoHost-apps/zerobin_ynh
    name: PrivateBin
    osi: true

---

Allow anyone to write messages that self-destruct after a while, or after reading. Very useful for sensitive information that should not fall captive to preying eyes. The server has zero knowledge of pasted data. Data is encrypted/decrypted in the browser using 256 bits AES.