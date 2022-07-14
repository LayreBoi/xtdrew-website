/// <reference types="vite/client" />

declare module "*.vue" {
  import { DefineComponent } from "vue";
  // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/ban-types
  const component: DefineComponent<{}, {}, any>;
  export default component;
}

/**
 * A URL
 */
declare type HTTPLink = `https://${string}` | `http://${string}` | "#" | `mailto:${string}@${string}`;

/**
 * If link is an array, use this
 */
declare type LinkJSON = {
  link: HTTPLink;
  name: string;
}

/**
 * A xtdrew project
 */
declare interface Project {
  /**
   * Name of the project
   */
  name: string;

  /**
   * Description of the project (Add a new string for line breaks)
   */
  description: string | string[];

  /**
   * Type of the project
   */
  type: string;

  /**
   * Image of the project
   */
  cover: HTTPLink;

  /**
   * When has the project started?
   */
  started?: string;

  /**
   * Programming language of the project
   */
  lang: string;

  /**
   * Link to the project
   */
  link: HTTPLink | LinkJSON[];

  /**
   * Name of the website the link redirects to
   */
  linkname?: string;
}

/**
 * xtdrew question
 */
declare interface Question {
  question: string;
  answer: string | string[];
}
