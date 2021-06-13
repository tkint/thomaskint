import { DefineComponent } from 'vue';

declare module '*.vue' {
  import { DefineComponent } from 'vue';
  const component: DefineComponent<{}, {}, any>;
  export default component;
}

declare module '*.md' {
  const attributes: Record<string, unknown>;

  const toc: { level: string, content: string }[];

  const html: string;

  import { ComponentOptions, Component } from 'vue';
  const VueComponent: ComponentOptions;
  const VueComponentWith: (components: Record<string, Component>) => ComponentOptions;

  export { attributes, toc, html, VueComponent, VueComponentWith };
}
