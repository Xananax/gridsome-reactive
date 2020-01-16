# 7isme

Log in using one set of credentials, from any device. Have as many professional email addresses, users, and cloud space as you have storage for. Get group messaging, document sharing, and total control of your data, all for the price of the hardware it runs on.

Press that chonky button and get freed from Google.

## Reclaim  Ownership of Your Data <!-- omit in toc -->

## What is it?

7isme aims to provide you with simple and accessible ways to install their own servers, so you can have access to most things you need under a unified umbrella, and with data stored under your control.

Additionally, 7isme aims to teach you how to further protect your privacy with tutorials, software comparisons, and well sourced news.

Everything 7isme does for a price is also available for free, and every script we use is open sourced for you to use yourself. Paying us just makes your life easier and supports us.

7isme promises:
- **ethical business**: We will never put profit before ethics or doing the right thing. It's bad that we're in a world where this needs to be said, but here we are.
- **human relationship**: If you opt to pay for 7isme, you will be put in touch with a system administrator who will personally follow you, learn your likes and dislikes. You will never have to deal with a faceless administration.
- **portable tech stack**: our system should be easy to migrate to different servers, and fairly easy to migrate to different operating systems.
- **transparency**: we lay out flat everything we do. If anything is unclear, we will do all we can to clarify it.

title: Services 7isme provides

The services are detailed below, but in summary, by installing 7isme, you get:
- 

There are several price tiers:
- **one button installation** installs 7isme on a server, and gives you the admin password. You need to setup the domain name yourself. You pay 7isme nothing, but you will have to pay for the domain and for hosting.
- **one button installation + domain name + hosting**:

We will also over time build a knowledge base of how to further escape surveillance and how to educate others.

title: What does "7isme" mean?

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

- [7isme](#7isme)
  - [What is it?](#what-is-it)
    - [Services 7isme provides](#services-7isme-provides)
    - [What does "7isme" mean?](#what-does-%227isme%22-mean)
  - [Why does it Matter?](#why-does-it-matter)
- [Technologies](#technologies)
- [Applications](#applications)
    - [Video Call](#video-call)
    - [Notes](#notes)
    - [Phone Tracking](#phone-tracking)
    - [Email Client](#email-client)
    - [Email Client (2)](#email-client-2)
    - [Android SMS Backup](#android-sms-backup)
    - [Contacts Syncing](#contacts-syncing)
    - [E-book library](#e-book-library)
    - [Collaborative Budget Manager](#collaborative-budget-manager)
    - [Self Destructing Messages](#self-destructing-messages)
    - [On the Fly Custom Email Address](#on-the-fly-custom-email-address)
    - [Polls & Forms](#polls--forms)
    - [Simple Website publishing](#simple-website-publishing)
    - [Federated Social Network](#federated-social-network)
    - [Mind Map](#mind-map)
    - [Secure, Decentralized Chat](#secure-decentralized-chat)
    - [Meetings Scheduler](#meetings-scheduler)
    - [Meetings Scheduler (2)](#meetings-scheduler-2)
    - [Kanban board](#kanban-board)
    - [NewsLetter Management](#newsletter-management)
    - [Tasks](#tasks)
    - [Maps](#maps)
    - [... And more](#and-more)
- [Coming Soon](#coming-soon)
    - [VPN](#vpn)
    - [Virtual Android](#virtual-android)
    - [Streaming Service](#streaming-service)
    - [Workflow Automation](#workflow-automation)
    - [Automate and Integrate External Services](#automate-and-integrate-external-services)
- [How does it work?](#how-does-it-work)
- [Hardware](#hardware)
    - [Regular VPS](#regular-vps)
    - [Highly Snooping-resistant VPS](#highly-snooping-resistant-vps)
    - [Super Cheap VPS](#super-cheap-vps)
    - [Your Own Hardware](#your-own-hardware)
- [Development Process](#development-process)
  - [Revenue Streams](#revenue-streams)
- [Who is it for?](#who-is-it-for)
    - [Potential User Cases](#potential-user-cases)
    - [Potential Clients](#potential-clients)
- [The Team](#the-team)
    - [Sally Amirza - CEO](#sally-amirza---ceo)
    - [Jad Sarout - CTO](#jad-sarout---cto)

<div class="page"/>

# Technologies

7isme stands on the shoulder of giants. Each application is detailed below, but we thank especially:

- [Nextcloud](https://nextcloud.com/)
- [YUNoHost](https://yunohost.org/)

We also warmly thank [Framasoft](https://framasoft.org/en/) for their continuous efforts promoting and supporting an emancipated web, outside of corporate control.

Every application that runs on 7isme is open source, with a liberal license. 7isme doesn't tamper with any of the applications. As a matter of fact, every script used in 7isme is itself open source, and you are invited to inspect them, or run them yourself.

<div class="page"/>

# Applications


title: Notes

audiences: android ios desktop





<div class="page"/>

title: Phone Tracking
audiences: family personal android ios
upstream:
  name: Phonetrack Nextcloud Application
  url: https://gitlab.com/eneiluj/phonetrack-oc
cover:
  alt: A tracked phone on a map
  url: features/phone-tracking.jpg

Track your phone, or share yoemailur location with friends or publicly.1

<div class="page"/>

title: Email Client

audiences: office activist family personal desktop

upstream:
  name: RainLoop
  url: https://www.rainloop.net

cover:
  alt: A demonstration of the mail client in action
  url: features/./email-client.png

A web-based email manager, allowing you to connect multiple accounts, including of course your default 7isme email.

Additionally to email, it can also manage messages from Google, Facebook, and Twitter.

<div class="page"/>

title: Email Client (2)

audiences: office activist family personal desktop

upstream:
  name: Horde Webmail
  url: https://www.horde.org/apps/webmail

cover:
  alt: A demonstration of the mail client in action
  url: features/./email-client-horde.png

A web-based email manager, allowing you to connect multiple accounts, including of course your default 7isme email.

It integrates with the rest of the system, and allows you to attach files directly from your drive.

<div class="page"/>

title: Android SMS Backup

audiences: personal android

upstream:
  name: OwnCloud SMS
  url: https://github.com/nextcloud/ocsms.

cover:
  alt: An example of backed up SMSes
  url: features/./phone-sync.png

Backup and restore all SMSes from your Android phone. Not Iphone compatible yet.

App available [here](https://play.google.com/store/apps/details?id=fr.unix_experience.owncloud_sms)

<div class="page"/>

title: Contacts Syncing

audiences: office family personal android ios

upstream:
  name: Nextcloud Contacts
  url: https://github.com/nextcloud/contacts

cover:
  alt: An example of the contacts panel
  url: features/./contacts.png

Backup and restore contacts to your devices, and share contacts with co-workers and friends.

<div class="page"/>

title: E-book library

audiences: personal android ios desktop

upstream:
  name: Epub.js
  url: https://github.com/futurepress/epub.js and [Files_OPDS](https://github.com/Yetangitu/owncloud-apps/tree/master/files_opds)

Provides both a way to read your books online, as well as a way to easily browse and access them online through any OPDS-compatible device (most phone ebook readers are, unfortunately, not many hardware e-readers).

cover:
  alt: Calibre-web
  url: features/./calibre-web.png

If you use [Calibre](https://calibre-ebook.com/) and sync the library, you can access it online using [Calibre-Web](https://github.com/janeczku/calibre-web).

<div class="page"/>

title: Collaborative Budget Manager

audiences: family personal android ios desktop

upstream:
  name: Cospend
  url: https://gitlab.com/eneiluj/cospend-nc

cover:
  alt: A project view in Cospend
  url: features/./cospend.png

Nextcloud Cospend is a group/shared budget manager. You can use it when you share a house, when you go on vacation with friends, whenever you share money with others.\
It lets you create projects with members and bills. People that are not part of youru network can still be invited to particpate in the project. It also allows you to create recurring bills. It can sync with an [Android client](https://play.google.com/store/apps/details?id=net.eneiluj.moneybuster).

<div class="page"/>

title: Self Destructing Messages

audiences: activist personal desktop

upstream:
  name: PrivateBin
  url: https://privatebin.net/

cover:
  alt: An empty bin
  url: features/./privatebin.png

Allow anyone to write messages that self-destruct after a while, or after reading. Very useful for sensitive information that should not fall captive to preying eyes. The server has zero knowledge of pasted data. Data is encrypted/decrypted in the browser using 256 bits AES.


<div class="page"/>

title: On the Fly Custom Email Address

audiences: activist personal android ios desktop

Create your own email addresses; there's no limit, or rule to how many you or your users can have. Go wild!

Additionally, profit from this to create *spam honeypots*: If your email is bob@example.com, and you're registering to facebook, use bob.facebook.com@example.com. The part after the first dot will be ignored, and you'll be able to create auto-rules to store emails according to your preferences. When Facebook begins selling your email to advertisers, you can easily filter them out.

<div class="page"/>

title: Polls & Forms

audiences: office activist desktop

upstream:
  name: Nextcloud Forms
  url: https://github.com/nextcloud/forms

cover:
  alt: The Nextcloud Form editing interface
  url: features/./forms.png

A forms app, similar to [Google Forms](https://www.google.com/forms/about/). Collect data, send surveys, or allow people to contact you.

<div class="page"/>

title: Simple Website publishing

audiences: activist personal android ios desktop

upstream:
  name: Pico CMS
  url: http://picocms.org/

cover:
  alt: An example of PicoCMS in action
  url: features/./pico-cms.jpg

Super-simple publishing: Creating a new page is no more than creating a simple text file in your file manager. No config is required, no utterly complex management interfaces - just files. Secure Sharing, collaboration, and access control are the same that you already use for your files.

Multiple sites and blogs are possible.

<div class="page"/>

title: Federated Social Network

audiences: office activist family personal android ios desktop

upstream:
  name: Nextcloud Social
  url: https://github.com/nextcloud/social

cover:
  alt: A conversation in Nextcloud Social
  url: features/./social.png

You will own your own social network, which you can use with friends and family on your own server. Additionally, you can connect to any other social network of the [Fediverse](https://fediverse.party/). the Fediverse is a *Federated Social Network*. It works a bit like email: gmail users and hotmail users can communicate, despite being on two different domains.

The most prominent app that uses the Fediverse is [Mastodon](https://joinmastodon.org/), an app that ressembles Twitter, but differently interesting networks are being created for it, like [Pixelfed](https://pixelfed.org/), which ressembles Instagram

Federation allows you to own your own data and not be restricted by any censorship, yet connect to people everywhere like you would in a centralized network such as Facebook.

<div class="page"/>

title: Mind Map

audiences: personal desktop

upstream:
  name: Kityminder Editor
  url: https://github.com/fex-team/kityminder-editor

cover:
  alt: A mind map
  url: features/./mind-map.png

A mind map editor that is capable of auto-organising notes, and export in text format.

<div class="page"/>

title: Secure, Decentralized Chat

audiences: office activist family personal android ios desktop

upstream:
  name: Synapse
  url: https://github.com/matrix-org/synapse

cover:
  alt: The Riot client
  url: features/./riot.png

Get access to [Matrix](https://matrix.org/), an open network for secure, decentralized communication. Using Matrix, you can host your own chat, that only people you invite have access to, or plug into the federated Matrix ecosystem, that allows you to chat with anyone using Matrix anywhere.

Multiple clients exist for all platforms, the most cited one being [Riot](https://about.riot.im/).

<div class="page"/>

title: Meetings Scheduler

audiences: office android ios desktop

upstream:
  name: Open Sondage
  url: https://demo.yunohost.org/date/

cover:
  alt: An example of a poll
  url: features/./meetings_scheduler.png

Allows you to invite people to time slots, and allow them to pick the one that is more suitable for them. Like [Doodle](https://doodle.com/), but free, and running on your own hardware.

<div class="page"/>

title: Meetings Scheduler (2)

audiences: office android ios desktop

upstream:
  name: Nextcloud Poll
  url: https://github.com/nextcloud/polls

cover:
  alt: An example of a poll
  url: features/./meetings_scheduler-2.png

Allows you to invite people to time slots, and allow them to pick the one that is more suitable for them. Like [Doodle](https://doodle.com/), but free, and running on your own hardware.

<div class="page"/>

title: Kanban board

audiences: office desktop

upstream:
  name: Deck
  url: https://github.com/nextcloud/deck

cover:
  alt: Deck in action
  url: features/./deck.png

Kanban-style project & personal management tool for Nextcloud, similar to [Trello](https://trello.com/). Syncing with Android coming soon.

<div class="page"/>

title: NewsLetter Management

audiences: activist desktop

upstream:
  name: Mailman
  url: http://www.list.org/

cover:
  alt: The Mailman interface
  url: features/./mailman.png

managing electronic mail discussion and e-newsletter lists.

<div class="page"/>

title: Tasks

audiences: office android ios desktop

upstream:
  name: Nextcloud Tasks
  url: https://github.com/nextcloud/tasks/

cover:
  alt: Some tasks
  url: features/tasks.png

Task management, with reminders, deadlines, sub-tasks and multiple possible lists. Syncs with multiple clients on both [Android](https://opentasks.app/) and IOS & MacOS (using [Apple Reminders](https://en.wikipedia.org/wiki/Reminders_(Apple))), as well as [Desktop](https://www.qownnotes.org/).

<div class="page"/>

title: Maps

audiences: family personal desktop

upstream:
  name: OpenStreetMap
  url: https://www.openstreetmap.org and [Leaflet](https://leafletjs.com)

cover:
  alt: A map of the world
  url: features/./maps.png

Save places, share places, see where your contacts live, locate yourself and navigate.

<div class="page"/>

title: ... And more

- Automated backups
- 2FA authentication
- Password manager (Alpha)
- [Carnet](https://github.com/PhieF/CarnetDocumentation), Google Keep-like note taking, with Android, MacOS, Windows, and Linux apps
- All Android apps available on [F-Droid](https://f-droid.org) if you prefer avoiding the play store altogether

Optionally:

- Integrations with [OnlyOffice](https://www.onlyoffice.com/) and/or [Collabora](https://www.google.com/search?client=firefox-b-d&q=collabora+online) (those services are not free)
- Bookmark manager
- Download manager (to download files directly on your server)
- Support for [EtherPad](https://etherpad.org/) and [EtherCalc](https://etherpad.org/)
- Video converter
- Audio player
- Emails encryption
- XMPP Chat (an open protocol with a lot of clients)
- Integration with [Wordpress](https://wordpress.org/) for robust publishing needs
- Integration with Gitlab & Gitea
- Integration with [Mattermost](https://mattermost.org/) (a [Slack](https://slack.com/intl/en-sa/) alternative)
- Integration with [Discourse](https://discourse.org/)
- Installation of [WriteFreely](https://writefreely.org/), a Medium-like classy and modern publishing application.

<div class="page"/>

# Coming Soon

title: VPN

audiences: activist personal android ios desktop

Avoid constantly compromised VPNs that always [end up selling out](https://www.reddit.com/r/PrivateInternetAccess/comments/dz2w53/our_merger_with_kape_technologies_addressing_your/), or getting detected and forbidden. Host your own.

https://github.com/trailofbits/algo

<div class="page"/>

title: Virtual Android

Run your trapped Android device. Very useful for running, for example, a Whatsapp that doesn't transmit your info to Facebook.

<div class="page"/>

title: Streaming Service

audiences: family personal android ios desktop

upstream:
  name: Streama
  url: https://streamaserver.org/

cover:
  alt: Some movies on Streama
  url: features/./streama.png

Host your own [Netflix](https://www.netflix.com/sa-en/)

<div class="page"/>

title: Workflow Automation

audiences: office personal android ios desktop

upstream:
  name: Nextcloud Flow
  url: https://nextcloud.com/blog/nextcloud-flow-makes-it-easy-to-automate-actions-and-workflows/

Trigger actions when certain events happen. For example, when a file is added to a specific folder, a shared link to the file could be created and send through Nextcloud Talk into a specified chat room.

<div class="page"/>

title: Automate and Integrate External Services

audiences: office personal android ios desktop

upstream:
  name: n8n
  url: https://n8n.io/

cover:
  alt: An example workflow
  url: features/./n8n.png

Create triggers and automations to react to events. For example, get a Slack message every time a new deal get created in Pipedrive and additionally add it to a Google Sheets.

<div class="page"/>

# How does it work?

You choose a custom domain, a server, and click the button. 7isme does this:

1. rents the domain name
2. rents the server
3. sets them up
4. creates an admin account
5. creates a first user account

If you've opted to maintain yourself, all the admin accounts are sent to the email you provide.

If you've opted to let 7isme maintain your services, you'll be appointed a maintainer. This will be the person with whom you'll communicate. They will be responsible of keeping your systems humming and keeping you happy.

<div class="page"/>

# Hardware

7isme can be installed on many different hardware:

title: Regular VPS

The best and most economical solution is to install on a Virtual Private Server. This will be secure and private enough for most users, and will come down to about $12 a month. They will handle a family, a group of friends, or a small company easily (10 \~ 20 users). They typically don't have a lot of space (about 30 gigs total).  
Recommended for:

- users who don't have an vital need for privacy: regular personal users, families, group of friends, businesses without sensitive data

Options to increase power and storage are available, in about doubling ranges, for doubling prices (that is, 40 users and 60 gigs will be about $24 per month). For really large needs, you will want a private server (multiply all prices by 10).

Examples: [Linode](https://linode.com), [Digital Ocean](https://digitalocean.com), [DreamHost](https://www.dreamhost.com/hosting/vps/)

title: Highly Snooping-resistant VPS

These are VPSes that are located in countries in which privacy laws are very strict, that have a track record of not keeping data, and who can be paid with semi-private currencies such as bitCoin. They are more expensive (about 1.5 to 2 times as much as regular VPSes), but a must for people who care about snooping. They are otherwise subject to the same limitations as regular VPSes.  
Recommended for:

- activists, journalists

Examples: [Bahnhof](https://www.bahnhof.net/), [Exoscale](https://www.exoscale.com/), [OrangeWebsite](https://www.orangewebsite.com/offshore-hosting.php), [FlokiNET](https://flokinet.is/)


title: Super Cheap VPS

These are VPSes that are specially cheap, and don't have enough reputation to form an opinion about their cleanliness. Due to their nature, they are unadvised for mission critical needs, or if privacy is an important matter (Alibaba Cloud is located in China, for example). However, for a group of friends who just want something simple and cheap, they might be the best option.  
Recommended for:

- People who don't want to spend a lot

Examples: [OVH](https://www.ovh.com/world/vps/vps-ssd.xml), [Hetzner Online GmbH](https://www.hetzner.com/cloud), [Alibaba Cloud](https://www.alibabacloud.com/)


title: Your Own Hardware

You can custom install 7isme on any hardware of your choice, but of course, for obvious reasons, we cannot provide you with the 1 button installation, nor can we handle maintenance.

If you do this, your only support is the public forum.

<div class="page"/>

# Development Process

7isme's development runs in an entirely open source agile fashion; Feature development is guided by the needs of users, backed up by actual demand. Paying users, subscribers, and patreons, get more weight in driving feature adoption.

## Revenue Streams

7isme's revenue model is as transparent as possible. We want our incentives, and those of our users, to be aligned. All payments are optional:

1. **An optional fee on installation**: should you decide to use our 1 button installation, rather than install manually, we get paid the sum of $X.
2. **An optional storage maintenance fee**: if you decide to let us handle your storage location, we will add a small markup (10%) on the price of your server's rent
3. **An optional software maintenance fee**: if you decide to let us maintain your server, rather than maintain it yourself, we will get paid a recurrent retainer fee of $X
4. **An optional fee on domain name acquisition**: if you decide to let us buy the domain name, we add a small markup (10%). You can also choose a yourdomainname.7isme.com for free; or bring your own domain
5. **An optional fee on domain name management**: if you decide to let us manage the domain name, we add a small maintenance markup
6. **A fee on customization**: should you want more features than the default ones, tweaks, or branding, we will take a per-project fee, depending on scope.
7. **Donations**: if you like the project, you can donate as a one-off, or a recurrent Patreon donation.

<div class="page"/>

# Who is it for?

This is targeted at:

- Activists & journalists
- Companies that would rather keep their info private
- Individuals who would rather not be snooped on by Google/Facebook etc, but don't have the technical know-how
- People who are afraid services they use today can change/become paid/shutdown
- People who want their services to be all connected and part of the same interface
- People who want to be empowered with new options (such as, for example, creating a new email on the fly whenever needed)
- People who want to have full control over their data, be able to back it up, move it to another country, or erase it entirely as if it never existed.

title: Potential User Cases

1. Instead of using different apps to manage your data, you want a single entry point, where everything is connected. You also want to be able to install new applications, and act on your data in custom ways.
2. You want to be able to port your data, move it around, or be certain that when you delete it, it's deleted for good
3. You want to be able to use software without fear that it will change under your feet, become suddenly non-free, or [get sold to a compromised 3rd party](https://www.reddit.com/r/PrivateInternetAccess/comments/dz2w53/our_merger_with_kape_technologies_addressing_your

title: Potential Clients

- SMBs
- Person who wants control over their services
- Person who wants to install Lineage and get out of Google
- Family who wants to share files and pictures

<div class="page"/>

# The Team

title: Sally Amirza - CEO

[ Sally blurb ]

title: Jad Sarout - CTO

[ Jad blurb ]