export const navItems = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

export function isCurrent(pathname: string, href: string) {
  const path = pathname.replace(/\/+$/, "") || "/";
  return path === href;
}
