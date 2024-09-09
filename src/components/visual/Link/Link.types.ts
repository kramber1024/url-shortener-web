export interface LinkProps {
  children: string;
  href: string;
  target?: "_blank" | "_parent" | "_self" | "_top" | "_unfencedTop";
  type?: string;
}
