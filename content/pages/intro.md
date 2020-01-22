---

title: Intro
date: 2019-02-07
tags: Markdown
canonical_url: false
description: "A new static site generator baby is born. It's highly inspired by Gatsby.js (React based) but built on top of Vue.js. We have been working on it for a year and will have a beta ready soon. You can expect this baby to grow up fast!"

---


# 7isme

Log in using one set of credentials, from any device. Have as many professional email addresses, users, and cloud space as you have storage for. Get group messaging, document sharing, and total control of your data, all for the price of the hardware it runs on.

Press that chonky button and get freed from Google.

<chonky-button>
  Free Me
</chonky-button>

## Reclaim Ownership of Your Data

## What is it?

7isme aims to provide you with simple and accessible ways to install their own servers, so you can have access to most things you need under a unified umbrella, and with data stored under your control.

Additionally, 7isme aims to teach you how to further protect your privacy with tutorials, software comparisons, and well sourced news.

Everything 7isme does for a price is also available for free, and every script we use is open sourced for you to use yourself. Paying us just makes your life easier and supports us.

7isme promises:
- **ethical business**: We will never put profit before ethics or doing the right thing. It's bad that we're in a world where this needs to be said, but here we are.
- **human relationship**: If you opt to pay for 7isme, you will be put in touch with a system administrator who will personally follow you, learn your likes and dislikes. You will never have to deal with a faceless administration.
- **portable tech stack**: our system should be easy to migrate to different servers, and fairly easy to migrate to different operating systems.
- **transparency**: we lay out flat everything we do. If anything is unclear, we will do all we can to clarify it.

## How does it work?

We propose different services, with different price tiers:
- **Use our scripts**: the system is entirely open source. You can check the source, and install it yourself, if you have the knowledge and the patience. You pay 7isme nothing, but you will have to pay for your own domain and hosting.
- **One button installation** installs 7isme on a server, and gives you the admin password. You need to setup the domain name yourself. You pay 7isme nothing, but you will have to pay for the domain and for hosting.
- **One button installation + domain name + hosting**: this is the most hands-free option: click the button, obtain a 7isme domain, and pick a server. We add a 10% markup to the price of the server you choose. If you want a custom domain, we take a 10% markup for that too.
- **One button installation + maintenance**: This is similar to the previous installation, but you will additionally benefit from a dedicated administrator to do maintenance and upgrades. This is the most straightforward and simple option, and definitely our recommendation for people who favor simplicity.
- **custom services**: We're open to custom installations, contact us to discuss about it.

We will also over time build a knowledge base of how to further escape surveillance and how to educate others.

# Applications

<features-list>

<template v-slot:features="{ features }"/>

### ... And more:

- Automated backups
- [Carnet](https://github.com/PhieF/CarnetDocumentation), Google Keep-like note taking, with Android, MacOS, Windows, and Linux apps

Optionally:

- Integrations with [OnlyOffice](https://www.onlyoffice.com/) and/or [Collabora](https://www.google.com/search?client=firefox-b-d&q=collabora+online) (those services are not free)
- Bookmark manager
- Download manager (to download files directly on your server)
- Support for [EtherPad](https://etherpad.org/) and [EtherCalc](https://etherpad.org/)
- Audio player
- Emails encryption
- XMPP Chat (an open chat protocol with a lot of applications to choose from)
- Integration with [Wordpress](https://wordpress.org/) for robust publishing needs
- Integration with Gitlab & Gitea
- Integration with [Mattermost](https://mattermost.org/) (a [Slack](https://slack.com/intl/en-sa/) alternative)
- Integration with [Discourse](https://discourse.org/)
- Installation of [WriteFreely](https://writefreely.org/), a Medium-like classy and modern publishing application.

### These are coming soon to the core offering:

<template v-slot:comingSoon="{ comingSoon }">
    <ul>
      <li v-for="feature in comingSoon" :key="feature.id">
        <g-link :to="feature.path">{{ feature.title }}</g-link>
      </li>
    </ul>
  </template>
</features-list>

## What does "7isme" mean?

It's a geeky play on the `0700` [Unix permissions](https://en.wikipedia.org/wiki/File_system_permissions#Numeric_notation), which gives full permissions to the owner of the files, and no permissions to anyone else.

It's also a sufficiently short url to be easy to type.

## Why does it Matter?

If you're here, you probably don't need the lesson. But if you need a refresher, or need to convince someone else:

- Facebook is bad, it steals [citation needed]
- Google is bad also it steals [citation needed]
- Google kills services: https://killedbygoogle.com/
- Services that are trustworthy get sold to untrustworthy actors: whatsapp [citation needed], Private Internet Access
- Snowden citation "not caring about privacy..."
- Big companies leak data all the time [citation needed]. See how the data is badly used [citation needed]
- Centralization means single point of failure [citation needed]

Even entire countries, such as [Sweden](https://www.linkedin.com/posts/karloskarbrannstrom_swedish-social-insurance-agency-one-of-the-activity-6603414501897363457-zI2s/) deem storing information on US servers insecure (to the point of forbidding it).

# Technologies

7isme stands on the shoulder of giants. Each application is detailed below, but we thank especially:

- [Nextcloud](https://nextcloud.com/)
- [YUNoHost](https://yunohost.org/)

We also warmly thank [Framasoft](https://framasoft.org/en/) for their continuous efforts promoting and supporting an emancipated web, outside of corporate control.

Every application that runs on 7isme is open source, with a liberal license. 7isme doesn't tamper with any of the applications. As a matter of fact, every script used in 7isme is itself open source, and you are invited to inspect them, or run them yourself.

