class xtdrew {
  private webname: string = "xtdrew";

  public isMobile: boolean = false;

  public isInFAQ: boolean = false;

  public isClosingProject: boolean = false;

  public isClient: boolean = true;

  public checkMobile(width: number): void {
    this.isMobile = width < 720;
  }

  public getWebName(): string {
    return `${this.webname} `;
  }

  public closeProject(): void {
    this.isClosingProject = true;
    setTimeout(() => this.isClosingProject = false, 250);
  }

  public getDevEnvironment(): boolean {
    return import.meta.env.DEV;
  }

  public projects: Project[] = [
    {
      name: "Friday Night Funkin' Gemashy",
      description: [
        'FNF Gemashy is a mod including a new week and my robot character "Gemashy". The mod is currently in development, but has a demo as a Psych Engine port available to download.',
        "",
        "This mod contains 4 songs. The fourth song will have a mysterious robot ready to battle you.",
      ],
      type: "Mod",
      lang: "Haxe",
      cover:
        "https://media.discordapp.net/attachments/887007337284526110/896024167827271760/Untitled108_20210924014714.png?width=400&height=400",
      link: "https://gamejolt.com/games/gemashy/647186",
      started: "September 2021",
      linkname: "GameJolt",
    },
    {
      name: "LayreBoi Next",
      description: [
        "LayreBoi NΞXT is a future update for my LayreBoi website. It has a new cleaner UI and new features like release downloads!",
        "(My legacy website is no longer maintained, but keeps its hosting service, now with the domain \"legacy.layreboi.me\")"
      ],
      type: "Website",
      lang: "Vue-TS",
      cover: `https://media.discordapp.net/attachments/833015294313496616/943253434952482867/Untitled171_20220215221041.png?width=400&height=400`,
      link: "https://layreboi.me",
      linkname: "Website",
    },
// LAYRE.LOL is no longer maintained
//     {
//       name: "LAYRE.LOL Linktree",
//       description: [
//         "LΛYRΞ.LOL Linktree is a website where you can find me in any social media like YouTube, Twitter, Instagram, etc.",
//         "(You can also visit this website by clicking on \"Socials\" in the navigation above)"
//       ],
//       type: "Website",
//       lang: "Vue-TS",
//       cover:
//         "https://media.discordapp.net/attachments/833015294313496616/980251649664761876/unknown.png?width=400&height=400",
//       link: "https://www.layre.lol",
//       linkname: "Linktree",
//     },
    {
      name: "Kazan3",
      description: [
        "Kazan3 (or Kazane) is an entertainment purpose Discord bot programmed in Typescript. She lives in a virtual world and likes to interact with people.",
        "",
        "Please note that this bot can appear as unstable sometimes when I experiment with the bot. If that happens, wait until it's fixed, or contect me.",
        "",
        'You can <a href="https://discord.gg/rr37RqZpeZ">join my Discord server</a> to know more about her.',
      ],
      type: "Discord Bot",
      lang: "TypeScript",
      cover:
        "https://media.discordapp.net/attachments/812779208338178101/986393366281465916/Kazan3.png?width=400&height=400",
      link: "https://xtdrew.xyz/invitekazane",
      linkname: "Invite",
    },
    {
      name: "MaiLayre",
      description: [
        "This websites contains information about me and my social media links.",
        "This is also the domain of my current contact email address (layreboi@mailayre.com). Older contact email addresses forward to my current one."
      ],
      type: "Website & Email",
      lang: "Vue-TS (Website)",
      cover: "https://media.discordapp.net/attachments/812779208338178101/996942917597937734/Icon.png?width=400&height=400",
      link: [
        {
          link: "https://mailayre.com",
          name: "Website"
        },
        {
          link: "mailto:layreboi@mailayre.com",
          name: "Email"
        }
      ]
    },
  ];

  /**
   * An example project
   */
  public readonly exampleProject: Project = {
    name: "Unnamed",
    description: "An unknown project",
    type: "Unknown",
    cover:
      "https://media.discordapp.net/attachments/817489298450153502/942243134090399794/Untitled170_20220213031730.png?width=400&height=400",
    lang: "English",
    link: [
      {
        link: "#",
        name: "idk"
      }
    ],
    linkname: "Unknown",
  };
}

export default new xtdrew();
