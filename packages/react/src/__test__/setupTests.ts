import '@testing-library/jest-dom/extend-expect'
import matchMediaMock from 'src/__test__/matchMedia.mock'
import { createSerializer } from '@emotion/jest'

matchMediaMock()

// configures @emotion/jest to not insert styles
expect.addSnapshotSerializer(createSerializer({
  includeStyles: false,
}))
