import { icebreaker } from '@icebreakers/eslint-config'

export default icebreaker(
  {
    nest: true,
    ignores: ['**/fixtures/**'],
  },
)
