---

title: Two Factor Authentication
audiences: office personal activist
upstream:
  name: Two Factor TOTP
  url: https://github.com/nextcloud/twofactor_totp
tags: Markdown
applications:
  - platform: web
    url: https://apps.nextcloud.com/apps/twofactor_totp
  - platform: windows
    url: https://keepassxc.org/download/
  - platform: linux
    url: https://keepassxc.org/download/
  - platform: mac
    url: https://keepassxc.org/download/
  - platform: google
    url: https://play.google.com/store/apps/details?id=org.shadowice.flocke.andotp
  - platform: f-droid
    url: https://f-droid.org/packages/org.shadowice.flocke.andotp/
  - platform: ios
    url: https://itunes.apple.com/us/app/otp-auth/id659877384
cover:
  alt: A password being entered
  url: features/2fa.png
description: protect all the things

---

Enable optional ([or mandatory](https://docs.nextcloud.com/server/15/admin_manual/configuration_user/two_factor-auth.html)) two factor authentication for Nextcloud