import React from 'react'

import { Avatar } from './Avatar'

export default {
  title: 'Design System/Avatar',
  component: Avatar,
  parameters: {
    componentSubtitle:
      'Displays an image that represents a user or organization'
  }
}

// START New story using controls
const Template = args => <Avatar {...args} />

export const Controls = Template.bind({})
Controls.args = {
  loading: false,
  size: 'medium',
  username: 'Rich Tillman',
  src: 'https://avatars.githubusercontent.com/u/183598'
}
// END New story using controls

export const Standard = args => <Avatar {...args} />
Standard.args = {
  size: 'large',
  username: 'Rich Tillman',
  src: 'https://avatars.githubusercontent.com/u/183598'
}

export const Sizes = args => (
  <div>
    <Avatar {...args} size="large" />
    <Avatar {...args} size="medium" />
    <Avatar {...args} size="small" />
    <Avatar {...args} size="tiny" />
  </div>
)
Sizes.args = {
  username: 'Rich Tillman',
  src: 'https://avatars.githubusercontent.com/u/183598'
}
Sizes.parameters = {
  docs: {
    // The story now contains a description
    storyDescription: '4 sizes are supported.'
  }
}

export const Initials = args => (
  <div>
    <Avatar username="Rich Tillman" />
    <Avatar username="Rich Tillman" />
    <Avatar username="Kyle Suss" />
    <Avatar username="Michael Shilman" />
  </div>
)

export const Loading = args => (
  <div>
    <Avatar {...args} size="large" />
    <Avatar {...args} size="medium" />
    <Avatar {...args} size="small" />
    <Avatar {...args} size="tiny" />
  </div>
)
Loading.args = {
  loading: true
}

export const Large = args => (
  <div>
    <Avatar loading size="large" />
    <Avatar size="large" username="Rich Tillman" />
    <Avatar
      size="large"
      username="Rich Tillman"
      src="https://avatars.githubusercontent.com/u/183598"
    />
  </div>
)
