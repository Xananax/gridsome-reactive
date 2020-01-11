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

### Services 7isme provides

The services are detailed below, but in summary, by installing 7isme, you get:
- 

There are several price tiers:
- **one button installation** installs 7isme on a server, and gives you the admin password. You need to setup the domain name yourself. You pay 7isme nothing, but you will have to pay for the domain and for hosting.
- **one button installation + domain name + hosting**:

We will also over time build a knowledge base of how to further escape surveillance and how to educate others.

### What does "7isme" mean?

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
    - [What does &quot;7isme&quot; mean?](#what-does-quot7ismequot-mean)
  - [Why does it Matter?](#why-does-it-matter)
- [Technologies](#technologies)
- [Applications](#applications)
    - [File Storage and Syncing](#file-storage-and-syncing)
    - [News/RSS/Podcast Reader](#newsrsspodcast-reader)
    - [Calendar](#calendar)
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
    - [Polls &amp; Forms](#polls-amp-forms)
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

### File Storage and Syncing

> `#office` `#activist` `#family` `#personal` `#android` `#ios` `#desktop`

![Storage](files.png)

Full two-way sync storage. Sync the entire drive, or only selected directories, or both. Share files with collaborators, or publicly. Storage can be encrypted on a per-directory or per-file basis for an added layer of security (at the price of a 31% file size increase and impossibility to edit online).

There are Desktop, [Android](https://play.google.com/store/apps/details?id=com.nextcloud.client&hl=en), and [IOS](https://apps.apple.com/us/app/nextcloud/id1125420102) apps.

You can set auto-backups of photos and videos.

Additionally to your own storage, you can connect multiple additional providers to your personal drive:

- Amazon S3
- Any Nextcloud instance
- Any PC that supports the WebDAV standard
- SFTP
- Samba shares
- [PCloud](https://www.pcloud.com)
- [Dropbox](https://github.com/DJaeger/files_external_dropbox/)
- [One Drive](https://github.com/hevelius/files_external_onedrive) (beta)
- [Google Drive](https://github.com/NastuzziSamy/files_external_gdrive/) (beta)
- [Zimbra](https://github.com/ZeXtras/zimbra-drive)
- [Sharepoint](https://apps.nextcloud.com/apps/sharepoint)
- [Sia Storage](https://apps.nextcloud.com/apps/files_external_sia)

<div class="page"/>

### News/RSS/Podcast Reader

> `#personal` `#android` `#ios`

> based on [NextCloud News Reader](https://github.com/nextcloud/news)

![An example of the news app](./news.png)

An RSS and news reader, and a podcast aggregator. Can sync with [Android](https://play.google.com/store/apps/details?id=de.luhmer.owncloudnewsreader) and [IOS](https://apps.apple.com/app/cloudnews-owncloud-news-reader/id683859706).

<div class="page"/>

### Calendar

> `#office` `#activist` `#family` `#personal` `#android` `#ios` `#desktop`

> Based on [Nextcloud Calendar](https://github.com/nextcloud/calendar/)

![A week view of the calendar](./calendar.png)

A full fledged calendar, complete with events, reminders, and phone syncing. Syncs with any standard calendar application.

<div class="page"/>

### Video Call

> `#office` `#family` `#android` `#ios` `#desktop`

> Based on [Nextcloud Spreed](https://github.com/nextcloud/spreed)

![A call in action](video-call.png)

Video conferencing, with possibility to invite guests. Includes text chat, screen sharing, and collaborative note taking. Compatible with [Android](https://play.google.com/store/apps/details?id=com.nextcloud.talk2&hl=en) and [IOS](https://apps.apple.com/us/app/nextcloud-talk/id1296825574).

<div class="page"/>

### Notes

> `#office` `#personal` `#android` `#ios` `#desktop`

> Based on [Nextcloud Text](https://github.com/nextcloud/text)

![A note being written](./notes.png)

Take notes, attach files and image, tag them and organise them.

The notes app allows collaborative note editing (you can even invite guests without accounts), complete with side video call to be able to discuss while writing together.

Sync with your [Desktop](https://www.qownnotes.org/), as well as [Android](https://play.google.com/store/apps/details?id=it.niedermann.owncloud.notes) and [IOS](https://apps.apple.com/us/app/cloudnotes-owncloud-notes/id813973264).

Rather than a proprietary format, notes are saved as plain text (in a format called [Markdown](https://www.markdownguide.org/cheat-sheet/)), which makes it trivial to access and edit the notes anywhere a text editor is available.

<div class="page"/>

### Phone Tracking

> `#family` `#personal` `#android` `#ios`

> Based on [Phonetrack Nextcloud Application](https://gitlab.com/eneiluj/phonetrack-oc)

![A tracked phone on a map](phone-tracking.jpg)

Track your phone, or share yoemailur location with friends or publicly.1

<div class="page"/>

### Email Client

> `#office` `#activist` `#family` `#personal` `#desktop`

> based on [RainLoop](https://www.rainloop.net)

![A demonstration of the mail client in action](./email-client.png)

A web-based email manager, allowing you to connect multiple accounts, including of course your default 7isme email.

Additionally to email, it can also manage messages from Google, Facebook, and Twitter.

<div class="page"/>

### Email Client (2)

> `#office` `#activist` `#family` `#personal` `#desktop`

> Based on [Horde Webmail](https://www.horde.org/apps/webmail)

![A demonstration of the mail client in action](./email-client-horde.png)

A web-based email manager, allowing you to connect multiple accounts, including of course your default 7isme email.

It integrates with the rest of the system, and allows you to attach files directly from your drive.

<div class="page"/>

### Android SMS Backup

> `#personal` `#android`

> Based on [OwnCloud SMS](https://github.com/nextcloud/ocsms).

![An example of backed up SMSes](./phone-sync.png)

Backup and restore all SMSes from your Android phone. Not Iphone compatible yet.

App available [here](https://play.google.com/store/apps/details?id=fr.unix_experience.owncloud_sms)

<div class="page"/>

### Contacts Syncing

> `#office` `#family` `#personal` `#android` `#ios`

> Based on [Nextcloud Contacts](https://github.com/nextcloud/contacts)

![An example of the contacts panel](./contacts.png)

Backup and restore contacts to your devices, and share contacts with co-workers and friends.

<div class="page"/>

### E-book library

> `#personal` `#android` `#ios` `#desktop`

> Based on [Epub.js](https://github.com/futurepress/epub.js) and [Files_OPDS](https://github.com/Yetangitu/owncloud-apps/tree/master/files_opds)

Provides both a way to read your books online, as well as a way to easily browse and access them online through any OPDS-compatible device (most phone ebook readers are, unfortunately, not many hardware e-readers).

![Calibre-web](./calibre-web.png)

If you use [Calibre](https://calibre-ebook.com/) and sync the library, you can access it online using [Calibre-Web](https://github.com/janeczku/calibre-web).

<div class="page"/>

### Collaborative Budget Manager

> `#family` `#personal` `#android` `#ios` `#desktop`

> Based on [Cospend](https://gitlab.com/eneiluj/cospend-nc)

![A project view in Cospend](./cospend.png)

Nextcloud Cospend is a group/shared budget manager. You can use it when you share a house, when you go on vacation with friends, whenever you share money with others.\
It lets you create projects with members and bills. People that are not part of youru network can still be invited to particpate in the project. It also allows you to create recurring bills. It can sync with an [Android client](https://play.google.com/store/apps/details?id=net.eneiluj.moneybuster).

<div class="page"/>

### Self Destructing Messages

> `#activist` `#personal` `#desktop`

> Based on [PrivateBin](https://privatebin.net/)

![An empty bin](./privatebin.png)

Allow anyone to write messages that self-destruct after a while, or after reading. Very useful for sensitive information that should not fall captive to preying eyes. The server has zero knowledge of pasted data. Data is encrypted/decrypted in the browser using 256 bits AES.


<div class="page"/>

### On the Fly Custom Email Address

> `#activist` `#personal` `#android` `#ios` `#desktop`

Create your own email addresses; there's no limit, or rule to how many you or your users can have. Go wild!

Additionally, profit from this to create *spam honeypots*: If your email is `#bob@example.com`, and you're registering to facebook, use `#bob.facebook.com@example.com`. The part after the first dot will be ignored, and you'll be able to create auto-rules to store emails according to your preferences. When Facebook begins selling your email to advertisers, you can easily filter them out.

<div class="page"/>

### Polls & Forms

> `#office` `#activist` `#desktop`

> Based on [Nextcloud Forms](https://github.com/nextcloud/forms)

![The Nextcloud Form editing interface](./forms.png)

A forms app, similar to [Google Forms](https://www.google.com/forms/about/). Collect data, send surveys, or allow people to contact you.

<div class="page"/>

### Simple Website publishing

> `#activist` `#personal` `#android` `#ios` `#desktop`

> Based on [Pico CMS](http://picocms.org/)

![An example of PicoCMS in action](./pico-cms.jpg)

Super-simple publishing: Creating a new page is no more than creating a simple text file in your file manager. No config is required, no utterly complex management interfaces - just files. Secure Sharing, collaboration, and access control are the same that you already use for your files.

Multiple sites and blogs are possible.

<div class="page"/>

### Federated Social Network

> `#office` `#activist` `#family` `#personal` `#android` `#ios` `#desktop`

> Based on [Nextcloud Social](https://github.com/nextcloud/social)

![A conversation in Nextcloud Social](./social.png)

You will own your own social network, which you can use with friends and family on your own server. Additionally, you can connect to any other social network of the [Fediverse](https://fediverse.party/). the Fediverse is a *Federated Social Network*. It works a bit like email: gmail users and hotmail users can communicate, despite being on two different domains.

The most prominent app that uses the Fediverse is [Mastodon](https://joinmastodon.org/), an app that ressembles Twitter, but differently interesting networks are being created for it, like [Pixelfed](https://pixelfed.org/), which ressembles Instagram

Federation allows you to own your own data and not be restricted by any censorship, yet connect to people everywhere like you would in a centralized network such as Facebook.

<div class="page"/>

### Mind Map

> `#personal` `#desktop`

> Based on [Kityminder Editor](https://github.com/fex-team/kityminder-editor)

![A mind map](./mind-map.png)

A mind map editor that is capable of auto-organising notes, and export in text format.

<div class="page"/>

### Secure, Decentralized Chat

> `#office` `#activist` `#family` `#personal` `#android` `#ios` `#desktop`

> Based on [Synapse](https://github.com/matrix-org/synapse)

![The Riot client](./riot.png)

Get access to [Matrix](https://matrix.org/), an open network for secure, decentralized communication. Using Matrix, you can host your own chat, that only people you invite have access to, or plug into the federated Matrix ecosystem, that allows you to chat with anyone using Matrix anywhere.

Multiple clients exist for all platforms, the most cited one being [Riot](https://about.riot.im/).

<div class="page"/>

### Meetings Scheduler

> `#office` `#android` `#ios` `#desktop`

> Based on [Open Sondage](https://demo.yunohost.org/date/)

![An example of a poll](./meetings_scheduler.png)

Allows you to invite people to time slots, and allow them to pick the one that is more suitable for them. Like [Doodle](https://doodle.com/), but free, and running on your own hardware.

<div class="page"/>

### Meetings Scheduler (2)

> `#office` `#android` `#ios` `#desktop`

> based on [Nextcloud Poll](https://github.com/nextcloud/polls)

![An example of a poll](./meetings_scheduler-2.png)

Allows you to invite people to time slots, and allow them to pick the one that is more suitable for them. Like [Doodle](https://doodle.com/), but free, and running on your own hardware.

<div class="page"/>

### Kanban board

> `#office` `#desktop`

> Based on [Deck](https://github.com/nextcloud/deck)

![Deck in action](./deck.png)

Kanban-style project & personal management tool for Nextcloud, similar to [Trello](https://trello.com/). Syncing with Android coming soon.

<div class="page"/>

### NewsLetter Management

> `#activist` `#desktop`

> Based on [Mailman](http://www.list.org/)

![The Mailman interface](./mailman.png)

managing electronic mail discussion and e-newsletter lists.

<div class="page"/>

### Tasks

> `#office` `#android` `#ios` `#desktop`

> Based on [Nextcloud Tasks](https://github.com/nextcloud/tasks/)

![Some tasks](tasks.png)

Task management, with reminders, deadlines, sub-tasks and multiple possible lists. Syncs with multiple clients on both [Android](https://opentasks.app/) and IOS & MacOS (using [Apple Reminders](https://en.wikipedia.org/wiki/Reminders_(Apple))), as well as [Desktop](https://www.qownnotes.org/).

<div class="page"/>

### Maps

> `#family` `#personal` `#desktop`

> Based on [OpenStreetMap](https://www.openstreetmap.org) and [Leaflet](https://leafletjs.com)

![A map of the world](./maps.png)

Save places, share places, see where your contacts live, locate yourself and navigate.

<div class="page"/>

### ... And more

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

### VPN

> `#activist` `#personal` `#android` `#ios` `#desktop`

Avoid constantly compromised VPNs that always [end up selling out](https://www.reddit.com/r/PrivateInternetAccess/comments/dz2w53/our_merger_with_kape_technologies_addressing_your/), or getting detected and forbidden. Host your own.

https://github.com/trailofbits/algo

<div class="page"/>

### Virtual Android

Run your trapped Android device. Very useful for running, for example, a Whatsapp that doesn't transmit your info to Facebook.

<div class="page"/>

### Streaming Service

> `#family` `#personal` `#android` `#ios` `#desktop`

> Based on [Streama](https://streamaserver.org/)

![Some movies on Streama](./streama.png)

Host your own [Netflix](https://www.netflix.com/sa-en/)

<div class="page"/>

### Workflow Automation

> `#office` `#personal` `#android` `#ios` `#desktop`

> Based on [Nextcloud Flow](https://nextcloud.com/blog/nextcloud-flow-makes-it-easy-to-automate-actions-and-workflows/)

Trigger actions when certain events happen. For example, when a file is added to a specific folder, a shared link to the file could be created and send through Nextcloud Talk into a specified chat room.

<div class="page"/>

### Automate and Integrate External Services

> `#office` `#personal` `#android` `#ios` `#desktop`

> Based on [n8n](https://n8n.io/)

![An example workflow](./n8n.png)

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

### Regular VPS

The best and most economical solution is to install on a Virtual Private Server. This will be secure and private enough for most users, and will come down to about $12 a month. They will handle a family, a group of friends, or a small company easily (10 \~ 20 users). They typically don't have a lot of space (about 30 gigs total).  
Recommended for:

- users who don't have an vital need for privacy: regular personal users, families, group of friends, businesses without sensitive data

Options to increase power and storage are available, in about doubling ranges, for doubling prices (that is, 40 users and 60 gigs will be about $24 per month). For really large needs, you will want a private server (multiply all prices by 10).

Examples: [Linode](https://linode.com), [Digital Ocean](https://digitalocean.com), [DreamHost](https://www.dreamhost.com/hosting/vps/)

### Highly Snooping-resistant VPS

These are VPSes that are located in countries in which privacy laws are very strict, that have a track record of not keeping data, and who can be paid with semi-private currencies such as bitCoin. They are more expensive (about 1.5 to 2 times as much as regular VPSes), but a must for people who care about snooping. They are otherwise subject to the same limitations as regular VPSes.  
Recommended for:

- activists, journalists

Examples: [Bahnhof](https://www.bahnhof.net/), [Exoscale](https://www.exoscale.com/), [OrangeWebsite](https://www.orangewebsite.com/offshore-hosting.php), [FlokiNET](https://flokinet.is/)


### Super Cheap VPS

These are VPSes that are specially cheap, and don't have enough reputation to form an opinion about their cleanliness. Due to their nature, they are unadvised for mission critical needs, or if privacy is an important matter (Alibaba Cloud is located in China, for example). However, for a group of friends who just want something simple and cheap, they might be the best option.  
Recommended for:

- People who don't want to spend a lot

Examples: [OVH](https://www.ovh.com/world/vps/vps-ssd.xml), [Hetzner Online GmbH](https://www.hetzner.com/cloud), [Alibaba Cloud](https://www.alibabacloud.com/)


### Your Own Hardware

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
4. **An optional fee on domain name acquisition**: if you decide to let us buy the domain name, we add a small markup (10%). You can also choose a `#yourdomainname.7isme.com` for free; or bring your own domain
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

### Potential User Cases

1. Instead of using different apps to manage your data, you want a single entry point, where everything is connected. You also want to be able to install new applications, and act on your data in custom ways.
2. You want to be able to port your data, move it around, or be certain that when you delete it, it's deleted for good
3. You want to be able to use software without fear that it will change under your feet, become suddenly non-free, or [get sold to a compromised 3rd party](https://www.reddit.com/r/PrivateInternetAccess/comments/dz2w53/our_merger_with_kape_technologies_addressing_your

### Potential Clients

- SMBs
- Person who wants control over their services
- Person who wants to install Lineage and get out of Google
- Family who wants to share files and pictures

<div class="page"/>

# The Team

### Sally Amirza - CEO

[ Sally blurb ]

### Jad Sarout - CTO

[ Jad blurb ]