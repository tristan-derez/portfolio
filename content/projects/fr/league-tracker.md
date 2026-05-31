---
title: League Tracker
desc: Suivez les performances de vos amis en classée sur League of Legends
date: 2024-08-22
tags:
  - go
  - postgresql
  - discordgo
---

### Description

League Tracker est une application intégrée à Discord que l'on peut utiliser pour suivre la progression de ses amis en SoloQ sur le jeu League of Legends.

Pour ajouter un invocateur à la liste des joueurs suivis, il suffit de taper la commande suivante :

```bash
/add nomInvocateur#EUW
```

Dès qu'un invocateur de la liste aura terminé une partie classée, l'application enverra un message dans le salon textuel :

![discord screenshot](https://i.ibb.co/KxzMYkWX/Screenshot-2026-05-25-231200.jpg)

---

### Fonctionnalités :

- Suivi en temps réel des parties classées
- Notifications sur les changements de rang
- Statistiques détaillées par partie

---

### Stack technique

- Golang
- PostgreSQL
- Discord Go

---

### Liens

🔗 [GitHub](https://github.com/tristan-derez/leaguetracker)