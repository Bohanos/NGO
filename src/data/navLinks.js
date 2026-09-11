export const navItems = [
  { label: 'Who We Are', href: '/about' },
  {
    label: 'What We Do',
    dropdown: [
      { label: 'Cancer Awareness & Screening', href: '/what-we-do#screening' },
      { label: 'Medical & Surgery Support', href: '/what-we-do#surgery' },
      { label: 'Child & Family Support', href: '/what-we-do#family' },
      { label: 'Community Outreach', href: '/what-we-do#outreach' },
    ],
  },
  { label: 'Our Team', href: '/team' },
  { label: 'Stories', href: '/stories' },
]

export const footerColumns = [
  {
    heading: 'EXPLORE',
    links: [
      { label: 'Who We Are', href: '/about' },
      { label: 'What We Do', href: '/what-we-do' },
      { label: 'Our Team', href: '/team' },
      { label: 'Contact', href: '/contact' },
    ],
  },
  {
    heading: 'GET INVOLVED',
    links: [
      { label: 'Donate', href: '/donate' },
      { label: 'Volunteer', href: '/get-involved' },
      { label: 'Partner With Us', href: '/get-involved#partners' },
    ],
  },
]