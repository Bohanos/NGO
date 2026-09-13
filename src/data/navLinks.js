// Stores translation KEYS, not literal text — this file can't call t()
// since it's plain JS, not a React component. Navbar.jsx and Footer.jsx
// resolve these keys via t() at render time.
export const navItems = [
  { key: 'nav.whoWeAre', href: '/about' },
  {
    key: 'nav.whatWeDo',
    dropdown: [
      { key: 'nav.dropdown.screening', href: '/what-we-do#screening' },
      { key: 'nav.dropdown.surgery', href: '/what-we-do#surgery' },
      { key: 'nav.dropdown.family', href: '/what-we-do#family' },
      { key: 'nav.dropdown.outreach', href: '/what-we-do#outreach' },
    ],
  },
  { key: 'nav.ourTeam', href: '/team' },
  { key: 'nav.stories', href: '/stories' },
]

export const footerColumns = [
  {
    headingKey: 'footer.explore',
    links: [
      { key: 'nav.whoWeAre', href: '/about' },
      { key: 'nav.whatWeDo', href: '/what-we-do' },
      { key: 'nav.ourTeam', href: '/team' },
      { key: 'footer.contact', href: '/contact' },
    ],
  },
  {
    headingKey: 'footer.getInvolved',
    links: [
      { key: 'common.donate', href: '/donate' },
      { key: 'footer.volunteer', href: '/get-involved' },
      { key: 'footer.partnerWithUs', href: '/get-involved#partners' },
    ],
  },
]