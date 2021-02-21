import React from 'react'
import styled from 'styled-components'
import { action } from '@storybook/addon-actions'

import { Icon } from './Icon'
import { Link } from './Link'
import { StoryLinkWrapper } from './StoryLinkWrapper'

const CustomLink = styled(Link)`
  && {
    color: red;
  }
`

const onLinkClick = action('onLinkClick')

export default {
  title: 'Design System/Link',
  component: Link
}

export const All = args => (
  <div>
    <Link href="https://github.com/effinrich">Default</Link>
    <br />
    <Link secondary href="https://github.com/effinrich">
      Secondary
    </Link>
    <br />
    <Link tertiary href="https://github.com/effinrich">
      tertiary
    </Link>
    <br />
    <Link nochrome href="https://github.com/effinrich">
      nochrome
    </Link>
    <br />
    <Link href="https://github.com/effinrich">
      <Icon icon="discord" aria-hidden />
      With icon in front
    </Link>
    <br />
    <Link
      containsIcon
      href="https://github.com/effinrich"
      aria-label="Toggle side bar"
    >
      <Icon icon="sidebar" aria-hidden />
    </Link>
    <br />
    <Link containsIcon withArrow href="https://github.com/effinrich">
      With arrow behind
    </Link>
    <br />
    <span style={{ background: '#333' }}>
      <Link inverse href="https://github.com/effinrich">
        Inverted colors
      </Link>
    </span>
    <br />
    {/* gatsby and styled-components don't work nicely together  */}
    {/* eslint-disable-next-line */}
    <Link isButton onClick={onLinkClick}>
      is actually a button
    </Link>
    <br />
    <Link
      tertiary
      LinkWrapper={StoryLinkWrapper}
      href="http://storybook.js.org"
    >
      has a LinkWrapper like GatsbyLink or NextLink
    </Link>
    <br />
    <CustomLink
      tertiary
      LinkWrapper={StoryLinkWrapper}
      href="http://storybook.js.org"
    >
      has a LinkWrapper like GatsbyLink or NextLink with custom styling
    </CustomLink>
  </div>
)
