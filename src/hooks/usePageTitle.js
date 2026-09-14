import { useEffect } from 'react'

const SITE_NAME = 'The Macedonian Call Cancer Foundation'

// Sets the browser tab title to "<page title> | <site name>".
// Runs on every render where `title` changes — including language
// switches, since t() returns a new string per language automatically.
export default function usePageTitle(title) {
  useEffect(() => {
    document.title = title ? `${title} | ${SITE_NAME}` : SITE_NAME
  }, [title])
}