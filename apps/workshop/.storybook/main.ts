import type { StorybookConfig } from "@storybook/react-vite";
import { mergeConfig } from "vite";

const config: StorybookConfig = {
  stories: ["../../../apps/**/*.stories.tsx", "../../../packages/ui/**/*.stories.tsx"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
  ],
  framework: {
    name: "@storybook/react-vite",
    options: {},
  },
  docs: {
    autodocs: "tag",
  },
  async viteFinal(config, { configType }) {
    return mergeConfig(config, {
      // next app 을 띄울 때 생기는 문제
      // https://github.com/storybookjs/storybook/issues/18920#issuecomment-1342865124
      define: { "process.env": {} },
    });
  },
};

export default config;
