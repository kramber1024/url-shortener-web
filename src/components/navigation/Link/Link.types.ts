export interface LinkProps {
  children: string;
  href: string;
  referrerPolicy?:
    | "no-referrer-when-downgrade"
    | "no-referrer"
    | "origin-when-cross-origin"
    | "origin"
    | "same-origin"
    | "strict-origin-when-cross-origin"
    | "strict-origin"
    | "unsafe-url";
  rel?:
    | ""
    | "alternate"
    | "author"
    | "bookmark"
    | "external"
    | "help"
    | "license"
    | "next"
    | "nofollow"
    | "noopener"
    | "noreferrer"
    | "prev"
    | "search"
    | "tag";
  target?: "_blank" | "_parent" | "_self" | "_top" | "_unfencedTop";
  type?: string;
}
