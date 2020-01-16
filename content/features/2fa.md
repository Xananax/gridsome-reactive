---

title: Two Factor Authentication
audiences: office personal activist
status: stable
upstream:
  name: Two Factor TOTP
  url: https://github.com/nextcloud/twofactor_totp
tags: Markdown
applications:
  - platform: web
    url: https://apps.nextcloud.com/apps/twofactor_totp
    osi: true
  - platform: windows
    url: https://keepassxc.org/download/
    osi: true
  - platform: linux
    url: https://keepassxc.org/download/
    osi: true
  - platform: mac
    url: https://keepassxc.org/download/
    osi: true
  - platform: google
    url: https://play.google.com/store/apps/details?id=org.shadowice.flocke.andotp
    osi: true
  - platform: f-droid
    url: https://f-droid.org/packages/org.shadowice.flocke.andotp/
    osi: true
  - platform: ios
    url: https://itunes.apple.com/us/app/otp-auth/id659877384
    osi: false
cover:
  alt: A password being entered
  url: features/2fa.png
description: protect all the things

---

Enable optional ([or mandatory](https://docs.nextcloud.com/server/15/admin_manual/configuration_user/two_factor-auth.html)) two factor authentication for Nextcloud