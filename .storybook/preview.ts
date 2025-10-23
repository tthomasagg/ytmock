import type { Preview } from "@storybook/react-vite";
import { withRouter } from "./withRouter.tsx";

const preview: Preview = {
  decorators: [withRouter],
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
