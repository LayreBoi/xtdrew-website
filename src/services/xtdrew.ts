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

  public projects: Project[] = Object.values(import.meta.globEager("../projects/*.json"));

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
